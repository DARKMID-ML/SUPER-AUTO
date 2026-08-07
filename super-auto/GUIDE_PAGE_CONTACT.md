# Guide Complet — Page Contact + Tailwind CSS

Ce guide t'explique **pourquoi** chaque ligne existe, pas juste **quoi** écrire.
Relis-le au fur et à mesure que tu codes.

---

## PARTIE 1 : Tailwind CSS — Comprendre avant de coder

### 1.1 Le concept

Tailwind CSS change la façon d'écrire du CSS. Au lieu de créer des classes dans un fichier `.css` séparé, tu écris directement des **classes utilitaires** dans l'attribut `className` de chaque élément JSX.

```tsx
// HTML classique : tu crées une classe dans un fichier CSS
<h1 class="titre-principal">Bonjour</h1>

// Tailwind CSS : tu utilises des classes prédéfinies directement
<h1 className="text-4xl font-bold text-white">Bonjour</h1>
```

**Pourquoi `className` et pas `class` ?** Parce qu'en React (JSX), `class` est un mot réservé en JavaScript. React utilise `className` à la place.

---

### 1.2 Les 10 catégories de classes

#### A. Espacement — `p-*` (padding) et `m-*` (margin)

| Classe | Signification visuelle |
|--------|----------------------|
| `p-3` | Padding de 0.75rem (12px) sur les 4 côtés |
| `p-8` | Padding de 2rem (32px) sur les 4 côtés |
| `px-4` | Padding GAUCHE + DROITE de 1rem (16px) |
| `py-3` | Padding HAUT + BAS de 0.75rem (12px) |
| `pt-28` | Padding HAUT seulement de 7rem (112px) |
| `pb-12` | Padding BAS seulement de 3rem (48px) |
| `mb-4` | Margin BAS de 1rem (16px) — espace EN DESSOUS |
| `mt-4` | Margin HAUT de 1rem — espace AU-DESSUS |
| `mr-3` | Margin DROITE de 0.75rem — espace à DROITE |
| `ml-2` | Margin GAUCHE de 0.5rem |

**Dans ton code :**
```tsx
// Acceuil.tsx ligne 32 — La section Domaines d'Expertise
<section className="py-16 px-4 md:px-8 lg:px-16" id="services">
```
- `py-16` = 4rem de padding en haut ET en bas → espace vertical autour du contenu
- `px-4` = 1rem de padding à gauche et à droite sur mobile
- `md:px-8` = 2rem sur tablette (768px+)
- `lg:px-16` = 4rem sur desktop (1024px+)

---

#### B. Taille — `w-*`, `h-*`, `text-*`

| Classe | Signification |
|--------|--------------|
| `w-full` | Largeur = 100% du conteneur |
| `w-12` | Largeur de 3rem (48px) |
| `h-20` | Hauteur de 5rem (80px) |
| `h-48` | Hauteur de 12rem (192px) |
| `max-w-7xl` | Largeur maximale = 80rem (~1280px) |
| `text-sm` | Taille de texte = 0.875rem (14px) |
| `text-base` | Taille de texte = 1rem (16px) — taille par défaut |
| `text-lg` | Taille de texte = 1.125rem (18px) |
| `text-xl` | Taille de texte = 1.25rem (20px) |
| `text-2xl` | Taille de texte = 1.5rem (24px) |
| `text-3xl` | Taille de texte = 1.875rem (30px) |
| `text-4xl` | Taille de texte = 2.25rem (36px) |
| `text-6xl` | Taille de texte = 3.75rem (60px) |

**Dans ton code :**
```tsx
// Acceuil.tsx ligne 15 — Le titre du hero
<h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
```
- `text-4xl` = 36px sur mobile
- `md:text-6xl` = 60px sur tablette+ (le titre grossit)
- `font-bold` = graisse 700 (gras)
- `text-white` = couleur blanche
- `mb-4` = 1rem d'espace en dessous

