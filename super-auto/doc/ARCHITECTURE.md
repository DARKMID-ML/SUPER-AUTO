# Architecture technique — Super Auto Badéma Sylla

> Document d'architecture détaillé pour le projet Super Auto.
> Dernière mise à jour : Juillet 2026

---

## 1. Vue d'ensemble

Le projet est une **Single Page Application (SPA)** construite avec React. Une seule page HTML (`index.html`) est chargée une fois, et React gère la navigation côté client via des routes.

---

## 2. Flux de données

```
┌──────────────┐    ┌──────────────────┐    ┌──────────────┐
│  URL dans    │    │  React Router    │    │  Composant   │
│  le navigateur│───▶│  match la route  │───▶│  de la page  │
└──────────────┘    └──────────────────┘    └──────┬───────┘
                                                    │
                                                    ▼
                                            ┌──────────────┐
                                            │  Composants  │
                                            │  enfants     │
                                            │  (Navbar,    │
                                            │   Footer,    │
                                            │   Cards)     │
                                            └──────┬───────┘
                                                    │
                                                    ▼
                                            ┌──────────────┐
                                            │  Données     │
                                            │  statiques   │
                                            │  (data/*.ts) │
                                            └──────────────┘
```

**Étape par étape :**

1. L'utilisateur tape une URL (ex: `/contact`)
2. `BrowserRouter` dans `main.tsx` intercepte la navigation
3. `Routes` dans `App.tsx` cherche un `<Route path="/contact">`
4. Le composant `<Contacte />` est affiché entre `<Navbar>` et `<Footer>`
5. Le composant peut importer des données depuis `src/data/`

---

## 3. Point d'entrée

### `index.html`

Le fichier HTML unique. Contient :
- Les balises meta (title, description, viewport)
- Les liens vers les polices Google Fonts (Epilogue, Inter, Material Symbols)
- La balise `<div id="root">` où React s'accroche
- Le script `main.tsx` en module

### `src/main.tsx`

```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
```

| Élément | Rôle |
|---------|------|
| `StrictMode` | Mode strict React (détection de problèmes) |
| `BrowserRouter` | Active le routing pour toute l'app |
| `App` | Le composant principal qui contient les routes |

### `src/App.tsx`

```tsx
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Acceuil from './pages/Acceuil'
import Contacte from './pages/Contacte'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/contact" element={<Contacte />} />
      </Routes>
      <Footer />
    </div>
  )
}
```

**Structure :**
- `<Navbar>` est EN DEHORS de `<Routes>` → visible sur toutes les pages
- `<Footer>` est EN DEHORS de `<Routes>` → visible sur toutes les pages
- `<Routes>` contient uniquement les routes → affiche UNE page à la fois

---

## 4. Système de routing

### Fichiers impliqués

| Fichier | Rôle |
|---------|------|
| `main.tsx` | Enveloppe avec `<BrowserRouter>` |
| `App.tsx` | Définit les `<Route>` |
| `Navbar.tsx` | Utilise `<Link to>` pour naviguer |
| `Footer.tsx` | Utilise `<Link to>` pour naviguer |

### Règles

| Règle | Explication |
|-------|-------------|
| Utiliser `<Link to>` | Jamais `<a href>` pour la navigation interne |
| Path commence par `/` | `path="/contact"` pas `path="contact"` |
| Paths en minuscules | `/contact` pas `/Contact` |
| `<Routes>` dans App.tsx | Centralise toutes les routes |
| Navbar/Footer hors Routes | Restent visibles sur toutes les pages |

### Ajouter une route

Dans `App.tsx` :

```tsx
import NouvellePage from './pages/NouvellePage'

// Dans <Routes> :
<Route path="/nouvelle-page" element={<NouvellePage />} />
```

Puis dans `Navbar.tsx`, ajouter dans `navLinks` :

```tsx
{ name: 'Nouvelle Page', href: '/nouvelle-page' }
```

---

## 5. Thème Tailwind CSS

### Configuration

Le thème est défini dans `src/index.css` :

```css
@import "tailwindcss";

@theme {
  --color-brand-red: #C41E3A;
  --color-brand-blue: #1E3A8A;
  /* ... */
}
```

### Couleurs disponibles

| Classe | Couleur | Usage |
|--------|---------|-------|
| `bg-brand-red` | #C41E3A | Boutons principaux |
| `bg-brand-red-dark` | #9e0027 | Hover boutons |
| `bg-brand-blue` | #1E3A8A | Headers |
| `bg-brand-blue-dark` | #0F172A | Footer |
| `bg-brand-light` | #fff8f7 | Fond alterné |
| `bg-brand-surface` | #FAFAFA | Cartes |
| `text-text-primary` | #271718 | Texte principal |
| `text-text-secondary` | #5b4040 | Descriptions |
| `text-text-muted` | #8f6f6f | Placeholders |
| `border-border-standard` | #e3bebd | Bordures |

### Ombres disponibles

| Classe | Usage |
|--------|-------|
| `shadow-card` | Cartes |
| `shadow-card-hover` | Cartes au survol |
| `shadow-modal` | Fenêtres modales |

### Animations disponibles

| Classe | Usage |
|--------|-------|
| `animate-ken-burns` | Zoom lent sur image hero |
| `animate-bounce-slow` | Flèche de scroll |

---

## 6. Fichiers de données

### `src/data/vehicle.ts`

Contient un tableau `featuredVehicules` de type `Vehicule[]`.

```typescript
import { type Vehicule } from "@/types/vehicule"

export const featuredVehicules: Vehicule[] = [
  {
    id: 1,
    marque: "Toyota",
    model: "Land Cruiser V8",
    annee: 2023,
    type: "SUV",
    // ...
  },
  // ...
]
```

### `src/data/services.ts`

Contient `domainesExpertise` et `pourquoiNousChoisir`.

### `src/data/testimonials.ts`

Contient `temoignages` — tableau de 3 avis clients.

---

## 7. Types TypeScript

### `src/types/vehicule.ts`

```typescript
export interface Vehicule {
  id: number
  marque: string
  model: string
  annee: number
  type: string
  prix: string
  image: string
  description: string
  statut: string
  service: string
  km: string
  consomation: string
  transmission: string
  places: string
  climatisation: string
  atouts: string
  peinture: string
  interieur: string
  category: string
}
```

### `src/types/avis.ts`

```typescript
export interface Avis {
  id: number
  nom: string
  ville: string
  texte: string
  note: number
}
```

---

## 8. Configuration Vite

### `vite.config.ts`

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

| Option | Rôle |
|--------|------|
| `react()` | Plugin React (JSX, Fast Refresh) |
| `tailwindcss()` | Plugin Tailwind CSS v4 |
| `alias '@'` | Permet les imports `@/components/...` au lieu de `../../components/...` |

---

## 9. Prochaines étapes (Backend)

Quand le backend sera implémenté :

```
Frontend (React)  ──── fetch() ────▶  API (Express)
                                         │
                                         ▼
                                    PostgreSQL (Prisma)
```

| Élément | Technologie prévue |
|---------|-------------------|
| API | Node.js + Express |
| Base de données | PostgreSQL |
| ORM | Prisma |
| Auth | JWT |
| Emails | Nodemailer |
| Upload images | Multer |

---

*Architecture Super Auto Badéma Sylla — Version 1.0*
