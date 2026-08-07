# Ajouter un composant réutilisable

> Guide étape par étape pour créer un composant React réutilisable.

---

## Fichier à créer

`src/components/NomDuComposant.tsx`

---

## Étape 1 : Créer le composant avec props

```tsx
interface NomDuComposantProps {
    titre: string
    description: string
    icone?: string  // Le ? signifie "optionnel"
}

export default function NomDuComposant({ titre, description, icone = "star" }: NomDuComposantProps) {
    return (
        <div className="bg-white p-6 rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300">
            <div className="w-12 h-12 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                <span className="material-symbols-outlined text-white text-2xl">
                    {icone}
                </span>
            </div>
            <h3 className="text-xl font-bold text-text-primary mb-2">{titre}</h3>
            <p className="text-text-secondary leading-relaxed">{description}</p>
        </div>
    )
}
```

### Explication

| Élément | Rôle |
|---------|------|
| `interface Props` | Définit les paramètres du composant |
| `{ titre, description, icone }` | Destructuration des props |
| `icone = "star"` | Valeur par défaut si la prop n'est pas passée |
| `className="..."` | Styles Tailwind pour le design |

---

## Étape 2 : L'utiliser dans une page

```tsx
import NomDuComposant from '../components/NomDuComposant'

export default function MaPage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <NomDuComposant
                titre="Premier élément"
                description="Description du premier élément"
                icone="directions_car"
            />
            <NomDuComposant
                titre="Deuxième élément"
                description="Description du deuxième élément"
                icone="car_rental"
            />
            <NomDuComposant
                titre="Troisième élément"
                description="Description du troisième élément"
            />
        </div>
    )
}
```

---

## Étape 3 : Ajouter des états (si nécessaire)

Si le composant a un comportement interactif :

```tsx
import { useState } from 'react'

interface MonComposantProps {
    titre: string
}

export default function MonComposant({ titre }: MonComposantProps) {
    const [estOuvert, setEstOuvert] = useState(false)

    return (
        <div>
            <button onClick={() => setEstOuvert(!estOuvert)}>
                {titre}
            </button>
            {estOuvert && (
                <div className="p-4 bg-brand-light rounded">
                    Contenu déplié
                </div>
            )}
        </div>
    )
}
```

---

## Vérification

- [ ] Le composant s'affiche correctement
- [ ] Les props sont bien passées et affichées
- [ ] Les props optionnelles fonctionnent avec les valeurs par défaut
- [ ] Le responsive fonctionne
- [ ] Le composant est réutilisable dans plusieurs pages