---

#### C. Couleurs

**Couleurs grises standard de Tailwind :**
`gray-100` (très clair) → `gray-200` → `gray-300` → `gray-400` → `gray-600` → `gray-800` (foncé)

**Couleurs custom de TON projet** (définies dans `src/index.css`) :

| Classe | Code hex | Usage |
|--------|----------|-------|
| `brand-red` | #C41E3A | Boutons principaux, accents |
| `brand-red-dark` | #9e0027 | Hover des boutons rouges |
| `brand-blue` | #1E3A8A | Headers, liens |
| `brand-blue-dark` | #0F172A | Footer, overlays |
| `brand-light` | #fff8f7 | Fond de section alterné |
| `brand-surface` | #FAFAFA | Fond de cartes |
| `text-primary` | #271718 | Titres, texte principal |
| `text-secondary` | #5b4040 | Descriptions |
| `text-muted` | #8f6f6f | Métadonnées, placeholders |
| `border-standard` | #e3bebd | Bordures de cartes/inputs |
| `border-light` | #f9dcdb | Bordures subtiles |

**Opacité :**
```tsx
<div className="bg-brand-blue/50">
```
Le `/50` signifie 50% d'opacité. Le fond est bleu mais semi-transparent.

---

#### D. Flexbox — Alignement

| Classe | Ce qu'elle fait |
|--------|----------------|
| `flex` | Active le mode flexbox sur le conteneur |
| `flex-col` | Les enfants sont empilés VERTICALEMENT |
| `flex-row` | Les enfants sont en LIGNE (horizontalement) |
| `items-center` | Centre les enfants VERTICALEMENT |
| `items-start` | Aligne les enfants en HAUT |
| `justify-center` | Centre les enfants HORIZONTALEMENT |
| `justify-between` | Répartit les enfants avec espace entre eux |
| `flex-grow` | L'élément prend tout l'espace disponible |
| `flex-shrink-0` | L'élément ne rétrécit JAMAIS |

**Dans ton code :**
```tsx
// Navbar.tsx ligne 47 — La barre de navigation
<div className="flex items-center justify-between h-20">
```
- `flex` = mode flexbox (les 3 enfants : logo, liens, bouton sont en ligne)
- `items-center` = alignés verticalement au centre
- `justify-between` = espace maximum entre eux (logo à gauche, liens au centre, bouton à droite)
- `h-20` = hauteur de 80px

---

#### E. Grille — `grid`

| Classe | Ce qu'elle fait |
|--------|----------------|
| `grid` | Active le mode grille |
| `grid-cols-1` | 1 colonne (mobile) |
| `grid-cols-2` | 2 colonnes |
| `grid-cols-3` | 3 colonnes |
| `grid-cols-4` | 4 colonnes |
| `gap-8` | Espace de 2rem entre chaque case de la grille |
| `gap-12` | Espace de 3rem |

**Responsive :**
```tsx
// Footer.tsx ligne 17
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
```
- Mobile : `grid-cols-1` = 1 colonne (tout est empilé)
- Tablette (768px+) : `md:grid-cols-2` = 2 colonnes
- Desktop (1024px+) : `lg:grid-cols-4` = 4 colonnes

