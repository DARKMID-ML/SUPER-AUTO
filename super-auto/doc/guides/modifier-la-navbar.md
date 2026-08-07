# Modifier la navbar

> Guide étape par étape pour modifier la barre de navigation.

---

## Fichier à ouvrir

`src/components/Navbar.tsx`

---

## Modifier les liens de navigation

Le tableau `navLinks` définit tous les liens :

```tsx
const navLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Vente', href: '/vente' },
    { name: 'Location', href: '/location' },
    { name: 'Transit', href: '/transit' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
]
```

| Champ | Rôle | Exemple |
|-------|------|---------|
| `name` | Texte affiché dans le lien | `'Contact'` |
| `href` | URL cible (doit commencer par `/`) | `'/contact'` |

---

## Ajouter un lien

Ajouter un objet au tableau `navLinks` :

```tsx
const navLinks = [
    // ... liens existants ...
    { name: 'Nouveau Lien', href: '/nouveau-lien' },
]
```

---

## Supprimer un lien

Supprimer l'objet correspondant du tableau `navLinks`.

---

## Modifier l'ordre des liens

Réorganiser les objets dans le tableau `navLinks`.

---

## Modifier le bouton CTA

Le bouton "Essaie gratuit" est dans la section "CTA Button" :

```tsx
{/* CTA Button */}
<div className="hidden md:block">
    <button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-2 px-4 rounded transition-colors">
        Essaie gratuit
    </button>
</div>
```

Pour changer le texte :
```tsx
<button className="...">
    Nouveau texte
</button>
```

Pour changer la couleur :
```tsx
<button className="bg-brand-blue hover:bg-brand-blue-dark ...">
```

---

## Modifier le logo

Changer l'import en haut du fichier :

```tsx
import superlogo from '../assets/nouveau-logo.png'
```

---

## Modifier les couleurs de la navbar

Les classes Tailwind dans le `<nav>` :

```tsx
<nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
    isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-md'  // ← Au scroll
        : 'bg-white shadow-md'                       // ← Par défaut
}`}>
```

| Modification | Classe à changer |
|-------------|-----------------|
| Fond par défaut | `bg-white` → `bg-brand-light` |
| Transparence au scroll | `bg-white/90` → `bg-white/80` |
| Ombre au scroll | `shadow-md` → `shadow-xl` |

---

## Vérification

- [ ] Les liens sont dans le bon ordre
- [ ] Chaque lien pointe vers la bonne URL
- [ ] Le menu mobile affiche tous les liens
- [ ] Le bouton CTA est visible sur desktop
- [ ] Le logo s'affiche correctement
- [ ] Le responsive fonctionne
