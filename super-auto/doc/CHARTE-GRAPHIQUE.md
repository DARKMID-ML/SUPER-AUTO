# Charte graphique — Super Auto Badéma Sylla

> Guide visuel complet : couleurs, typographie, ombres, animations et breakpoints.
> Dernière mise à jour : Juillet 2026

---

## 1. Palette de couleurs

### Couleurs principales

| Couleur | Code Hex | Classe Tailwind | Usage |
|---------|----------|-----------------|-------|
| Bleu principal | #1E3A8A | `brand-blue` | Headers, boutons secondaires, liens |
| Bleu foncé | #0F172A | `brand-blue-dark` | Overlays, gradients, footer |
| Rouge accent | #C41E3A | `brand-red` | CTA, boutons principaux, liens actifs |
| Rouge foncé | #9e0027 | `brand-red-dark` | Hover des boutons rouges |

### Couleurs de fond

| Couleur | Code Hex | Classe Tailwind | Usage |
|---------|----------|-----------------|-------|
| Fond clair | #fff8f7 | `brand-light` | Fond de section alterné |
| Surface | #FAFAFA | `brand-surface` | Cartes, inputs |

### Couleurs de texte

| Couleur | Code Hex | Classe Tailwind | Usage |
|---------|----------|-----------------|-------|
| Texte principal | #271718 | `text-text-primary` | Titres, corps de texte |
| Texte secondaire | #5b4040 | `text-text-secondary` | Descriptions |
| Texte atténué | #8f6f6f | `text-text-muted` | Métadonnées, placeholders |

### Couleurs de bordure

| Couleur | Code Hex | Classe Tailwind | Usage |
|---------|----------|-----------------|-------|
| Bordure standard | #e3bebd | `border-border-standard` | Bordures de cartes, inputs |
| Bordure légère | #f9dcdb | `border-border-light` | Bordures subtiles |

### Couleurs de statut (véhicules)

| Statut | Couleur | Classe |
|--------|---------|--------|
| Disponible | Vert | `bg-green-500` |
| Réservé | Orange | `bg-orange-500` |
| Vendu | Rouge | `bg-red-500` |
| Nouveau | Rouge (marque) | `bg-brand-red` |

---

## 2. Typographie

### Polices

| Police | Poids | Usage | Import |
|--------|-------|-------|--------|
| **Epilogue** | 700-900 | Titres (h1, h2, h3) | Google Fonts |
| **Inter** | 400-600 | Corps de texte, descriptions | Google Fonts |
| **Material Symbols Outlined** | 400 | Icônes dans tout le site | Google Fonts |

### Tailles de texte

| Classe | Taille | Usage |
|--------|--------|-------|
| `text-sm` | 14px | Labels, métadonnées |
| `text-base` | 16px | Corps de texte |
| `text-lg` | 18px | Descriptions |
| `text-xl` | 20px | Sous-titres |
| `text-2xl` | 24px | Titres de section |
| `text-3xl` | 30px | Titres importants |
| `text-4xl` | 36px | Titres de page |
| `text-5xl` | 48px | Titres hero |
| `text-6xl` | 60px | Titres hero (desktop) |

### Graisses

| Classe | Graisse | Usage |
|--------|---------|-------|
| `font-normal` | 400 | Texte courant |
| `font-medium` | 500 | Labels, liens |
| `font-semibold` | 600 | Sous-titres |
| `font-bold` | 700 | Titres, boutons |
| `font-extrabold` | 800 | Titres importants |
| `font-black` | 900 | Titres hero |

---

## 3. Ombres et effets

### Ombres

| Classe | Description | Usage |
|--------|-------------|-------|
| `shadow-card` | Ombre douce | Cartes de services, véhicules |
| `shadow-card-hover` | Ombre marquée | Au survol des cartes |
| `shadow-modal` | Ombre prononcée | Fenêtres modales, dropdowns |
| `shadow-md` | Ombre moyenne | Navbar, cartes |
| `shadow-xl` | Ombre grande | Éléments surélevés |

### Animations

| Animation | CSS | Usage |
|-----------|-----|-------|
| Ken Burns | `transform: scale(1) → scale(1.1)` | Hero section accueil (zoom lent) |
| Bounce lent | `translateY(0) → translateY(10px)` | Flèche de scroll |
| Transition | `transition-all duration-300` | Tous les changements de style |

### Effets

| Effet | CSS | Usage |
|-------|-----|-------|
| Backdrop blur | `backdrop-filter: blur(10px)` | Navbar au scroll |
| Overlay sombre | `bg-brand-blue/50` | Sur les images hero |
| Hover lift | `hover:-translate-y-1` | Cartes au survol |

---

## 4. Breakpoints responsive

| Breakpoint | Préfixe | Largeur | Comportement |
|------------|---------|---------|--------------|
| Mobile | (aucun) | < 768px | 1 colonne, menu hamburger, boutons pleine largeur |
| Tablette | `md:` | 768px - 1024px | 2 colonnes, navigation desktop |
| Desktop | `lg:` | > 1024px | 3 colonnes, layout complet |

### Exemple de responsive

```tsx
{/* Mobile : 1 colonne, Tablet : 2 colonnes, Desktop : 3 colonnes */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
```

---

## 5. Classes Tailwind correspondantes

### Boutons

```tsx
// Bouton primaire (rouge)
<button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-6 rounded transition-colors">

// Bouton secondaire (bleu)
<button className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 px-6 rounded transition-colors">

// Bouton contour blanc
<button className="border-2 border-white text-white hover:bg-white hover:text-brand-blue-dark font-bold py-3 px-6 rounded transition-colors">
```

### Cartes

```tsx
// Carte standard
<div className="bg-white p-8 rounded-lg shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
```

### Titres de section

```tsx
// Titre centré
<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Titre</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Sous-titre</p>
```

### Icônes Material Symbols

```tsx
// Icône rouge dans un cercle bleu
<div className="w-20 h-20 bg-brand-blue rounded-full flex items-center justify-center">
    <span className="material-symbols-outlined text-brand-red" style={{ fontSize: '50px' }}>
        directions_car
    </span>
</div>
```

---

*Charte graphique — Super Auto Badéma Sylla — Version 1.0*
