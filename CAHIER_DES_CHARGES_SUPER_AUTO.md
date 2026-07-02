# 📋 CAHIER DES CHARGES — SUPER AUTO BADEMA SYLLA

**Version :** 2.0  
**Date :** 01 Juillet 2026  
**Projet :** Site web vitrine + catalogue automobile + Backend  
**Client :** Super Auto Badéma Sylla (Bamako, Mali)  
**Destiné à :** Développeur web (réalisation from scratch)

---

## 1. PRÉSENTATION GÉNÉRALE

### 1.1 Contexte

**Super Auto Badéma Sylla** est une entreprise automobile basée à **Bamako (Mali)** avec plus de **15 ans d'expérience** dans le secteur. Elle propose une gamme complète de services :

- **Vente** de véhicules neufs et d'occasion
- **Location** de véhicules (courte et longue durée)
- **Transit et dédouanement** de véhicules importés (Europe, USA, Dubaï)
- **Entretien & Réparation** mécanique
- **Pièces de rechange** d'origine et adaptables
- **Expertise et conseil** automobile

### 1.2 Objectifs du site web

| Objectif | Description |
|----------|-------------|
| Présenter l'entreprise | Mettre en avant l'expertise, les valeurs et la crédibilité de Super Auto |
| Exposer un catalogue | Afficher les véhicules disponibles à la vente et à la location avec photos et détails |
| Faciliter la recherche | Permettre aux visiteurs de filtrer et trier les véhicules selon leurs critères |
| Générer des leads | Capturer les demandes de devis et les contacts via des formulaires |
| Promouvoir le transit | Expliquer clairement le processus d'importation de véhicules |
| Renforcer la présence digitale | Offrir une expérience utilisateur moderne, fluide et professionnelle |
| Gérer le contenu dynamiquement | Permettre au client de mettre à jour les véhicules et services sans développeur |

### 1.3 Cibles utilisateurs

| Cible | Besoin |
|-------|--------|
| Particuliers (Maliens) | Acheter ou louer un véhicule pour usage personnel |
| Professionnels / Entreprises | Acquérir des flottes de véhicules ou des solutions de location |
| Expatriés / Diaspora | Importer un véhicule depuis l'Europe, les USA ou Dubaï |
| Clients existants | Accéder aux services après-vente et à l'entretien |
| Administrateur | Gérer le contenu du site (véhicules, services, messages) |

### 1.4 Périmètre du projet

**Inclus :**
- Site web monopage (SPA) avec navigation sans rechargement
- 6 pages : Accueil, Vente, Location, Transit, Services, Contact
- Design responsive (mobile, tablette, desktop)
- Catalogue de véhicules avec filtres et recherche
- Formulaires de contact et de demande de test
- Thème clair (avec option sombre si possible)
- Animations subtiles pour une expérience fluide
- **Backend API REST** pour la gestion des données
- **Base de données** pour stocker les véhicules, demandes de contact et demandes de devis
- **Interface d'administration** pour gérer le contenu (véhicules, services, témoignages)
- **Système d'envoi d'emails** pour les notifications

**Exclus :**
- Système de paiement en ligne
- Espace client / authentification
- Multilingue (site en français uniquement)

---

## 2. ARCHITECTURE DU PROJET

### 2.1 Frontend (Site public)

