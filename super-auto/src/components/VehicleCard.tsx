import { type Vehicule } from "@/types/vehicule"

// Props du composant
interface VehicleCardProps {
  vehicule: Vehicule  // Le véhicule à afficher
  onVoirDetails: (vehicule: Vehicule) => void  // Fonction appelée au clic sur DÉTAILS
}

export default function VehicleCard({ vehicule, onVoirDetails }: VehicleCardProps) {
  // Fonction qui retourne la couleur du badge selon le statut
  const getCouleurStatut = (statut: string) => {
    switch (statut) {
      case "Disponible":
        return "bg-green-500"  // Vert
      case "Réservé":
        return "bg-orange-500"  // Orange
      case "Vendu":
        return "bg-red-500"  // Rouge
      case "Nouveau":
        return "bg-brand-red"  // Rouge foncé
      default:
        return "bg-gray-500"  // Gris par défaut
    }
  }

  return (
    // Carte principale avec ombre et coins arrondis
    <div className="bg-white rounded-lg shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden">
      
      {/* Image du véhicule avec badge de statut */}
      <div className="relative">
        <img
          src={vehicule.image}
          alt={`${vehicule.marque} ${vehicule.model}`}
          className="w-full h-48 object-cover"
        />
        {/* Badge de statut en haut à droite */}
        <span className={`absolute top-2 right-2 ${getCouleurStatut(vehicule.statut)} text-white text-xs px-2 py-1 rounded`}>
          {vehicule.statut}
        </span>
      </div>

      {/* Contenu de la carte */}
      <div className="p-4">
        {/* Marque du véhicule */}
        <p className="text-brand-blue text-sm font-semibold uppercase mb-1">
          {vehicule.marque}
        </p>

        {/* Modèle du véhicule */}
        <h3 className="text-text-primary text-lg font-bold mb-2">
          {vehicule.model}
        </h3>

        {/* Année et catégorie */}
        <div className="flex items-center text-text-muted text-sm mb-3">
          <span className="material-symbols-outlined text-sm mr-1">calendar_today</span>
          {vehicule.annee}
          <span className="mx-2">•</span>
          <span className="material-symbols-outlined text-sm mr-1">category</span>
          {vehicule.category}
        </div>

        {/* Caractéristiques : km et consommation */}
        <div className="flex items-center text-text-muted text-sm mb-4">
          <span className="material-symbols-outlined text-sm mr-1">speed</span>
          {vehicule.km}
          <span className="mx-2">•</span>
          <span className="material-symbols-outlined text-sm mr-1">local_gas_station</span>
          {vehicule.consomation}
        </div>

        {/* Bouton DÉTAILS */}
        <button
          onClick={() => onVoirDetails(vehicule)}
          className="w-full border border-brand-red text-brand-red hover:bg-brand-red hover:text-white py-2 rounded transition-colors"
        >
          DÉTAILS
        </button>
      </div>
    </div>
  )
}