**Pour la page Contact, on utilisera :**
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
```
- Mobile : 1 colonne (coordonnées au-dessus, formulaire en dessous)
- Desktop : 2 colonnes (coordonnées à gauche, formulaire à droite)

---

#### F. Position

| Classe | Ce qu'elle fait |
|--------|----------------|
| `relative` | L'élément reste dans le flux normal, mais ses enfants `absolute` se positionnent par rapport à lui |
| `absolute` | L'élément sort du flux (comme s'il n'existait pas pour les autres) |
| `fixed` | L'élément est collé à l'écran, il ne bouge pas au scroll |
| `inset-0` | Raccourci pour `top: 0; right: 0; bottom: 0; left: 0` = couvre tout le parent |
| `z-10`, `z-20`, `z-50` | Ordre d'empilement (50 = au-dessus de tout) |

**Dans ton code :**
```tsx
// Acceuil.tsx ligne 13 — L'overlay du hero
<div className="absolute inset-0 bg-brand-blue/50 z-10"></div>
```
- `absolute inset-0` = couvre toute la section hero (de coin en coin)
- `bg-brand-blue/50` = fond bleu semi-transparent (overlay)
- `z-10` = au-dessus de l'image de fond, mais en dessous du texte (z-20)

---

#### G. Responsive — `md:`, `sm:`, `lg:`

Le responsive = adapter le design selon la taille de l'écran.

| Préfixe | Breakpoint | Appareil |
|---------|------------|----------|
| (aucun) | 0px+ | Mobile |
| `sm:` | 640px+ | Grand mobile |
| `md:` | 768px+ | Tablette |
| `lg:` | 1024px+ | Desktop |

**Comment ça marche :**
```tsx
<div className="flex flex-col md:flex-row">
```
- Mobile : `flex-col` = les enfants sont empilés verticalement
- Tablet+ : `md:flex-row` = les enfants sont en ligne horizontale

**Règle :** tu écris d'abord le style mobile, puis tu écrases avec `md:` pour le desktop.

---

#### H. Hover — Effets au survol

| Classe | Effet |
|--------|-------|
| `hover:bg-brand-red-dark` | Quand la souris passe dessus, le fond devient rouge foncé |
| `hover:text-white` | Le texte devient blanc au survol |
| `hover:shadow-xl` | L'ombre grandit au survol |
| `hover:-translate-y-1` | L'élément monte de 4px au survol |

---

#### I. Transitions — Fluidité

| Classe | Effet |
|--------|-------|
| `transition-all` | Anime TOUS les changements de style |
| `transition-colors` | Anime uniquement les changements de couleur |
| `duration-300` | L'animation dure 300ms (0.3 seconde) |

**Usage typique :**
```tsx
<button className="bg-brand-red hover:bg-brand-red-dark transition-colors duration-300">
```
Quand tu passes la souris, le fond passe de rouge à rouge foncé en 300ms = fluide.

---

#### J. Ombres

| Classe | Effet |
|--------|-------|
| `shadow-md` | Ombre moyenne |
| `shadow-lg` | Ombre grande |
| `shadow-xl` | Ombre très grande |
| `shadow-card` | Ombre custom définie dans index.css |
| `shadow-card-hover` | Ombre custom au survol |
| `shadow-modal` | Ombre custom pour les fenêtres modales |

---

### 1.3 Les classes pour les FORMULAIRES

C'est nouveau pour toi, donc voici le détail.

#### Un champ texte complet :
```tsx
<input
    type="text"
    required
    placeholder="Votre nom complet"
    className="w-full border border-border-standard rounded p-3 
               focus:ring-2 focus:ring-brand-red focus:outline-none
               text-text-primary"
/>
```

| Classe | Pourquoi |
|--------|----------|
| `w-full` | Le champ prend 100% de la largeur du conteneur parent |
| `border` | Ajoute une bordure de 1px |
| `border-border-standard` | La bordure utilise ta couleur custom #e3bebd (gris rosé) |
| `rounded` | Coins arrondis (border-radius ~4px) |
| `p-3` | Espace intérieur de 12px → le texte ne touche pas les bords |
| `focus:ring-2` | Quand l'utilisateur clique dans le champ, une auréole apparaît |
| `focus:ring-brand-red` | L'auréole est rouge (ta couleur custom) |
| `focus:outline-none` | Supprime la bordure bleue moche par défaut du navigateur |
| `text-text-primary` | Le texte tapé est de couleur #271718 |

#### Un select (liste déroulante) :
```tsx
<select className="w-full border border-border-standard rounded p-3 
                   focus:ring-2 focus:ring-brand-red focus:outline-none
                   text-text-primary bg-white">
    <option value="">Choisir un sujet</option>
    <option value="achat">Achat de véhicule</option>
    <option value="location">Location de véhicule</option>
