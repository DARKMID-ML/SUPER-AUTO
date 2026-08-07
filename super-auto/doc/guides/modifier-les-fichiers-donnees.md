# Modifier les fichiers de données

> Guide étape par étape pour modifier les données statiques (véhicules, services, témoignages).

---

## Fichiers concernés

| Fichier | Contenu |
|---------|---------|
| `src/data/vehicle.ts` | Liste des véhicules (vente + location) |
| `src/data/services.ts` | Domaines d'expertise + valeurs |
| `src/data/testimonials.ts` | Témoignages clients |

---

## Modifier les véhicules

### Fichier : `src/data/vehicle.ts`

### Structure d'un véhicule

```typescript
{
    id: 1,                          // Numéro unique
    marque: "Toyota",               // Marque
    model: "Land Cruiser V8",       // Modèle
    annee: 2023,                    // Année
    type: "SUV",                    // Type : "Berline", "SUV", "Pick-up"
    prix: "65 000 €",              // Prix affiché
    image: "/vehicles/toyota-lc.jpg", // Chemin image (dans public/)
    description: "4x4 robuste...",  // Description
    statut: "Disponible",           // "Disponible", "Réservé", "Vendu", "Nouveau"
    service: "Vente",               // "Vente" ou "Location"
    km: "0 km",                     // Kilométrage
    consomation: "12 L/100 km",    // Consommation
    transmission: "Automatique",    // "Automatique" ou "Manuelle"
    places: "7 places",             // Nombre de places
    climatisation: "Oui",           // "Oui" ou "Non"
    atouts: "4x4 permanent, Caméra 360°", // Atouts (séparés par virgule)
    peinture: "Blanc perle",        // Couleur extérieure
    interieur: "Cuir beige",        // Intérieur
    category: "4x4"                 // Catégorie pour les filtres
}
```

### Ajouter un véhicule

Ajouter un objet au tableau `featuredVehicules` :

```typescript
{
    id: 9,
    marque: "Nouvelle Marque",
    model: "Nouveau Modèle",
    annee: 2024,
    type: "Berline",
    prix: "30 000 €",
    image: "/vehicles/nouveau-modele.jpg",
    description: "Description du véhicule",
    statut: "Disponible",
    service: "Vente",
    km: "5 000 km",
    consomation: "7 L/100 km",
    transmission: "Automatique",
    places: "5 places",
    climatisation: "Oui",
    atouts: "GPS, Toit ouvrant",
    peinture: "Gris",
    interieur: "Tissu noir",
    category: "Berline"
}
```

### Attention pour les images

Les images doivent être dans `public/vehicles/` et le chemin doit commencer par `/vehicles/`.

---

## Modifier les services

### Fichier : `src/data/services.ts`

### Structure d'un service

```typescript
{
    id: 1,
    titre: "Vente de Véhicules",
    description: "Description du service...",
    icone: "directions_car",        // Nom de l'icône Material Symbols
    lien: "/vente",                 // Lien (ou "" si pas de lien)
    couleur: "brand-red"            // Couleur de l'icône
}
```

---

## Modifier les témoignages

### Fichier : `src/data/testimonials.ts`

### Structure d'un témoignage

```typescript
{
    id: 1,
    nom: "Amadou Diallo",
    ville: "Bamako",
    texte: "Excellent service ! J'ai acheté...",
    note: 5                         // Note sur 5
}
```

---

## Vérification

- [ ] Les nouvelles données s'affichent dans le site
- [ ] Les images se chargent correctement
- [ ] Les liens vers les pages fonctionnent
- [ ] Pas d'erreurs TypeScript dans la console
