# Configurer le routing

> Guide étape par étape pour comprendre et modifier le routing du site.

---

## Comment le routing fonctionne

```
URL dans le navigateur     →    React Router     →    Composant affiché
localhost:5173/                  path="/"                <Acceuil />
localhost:5173/contact           path="/contact"         <Contacte />
localhost:5173/vente             path="/vente"           <Vente /> (pas encore créé)
```

---

## Fichiers impliqués

| Fichier | Rôle |
|---------|------|
| `src/main.tsx` | Active le routing (`<BrowserRouter>`) |
| `src/App.tsx` | Définit les routes (`<Routes>` + `<Route>`) |
| `src/components/Navbar.tsx` | Navigue entre les routes (`<Link to>`) |
| `src/components/Footer.tsx` | Navigue entre les routes (`<Link to>`) |

---

## Ajouter une route

### Étape 1 : Créer le composant de la page

```tsx
// src/pages/MaPage.tsx
export default function MaPage() {
    return <h1>Ma nouvelle page</h1>
}
```

### Étape 2 : Ajouter la route dans App.tsx

```tsx
import MaPage from './pages/MaPage'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/contact" element={<Contacte />} />
        <Route path="/ma-page" element={<MaPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
```

### Étape 3 : Ajouter le lien dans la navbar

```tsx
// Dans Navbar.tsx, tableau navLinks :
{ name: 'Ma Page', href: '/ma-page' }
```

---

## Règles importantes

| Règle | Bon | Mauvais |
|-------|-----|---------|
| Path commence par `/` | `path="/contact"` | `path="contact"` |
| Path en minuscules | `path="/contact"` | `path="/Contact"` |
| Link utilise `to` | `<Link to="/contact">` | `<Link href="/contact">` |
| Pas de `<a href>` | `<Link to="/contact">` | `<a href="/contact">` |

---

## Routes dynamiques (futur)

Pour des URLs comme `/vente/123` (détail d'un véhicule) :

```tsx
// Dans App.tsx :
<Route path="/vente/:id" element={<DetailVehicule />} />

// Dans le composant :
import { useParams } from 'react-router-dom'
const { id } = useParams()  // id = "123"
```

---

## Vérification

- [ ] La nouvelle page s'affiche sur l'URL correcte
- [ ] La navigation fonctionne sans rechargement
- [ ] Le lien dans la navbar pointe vers la bonne URL
- [ ] Le lien dans le footer pointe vers la bonne URL
- [ ] Le menu mobile affiche le lien
- [ ] Le breadcrumb (si présent) fonctionne
