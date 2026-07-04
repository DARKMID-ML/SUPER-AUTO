export interface Vehicule {
  id: number;      // L'identifiant doit obligatoirement être un NOMBRE (ex: 1, 2)
  marque: string;    // La marque doit obligatoirement être du TEXTE (ex: "Tesla")
  model: string;    // Le modèle doit obligatoirement être du TEXTE (ex: "Model S")
  annee: number;    // L'année doit obligatoirement être un NOMBRE (ex: 2020)
  type: string;     // Le type doit obligatoirement être du TEXTE (ex: "Berline")
  prix: string;   // Le prix est du TEXTE (ex: "45 000 €")
  image: string;   // Le lien de la photo est du TEXTE
  description: string; // La description est du TEXTE (ex: "Voiture électrique haut de gamme")
  statut:string;   // Le statut est du TEXTE (ex: "Disponible", "Vendu", "En attente")
  service:string; // pour le service de vente ou de location
  km:string;
  consomation:string;
  transmission:string;
  places:string;
  climatisation:string;
  atouts:string;
  peinture:string;
  interieur:string;
  category: string;// La catégorie est du TEXTE (ex: "Électrique")
}