```
SUPER AUTO BADEMA SYLLA
│
├── ACCUEIL (/)
│   ├── Hero Section (image pleine largeur + titre + CTA)
│   ├── Domaines d'Expertise (3 cartes : Vente, Location, Transit)
│   ├── Véhicules en Vedette (grille avec filtre Tous/Vente/Location)
│   ├── Pourquoi Nous Choisir (4 valeurs)
│   ├── Témoignages Clients (3 avis)
│   └── Bannière CTA (Appel à l'action)
│
├── VENTE (/vente)
│   ├── Fil d'Ariane (breadcrumb)
│   ├── Titre + Compteur de véhicules
│   ├── Barre latérale de filtres (marque, année, carburant, localisation)
│   ├── Grille de véhicules + Pagination
│   ├── État vide (aucun résultat)
│   └── Fenêtre modale de détail pour chaque véhicule
│
├── LOCATION (/location)
│   ├── Fil d'Ariane
│   ├── Titre + Compteur
│   ├── Barre latérale de filtres (type de véhicule, places, options)
│   ├── Grille de véhicules
│   └── Fenêtre modale de détail
│
├── TRANSIT (/transit)
│   ├── Hero Section (image + titre + CTA)
│   ├── Processus d'Importation (5 étapes visuelles)
│   ├── Formulaire de Demande de Devis
│   └── Liste d'avantages (transparence, sécurité, délais)
│
├── SERVICES (/services)
│   ├── Header avec fond dégradé
│   ├── Grille des 6 services (image + icône + description + lien)
│   ├── Statistiques (4 chiffres clés)
│   └── Bannière CTA
│
└── CONTACT (/contact)
    ├── Coordonnées (adresse, téléphone, email, horaires)
    ├── Carte (placeholder ou intégration Google Maps)
    └── Formulaire de contact (nom, email, téléphone, sujet, message)
```

### 2.2 Backend (API + Administration)

```
BACKEND SUPER AUTO
│
├── API REST
│   ├── GET /api/vehicles          # Liste des véhicules (avec filtres)
│   ├── GET /api/vehicles/:id      # Détail d'un véhicule
│   ├── POST /api/contact          # Envoyer un message de contact
│   ├── POST /api/transit/quote    # Demande de devis transit
│   └── GET /api/services          # Liste des services
│
├── BASE DE DONNÉES
│   ├── vehicles                   # Catalogue véhicules
│   ├── contacts                   # Messages de contact
│   ├── transit_quotes             # Demandes de devis transit
│   └── services                   # Services (optionnel, peut être statique)
│
└── ADMINISTRATION
    ├── Dashboard                   # Vue d'ensemble
    ├── Gestion des véhicules       # CRUD complet
    ├── Gestion des services        # CRUD complet
    ├── Messages de contact         # Liste + marquer comme lu
    └── Demandes de devis           # Liste + statut
```

---

## 3. FONCTIONNALITÉS DÉTAILLÉES

### 3.1 Navigation (Barre de navigation)

**Comportement attendu :**
- Barre fixe en haut de page (sticky)
- Logo à gauche avec le nom de l'entreprise
- Liens de navigation horizontaux au centre/droite (Accueil, Vente, Location, Transit, Services, Contact)
- Le lien de la page active doit être visuellement distingué (souligné ou coloré en rouge)
- Bouton "Essai Gratuit" à droite de la navigation (CTA)
- Au scroll (après ~20px), la barre devient semi-transparente avec effet de flou (backdrop blur)
- Sur mobile (< 768px) : la navigation se transforme en menu hamburger
- Le menu mobile s'ouvre en plein écran ou en tiroir vertical
- Le bouton de fermeture du menu mobile doit être clairement visible

### 3.2 Page d'Accueil

#### Section Hero (pleine hauteur)
- Image de fond pleine largeur représentant le showroom ou des véhicules de prestige
- L'image doit avoir un léger zoom animé au fil du temps (effet Ken Burns)
- Overlay sombre dégradé (du bleu foncé vers la transparence) pour la lisibilité du texte
- Titre principal : "SUPER AUTO BADEMA SYLLA" en gros caractères blancs, typographie différenciée
- Sous-titre : "Votre partenaire automobile au Mali depuis plus de 15 ans. Vente, location et transit de véhicules premium."
- Deux boutons d'action :
  - "VOIR NOS VÉHICULES" → redirige vers la page Vente (bouton primaire rouge)
  - "NOUS APPELER" → redirige vers la page Contact (bouton contour blanc)
- Flèche animée en bas de section pour inviter au scroll

#### Section Domaines d'Expertise
- Titre de section : "Nos Domaines d'Expertise"
- 3 cartes disposées horizontalement (1 colonne sur mobile, 3 sur desktop)
- Chaque carte contient :
  - Une icône dans un cercle coloré (rouge pour Vente, bleu pour Location, bleu foncé pour Transit)
  - Un titre en majuscules
  - Une description courte
  - Un lien "DÉCOUVRIR" avec flèche
