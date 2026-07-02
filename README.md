# 📖 Guide de Réalisation — Super Auto Badéma Sylla

**Destiné à :** Développeur web  
**Objectif :** Réaliser le site web de Super Auto Badéma Sylla à partir du cahier des charges  
**Durée estimée :** 2-3 semaines

---

## Table des matières

1. [Comprendre le projet](#1-comprendre-le-projet)
2. [Stack technique recommandée](#2-stack-technique-recommandée)
3. [Structure du projet](#3-structure-du-projet)
4. [Ordre de réalisation](#4-ordre-de-réalisation)
5. [Guide d'interprétation du cahier des charges](#5-guide-dinterprétation-du-cahier-des-charges)
6. [Bonnes pratiques](#6-bonnes-prattiques)
7. [Pièges à éviter](#7-pièges-à-éviter)
8. [Checklist de livraison](#8-checklist-de-livraison)

---

## 1. Comprendre le projet

### 1.1 Qu'est-ce que Super Auto Badéma Sylla ?

C'est une entreprise automobile basée à **Bamako, Mali** avec 15 ans d'expérience. Le site doit présenter :
- Un catalogue de véhicules (vente et location)
- Des services (transit, entretien, pièces détachées)
- Un formulaire de contact et de demande de devis

### 1.2 Type de site

- **Site statique** (pas de backend, pas de base de données)
- **Single Page Application (SPA)** — navigation sans rechargement
- **Responsive** — mobile, tablette, desktop
- **6 pages** : Accueil, Vente, Location, Transit, Services, Contact

### 1.3 Public cible

- Particuliers maliens
- Professionnels / entreprises
- Expatriés / diaspora (importation de véhicules)
- Clients existants (SAV)

---

## 2. Stack technique recommandée

### 2.1 Technologies de base

| Technologie | Rôle | Pourquoi ? |
|-------------|------|------------|
| **React 19** | Framework frontend | Moderne, performant, écosystème riche |
| **TypeScript** | Typage statique | Réduit les bugs, améliore la maintenabilité |
| **Vite** | Build tool & serveur de dev | Rapide, configuration simple |
| **Tailwind CSS** | Framework CSS utilitaire | Développement rapide, design cohérent |
| **React Router v7** | Routage côté client | Navigation SPA, URLs propres |

### 2.2 Bibliothèques complémentaires

| Bibliothèque | Usage | Alternative possible |
|--------------|-------|---------------------|
| **shadcn/ui** | Composants UI préfabriqués (Button, Card, Dialog, Input, Select, etc.) | Composants faits main |
| **Radix UI** | Primitive components accessibles (sous-jacent à shadcn) | Autres librairies accessibles |
| **Lucide React** | Icônes modernes | Material Symbols, Font Awesome |
| **React Hook Form** | Gestion des formulaires | Formik, React Final Form |
| **Zod** | Validation des formulaires | Yup, Joi |
| **Material Symbols** | Icônes Google (pour les sections spécifiques) | Font Awesome, Heroicons |

### 2.3 Outils

- **ESLint** — Linting du code
- **Prettier** — Formatage automatique (optionnel mais recommandé)
- **Git** — Versioning

---

## 3. Structure du projet

### 3.1 Arborescence recommandée

```
super-auto/
├── public/                          # Assets statiques
│   ├── logo-primary.png
│   ├── hero-home.jpg
│   ├── hero-transit.jpg
│   ├── services/                    # Images des services
│   │   ├── showroom.jpg
│   │   ├── rental.jpg
│   │   ├── logistics.jpg
│   │   ├── workshop.jpg
│   │   ├── parts.jpg
│   │   └── office.jpg
│   └── vehicles/                    # Images des véhicules
│       ├── toyota-land-cruiser.jpg
│       ├── ford-ranger.jpg
│       ├── ...
│
├── src/
│   ├── components/                  # Composants réutilisables
│   │   ├── ui/                     # Composants shadcn/ui
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── input.tsx
│   │   │   ├── select.tsx
│   │   │   └── ...
│   │   ├── Navbar.tsx             # Navigation
│   │   ├── Footer.tsx             # Pied de page
│   │   ├── VehicleCard.tsx        # Carte véhicule
│   │   └── VehicleModal.tsx       # Modale détail véhicule
│   │
│   ├── pages/                       # Pages du site
│   │   ├── Home.tsx               # Accueil
│   │   ├── Vente.tsx              # Catalogue vente
│   │   ├── Location.tsx           # Catalogue location
│   │   ├── Transit.tsx            # Transit + formulaire devis
│   │   ├── Services.tsx           # Grille des services
│   │   └── Contact.tsx            # Contact + formulaire
│   │
│   ├── data/                        # Données statiques
│   │   └── vehicles.ts            # Liste des véhicules
│   │
│   ├── hooks/                       # Hooks personnalisés
│   │   └── use-mobile.ts          # Détection mobile
│   │
│   ├── lib/                         # Utilitaires
│   │   └── utils.ts               # Fonctions helper (cn, etc.)
│   │
│   ├── App.tsx                      # Composant principal + routes
│   ├── main.tsx                     # Point d'entrée
│   └── index.css                    # Styles globaux + Tailwind
│
├── index.html                       # HTML de base
├── package.json                     # Dépendances
├── tailwind.config.js               # Configuration Tailwind
├── vite.config.ts                   # Configuration Vite
├── tsconfig.json                    # Configuration TypeScript
└── README.md                        # Ce fichier
```

### 3.2 Explication des dossiers

- **`public/`** : Tous les fichiers statiques (images, fonts). Accessibles directement via `/`.
- **`src/components/`** : Composants réutilisables. Un composant = un fichier `.tsx`.
- **`src/components/ui/`** : Composants UI génériques (boutons, inputs, cartes). Utiliser shadcn/ui pour accélérer.
- **`src/pages/`** : Une page = un fichier `.tsx`. Chaque page correspond à une route.
- **`src/data/`** : Données statiques (véhicules, témoignages, services).
- **`src/hooks/`** : Hooks React personnalisés (ex: détection mobile).
- **`src/lib/`** : Fonctions utilitaires (ex: fusion de classes CSS).

---

## 4. Ordre de réalisation

### Phase 1 : Initialisation (Jour 1)

1. **Créer le projet React + Vite + TypeScript**
   ```bash
   npm create vite@latest super-auto -- --template react-ts
   cd super-auto
   npm install
   ```

2. **Installer Tailwind CSS**
   ```bash
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

3. **Installer les dépendances supplémentaires**
   ```bash
   npm install react-router-dom lucide-react clsx tailwind-merge
   npm install @radix-ui/react-dialog @radix-ui/react-select @radix-ui/react-checkbox
   npm install class-variance-authority
   ```

4. **Configurer les alias de chemins** (`@/` vers `src/`)
   - Dans `tsconfig.json` et `vite.config.ts`

5. **Créer la structure de dossiers** (voir section 3.1)

### Phase 2 : Configuration (Jour 1-2)

1. **Configurer Tailwind**
   - Ajouter la palette de couleurs (voir section 5.1 du cahier des charges)
   - Ajouter les polices (Epilogue, Inter, Material Symbols)
   - Configurer les ombres et animations personnalisées

2. **Créer les composants UI de base** (shadcn/ui)
   - Button, Card, Dialog, Input, Select, Checkbox, Badge
   - Ou les créer manuellement si préféré

3. **Créer les composants globaux**
   - Navbar
   - Footer

### Phase 3 : Pages statiques (Jour 3-5)

**Ordre recommandé :**

1. **Page Contact** (la plus simple)
   - Coordonnées
   - Formulaire
   - Pas de logique complexe

2. **Page Services**
   - Grille de 6 services
   - Statistiques
   - CTA

3. **Page Transit**
   - Hero section
   - Processus 5 étapes
   - Formulaire de devis

4. **Page Accueil**
   - Hero section
   - Sections multiples
   - Intégration des composants existants

### Phase 4 : Pages dynamiques (Jour 6-10)

1. **Page Vente**
   - En-tête + breadcrumb
   - Filtres (marque, année, carburant, localisation)
   - Grille de véhicules
   - Pagination
   - Modale de détail

2. **Page Location**
   - Similaire à Vente
   - Filtres spécifiques (type, places, options)

### Phase 5 : Polish (Jour 11-14)

1. **Responsive** — Tester sur mobile, tablette, desktop
2. **Animations** — Ajouter les transitions et effets
3. **Accessibilité** — Vérifier les contrastes, labels, navigation clavier
4. **Performance** — Optimiser les images, lazy loading
5. **Tests** — Tester tous les formulaires, filtres, liens

### Phase 6 : Build & Déploiement (Jour 15)

1. **Build de production**
   ```bash
   npm run build
   ```

2. **Tester le build** (ouvrir `dist/index.html`)

3. **Déployer** (Netlify, Vercel, ou hébergement classique)

---

## 5. Guide d'interprétation du cahier des charges

### 5.1 Comment lire les spécifications

Le cahier des charges utilise un **langage fonctionnel**, pas technique. Voici comment l'interpréter :

#### Exemple 1 : "Section Hero avec effet Ken Burns"

**Ce que ça veut dire :**
- Une image de fond en pleine largeur
- Un effet de zoom lent et continu (animation CSS `transform: scale()`)
- L'image doit être en `position: absolute` ou `fixed` pour couvrir toute la section

**Comment l'implémenter :**
```css
@keyframes kenburns {
  from { transform: scale(1); }
  to { transform: scale(1.05); }
}

.hero-image {
  animation: kenburns 20s ease-in-out infinite alternate;
}
```

#### Exemple 2 : "Filtres dynamiques (marque, année)"

**Ce que ça veut dire :**
- Les options des filtres ne sont pas hardcodées
- Elles sont extraites automatiquement depuis les données des véhicules
- Exemple : si tu as 5 marques différentes, le filtre "Marque" affichera ces 5 marques

**Comment l'implémenter :**
```typescript
const brands = [...new Set(vehicles.map(v => v.brand))];
// brands = ["Toyota", "Ford", "BMW", ...]
```

#### Exemple 3 : "Navigation sticky avec backdrop blur au scroll"

**Ce que ça veut dire :**
- La navbar reste fixe en haut lors du scroll
- Après 20px de scroll, elle devient semi-transparente avec un flou
- Effet : `backdrop-filter: blur(10px)` + `background: rgba(255,255,255,0.95)`

### 5.2 Vocabulaire clé

| Terme dans le cahier des charges | Signification technique |
|----------------------------------|-------------------------|
| "Fenêtre modale" | Composant Dialog/Modal (overlay + contenu centré) |
| "Sticky" | `position: sticky` en CSS |
| "Fil d'Ariane" | Breadcrumb (Accueil > Vente > ...) |
| "CTA" | Call To Action (bouton d'action) |
| "Hero section" | Section pleine hauteur en haut de page |
| "Backdrop blur" | `backdrop-filter: blur()` en CSS |
| "Ken Burns" | Animation de zoom lent sur image |
| "SPA" | Single Page Application (pas de rechargement) |

### 5.3 Libertés d'implémentation

Le cahier des charges donne des **spécifications fonctionnelles**, pas des implémentations techniques. Tu as le choix de :

- Utiliser **shadcn/ui** ou créer les composants toi-même
- Utiliser **Lucide React** ou **Material Symbols** pour les icônes
- Choisir la méthode de state management (useState, useContext, Redux, etc.)
- Organiser les fichiers comme tu le souhaites (tant que c'est logique)

**Contraintes obligatoires :**
- Respecter la **charte graphique** (couleurs, polices)
- Respecter le **comportement décrit** (ex: navbar sticky, filtres fonctionnels)
- Respecter le **contenu** (textes, images, structure des pages)

---

## 6. Bonnes pratiques

### 6.1 Code

- **Composants fonctionnels** avec hooks (pas de classes)
- **Typage TypeScript** strict — éviter `any`
- **Nommage cohérent** :
  - Composants : `PascalCase` (ex: `VehicleCard.tsx`)
  - Fichiers de styles : `kebab-case` (ex: `vehicle-card.css`)
  - Variables/fonctions : `camelCase` (ex: `handleSubmit`)
- **DRY** (Don't Repeat Yourself) — extraire les logiques répétées en composants ou hooks
- **Comments** — commenter les parties complexes, pas le code évident

### 6.2 Performance

- **Lazy loading** sur les images : `loading="lazy"`
- **Optimisation des images** : formats modernes (WebP, AVIF), tailles adaptatives
- **Code splitting** : Vite le fait automatiquement, mais vérifier
- **Éviter les re-renders inutiles** : utiliser `useMemo`, `useCallback` si nécessaire

### 6.3 Accessibilité

- **Labels sur tous les inputs** (associés avec `htmlFor`)
- **Attributs alt sur les images** (descriptifs)
- **Contraste suffisant** (WCAG AA minimum)
- **Navigation au clavier** : états de focus visibles
- **ARIA labels** sur les éléments interactifs (boutons, modales)

### 6.4 SEO

- **Balises meta** dans `index.html` :
  ```html
  <title>Super Auto Badéma Sylla | Vente, Location, Transit</title>
  <meta name="description" content="Votre partenaire automobile au Mali. Vente, location et transit de véhicules premium.">
  ```
- **Structure sémantique** : `<header>`, `<main>`, `<section>`, `<footer>`
- **H1 unique par page** (pas de H1 multiples)
- **URLs propres** : `/vente`, `/location` (pas `/vente.html`)

---

## 7. Pièges à éviter

### 7.1 Classes Tailwind dynamiques

❌ **Mauvais :**
```tsx
<div className={`bg-${color}/10`}>
```
Tailwind ne peut pas résoudre les template literals `${}`.

✅ **Bon :**
```tsx
<div className={cn("bg-red-100", color === "blue" && "bg-blue-100")}>
```
Ou utiliser des classes statiques complètes.

### 7.2 Formulaire non contrôlé

❌ **Mauvais :**
```tsx
<input type="text" placeholder="Nom" />
```
Les données ne sont jamais capturées.

✅ **Bon :**
```tsx
const [name, setName] = useState("");
<input 
  type="text" 
  value={name} 
  onChange={(e) => setName(e.target.value)} 
/>
```

### 7.3 Filtres non appliqués

❌ **Mauvais :**
```tsx
const [filters, setFilters] = useState({ brand: "", year: "" });
const filtered = vehicles.filter(v => {
  // Oubli de vérifier filters.brand et filters.year !
  return true;
});
```

✅ **Bon :**
```tsx
const filtered = vehicles.filter(v => {
  if (filters.brand && v.brand !== filters.brand) return false;
  if (filters.year && v.year !== Number(filters.year)) return false;
  return true;
});
```

### 7.4 Images non optimisées

❌ **Mauvais :**
```tsx
<img src="/vehicles/toyota.jpg" />
```

✅ **Bon :**
```tsx
<img 
  src="/vehicles/toyota.jpg" 
  alt="Toyota Land Cruiser 2023"
  loading="lazy"
  className="w-full h-48 object-cover"
/>
```

### 7.5 Oublier le responsive

❌ **Mauvais :**
```tsx
<div className="grid grid-cols-3 gap-4">
```
Sur mobile, 3 colonnes c'est trop.

✅ **Bon :**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

---

## 8. Checklist de livraison

### Fonctionnalités

- [ ] Navigation fonctionnelle entre les 6 pages
- [ ] Navbar sticky avec effet blur au scroll
- [ ] Menu mobile fonctionnel (hamburger)
- [ ] Page Accueil : toutes les sections présentes
- [ ] Page Vente : filtres fonctionnels (marque, année, carburant, localisation)
- [ ] Page Vente : pagination visible
- [ ] Page Location : filtres fonctionnels (type, places, options)
- [ ] Page Transit : formulaire de devis avec message de confirmation
- [ ] Page Services : grille de 6 services + statistiques
- [ ] Page Contact : formulaire avec message de confirmation
- [ ] Modale de détail véhicule : s'ouvre/ferme correctement
- [ ] Tous les liens internes fonctionnent

### Design

- [ ] Charte graphique respectée (couleurs, polices)
- [ ] Design responsive (mobile, tablette, desktop)
- [ ] Animations présentes (Ken Burns, hover, transitions)
- [ ] États de hover sur les boutons et cartes
- [ ] Badges de statut véhicules correctement colorés

### Technique

- [ ] TypeScript : pas d'erreurs de compilation
- [ ] Build de production fonctionne (`npm run build`)
- [ ] Pas de console.log oubliés
- [ ] Pas de dépendances inutilisées
- [ ] Code commenté aux endroits complexes

### Performance

- [ ] Images en lazy loading
- [ ] Temps de chargement < 3s
- [ ] Pas de warnings dans la console

### Tests

- [ ] Testé sur Chrome
- [ ] Testé sur Firefox
- [ ] Testé sur Safari (si possible)
- [ ] Testé sur mobile (iOS + Android)
- [ ] Tous les formulaires testés
- [ ] Tous les filtres testés

### Documentation

- [ ] README.md présent
- [ ] Commentaires dans le code pour les parties complexes
- [ ] Variables d'environnement documentées (si applicable)

---

## 9. Ressources utiles

### Documentation officielle

- **React** : https://react.dev
- **TypeScript** : https://www.typescriptlang.org/docs
- **Vite** : https://vitejs.dev/guide
- **Tailwind CSS** : https://tailwindcss.com/docs
- **React Router** : https://reactrouter.com/start
- **shadcn/ui** : https://ui.shadcn.com
- **Lucide Icons** : https://lucide.dev

### Inspiration

- Le cahier des charges (`CAHIER_DES_CHARGES_SUPER_AUTO.md`) est la référence principale
- Respecter scrupuleusement les spécifications fonctionnelles
- Le design doit être fidèle à la charte graphique définie

---

## 10. Contact

Pour toute question sur le cahier des charges, contacter le client :

**Super Auto Badéma Sylla**  
📍 ACI 2000, Bamako, Mali  
📞 +223 20 22 XX XX  
📧 contact@superauto-mali.com

---

*Guide de réalisation — Super Auto Badéma Sylla — Version 1.0*

**Bonne chance pour le développement ! 🚀**