</select>
```
Même style que `<input>`, plus `bg-white` pour que le fond soit blanc.

#### Un textarea (zone de texte multiligne) :
```tsx
<textarea
    rows={5}
    required
    placeholder="Votre message"
    className="w-full border border-border-standard rounded p-3 
               focus:ring-2 focus:ring-brand-red focus:outline-none
               text-text-primary resize-vertical"
/>
```
- `rows={5}` = hauteur de 5 lignes
- `resize-vertical` = l'utilisateur peut agrandir/rapetisser verticalement

#### Un label (texte au-dessus du champ) :
```tsx
<label className="block text-sm font-medium text-text-primary mb-2">
    Nom complet *
</label>
```
- `block` = affiché sur sa propre ligne (pas à côté du champ)
- `text-sm` = taille 14px
- `font-medium` = graisse 500 (semi-gras)
- `mb-2` = 0.5rem d'espace en bas → sépare le label du champ

---

### 1.4 Les 3 types d'éléments de formulaire

```tsx
// 1. Champ texte simple (nom, email, téléphone)
<input type="text" placeholder="..." />
<input type="email" placeholder="..." />
<input type="tel" placeholder="..." />

// 2. Liste déroulante (sujet)
<select>
    <option value="">Choisir...</option>
    <option value="valeur1">Texte affiché</option>
</select>

// 3. Zone de texte multiligne (message)
<textarea rows={5} placeholder="..." />
```

---

## PARTIE 2 : Routing — Corriger Navbar + Footer

### 2.1 Pourquoi `<a>` ne marche pas pour React Router

```
<a href="/contact">Contact</a>
```
Quand tu cliques, le navigateur **recharge TOUTE la page** :
1. Il oublie l'état actuel de React
2. Il re-télécharge le HTML, le CSS, le JS
3. React redémarre de zéro

C'est comme si tu quittais le site et y revenais.

```
<Link to="/contact">Contact</Link>
```
React **change l'URL silencieusement** et re-render uniquement les composants qui changent. Pas de rechargement. C'est instantané.

### 2.2 La syntaxe de `<Link>`

```tsx
import { Link } from 'react-router-dom'

<Link
    key={link.href}        // Identifiant unique (obligatoire dans un .map())
    to={link.href}         // L'URL cible (comme href, mais pour React Router)
    className="..."        // Styles Tailwind (comme sur un <a>)
>
    {link.name}            // Le texte affiché entre <Link> et </Link>
</Link>
```

**ERREUR COMMUNE : Self-closing tag**
```tsx
// ❌ MAUVAIS — Self-closing = rien ne s'affiche (pas de texte entre les balises)
<Link to={link.href} />