- Effet d'ombre au survol des cartes

#### Section Véhicules en Vedette
- Titre : "Véhicules en Vedette"
- Système d'onglets pour filtrer : Tous | Vente | Location
- Les onglets sont des boutons avec état actif/inactif
- Grille de 6 véhicules maximum (3 colonnes desktop, 2 tablette, 1 mobile)
- Chaque véhicule est affiché via une carte réutilisable (voir section 4)
- Au clic sur "DÉTAILS" d'une carte, une fenêtre modale s'ouvre avec les informations complètes

#### Section Pourquoi Nous Choisir
- Titre : "Pourquoi Nous Choisir"
- 4 valeurs disposées en grille :
  - Qualité Garantie (icône : verified)
  - Service Client (icône : support_agent)
  - Livraison Rapide (icône : local_shipping)
  - Prix Compétitifs (icône : payments)
- Chaque valeur : icône dans un cercle bleu, titre, description courte

#### Section Témoignages Clients
- Titre : "Témoignages Clients"
- 3 témoignages disposés horizontalement
- Chaque témoignage contient :
  - Une citation en italique avec guillemets
  - Initiale du client dans un cercle
  - Nom et ville du client

#### Section Bannière CTA
- Fond dégradé bleu
- Titre : "Prêt à trouver votre véhicule idéal ?"
- Sous-titre : "Visitez notre showroom à Bamako ou contactez-nous dès maintenant."
- Bouton rouge "NOUS CONTACTER"

### 3.3 Page Vente

#### En-tête
- Fil d'Ariane : Accueil > Vente
- Titre : "NOS VÉHICULES À LA VENTE"
- Compteur dynamique indiquant le nombre de véhicules correspondant aux filtres
- Boutons de changement d'affichage (grille/liste, non fonctionnel mais présent visuellement)
- Menu déroulant de tri : "Récents", "Marque A-Z", "Année"

#### Filtres (barre latérale)
- La barre latérale est fixe (sticky) lors du défilement
- Titre : "Filtres"
- Bouton "Réinitialiser" pour effacer tous les filtres
- Les filtres disponibles :
  - **Marque** : menu déroulant avec toutes les marques disponibles (extraction automatique depuis les données)
  - **Année** : menu déroulant avec les années triées de la plus récente à la plus ancienne
  - **Carburant** : cases à cocher (Essence, Diesel, Hybride) — sélection multiple possible
  - **Localisation** : cases à cocher avec les villes disponibles — sélection multiple possible

#### Grille de véhicules
- 3 colonnes (grand écran), 2 colonnes (tablette), 1 colonne (mobile)
- Utilisation d'un composant "Carte Véhicule" réutilisable
- Si aucun véhicule ne correspond aux filtres : message "Aucun véhicule ne correspond à vos critères" avec icône et bouton pour réinitialiser les filtres

#### Pagination
- Visible uniquement si plusieurs pages de résultats
- Boutons : Précédent, numéros de page (1, 2, 3, ...), Suivant
- La page active doit être mise en évidence (fond rouge)

#### Fenêtre Modale de Détail
- S'ouvre au clic sur "DÉTAILS" d'une carte véhicule
- Fond overlay semi-transparent, fermeture au clic à l'extérieur ou sur la croix
- Contenu :
  - Image principale + galerie miniatures (toutes les images renvoient vers la même image par défaut)
  - Marque + Modèle en titre
  - Badge de statut (Disponible, Réservé, Vendu, Nouveau)
  - Caractéristiques : kilométrage, carburant, transmission, année
  - Boutons d'action disponibles uniquement si le véhicule n'est pas "Vendu" :
    - "DEMANDER UN ESSAI" (bouton primaire)
    - "Appeler" (bouton secondaire)
    - "WhatsApp" (bouton secondaire)
  - Description du véhicule
  - Tableau des caractéristiques (année, kilométrage, carburant, transmission, couleurs, places, localisation)
  - Liste des équipements sous forme de tags

### 3.4 Page Location

#### En-tête
- Fil d'Ariane : Accueil > Location
- Titre : "LOCATION DE VÉHICULES"
- Compteur dynamique
- Tri : "Pertinence"

