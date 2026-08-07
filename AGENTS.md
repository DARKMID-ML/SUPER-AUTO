# AGENTS.md — Instructions pour assistants IA

> Ce document guide les assistants IA (opencode, Copilot, etc.) pour travailler efficacement sur le projet Super Auto.

---

## Commandes du projet

| Commande | Rôle |
|----------|------|
| `pnpm install` | Installer les dépendances |
| `pnpm dev` | Lancer le serveur de dev (Vite) |
| `pnpm build` | Build de production (tsc + vite build) |
| `pnpm lint` | Vérifier le code avec ESLint |
| `pnpm preview` | Prévisualiser le build de production |

**Toutes les commandes doivent être lancées depuis `super-auto/`.**

---

## Conventions de code

| Élément | Convention | Exemple |
|---------|-----------|---------|
| Composants React | PascalCase, `.tsx` | `VehicleCard.tsx` |
| Pages | PascalCase, `.tsx` | `Acceuil.tsx`, `Contacte.tsx` |
| Hooks | camelCase, `use` prefix | `use-mobile.ts` |
| Types/Interfaces | PascalCase | `Vehicule`, `Avis` |
| Variables/fonctions | camelCase | `handleSubmit`, `isMenuOpen` |
| CSS classes | Tailwind utilities | `className="bg-brand-red text-white"` |
| Fichiers données | camelCase | `vehicle.ts`, `services.ts` |

---

## Stack technique

| Technologie | Version | Rôle |
|-------------|---------|------|
| React | 19.x | Framework UI |
| TypeScript | 6.x | Typage statique |
| Vite | 8.x | Build tool + dev server |
| Tailwind CSS | 4.x | CSS utility-first |
| React Router DOM | 7.x | Routing SPA |

---

## Structure du projet

```
super-auto/
├── src/
│   ├── components/     # Composants réutilisables (Navbar, Footer, VehicleCard)
│   ├── pages/          # Pages du site (Acceuil, Contacte, etc.)
│   ├── data/           # Données statiques (véhicules, services, témoignages)
│   ├── types/          # Interfaces TypeScript
│   ├── assets/         # Images importées par le code
│   ├── App.tsx         # Routes
│   ├── main.tsx        # Point d'entrée
│   └── index.css       # Thème Tailwind (couleurs custom)
├── public/             # Assets statiques (logo, favicon)
├── doc/                # Documentation
└── index.html          # HTML entry point
```

---

## Erreurs connues à éviter

1. **Ne pas utiliser `<a href>` pour la navigation interne** — utiliser `<Link to>` de react-router-dom
2. **Ne pas oublier `return`** dans les composants React
3. **Ne pas oublier `e.preventDefault()`** dans les formulaires
4. **Ne pas créer de classes Tailwind dynamiques** (`bg-${color}`) — elles ne fonctionnent pas
5. **Ne pas oublier le responsive** — toujours tester `md:` et `lg:` breakpoints
6. **Les imports doivent utiliser `@/`** pour les alias (ex: `@/components/...`)
7. **Ne jamais supprimer des fichiers** sans vérifier qu'ils ne sont pas importés ailleurs
8. **Respecter la charte graphique** — couleurs custom dans `index.css` (brand-red, brand-blue, etc.)

---

## Fichiers de données

Les données statiques sont dans `src/data/`. Quand le backend sera prêt, ces fichiers seront remplacés par des appels API.

- `vehicle.ts` — Liste des véhicules (vente + location)
- `services.ts` — Domaines d'expertise + valeurs
- `testimonials.ts` — Témoignages clients

---

## Cahier des charges

Le fichier `CAHIER_DES_CHARGES_SUPER_AUTO.md` (racine) contient toutes les spécifications fonctionnelles. C'est la **référence principale** pour le contenu et le comportement des pages.

---

*Dernière mise à jour : Juillet 2026*