// ✅ BON — Le texte est entre les balises
<Link to={link.href}>{link.name}</Link>
```

### 2.3 Navbar.tsx — Menu desktop (code corrigé)

```tsx
import { Link } from 'react-router-dom'    // ← Importer Link
import { useState, useEffect } from 'react'
import superlogo from '../assets/logo_super_Auto.png'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Vente', href: '/vente' },
        { name: 'Location', href: '/location' },
        { name: 'Transit', href: '/transit' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/90 backdrop-blur-md shadow-md' 
                : 'bg-white shadow-md'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src={superlogo}
                            alt="Logo Super Auto"
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="text-text-primary hover:text-brand-red transition-colors font-medium"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-2 px-4 rounded transition-colors">
                            Essaie gratuit
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-text-primary"
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-border-standard">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                to={link.href}
                                className="block px-3 py-2 text-base font-medium text-text-primary hover:text-brand-red"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <button className="w-full mt-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-2 px-4 rounded transition-colors">
                            Essaie gratuit
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
```

### 2.4 Footer.tsx — Liens rapides (code corrigé)

```tsx
import { Link } from 'react-router-dom'
import superlogo from '../assets/logo_super_Auto.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Vente', href: '/vente' },
    { name: 'Location', href: '/location' },
    { name: 'Transit', href: '/transit' },
    { name: 'Services', href: '/services' },
  ]

  return (
    <footer className="bg-brand-blue-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1: Logo + Description + Copyright */}
          <div>
            <img
              src={superlogo}
              alt="Logo Super Auto"
              className="h-12 w-auto object-contain rounded mb-4"
            />
            <p className="text-gray-300 text-sm mb-4">
              Votre partenaire automobile au Mali depuis plus de 15 ans. 
              Vente, location et transit de véhicules premium.
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} Super Auto Badéma Sylla. Tous droits réservés.
            </p>
          </div>

          {/* Colonne 2: Liens Rapides */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Nous Contacter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nous Contacter</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-brand-red mr-2 mt-0.5">
                  location_on
                </span>
                <span className="text-gray-300 text-sm">
                  ACI 2000, Bamako, Mali
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-brand-red mr-2 mt-0.5">
                  phone
                </span>
                <span className="text-gray-300 text-sm">
                  +223 20 22 XX XX<br />
                  +223 74 XX XX XX
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-brand-red mr-2 mt-0.5">
                  email
                </span>
                <a
                  href="mailto:contact@superauto-mali.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contact@superauto-mali.com
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Horaires */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horaires</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-300">Lundi - Vendredi</span>
                <span className="text-white">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Samedi</span>
                <span className="text-white">09:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Dimanche</span>
                <span className="text-white">Fermé</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
```

**Note :** le `<a href="mailto:...">` pour l'email ne CHANGE PAS. C'est un vrai lien externe (il ouvre le client mail), pas une navigation React Router.

---

## PARTIE 3 : Page Contacte.tsx — Code complet

### 3.1 Structure visuelle de la page

```
┌─────────────────────────────────────────────────┐
│  HEADER                                         │
│  Accueil > Contact                              │
│  NOUS CONTACTER                                 │
├─────────────────────────────────────────────────┤
│                                                 │
│  ┌──────────────────┐  ┌──────────────────┐    │
│  │ COORDONNÉES       │  │ FORMULAIRE        │    │
│  │                   │  │                   │    │
│  │ 📍 Adresse       │  │ Nom complet *     │    │
│  │ 📞 Téléphone     │  │ [input]           │    │
│  │ 📧 Email         │  │                   │    │
│  │ 🕐 Horaires      │  │ Email *           │    │
│  │                   │  │ [input]           │    │
│  │ ┌──────────────┐ │  │                   │    │
│  │ │ CARTE        │ │  │ Téléphone         │    │
│  │ │ Bamako, Mali │ │  │ [input]           │    │
│  │ └──────────────┘ │  │                   │    │
│  └──────────────────┘  │ Sujet             │    │
│                         │ [select ▼]        │    │
│                         │                   │    │
│                         │ Message *         │    │
│                         │ [textarea]        │    │
│                         │                   │    │
│                         │ [ENVOYER]         │    │
│                         └──────────────────┘    │
└─────────────────────────────────────────────────┘
```

### 3.2 Code complet

```tsx
import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Contacte() {
    // --- ÉTATS DU FORMULAIRE ---
    // useState('') crée une variable avec une valeur initiale vide
    // 'nom' = la valeur actuelle, 'setNom' = la fonction pour la changer
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [telephone, setTelephone] = useState('')
    const [sujet, setSujet] = useState('')
    const [message, setMessage] = useState('')
    const [envoye, setEnvoye] = useState(false)

    // --- GESTION DE LA SOUMISSION ---
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()  // ← CRUCIAL : empêche le rechargement de page
        console.log('Données envoyées:', { nom, email, telephone, sujet, message })
        setEnvoye(true)     // ← Affiche le message de succès
    }

    return (
        <>
            {/* ============================== */}
            {/* BLOC A : HEADER                */}
            {/* ============================== */}
            {/* pt-28 = padding-top pour compenser la navbar fixe (~112px) */}
            {/* pb-12 = padding-bottom de 48px */}
            {/* bg-brand-blue-dark = fond bleu foncé #0F172A */}
            <section className="pt-28 pb-12 bg-brand-blue-dark text-white">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Breadcrumb */}
                    <p className="text-sm text-gray-300 mb-4">
                        <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
                        <span className="mx-2">&gt;</span>
                        <span className="text-white">Contact</span>
                    </p>
                    {/* Titre */}
                    <h1 className="text-4xl md:text-5xl font-bold">NOUS CONTACTER</h1>
                </div>
            </section>

            {/* ============================== */}
            {/* BLOC B : CONTENU 2 COLONNES     */}
            {/* ============================== */}
            {/* py-16 = padding vertical 64px */}
            <section className="py-16 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* grid-cols-1 = 1 colonne sur mobile */}
                    {/* md:grid-cols-2 = 2 colonnes sur tablette+ */}
                    {/* gap-12 = 48px entre les colonnes */}

                    {/* ============================== */}
                    {/* COLONNE GAUCHE : COORDONNÉES    */}
                    {/* ============================== */}
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary mb-6">
                            Nos Coordonnées
                        </h2>

                        {/* Adresse */}
                        {/* flex items-start = icône et texte alignés en haut */}
                        <div className="flex items-start mb-6">
                            <span className="material-symbols-outlined text-brand-red mr-3 text-xl">
                                location_on
                            </span>
                            <div>
                                <h3 className="font-bold text-text-primary">Adresse</h3>
                                <p className="text-text-secondary">ACI 2000, Bamako, Mali</p>
                            </div>
                        </div>

                        {/* Téléphone */}
                        <div className="flex items-start mb-6">
                            <span className="material-symbols-outlined text-brand-red mr-3 text-xl">
                                phone
                            </span>
                            <div>
                                <h3 className="font-bold text-text-primary">Téléphone</h3>
                                <p className="text-text-secondary">+223 20 22 XX XX</p>
                                <p className="text-text-secondary">+223 74 XX XX XX</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start mb-6">
                            <span className="material-symbols-outlined text-brand-red mr-3 text-xl">
                                email
                            </span>
                            <div>
                                <h3 className="font-bold text-text-primary">Email</h3>
                                <a href="mailto:contact@superauto-mali.com"
                                   className="text-brand-red hover:text-brand-red-dark transition-colors">
                                    contact@superauto-mali.com
                                </a>
                            </div>
                        </div>

                        {/* Horaires */}
                        <div className="flex items-start mb-6">
                            <span className="material-symbols-outlined text-brand-red mr-3 text-xl">
                                schedule
                            </span>
                            <div>
                                <h3 className="font-bold text-text-primary">Horaires</h3>
                                <p className="text-text-secondary">Lun - Ven : 08:00 - 18:00</p>
                                <p className="text-text-secondary">Samedi : 09:00 - 15:00</p>
                                <p className="text-text-secondary">Dimanche : Fermé</p>
                            </div>
                        </div>

                        {/* Carte placeholder */}
                        {/* bg-brand-surface = fond gris clair #FAFAFA */}
                        {/* border = bordure de 1px */}
                        {/* rounded-lg = coins arrondis */}
                        <div className="bg-brand-surface border border-border-standard rounded-lg p-8 text-center mt-8">
                            <span className="material-symbols-outlined text-brand-red text-4xl mb-2">
                                map
                            </span>
                            <p className="text-text-secondary font-medium">
                                Bamako, Mali — ACI 2000
                            </p>
                        </div>
                    </div>

                    {/* ============================== */}
                    {/* COLONNE DROITE : FORMULAIRE     */}
                    {/* ============================== */}
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary mb-6">
                            Envoyez-nous un message
                        </h2>

                        {/* Si envoye = true, affiche le message de succès */}
                        {envoye && (
                            <div className="bg-green-50 border border-green-400 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                                <span className="material-symbols-outlined mr-2">check_circle</span>
                                Message envoyé ! Merci de nous avoir contactés. 
                                Nous vous répondrons dans les plus brefs délais.
                            </div>
                        )}

                        {/* Si envoye = false, affiche le formulaire */}
                        {!envoye && (
                            <form onSubmit={handleSubmit}>
                                {/* Champ Nom */}
                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-text-primary mb-2">
                                        Nom complet *
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        value={nom}
                                        onChange={(e) => setNom(e.target.value)}
                                        placeholder="Entrez votre nom complet"
                                        className="w-full border border-border-standard rounded p-3 
                                                   focus:ring-2 focus:ring-brand-red focus:outline-none
                                                   text-text-primary"
                                    />
                                </div>

                                {/* Champ Email */}
                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-text-primary mb-2">
                                        Email *
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="exemple@email.com"
                                        className="w-full border border-border-standard rounded p-3 
                                                   focus:ring-2 focus:ring-brand-red focus:outline-none
                                                   text-text-primary"
                                    />
                                </div>

                                {/* Champ Téléphone */}
                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-text-primary mb-2">
                                        Téléphone
                                    </label>
                                    <input
                                        type="tel"
                                        value={telephone}
                                        onChange={(e) => setTelephone(e.target.value)}
                                        placeholder="+223 XX XX XX XX"
                                        className="w-full border border-border-standard rounded p-3 
                                                   focus:ring-2 focus:ring-brand-red focus:outline-none
                                                   text-text-primary"
                                    />
                                </div>

                                {/* Champ Sujet (select) */}
                                <div className="mb-5">
                                    <label className="block text-sm font-medium text-text-primary mb-2">
                                        Sujet
                                    </label>
                                    <select
                                        value={sujet}
                                        onChange={(e) => setSujet(e.target.value)}
                                        className="w-full border border-border-standard rounded p-3 
                                                   focus:ring-2 focus:ring-brand-red focus:outline-none
                                                   text-text-primary bg-white"
                                    >
                                        <option value="">Choisir un sujet</option>
                                        <option value="achat">Achat de véhicule</option>
                                        <option value="location">Location de véhicule</option>
                                        <option value="transit">Service Transit</option>
                                        <option value="apres-vente">Service après-vente</option>
                                        <option value="autre">Autre</option>
                                    </select>
                                </div>

                                {/* Champ Message (textarea) */}
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-text-primary mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        rows={5}
                                        required
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        placeholder="Décrivez votre demande..."
                                        className="w-full border border-border-standard rounded p-3 
                                                   focus:ring-2 focus:ring-brand-red focus:outline-none
                                                   text-text-primary resize-vertical"
                                    />
                                </div>

                                {/* Bouton Enviar */}
                                <button
                                    type="submit"
                                    className="bg-brand-red hover:bg-brand-red-dark text-white 
                                               font-bold py-3 px-8 rounded transition-colors 
                                               flex items-center gap-2"
                                >
                                    <span className="material-symbols-outlined">send</span>
                                    ENVOYER
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
```

### 3.3 Explication des concepts React utilisés

#### `useState` — La mémoire du composant

```tsx
const [nom, setNom] = useState('')
```

| Morceau | Rôle |
|---------|------|
| `useState('')` | Crée une "variable d'état" avec la valeur initiale `''` (vide) |
| `nom` | La valeur actuelle du champ |
| `setNom` | La fonction pour changer la valeur |

**Pourquoi pas juste `let nom = ''` ?** Parce qu'en React, quand une variable change, le composant doit se ré-afficher. `useState` déclenche ce ré-affichage automatiquement.

#### `onChange` — Réagir à chaque frappe

```tsx
onChange={(e) => setNom(e.target.value)}
```

| Morceau | Rôle |
|---------|------|
| `onChange` | Événement déclenché à chaque frappe de touche |
| `(e)` | L'objet événement (contient les infos sur ce qui s'est passé) |
| `e.target.value` | Le texte actuellement dans le champ |
| `setNom(...)` | Met à jour la variable `nom` avec cette nouvelle valeur |

**Le cycle :** Utilisateur tape "A" → `onChange` se déclenche → `setNom("A")` → React ré-affiche → le champ affiche "A".

#### `value` — Contrôler le champ

```tsx
value={nom}
```
Lie la valeur du champ à la variable `nom`. Sans ça, React ne "contrôle" pas le champ et `setNom` ne fonctionnerait pas.

#### `onSubmit` — Quand on clique "ENVOYER"

```tsx
<form onSubmit={handleSubmit}>
```

```tsx
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()   // ← EMPECHE le rechargement de page
    console.log(...)     // ← Affiche les données dans la console (pour tester)
    setEnvoye(true)      // ← Change l'état pour afficher le message de succès
}
```

**`e.preventDefault()` est CRUCIAL.** Sans ça, le formulaire fait ce que font tous les formulaires HTML par défaut : **recharger la page**. Toutes les données saisies seraient perdues.

#### JSX conditionnel — Afficher/masquer

```tsx
{envoye && (
    <div className="...">
        Message envoyé !
    </div>
)}
```

`envoye && (...)` signifie : **"si `envoye` est `true`, affiche ce bloc. Sinon, n'affiche rien."**

C'est l'équivalent de :
```jsx
if (envoye) {
    affiche le message
}
```

---

## PARTIE 4 : Erreurs courantes

| Erreur | Pourquoi c'est faux | Solution |
|--------|-------------------|----------|
| `<Link to={'contacte'} />` | Self-closing = rien ne s'affiche + mauvaise URL | `<Link to={link.href}>{link.name}</Link>` |
| `<a href="/contact">` | Recharge la page entière | `<Link to="/contact">` |
| `<input>` sans `className` | Pas de style, moche | Ajouter les classes Tailwind |
| `handleSubmit` sans `e.preventDefault()` | Le formulaire recharge la page | Toujours mettre `e.preventDefault()` en premier |
| `{envoye: <div>...</div>}` | Syntaxe JSX incorrecte | `{envoye && <div>...</div>}` |
| `<input>` sans `value` et `onChange` | Le champ n'est pas contrôlé par React | Ajouter `value={var}` et `onChange={(e) => setVar(e.target.value)}` |
| `className="class1" className="class2"` | Un seul className autorisé | Tout dans un seul : `className="class1 class2"` |

---

## Checklist finale

Avant de considérer la page Contact comme terminée, vérifie :

- [ ] Navbar.tsx : les `<Link>` fonctionnent (desktop + mobile)
- [ ] Footer.tsx : les `<Link>` fonctionnent
- [ ] Contacte.tsx : le header s'affiche avec breadcrumb + titre
- [ ] Contacte.tsx : les coordonnées s'affichent avec les bonnes icônes
- [ ] Contacte.tsx : la carte placeholder s'affiche
- [ ] Contacte.tsx : le formulaire a tous les champs (nom, email, tel, sujet, message)
- [ ] Contacte.tsx : les champs ont `value` + `onChange`
- [ ] Contacte.tsx : `handleSubmit` a `e.preventDefault()`
- [ ] Contacte.tsx : le message de succès s'affiche après soumission
- [ ] Contacte.tsx : responsive (1 colonne mobile, 2 colonnes desktop)
- [ ] `pnpm run build` ne retourne aucune erreur
