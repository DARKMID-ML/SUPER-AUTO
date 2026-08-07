# Guide d'installation — Super Auto Badéma Sylla

> Ce guide vous accompagne de zéro jusqu'à l'application qui tourne sur votre machine.
> Dernière mise à jour : Juillet 2026

---

## 1. Prérequis

### Node.js

Node.js est un runtime JavaScript nécessaire pour exécuter Vite et pnpm.

```bash
# Vérifier si Node.js est installé
node --version
```

Si ce n'est pas installé, téléchargez-le sur https://nodejs.org (version LTS recommandée).

### pnpm

pnpm est le package manager utilisé par le projet.

```bash
# Installer pnpm globalement
npm install -g pnpm

# Vérifier l'installation
pnpm --version
```

### Git

```bash
# Vérifier si Git est installé
git --version
```

---

## 2. Cloner le projet

```bash
# Cloner le dépôt
git clone <URL_DU_DEPOT>

# Entrer dans le dossier
cd SUPER-AUTO
```

---

## 3. Installer les dépendances

```bash
# Entrer dans le dossier de l'app
cd super-auto

# Installer toutes les dépendances
pnpm install
```

Cela crée le dossier `node_modules/` et le fichier `pnpm-lock.yaml`.

---

## 4. Lancer le serveur de développement

```bash
pnpm dev
```

Vous verrez un message du type :

```
  VITE v8.x.x  ready in xxx ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Ouvrez votre navigateur sur **http://localhost:5173/**

---

## 5. Vérification

| Vérification | Résultat attendu |
|-------------|-----------------|
| La page d'accueil s'affiche | Hero section + Domaines d'expertise visibles |
| La navbar est visible | Liens Accueil, Vente, Location, Transit, Services, Contact |
| Le lien Contact fonctionne | Clic sur "Contact" → page Contact s'affiche sans rechargement |
| Le footer est visible | 4 colonnes en bas de page |
| Le responsive fonctionne | Réduire la fenêtre → menu hamburger sur mobile |

---

## 6. Commandes disponibles

| Commande | Rôle |
|----------|------|
| `pnpm dev` | Serveur de développement (hot reload) |
| `pnpm build` | Build de production (dans `dist/`) |
| `pnpm preview` | Prévisualiser le build de production |
| `pnpm lint` | Vérifier le code avec ESLint |

---

## 7. Dépannage rapide

| Problème | Solution |
|----------|----------|
| `command not found: pnpm` | `npm install -g pnpm` |
| `Cannot find module` | `pnpm install` |
| Port 5173 déjà utilisé | Vite propose automatiquement un autre port |
| Erreurs TypeScript | Vérifier la syntaxe dans les fichiers `.tsx` |
| Styles manquants | Vérifier que `index.css` importe `tailwindcss` |

> Voir [Guide de dépannage complet](DEPANNAGE.md) pour plus de détails.

---

*Guide d'installation — Super Auto Badéma Sylla — Version 1.0*
