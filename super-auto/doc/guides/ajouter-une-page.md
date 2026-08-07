# Ajouter une page

> Guide étape par étape pour ajouter une nouvelle page au site.

---

## Fichiers à modifier

| Fichier | Action |
|---------|--------|
| `src/pages/NouvellePage.tsx` | Créer |
| `src/App.tsx` | Ajouter la route |
| `src/components/Navbar.tsx` | Ajouter le lien |
| `src/components/Footer.tsx` | Ajouter le lien (optionnel) |

---

## Étape 1 : Créer le fichier de la page

Créez `src/pages/NouvellePage.tsx` :

```tsx
import { Link } from 'react-router-dom'

export default function NouvellePage() {
    return (
        <>
            {/* Header */}
            <section className="pt-28 pb-12 bg-brand-blue-dark text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <p className="text-sm text-gray-300 mb-4">
                        <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="text-white">Nouvelle Page</span>
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold">NOM DE LA PAGE</h1>
                </div>
            </section>

            {/* Contenu */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <p>Contenu de la page...</p>
                </div>
            </section>
        </>
    )
}
```

---

## Étape 2 : Ajouter la route dans App.tsx

```tsx
import NouvellePage from './pages/NouvellePage'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/contact" element={<Contacte />} />
        <Route path="/nouvelle-page" element={<NouvellePage />} />
      </Routes>
      <Footer />
    </div>
  )
}
```

---

## Étape 3 : Ajouter le lien dans Navbar.tsx

Dans le tableau `navLinks` :

```tsx
const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Vente', href: '/vente' },
    { name: 'Location', href: '/location' },
    { name: 'Transit', href: '/transit' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Nouvelle Page', href: '/nouvelle-page' },  // ← Ajouter
]
```

---

## Étape 4 : Ajouter le lien dans Footer.tsx (optionnel)

Dans le tableau `quickLinks` :

```tsx
const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Vente', href: '/vente' },
    { name: 'Location', href: '/location' },
    { name: 'Transit', href: '/transit' },
    { name: 'Services', href: '/services' },
    { name: 'Nouvelle Page', href: '/nouvelle-page' },  // ← Ajouter
]
```

---

## Vérification

- [ ] La page s'affiche sur `/nouvelle-page`
- [ ] Le breadcrumb affiche "Accueil > Nouvelle Page"
- [ ] Le lien apparaît dans la navbar
- [ ] Le lien fonctionne sans rechargement de page
- [ ] Le menu mobile affiche le lien
- [ ] Le responsive fonctionne (mobile + desktop)
