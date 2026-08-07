import { Link } from "react-router-dom"
import ImageHero from "../assets/voiture.jpg"

export default function Acceuil() {


    return (
        <>
            {/* ----------Hero----------- */}
            <section className="hero bg-gray-100 pt-20 bg-cover bg-center flex items-center justify-center relative" style={{ 
                backgroundImage: `url(${ImageHero})`, 
                height: 'calc(80vh - 80px)' 
            }}>
                <div className="absolute inset-0 bg-brand-blue/50 z-10"></div>
                <div className="container mx-auto px-4 relative z-20 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Bienvenue chez Super Auto</h1>
                    <p className="text-lg md:text-2xl text-white mb-8">Votre partenaire de confiance pour l'achat et la vente de voitures d'occasion.</p>
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                        <a href="#services" className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-6 rounded transition-colors">Découvrir nos services</a>
                        <a href="#services" className="bg-brand-blue hover:bg-brand-blue-dark text-white font-bold py-3 px-6 rounded transition-colors">Explorez nos véhicules</a>
                    </div>
                </div>
                
                {/* Indicateur de scroll */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <span className="material-symbols-outlined text-white text-3xl">keyboard_arrow_down</span>
                    </div>
                </div>
            </section>

            {/* ---------Domaines d'Expertise----------- */}
            <section className="py-16 px-4 md:px-8 lg:px-16" id="services">
                <div className="max-w-7xl mx-auto text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Nos Domaines d'Expertise</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">Découvrez notre expertise dans différents domaines de l'industrie automobile.</p>
                </div>
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Carte 1 - Vente et Achat */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                        <div className="w-20 h-20 bg-brand-blue hover:bg-brand-red rounded-full flex items-center justify-center mb-4 shadow-lg transition-all duration-300">
                            <span className="material-symbols-outlined text-brand-red hover:text-white" style={{ fontSize: '50px' }}>directions_car</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Vente et Achat de Voitures</h3>
                        <p className="text-text-secondary leading-relaxed flex-grow">Nous achetons et vendons une large gamme de véhicules d'occasion de qualité, soigneusement sélectionnés pour répondre à vos besoins.</p>
                        <Link to="/services" className="text-brand-red hover:text-brand-red-dark font-semibold inline-flex items-center gap-2 mt-6 mb-2 transition-colors">
                            En savoir plus
                            <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">arrow_forward</span>
                        </Link>
                    </div>

                    {/* Carte 2 - Location */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                        <div className="w-20 h-20 bg-brand-blue hover:bg-brand-red rounded-full flex items-center justify-center mb-4 shadow-lg transition-all duration-300">
                            <span className="material-symbols-outlined text-brand-red hover:text-white" style={{ fontSize: '50px' }}>car_rental</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Location de Véhicules</h3>
                        <p className="text-text-secondary leading-relaxed flex-grow">Des solutions de location flexibles pour tous vos besoins, que ce soit pour un jour, une semaine ou plus longtemps.</p>
                        <a href="#services" className="text-brand-red hover:text-brand-red-dark font-semibold inline-flex items-center gap-2 mt-6 mb-2 transition-colors">
                            En savoir plus
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </a>
                    </div>

                    {/* Carte 3 - Transit */}
                    <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center">
                        <div className="w-20 h-20 bg-brand-blue hover:bg-brand-red rounded-full flex items-center justify-center mb-4 shadow-lg transition-all duration-300">
                            <span className="material-symbols-outlined text-brand-red hover:text-white" style={{ fontSize: '50px' }}>local_shipping</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-3">Transit Automobile</h3>
                        <p className="text-text-secondary leading-relaxed flex-grow">Service de transit et d'importation de véhicules, avec une gestion complète des formalités douanières.</p>
                        <a href="#services" className="text-brand-red hover:text-brand-red-dark font-semibold inline-flex items-center gap-2 mt-6 mb-2 transition-colors">
                            En savoir plus
                            <span className="material-symbols-outlined text-lg">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </section>
        </>
    )
}