#### Filtres (barre latérale)
- **Type de véhicule** : cases à cocher (Berline, SUV/4x4, Pick-up, Minibus) avec compteur
- **Nombre de places** : boutons de sélection unique (2-3, 4-5, 7+)
- **Options** : cases à cocher (Climatisation garantie, Boîte Automatique)
- Bouton "Appliquer les filtres" (rouge)
- Bouton "Réinitialiser"

#### Grille de véhicules
- Identique à la page Vente
- Les cartes des véhicules en location affichent les informations spécifiques à la location (nombre de places, climatisation)

### 3.5 Page Transit

#### Section Hero
- Image pleine largeur (port ou logistique)
- Overlay dégradé bleu
- Badge "SERVICE TRANSIT" en rouge
- Titre : "Importez votre véhicule en toute sérénité"
- Sous-titre : "De la recherche à la livraison au Mali, nous gérons l'intégralité du processus d'importation."
- Bouton CTA : "COMMENCER L'IMPORTATION"

#### Processus d'Importation (5 étapes)
- Disposition horizontale sur desktop, verticale sur mobile
- Une ligne de connexion relie les étapes sur desktop
- Chaque étape contient :
  - Un grand cercle avec une icône au centre
  - Un cercle numéroté (rouge) superposé
  - Un titre
  - Une description courte
- Les 5 étapes dans l'ordre :
  1. Demande de devis (icône : description)
  2. Sélection du véhicule (icône : search)
  3. Achat et formalités (icône : payments)
  4. Transport maritime (icône : sailing)
  5. Livraison à Bamako (icône : done_all)
- Animation au survol : l'icône grossit légèrement

#### Formulaire de Demande de Devis
- Disposé en deux colonnes : informations à gauche, formulaire à droite
- Contenu informatif à gauche :
  - Titre : "Demander un Devis Personnalisé"
  - Texte d'introduction
  - Image illustrant le bureau
  - 3 avantages (Transparence, Sécurité, Délai rapide) avec icônes
- Champs du formulaire :
  - **Nom Complet** (texte, obligatoire)
  - **Téléphone** (téléphone, obligatoire)
  - **Email** (email, optionnel)
  - **Type de Véhicule** (texte, obligatoire — ex: "Toyota Land Cruiser 2023")
  - **Pays d'Origine** (select : France, USA, Dubaï, Allemagne, Autre)
  - **Message / Commentaires** (textarea, optionnel)
- Bouton : "DEMANDER UN DEVIS" avec icône d'envoi
- Après soumission : message de confirmation "Demande envoyée ! Notre équipe vous contactera sous 24 heures" avec icône de succès

### 3.6 Page Services

#### En-tête
- Fond dégradé bleu
- Titre : "Nos Services"
- Sous-titre : "Une gamme complète de services dédiés à l'automobile au Mali."

#### Grille des 6 Services
- 3 colonnes (desktop), 2 (tablette), 1 (mobile)
- Chaque carte contient :
  - Une image en haut (avec effet de zoom au survol)
  - Une icône dans un cercle coloré en bas de l'image
  - Un titre
  - Une description
  - Un lien "EN SAVOIR PLUS" avec flèche
- Les 6 services :
  1. **Vente de Véhicules** → lien vers /vente (couleur : rouge)
  2. **Location de Véhicules** → lien vers /location (couleur : bleu)
  3. **Service Transit** → lien vers /transit (couleur : bleu foncé)
  4. **Entretien & Réparation** → pas de lien dédié (couleur : rouge)
  5. **Pièces de Rechange** → pas de lien dédié (couleur : bleu)
  6. **Expertise & Conseil** → lien vers /contact (couleur : bleu foncé)

#### Statistiques
- 4 chiffres clés affichés en grand :
  - "15+" — Années d'expérience
  - "2000+" — Véhicules vendus
  - "4.9/5" — Satisfaction client
  - "3" — Showrooms au Mali
- Les chiffres sont en bleu, grands et en gras

#### Bannière CTA
- Fond dégradé bleu
- Titre : "Besoin d'un service sur mesure ?"
- Bouton : "CONTACTER UN EXPERT" (rouge)

