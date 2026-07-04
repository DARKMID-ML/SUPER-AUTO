# 📚 APPRENDRE REACT - GUIDE POUR DÉBUTANTS

## 🎯 Qu'est-ce que React ?

React est une bibliothèque pour créer des **interfaces web interactives**. 
Imaginez que vous construisez une maison avec des LEGO :
- Chaque brique LEGO = un **composant React**
- Vous pouvez réutiliser les briques = **composants réutilisables**
- Quand vous changez une brique, la maison se met à jour = **reactivité**

---

## 📁 Structure de votre projet

```
super-auto/
├── src/
│   ├── App.tsx              ← Composant PRINCIPAL (page entière)
│   ├── pages/
│   │   └── Acceuil.tsx      ← Page d'accueil
│   ├── components/
│   │   ├── Navbar.tsx       ← Barre de navigation
│   │   ├── Footer.tsx       ← Pied de page
│   │   ├── VehicleCard.tsx  ← Carte d'un véhicule
│   │   └── SectionTitle.tsx ← Titre de section
│   ├── data/
│   │   ├── vehicle.ts       ← Données des véhicules
│   │   ├── services.ts      ← Données des services
│   │   └── testimonials.ts  ← Données des témoignages
│   └── types/
│       └── vehicule.ts      ← Définition d'un véhicule
```

---

## 🧩 Les concepts de base

### 1. COMPOSANT = Fonction qui retourne du HTML

```tsx
// Un composant React est juste une fonction qui retourne du JSX (HTML + JavaScript)
export default function MaPage() {
  return (
    <div>
      <h1>Bonjour !</h1>
    </div>
  )
}
```

**Analogie** : C'est comme une fonction qui dessine une partie de l'écran.

---

### 2. IMPORT = Prendre un outil existant

```tsx
// Je veux utiliser useState (un outil de React)
import { useState } from "react"

// Je veux utiliser le composant Button
import { Button } from "../../@/components/ui/button"
```

**Analogie** : Comme prendre un marteau dans votre boîte à outils.

---

### 3. STATE (État) = Variable qui peut changer

```tsx
// Créer une variable "compteur" qui commence à 0
const [compteur, setCompteur] = useState(0)
```

**Analogie** : C'est comme un compteur de voiture :
- Il affiche un nombre (0)
- Il peut changer (setCompteur)
- Quand il change, l'écran se met à jour automatiquement

**Dans votre code** :
```tsx
const [filtreActif, setFiltreActif] = useState('all')
// filtresActif = quel filtre est sélectionné ('all', 'sale', ou 'rental')
// setFiltreActif = fonction pour changer le filtre
```

---

### 4. PROPS = Données qu'on passe à un composant

```tsx
// Dans VehicleCard.tsx
interface VehicleCardProps {
  vehicule: Vehicule  // On reçoit un véhicule
  onVoirDetails: (vehicule: Vehicule) => void  // On reçoit une fonction
}

// Utilisation :
<VehicleCard 
  vehicule={monVehicule}  // Je passe ce véhicule
  onVoirDetails={handleVoirDetails}  // Je passe cette fonction
/>
```

**Analogie** : Comme donner des instructions à quelqu'un :
- "Voici une voiture (vehicule)"
- "Quand on clique, appelle cette fonction (onVoirDetails)"

---

### 5. MAP = Afficher une liste

```tsx
// J'ai une liste de domaines
const domainesExpertise = [
  { id: 1, titre: "Vente" },
  { id: 2, titre: "Location" },
  { id: 3, titre: "Transit" }
]

// Je veux afficher chaque domaine
{domainesExpertise.map(domaine => (
  <div key={domaine.id}>
    <h3>{domaine.titre}</h3>
  </div>
))}
```

**Analogie** : Comme une photocopieuse :
- Tu donnes une liste
- Pour chaque élément, ça crée une copie
- `key` = numéro de dossier pour que React s'y retrouve

---

### 6. FILTER = Garder seulement ce qui correspond

```tsx
// Je veux seulement les véhicules en VENTE
const vehiculesVente = featuredVehicules.filter(vehicule => {
  return vehicule.service === 'Vente'
})
```

**Analogie** : Comme un entonnoir :
- Tu verses tous les véhicules
- Seuls ceux qui sont en "Vente" passent à travers

---

### 7. ONCLICK = Réagir à un clic

```tsx
<button onClick={() => setFiltreActif('sale')}>
  Vente
</button>
```

**Analogie** : Comme un bouton de sonnette :
- Quand on clique → ça exécute le code
- Ici : ça change le filtre → React met à jour l'écran

---

## 📝 Votre code expliqué ligne par ligne

### App.tsx (Le composant principal)

```tsx
// 1. IMPORTER les composants dont j'ai besoin
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Acceuil from './pages/Acceuil'

// 2. CRÉER le composant App
export default function App() {
  // 3. RETOURNER ce qui s'affiche à l'écran
  return (
    <div>
      <Navbar/>           {/* Affiche la barre de navigation */}
      <Acceuil />         {/* Affiche la page d'accueil */}
      <Footer/>           {/* Affiche le pied de page */}
    </div>
  )
}
```

