# Guide de modification — Super Auto Badéma Sylla

> Scénarios "Je veux..." pour modifier le projet. Chaque scénario explique quoi faire, où faire, et comment vérifier.
> Dernière mise à jour : Juillet 2026

---

## "Je veux ajouter une page"

### Fichiers à ouvrir

- `src/pages/NouvellePage.tsx` (à créer)
- `src/App.tsx` (ajouter la route)
- `src/components/Navbar.tsx` (ajouter le lien)

### Étapes

**Étape 1 : Créer le fichier de la page**

```tsx
// src/pages/NouvellePage.tsx
export default function NouvellePage() {
    return (
        <>
            <section className="pt-28 pb-12 bg-brand-blue-dark text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold">NOM DE LA PAGE</h1>
                </div>
            </section>
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <p>Contenu de la page...</p>
                </div>
            </section>
        </>
    )
}
```

**Étape 2 : Ajouter la route dans `App.tsx`**

```tsx
import NouvellePage from './pages/NouvellePage'

// Dans <Routes> :
<Route path="/nouvelle-page" element={<NouvellePage />} />
```

**Étape 3 : Ajouter le lien dans `Navbar.tsx`**

```tsx
const navLinks = [
    // ... liens existants ...
    { name: 'Nouvelle Page', href: '/nouvelle-page' },
]
```

**Étape 4 : Ajouter le lien dans `Footer.tsx` (optionnel)**

```tsx
const quickLinks = [
    // ... liens existants ...
    { name: 'Nouvelle Page', href: '/nouvelle-page' },
]
```

### Vérification

- [ ] La page s'affiche sur `/nouvelle-page`
- [ ] Le lien apparaît dans la navbar
- [ ] Le lien fonctionne sans rechargement
- [ ] Le responsive fonctionne

---

## "Je veux ajouter un composant réutilisable"

### Fichier à créer

`src/components/NomDuComposant.tsx`

### Étapes

**Étape 1 : Créer le composant**

```tsx
// src/components/NomDuComposant.tsx
interface NomDuComposantProps {
    titre: string
    description: string
}

export default function NomDuComposant({ titre, description }: NomDuComposantProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-card">
            <h3 className="text-xl font-bold text-text-primary mb-2">{titre}</h3>
            <p className="text-text-secondary">{description}</p>
        </div>
    )
}
```

**Étape 2 : L'utiliser dans une page**

```tsx
import NomDuComposant from '../components/NomDuComposant'

// Dans le JSX :
<NomDuComposant titre="Mon titre" description="Ma description" />
```

### Vérification

- [ ] Le composant s'affiche correctement
- [ ] Les props sont bien passées
- [ ] Le responsive fonctionne

---

## "Je veux modifier les données des véhicules"

### Fichier à ouvrir

`src/data/vehicle.ts`

### Étapes

**Étape 1 : Ouvrir le fichier**

Le fichier contient un tableau `featuredVehicules` avec tous les véhicules.

**Étape 2 : Modifier, ajouter ou supprimer un véhicule**

```typescript
// Pour ajouter un véhicule, ajouter un objet au tableau :
{
    id: 9,
    marque: "Nouvelle Marque",
    model: "Nouveau Modèle",
    annee: 2024,
    type: "Berline",        // ou "SUV", "Pick-up", etc.
    prix: "25 000 €",
    image: "/vehicles/nouveau-modele.jpg",  // chemin local
    description: "Description du véhicule",
    statut: "Disponible",   // "Disponible", "Réservé", "Vendu", "Nouveau"
    service: "Vente",       // "Vente" ou "Location"
    km: "10 000 km",
    consomation: "7 L/100 km",
    transmission: "Automatique",
    places: "5 places",
    climatisation: "Oui",
    atouts: "Atout 1, Atout 2, Atout 3",
    peinture: "Blanc",
    interieur: "Cuir noir",
    category: "Luxe"
}
```

**Attention :** Les images doivent être dans `public/vehicles/` et le chemin doit commencer par `/vehicles/`.

### Vérification

- [ ] Le véhicule s'affiche dans la liste
- [ ] L'image se charge correctement
- [ ] Les informations sont correctes

---

## "Je veux changer les couleurs du thème"

### Fichier à ouvrir

`src/index.css`

### Étapes

Les couleurs sont définies dans la section `@theme` :

```css
@theme {
    --color-brand-red: #C41E3A;        /* ← Changez cette valeur */
    --color-brand-red-dark: #9e0027;   /* ← Et celle-ci */
    --color-brand-blue: #1E3A8A;       /* ← Et celle-ci */
    /* ... */
}
```

Changez les valeurs hex et sauvegardez. Le site se met à jour automatiquement.

### Vérification

- [ ] Les boutons rouges ont la nouvelle couleur
- [ ] Le footer a la nouvelle couleur bleue
- [ ] Le contraste reste suffisant (texte lisible)

---

## "Je veux ajouter un formulaire"

### Fichier à modifier

La page concernée (ex: `src/pages/Contacte.tsx`)

### Étapes

**Étape 1 : Ajouter les états**

```tsx
import { useState } from 'react'

const [champ, setChamp] = useState('')
const [envoye, setEnvoye] = useState(false)
```

**Étape 2 : Créer le formulaire**

```tsx
<form onSubmit={(e) => { e.preventDefault(); setEnvoye(true) }}>
    <label className="block text-sm font-medium text-text-primary mb-2">
        Nom *
    </label>
    <input
        type="text"
        required
        value={champ}
        onChange={(e) => setChamp(e.target.value)}
        className="w-full border border-border-standard rounded p-3 
                   focus:ring-2 focus:ring-brand-red focus:outline-none"
    />
    <button type="submit" className="bg-brand-red text-white font-bold py-3 px-8 rounded">
        ENVOYER
    </button>
</form>
```

**Étape 3 : Afficher le message de confirmation**

```tsx
{envoye && (
    <div className="bg-green-50 border border-green-400 text-green-700 p-4 rounded">
        Message envoyé !
    </div>
)}
```

### Vérification

- [ ] Le formulaire s'affiche avec tous les champs
- [ ] Les champs sont contrôlés (value + onChange)
- [ ] Le formulaire ne recharge PAS la page
- [ ] Le message de confirmation s'affiche après soumission

---

## "Je veux modifier la navbar"

### Fichier à ouvrir

`src/components/Navbar.tsx`

### Modifications courantes

| Modification | Où |
|-------------|-----|
| Changer les liens | Tableau `navLinks` (ligne 31) |
| Changer le logo | Import `superlogo` (ligne 3) |
| Changer les couleurs | Classes Tailwind dans le JSX |
| Ajouter un bouton CTA | Section "CTA Button" (ligne 70) |

### Vérification

- [ ] Les liens sont corrects
- [ ] Le menu mobile fonctionne
- [ ] Le logo s'affiche
- [ ] Le responsive fonctionne

---

## "Je veux ajouter une route"

### Fichier à ouvrir

`src/App.tsx`

### Étapes

```tsx
import NouvellePage from './pages/NouvellePage'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/contact" element={<Contacte />} />
        <Route path="/nouvelle-page" element={<NouvellePage />} />  {/* ← Ajouter */}
      </Routes>
      <Footer />
    </div>
  )
}
```

### Vérification

- [ ] La page s'affiche sur l'URL correcte
- [ ] La navigation fonctionne
- [ ] Le lien dans la navbar pointe vers la bonne URL

---

*Guide de modification — Super Auto Badéma Sylla — Version 1.0*
