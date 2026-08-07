# Super Auto Badéma Sylla — Documentation

> Documentation complète du projet **Super Auto Badéma Sylla** — Site web vitrine + catalogue automobile.
> Dernière mise à jour : Juillet 2026

---

## 1. Vue d'ensemble

**Super Auto Badéma Sylla** est une entreprise automobile basée à **Bamako, Mali** avec plus de 15 ans d'expérience. Le site web doit présenter :

- Un catalogue de véhicules (vente et location)
- Des services (transit, entretien, pièces détachées)
- Un formulaire de contact et de demande de devis transit
- Un site moderne, responsive et professionnel

---

## 2. Type de site

| Caractéristique | Détail |
|-----------------|--------|
| Type | SPA (Single Page Application) |
| Frontend | React 19 + TypeScript + Vite |
| Styling | Tailwind CSS 4 |
| Routing | React Router DOM 7 |
| Pages | 6 (Accueil, Vente, Location, Transit, Services, Contact) |
| Backend | Futur (Node.js + Express + PostgreSQL) |
| Responsive | Mobile, Tablette, Desktop |

---

## 3. Stack technique

### Technologies de base

| Technologie | Version | Rôle |
|-------------|---------|------|
| **React** | 19.x | Framework UI |
| **TypeScript** | 6.x | Typage statique |
| **Vite** | 8.x | Build tool + dev server |
| **Tailwind CSS** | 4.x | CSS utility-first |
| **React Router DOM** | 7.x | Routing SPA |

### Outils

| Outil | Rôle |
|-------|------|
| **ESLint** | Linting du code |
| **pnpm** | Package manager |
| **Git** | Versioning |

### Icônes

| Bibliothèque | Usage |
|-------------|-------|
| **Material Symbols Outlined** | Icônes dans tout le site (via Google Fonts) |

---

## 4. Structure du projet

```
SUPER-AUTO/
├── README.md                          # Point d'entrée documentation
├── AGENTS.md                          # Instructions assistants IA
├── CAHIER_DES_CHARGES_SUPER_AUTO.md   # Spécifications fonctionnelles
│
└── super-auto/                        # Application React
    ├── index.html                     # HTML entry point
    ├── package.json                   # Dépendances
    ├── vite.config.ts                 # Configuration Vite
    ├── tsconfig.json                  # Configuration TypeScript
    ├── eslint.config.js               # Configuration ESLint
    │
    ├── public/                        # Assets statiques
    │   ├── logo_primary.png           # Logo favicon
    │   └── icons.svg                  # Icônes sociales
    │
    ├── doc/                           # Documentation
    │   ├── README.md                  # Ce fichier
    │   ├── ARCHITECTURE.md
    │   ├── GUIDE-INSTALLATION.md
    │   ├── GUIDE-DEMODIFICATION.md
    │   ├── ETAT-APP.md
    │   ├── ROADMAP.md
    │   ├── GLOSSAIRE.md
    │   ├── DEPANNAGE.md
    │   ├── CHARTE-GRAPHIQUE.md
    │   └── guides/                    # Guides individuels
    │       ├── ajouter-une-page.md
    │       ├── ajouter-un-composant.md
    │       ├── modifier-la-navbar.md
    │       ├── modifier-les-fichiers-donnees.md
    │       ├── configurer-le-routing.md
    │       └── ajouter-un-formulaire.md
    │
    └── src/
        ├── main.tsx                   # Point d'entrée React
        ├── App.tsx                    # Routes
        ├── index.css                  # Thème Tailwind (couleurs custom)
        │
        ├── components/                # Composants réutilisables
        │   ├── Navbar.tsx             # Barre de navigation
        │   ├── Footer.tsx             # Pied de page
        │   ├── VehicleCard.tsx        # Carte véhicule (pas encore utilisé)
        │   └── SectionTitle.tsx       # Titre de section (pas encore utilisé)
        │
        ├── pages/                     # Pages du site
        │   ├── Acceuil.tsx            # Page d'accueil
        │   └── Contacte.tsx           # Page contact (en cours)
        │
        ├── data/                      # Données statiques
        │   ├── vehicle.ts             # Véhicules (vente + location)
        │   ├── services.ts            # Services et valeurs
        │   └── testimonials.ts        # Témoignages clients
        │
        ├── types/                     # Interfaces TypeScript
        │   ├── vehicule.ts            # Interface Vehicule
        │   ├── avis.ts                # Interface Avis
        │   └── index.ts              # Exports groupés
        │
        └── assets/                    # Images importées
            ├── logo_super_Auto.png    # Logo entreprise
            └── voiture.jpg            # Image hero accueil
```

---

## 5. Composants réutilisables

| Composant | Fichier | Rôle | Statut |
|-----------|---------|------|--------|
| `Navbar` | `components/Navbar.tsx` | Navigation sticky + menu mobile | Terminé |
| `Footer` | `components/Footer.tsx` | Pied de page 4 colonnes | Terminé |
| `VehicleCard` | `components/VehicleCard.tsx` | Carte véhicule (image + badge + infos) | Code présent, non intégré |
| `SectionTitle` | `components/SectionTitle.tsx` | Titre centré de section | Code présent, non intégré |

---

## 6. Pages

| Page | Route | Fichier | Statut |
|------|-------|---------|--------|
| Accueil | `/` | `pages/Acceuil.tsx` | Partiel (hero + expertise) |
| Vente | `/vente` | — | Pas encore fait |
| Location | `/location` | — | Pas encore fait |
| Transit | `/transit` | — | Pas encore fait |
| Services | `/services` | — | Pas encore fait |
| Contact | `/contact` | `pages/Contacte.tsx` | En cours |

---

## 7. Données

Les données statiques sont dans `src/data/` :

| Fichier | Contenu | Statut |
|---------|---------|--------|
| `vehicle.ts` | 8 véhicules (6 vente, 3 location) | URLs d'images fausses |
| `services.ts` | 3 domaines d'expertise + 4 valeurs | Données prêtes |
| `testimonials.ts` | 3 témoignages clients | Données prêtes |

---

## 8. Charte graphique résumée

| Couleur | Code | Usage |
|---------|------|-------|
| Bleu principal | #1E3A8A | Headers, liens |
| Bleu foncé | #0F172A | Footer, overlays |
| Rouge accent | #C41E3A | CTA, boutons principaux |
| Fond clair | #fff8f7 | Sections alternées |
| Surface | #FAFAFA | Cartes, inputs |

| Police | Usage |
|--------|-------|
| Epilogue | Titres (700-900) |
| Inter | Corps de texte (400-600) |
| Material Symbols | Icônes |

> Voir [Charte graphique complète](CHARTE-GRAPHIQUE.md)

---

## 9. Avancement actuel

- Phase 0 (Nettoyage) : Terminé
- Phase 1 (Routing) : Terminé
- Phase 2 (Pages simples) : En cours (Contact)
- Phase 3-7 : Pas encore commencé

> Voir [État de l'application](ETAT-APP.md) pour le détail
> Voir [Roadmap](ROADMAP.md) pour la suite

---

*Documentation Super Auto Badéma Sylla — Version 1.0*
