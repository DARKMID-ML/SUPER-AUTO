// Props du composant
interface SectionTitleProps {
  titre: string  // Titre principal (obligatoire)
  sousTitre?: string  // Sous-titre optionnel
}

// Composant simple pour afficher un titre de section centré
export default function SectionTitle({ titre, sousTitre }: SectionTitleProps) {
  return (
    // Conteneur centré avec marge en bas
    <div className="text-center mb-12">
      {/* Titre principal en gros et gras */}
      <h2 className="text-4xl font-bold text-text-primary mb-4">
        {titre}
      </h2>
      
      {/* Sous-titre optionnel */}
      {sousTitre && (
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          {sousTitre}
        </p>
      )}
    </div>
  )
}