### 3.7 Page Contact

#### Coordonnées
- Carte des informations de contact :
  - **Adresse** : ACI 2000, Bamako, Mali (avec icône localisation)
  - **Téléphone** : +223 20 22 XX XX / +223 74 XX XX XX (avec icône téléphone)
  - **Email** : contact@superauto-mali.com (avec icône email)
  - **Horaires** : Lun-Ven 08:00-18:00, Sam 09:00-15:00, Dim Fermé (avec icône horloge)

#### Carte
- Zone réservée à la carte (placeholder)
- Afficher "Bamako, Mali — ACI 2000" en texte + icône map

#### Formulaire de Contact
- Champs :
  - **Nom complet** (texte, obligatoire)
  - **Email** (email, obligatoire)
  - **Téléphone** (téléphone, optionnel)
  - **Sujet** (select : Achat de véhicule, Location de véhicule, Service Transit, Service après-vente, Autre)
  - **Message** (textarea, obligatoire)
- Bouton : "ENVOYER" avec icône d'envoi
- Après soumission : message de confirmation "Message envoyé ! Merci de nous avoir contactés. Nous vous répondrons dans les plus brefs délais." avec icône de succès

### 3.8 Pied de Page (Footer)

- 4 colonnes :
  1. **Logo + Description** : nom de l'entreprise, courte description, copyright "© 2024 Super Auto Badéma Sylla"
  2. **Liens Rapides** : Accueil, Vente, Location, Transit, Services
  3. **Nous Contacter** : adresse, téléphone, email (avec icônes rouges)
  4. **Horaires** : Lun-Ven, Samedi, Dimanche

---

## 4. COMPOSANTS RÉUTILISABLES

### 4.1 Carte Véhicule (VehicleCard)

**Affichage :**
- Image du véhicule en haut (ratio 16/9, objet cover)
- Badge de statut en haut à droite (Disponible, Réservé, Vendu, Nouveau)
- Marque en petit, couleur bleue, majuscules
- Modèle en titre
- Année et localisation avec icônes
- Pour les véhicules en vente : kilométrage + carburant
- Pour les véhicules en location : nombre de places + climatisation
- Bouton "DÉTAILS" en bas

**Comportement :**
- Au survol : l'image zoome légèrement, l'ombre de la carte augmente
- Au clic sur "DÉTAILS" : ouvre la modale de détail

### 4.2 Fenêtre Modale de Détail (VehicleModal)

**Structure :**
- Overlay sombre semi-transparent en arrière-plan
- Fenêtre blanche centrée, scrollable si nécessaire
- Bouton de fermeture (croix) en haut à droite
- Deux colonnes sur desktop, une colonne sur mobile

**Contenu :**
- Colonne gauche : image principale + 4 miniatures (toutes identiques par défaut)
- Colonne droite :
  - Marque + Modèle
  - Badge de statut
  - Caractéristiques clés (km, carburant, transmission, année)
  - Boutons d'action (si non vendu)
  - Description
  - Tableau des caractéristiques détaillées
  - Liste des équipements (tags)

**Comportement :**
- Fermeture au clic sur l'overlay ou sur la croix
- Si le véhicule est "Vendu", les boutons d'action ne s'affichent pas

---

## 5. BACKEND - SPÉCIFICATIONS TECHNIQUES

### 5.1 Objectifs du backend

Le backend a pour but de :
- **Centraliser les données** (véhicules, services, témoignages)
- **Recevoir et stocker** les demandes de contact et de devis
- **Fournir une API** pour que le frontend récupère les données dynamiquement
- **Offrir une interface d'administration** pour mettre à jour le contenu sans toucher au code

### 5.2 Stack backend recommandée

| Technologie | Rôle | Pourquoi ? |
|-------------|------|------------|
| **Node.js + Express** | Framework API | Léger, rapide, même langage que le frontend |
| **PostgreSQL** | Base de données | Robuste, gratuit, adapté aux données structurées |
| **Prisma** | ORM | Simplifie les requêtes SQL, typage TypeScript |
| **JWT** | Authentification | Pour sécuriser l'accès à l'administration |
| **Nodemailer** | Envoi d'emails | Pour notifier l'équipe des nouvelles demandes |
| **Multer** | Upload de fichiers | Pour gérer les images de véhicules |

