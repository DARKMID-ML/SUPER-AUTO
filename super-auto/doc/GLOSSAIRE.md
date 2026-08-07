# Glossaire — Super Auto Badéma Sylla

> Termes techniques expliqués simplement. Pour les débutants en React et en développement web.
> Dernière mise à jour : Juillet 2026

---

## React

| Terme | Explication |
|-------|-------------|
| **React** | Bibliothèque JavaScript pour créer des interfaces utilisateur. Gère le DOM automatiquement. |
| **Composant** | Un bloc réutilisable d'interface. Une page est composée de plusieurs composants. |
| **JSX** | Syntaxe qui mélange HTML et JavaScript dans les fichiers `.tsx`. Ex: `<h1>{titre}</h1>` |
| **Props** | Les "paramètres" d'un composant. Sont passés entre les balises. |
| **State** | La "mémoire" d'un composant. Quand il change, le composant se ré-affiche. |
| **Hook** | Une fonction spéciale de React (commence par `use`). Ex: `useState`, `useEffect`. |
| **useState** | Hook qui crée une variable d'état. `const [x, setX] = useState('')` |
| **useEffect** | Hook qui exécute un code à certains moments (au montage, au changement). |
| **Render** | L'action d'afficher un composant à l'écran. |
| **Re-render** | Quand un composant s'affiche à nouveau (suite à un changement de state ou props). |

---

## React Router

| Terme | Explication |
|-------|-------------|
| **SPA** | Single Page Application. Une seule page HTML, React gère la navigation. |
| **Route** | Une association URL → composant. Ex: `/contact` → `<Contacte />` |
| **BrowserRouter** | Composant qui active le routing dans toute l'app. |
| **Link** | Composant pour naviguer sans rechargement de page. `<Link to="/contact">` |
| **Route** | Composant qui définit une route. `<Route path="/contact" element={...} />` |

---

## Tailwind CSS

| Terme | Explication |
|-------|-------------|
| **Utility-first** | Approche où on écrit du CSS via des classes prédéfinies dans `className`. |
| **className** | L'attribut HTML équivalent de `class` en React (car `class` est réservé en JS). |
| **Breakpoint** | Seuil de taille d'écran pour le responsive. `md:` = 768px, `lg:` = 1024px. |
| **Padding** | Espace intérieur d'un élément (`p-*`, `px-*`, `py-*`). |
| **Margin** | Espace extérieur d'un élément (`m-*`, `mx-*`, `my-*`). |
| **Flexbox** | Mode de disposition CSS. Alignement horizontal/vertical des éléments. |
| **Grid** | Mode de disposition en grille (colonnes + lignes). |
| **Hover** | État quand la souris est au-dessus d'un élément. `hover:bg-red` = fond rouge au survol. |
| **Focus** | État quand un élément est sélectionné (cliqué ou atteint au clavier). |

---

## TypeScript

| Terme | Explication |
|-------|-------------|
| **TypeScript** | JavaScript avec des types. Aide à détecter les erreurs avant l'exécution. |
| **Interface** | Définit la "forme" d'un objet. Quels champs il a et de quel type. |
| **Type** | Similaire à interface. Définit un type de donnée. |
| **Any** | Type "tout est autorisé". À éviter car ça supprime la sécurité de TypeScript. |

---

## Outils

| Terme | Explication |
|-------|-------------|
| **Vite** | Outil qui lance le serveur de dev et build le projet pour la production. |
| **Hot Reload** | Quand tu modifies un fichier, le navigateur se met à jour automatiquement. |
| **Build** | Transformer le code source en fichiers optimisés pour la production (dans `dist/`). |
| **ESLint** | Outil qui vérifie la qualité du code et signale les erreurs potentielles. |
| **pnpm** | Package manager. Gère les dépendances (bibliothèques installées). |
| **npm** | Un autre package manager. On utilise pnpm à la place. |
| **node_modules** | Dossier contenant toutes les dépendances installées. Ne pas modifier. |

---

## Design

| Terme | Explication |
|-------|-------------|
| **Responsive** | Le site s'adapte à la taille de l'écran (mobile, tablette, desktop). |
| **Sticky** | Un élément reste fixe à l'écran quand on scroll. |
| **Backdrop blur** | Effet de flou sur l'arrière-plan d'un élément. |
| **CTA** | Call To Action. Un bouton qui invite à l'action ("Contactez-nous", "Voir plus"). |
| **Hero section** | Section pleine hauteur en haut de page avec image de fond + titre. |
| **Breadcrumb** | Fil d'Ariane. Indique la position dans la hiérarchie (Accueil > Contact). |
| **Modal** | Fenêtre superposée au contenu principal (overlay + contenu centré). |
| **Overlay** | Couche semi-transparente derrière une modale. |

---

## Backend (futur)

| Terme | Explication |
|-------|-------------|
| **API** | Interface de programmation. Le frontend envoie des requêtes, le backend répond. |
| **REST** | Style d'API basé sur les méthodes HTTP (GET, POST, PUT, DELETE). |
| **CRUD** | Create, Read, Update, Delete. Les 4 opérations de base sur des données. |
| **ORM** | Object-Relational Mapping. Prisma traduit le code TypeScript en requêtes SQL. |
| **JWT** | JSON Web Token. Système d'authentification par jeton. |
| **PostgreSQL** | Système de gestion de base de données relationnelle. |

---

*Glossaire — Super Auto Badéma Sylla — Version 1.0*
