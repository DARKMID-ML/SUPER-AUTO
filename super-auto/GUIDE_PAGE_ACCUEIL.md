# 🚗 GUIDE PAS À PAS — Créer la Page d'Accueil

Ce guide te dit **exactement quoi faire**, dans quel ordre, et comment. Aucun code ici, juste la méthode.

---

## ✅ Fichiers déjà créés

Ces fichiers sont prêts, tu n'as pas besoin de les modifier :

- ✅ `src/types/vehicule.ts` — Interface Vehicule (avec Service, Statut, etc.)
- ✅ `src/types/avis.ts` — Interface Avis
- ✅ `src/types/index.ts` — Export des types
- ✅ `src/data/vehicle.ts` — 8 véhicules variés (featuredVehicules)
- ✅ `src/data/services.ts` — domainesExpertise + pourquoiNousChoisir
- ✅ `src/data/testimonials.ts` — 3 témoignages clients
- ✅ `src/components/VehicleCard.tsx` — Composant carte véhicule
- ✅ `src/components/SectionTitle.tsx` — Composant titre de section

---

## 📦 ÉTAPE 1 : Créer la page d'accueil (src/pages/Home.tsx)

### Ce que tu dois faire :

**1. Crée le fichier `src/pages/Home.tsx`**

C'est la page principale qui va rassembler toutes les sections.

**2. Déclare l'état et les imports**

Au début du fichier, tu as besoin de :
- Importer `useState` depuis React
- Importer `Button` depuis `@/components/ui/button`
- Importer `VehicleCard` depuis `@/components/VehicleCard`
- Importer `SectionTitle` depuis `@/components/SectionTitle`
- Importer les données : `featuredVehicules`, `temoignages`, `domainesExpertise`, `pourquoiNousChoisir`
- Importer le type `Vehicule` depuis `@/types/vehicule`

**3. Crée l'état pour le filtre**

- Déclare `filtreActif` avec `useState<'all' | 'sale' | 'rental'>('all')`
- Crée `vehiculesFiltres` qui filtre `featuredVehicules` selon `filtreActif` :
  - Si `'all'` → tous les véhicules
  - Si `'sale'` → seulement ceux avec `service === 'Vente'`
  - Si `'rental'` → seulement ceux avec `service === 'Location'`

**4. Crée la fonction de callback**

- `handleVoirDetails(vehicule)` qui fait un `console.log` pour l'instant

**5. Crée les 6 sections dans le return**

### Section 1 — Hero (bannière principale)
- Balise `<section>` avec `h-screen` (pleine hauteur)
- Image de fond `/hero.png` avec dégradé bleu foncé transparent
- Contenu centré :
  - Titre "SUPER AUTO\nBADEMA SYLLA" en très gros
  - Slogan : "Votre partenaire automobile au Mali depuis plus de 15 ans..."
  - 2 boutons : "VOIR NOS VÉHICULES" (rouge) et "NOUS APPELER" (bordure blanche)
- Flèche animée en bas pour scroller

### Section 2 — Domaines d'Expertise
- Balise `<section>` avec fond blanc
- `<SectionTitle titre="Nos Domaines d'Expertise" />`
- Grille 3 colonnes (1 sur mobile)
- Boucle sur `domainesExpertise` et affiche chaque domaine avec :
  - Icône Material Symbols dans un cercle coloré
  - Titre en majuscules
  - Description
  - Lien "DÉCOUVRIR"

### Section 3 — Véhicules en Vedette
- Balise `<section>` avec fond gris clair
- `<SectionTitle titre="Véhicules en Vedette" />`
- 3 boutons de filtre : "Tous", "Vente", "Location"
  - Le bouton actif a un style différent
  - Cliquer change `filtreActif`
- Grille responsive (1/2/3 colonnes)
- Boucle sur `vehiculesFiltres` et affiche un `<VehicleCard>` pour chaque

### Section 4 — Pourquoi Nous Choisir
- Balise `<section>` avec fond blanc
- `<SectionTitle titre="Pourquoi Nous Choisir" />`
- Grille 4 colonnes (1 sur mobile, 2 sur tablette)
- Boucle sur `pourquoiNousChoisir` et affiche chaque item avec :
  - Icône Material Symbols dans un cercle bleu
  - Titre
  - Description

### Section 5 — Témoignages Clients
- Balise `<section>` avec fond gris clair
- `<SectionTitle titre="Ce que Disent Nos Clients" />`
- Grille 3 colonnes (1 sur mobile)
- Boucle sur `temoignages` et affiche chaque témoignage avec :
  - Initiale du client dans un cercle bleu
  - Citation en italique
  - Nom du client

### Section 6 — CTA Bannière
- Balise `<section>` avec fond bleu foncé et texte blanc
- Titre "Prêt à Trouver Votre Véhicule ?"
- Paragraphe d'accroche
- Bouton rouge "CONTACTEZ-NOUS"

---

## 🧠 RAPPELS IMPORTANTS

- Utilise `@/` pour les imports
- Tous les composants sont déjà créés, tu n'as qu'à les utiliser
- Les données sont prêtes, tu n'as qu'à les importer
- Le design doit être responsive : mobile d'abord
- Les couleurs : rouge (#DC2626), bleu (#1E3A5F), bleu foncé (#0F1B2D)
- Les icônes utilisent Material Symbols

---

## 📋 Structure finale attendue

```
src/pages/Home.tsx
├── Hero Section
├── Domaines d'Expertise
├── Véhicules en Vedette (avec filtres)
├── Pourquoi Nous Choisir
├── Témoignages Clients
└── CTA Bannière
```

Tu as tous les outils, les données et les composants. Tu peux coder la page maintenant !