**Alternative :**
- **Strapi** (CMS headless) — plus rapide à déployer, interface admin prête à l'emploi
- **Supabase** (Firebase alternative) — backend-as-a-service avec base de données PostgreSQL

### 5.3 Modèle de données

#### Table `vehicles`
```
- id : nombre (PK, auto-increment)
- brand : texte (ex: "Toyota")
- model : texte (ex: "Land Cruiser")
- year : nombre (ex: 2023)
- type : enum ("sale" | "rental")
- image : texte (chemin vers l'image)
- status : enum ("available" | "reserved" | "sold" | "new")
- location : texte (ex: "Bamako")
- km : nombre ou null
- fuel : texte ou null
- transmission : texte ou null
- seats : nombre ou null
- ac : booléen
- description : texte ou null
- features : JSON (liste des équipements)
- exteriorColor : texte ou null
- interiorColor : texte ou null
- createdAt : date
- updatedAt : date
```

#### Table `contacts`
```
- id : nombre (PK, auto-increment)
- name : texte
- email : texte
- phone : texte ou null
- subject : texte
- message : texte
- status : enum ("new" | "read" | "archived")
- createdAt : date
```

#### Table `transit_quotes`
```
- id : nombre (PK, auto-increment)
- name : texte
- phone : texte
- email : texte ou null
- vehicleType : texte
- origin : texte (ex: "france", "usa", "dubai")
- message : texte ou null
- status : enum ("new" | "contacted" | "archived")
- createdAt : date
```

#### Table `services` (optionnel)
```
- id : nombre (PK, auto-increment)
- title : texte
- description : texte
- icon : texte (nom de l'icône Material Symbols)
- image : texte
- link : texte
- color : texte (ex: "brand-red", "brand-blue")
- order : nombre (pour le tri)
```

### 5.4 API Endpoints

#### Véhicules
- `GET /api/vehicles` — Liste tous les véhicules
  - Paramètres de requête : `?type=sale&brand=Toyota&year=2023&fuel=Diesel`
- `GET /api/vehicles/:id` — Détail d'un véhicule
- `POST /api/vehicles` — Créer un véhicule (admin uniquement)
- `PUT /api/vehicles/:id` — Modifier un véhicule (admin uniquement)
- `DELETE /api/vehicles/:id` — Supprimer un véhicule (admin uniquement)

#### Contact
- `POST /api/contact` — Envoyer un message
  - Données : `{ name, email, phone, subject, message }`
  - Réponse : `{ success: true, message: "Message envoyé" }`

#### Transit
- `POST /api/transit/quote` — Demande de devis
  - Données : `{ name, phone, email, vehicleType, origin, message }`
  - Réponse : `{ success: true, message: "Demande envoyée" }`

#### Services (optionnel)
- `GET /api/services` — Liste des services
- `POST /api/services` — Créer un service (admin)
- `PUT /api/services/:id` — Modifier un service (admin)
- `DELETE /api/services/:id` — Supprimer un service (admin)

### 5.5 Interface d'administration

**Fonctionnalités :**
- **Tableau de bord** : Statistiques (nombre de véhicules, demandes de contact, demandes de devis)
- **Gestion des véhicules** :
  - Liste avec recherche et filtres
  - Ajout/Modification/Suppression
  - Upload d'images
  - Changement de statut (Disponible, Réservé, Vendu, Nouveau)
- **Gestion des services** :
  - Ajout/Modification/Suppression
  - Upload d'images
  - Réorganisation (drag & drop)
- **Messages de contact** :
  - Liste des messages reçus
  - Marquer comme lu/non lu
  - Archivage
- **Demandes de devis transit** :
  - Liste des demandes
  - Changement de statut (Nouveau, Contacté, Archivé)

**Sécurité :**
- Authentification par login/mot de passe (JWT)
- Sessions actives de 24h
- Déconnexion automatique après inactivité

### 5.6 Intégration email