**Explication** : App est comme un cadre photo qui contient 3 photos : Navbar, Acceuil, Footer.

---

### Acceuil.tsx (La page d'accueil)

```tsx
// 1. IMPORTER tous les outils
import { useState } from "react"  // Pour créer des variables qui changent
import { Button } from "../../@/components/ui/button"  // Pour les boutons
import VehicleCard from "@/components/VehicleCard"  // Pour afficher un véhicule
import SectionTitle from "@/components/SectionTitle"  // Pour les titres
import { featuredVehicules, domainesExpertise, pourquoiNousChoisir, temoignages } from "@/data/services"  // Les données
import type { Vehicule } from "@/types/vehicule"  // Le type d'un véhicule

// 2. CRÉER le composant
export default function Acceuil() {
  
  // 3. CRÉER LE STATE (variable qui change)
  const [filtreActif, setFiltreActif] = useState('all')
  // filtresActif = 'all', 'sale', ou 'rental'
  // setFiltreActif = fonction pour changer le filtre
  
  // 4. FILTRER les véhicules
  const vehiculesFiltres = featuredVehicules.filter(vehicule => {
    if (filtreActif === 'all') return true  // Garder tous
    if (filtreActif === 'sale') return vehicule.service === 'Vente'  // Garder seulement Vente
    if (filtreActif === 'rental') return vehicule.service === 'Location'  // Garder seulement Location
    return true
  })
  
  // 5. FONCTION pour voir les détails
  const handleVoirDetails = (vehicule: Vehicule) => {
    console.log("Voir détails:", vehicule)
  }

  // 6. AFFICHER le HTML
  return (
    <div>
      {/* SECTION 1 : HERO */}
      <section className="h-screen">
        <h1>SUPER AUTO</h1>
        <Button>VOIR NOS VÉHICULES</Button>
      </section>

      {/* SECTION 2 : DOMAINES D'EXPERTISE */}
      <section>
        <SectionTitle titre="Nos Domaines d'Expertise" />
        {domainesExpertise.map(domaine => (
          <div key={domaine.id}>
            <h3>{domaine.titre}</h3>
          </div>
        ))}
      </section>

      {/* SECTION 3 : VÉHICULES */}
      <section>
        <SectionTitle titre="Véhicules en Vedette" />
        
        {/* BOUTONS DE FILTRE */}
        <button onClick={() => setFiltreActif('all')}>Tous</button>
        <button onClick={() => setFiltreActif('sale')}>Vente</button>
        <button onClick={() => setFiltreActif('rental')}>Location</button>
        
        {/* GRILLE DE VÉHICULES */}
        {vehiculesFiltres.map(vehicule => (
          <VehicleCard 
            key={vehicule.id} 
            vehicule={vehicule} 
            onVoirDetails={handleVoirDetails}
          />
        ))}
      </section>
    </div>
  )
}
```

---

## 🎮 Comment React fonctionne ?

### Le cycle de React :

1. **Utilisateur clique** sur "Vente"
2. **onClick s'exécute** : `setFiltreActif('sale')`
3. **State change** : `filtreActif` devient `'sale'`
4. **React recalcule** : `vehiculesFiltres` est recalculé
5. **React met à jour l'écran** : Seuls les véhicules en vente s'affichent

```
Clic → State change → Recalcul → Affichage mis à jour
```

---

## 🧪 Exercice pour comprendre

### Essayez de modifier le code :

1. **Changez le titre** :
```tsx
<h1>SUPER AUTO<br/>BADEMA SYLLA</h1>
// Changez en :
<h1>MON SUPER AUTO</h1>
```

2. **Ajoutez un véhicule** dans `src/data/vehicle.ts` :
```tsx
{
  id: 9,
  marque: "Peugeot",
  model: "308",
  annee: 2023,
  // ... copiez un véhicule existant et modifiez
}
```

3. **Changez une couleur** :
```tsx
<div className="w-16 h-16 bg-red-600 rounded-full">
// Changez bg-red-600 en bg-blue-600
```

---

## 📚 Ressources pour apprendre React

1. **React officiel** : https://react.dev (EN FRANÇAIS !)
2. **Tailwind CSS** : https://tailwindcss.com (pour les styles)
3. **Pratiquez** : Modifiez votre code et voyez ce qui change

---

## 🎓 Prochaines étapes

1. ✅ Comprenez les composants
2. ✅ Comprenez le state (useState)
3. ✅ Comprenez les props
4. ✅ Comprenez map et filter
5. 🚀 Créez votre propre composant !

**Essayez de créer un composant simple** :
```tsx
// Dans src/components/MaCarte.tsx
export default function MaCarte({ titre, description }) {
  return (
    <div className="p-4 bg-white rounded shadow">
      <h2>{titre}</h2>
      <p>{description}</p>
    </div>
  )
}
```

---

**Vous avez maintenant les bases de React !** 🎉

Le plus important : **PRATIQUEZ**. Modifiez le code, cassez des choses, réparez-les. C'est comme ça qu'on apprend !