**Notifications automatiques :**
/
0- À chaque nouveau message de contact → email à `contact@superauto-mali.com`
- À chaque nouvelle demande de devis → email à `contact@superauto-mali.com`
- Email de confirmation au visiteur (optionnel)

**Contenu des emails :**
- Nom, email, téléphone du visiteur
- Sujet / Type de véhicule demandé
- Message complet
- Date et heure de la demande

---

## 6. CHARTE GRAPHIQUE

### 6.1 Palette de couleurs

| Couleur | Code Hex | Usage |
|---------|----------|-------|
| **Bleu principal** | #1E3A8A | Headers, boutons secondaires, titres, liens |
| **Bleu foncé** | #0F172A | Overlays, gradients, footer |
| **Rouge accent** | #C41E3A | CTA, boutons principaux, éléments mis en avant, liens actifs |
| **Rouge foncé** | #9e0027 | Hover des boutons rouges |
| **Fond clair** | #fff8f7 | Fond de section alterné |
| **Surface** | #FAFAFA | Cartes, inputs |
| **Texte principal** | #271718 | Titres, corps de texte |
| **Texte secondaire** | #5b4040 | Descriptions |
| **Texte atténué** | #8f6f6f | Métadonnées, placeholders |
| **Bordure standard** | #e3bebd | Bordures de cartes, inputs |
| **Bordure légère** | #f9dcdb | Bordures subtiles |

### 6.2 Typographie

| Usage | Police | Poids | Caractéristiques |
|-------|--------|-------|------------------|
| **Titres** | Epilogue | 700-900 (Bold à Black) | Uppercase pour les titres principaux |
| **Corps** | Inter | 400-600 (Regular à Semi-bold) | Texte courant, descriptions |
| **Icônes** | Material Symbols Outlined | 400 | Icônes dans tout le site |

### 6.3 Ombres et Effets

| Effet | Description | Usage |
|-------|-------------|-------|
| **Ombre carte** | Ombre douce | Cartes de services, véhicules |
| **Ombre carte hover** | Ombre plus marquée | Au survol des cartes |
| **Ombre modale** | Ombre prononcée | Fenêtres modales, dropdowns |
| **Backdrop blur** | Flou d'arrière-plan | Navbar au scroll |
| **Ken Burns** | Zoom lent sur image | Hero section accueil |
| **Bounce lent** | Animation de flottement | Flèche de scroll |

### 6.4 Breakpoints Responsive

| Breakpoint | Largeur | Comportement |
|------------|---------|--------------|
| **Mobile** | < 768px | 1 colonne, menu hamburger, boutons pleine largeur |
| **Tablette** | 768px - 1024px | 2 colonnes, navigation desktop |
| **Desktop** | > 1024px | 3 colonnes, layout complet |

---

## 7. DONNÉES

### 7.1 Structure d'un véhicule

Chaque véhicule est représenté par un objet avec les champs suivants :

**Champs obligatoires :**
- `id` : identifiant unique (nombre ou chaîne)
- `brand` : marque (ex: "Toyota")
- `model` : modèle (ex: "Land Cruiser")
- `year` : année de fabrication (nombre)
- `type` : type de transaction (`sale` pour vente, `rental` pour location)
- `image` : chemin vers l'image principale
- `status` : statut du véhicule (`available`, `reserved`, `sold`, `new`)
- `location` : ville d'affichage (ex: "Bamako")

**Champs optionnels :**
- `km` : kilométrage (nombre)
- `fuel` : carburant (ex: "Essence", "Diesel", "Hybride")
- `transmission` : type de boîte (ex: "Manuelle", "Automatique")
- `seats` : nombre de places (nombre)
- `ac` : climatisation (booléen)
- `description` : texte descriptif du véhicule
- `features` : liste des équipements (tableau de chaînes)
- `exteriorColor` : couleur extérieure
- `interiorColor` : couleur intérieure

### 7.2 Statuts des véhicules

| Statut | Libellé affiché | Couleur |
|--------|------------------|---------|
| `available` | Disponible | Vert |
| `reserved` | Réservé | Orange |
| `sold` | Vendu | Rouge |
| `new` | Nouveau | Rouge (marque) |

### 7.3 Exemple de contenu

**Véhicules en vente (9 véhicules) :**
- Toyota Land Cruiser V8 (2023, Bamako)
- Ford Ranger Wildtrak (2024, Bamako)
- Toyota Hilux D-4D (2024, Kayes)
- BMW X5 xDrive (2021, Kayes)
- Mercedes GLE 450 (2022, Bamako)
- Hyundai Elantra (2018, Bamako)

**Véhicules en location (3 véhicules) :**
- Mercedes-Benz Classe S (2022, Bamako)
- Hyundai Tucson Executive (2023, Bamako)
- Kia Rio Sedan (2021, Bamako)

---

## 8. CONTRAINTES TECHNIQUES

### 8.1 Performance
- Images optimisées (format moderne de préférence)
- Lazy loading sur les images hors viewport
- Build optimisé avec code splitting
- Pas de dépendances lourdes inutiles

### 8.2 Accessibilité
- Navigation au clavier possible
- Contrastes de couleurs suffisants
- Labels sur tous les champs de formulaire
- Attributs alt sur les images
- États de focus visibles

### 8.3 SEO
- Balises meta (title, description)
- Structure sémantique (h1, h2, h3, sections)
- URLs propres et descriptives
- Attributs alt sur les images

### 8.4 Compatibilité
- Navigateurs modernes (Chrome, Firefox, Safari, Edge)
- Pas de support IE11
- Test sur mobile, tablette et desktop

---

## 9. ASSETS DISPONIBLES

### 9.1 Images

**Dans le dossier `public/` :**
- `logo-primary.png` — Logo de l'entreprise
- `hero-home.jpg` — Image hero page d'accueil
- `hero-transit.jpg` — Image hero page transit
- `services/showroom.jpg` — Image service vente
- `services/rental.jpg` — Image service location
- `services/logistics.jpg` — Image service transit
- `services/workshop.jpg` — Image service entretien
- `services/parts.jpg` — Image service pièces détachées
- `services/office.jpg` — Image service expertise
- `vehicles/toyota-land-cruiser.jpg` — Toyota Land Cruiser
- `vehicles/ford-ranger.jpg` — Ford Ranger
- `vehicles/hyundai-elantra.jpg` — Hyundai Elantra
- `vehicles/hyundai-tucson.jpg` — Hyundai Tucson
- `vehicles/kia-rio.jpg` — Kia Rio
- `vehicles/mercedes-classe-s.jpg` — Mercedes Classe S
- `vehicles/mercedes-gle.jpg` — Mercedes GLE
- `vehicles/toyota-hilux.jpg` — Toyota Hilux
- `vehicles/bmw-x5.jpg` — BMW X5

### 9.2 Polices

- **Epilogue** : titres (Google Fonts)
- **Inter** : corps de texte (Google Fonts)
- **Material Symbols Outlined** : icônes (Google Fonts)

---

## 10. LIVRABLES ATTENDUS

1. **Frontend** : Site web fonctionnel avec les 6 pages décrites
2. **Backend** : API REST fonctionnelle avec toutes les endpoints
3. **Base de données** : Schéma de base de données avec données initiales
4. **Interface d'administration** : Dashboard complet pour gérer le contenu
5. **Design responsive** testé sur mobile, tablette et desktop
6. **Code source** bien structuré et commenté
7. **Documentation** technique (README + commentaires)
8. **Build de production** fonctionnel

---

## 11. CRITÈRES DE SUCCÈS

- ✅ Toutes les pages sont accessibles et fonctionnelles
- ✅ Le design est fidèle à la charte graphique
- ✅ Le site est responsive (mobile-first)
- ✅ Les filtres de véhicules fonctionnent correctement
- ✅ Les formulaires envoient les données au backend
- ✅ Les emails de notification sont envoyés
- ✅ L'interface d'administration permet de gérer tout le contenu
- ✅ Le temps de chargement est acceptable (< 3s)
- ✅ Le site fonctionne sur les navigateurs modernes

---

*Document de spécification — Super Auto Badéma Sylla — Version 2.0*