import { Link } from "react-router-dom"
import ImageHero from "../assets/voiture.jpg"
import { services, statistiques } from "../data/services"

export default function Services() {
    return (
        <>
            {/* ----------Hero----------- */}
            <section
                className="hero bg-gray-100 pt-20 bg-cover bg-center flex items-center justify-center relative"
                style={{
                    backgroundImage: `url(${ImageHero})`,
                    height: "calc(40vh - 80px)",
                }}
            >
                <div className="absolute inset-0 bg-brand-blue/50 z-10"></div>
                <div className="max-w-7xl mx-auto px-4 relative z-20">
                    <h1 className="text-white text-4xl md:text-5xl font-bold">
                        Ce que Nous Pouvons vous offrir
                    </h1>
                    <p className="text-gray-200 text-lg mt-4 max-w-2xl">
                        Une gamme complète de services dédiés à l'automobile au Mali.
                    </p>
                </div>
            </section>

            {/* ----------Grille des 6 Services----------- */}
            <section className="py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-lg shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col"
                        >
                            {/* En-tête coloré avec icône */}
                            <div className={`${service.couleur} h-40 flex items-center justify-center`}>
                                <span
                                    className="material-symbols-outlined text-white"
                                    style={{ fontSize: "64px" }}
                                >
                                    {service.icone}
                                </span>
                            </div>
                            {/* Contenu */}
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {service.titre}
                                </h3>
                                <p className="text-text-secondary leading-relaxed flex-grow">
                                    {service.description}
                                </p>
                                {service.hasLink && (
                                    <Link
                                        to={service.lien}
                                        className="text-brand-red hover:text-brand-red-dark font-semibold inline-flex items-center gap-2 mt-6 transition-colors"
                                    >
                                        En savoir plus
                                        <span className="material-symbols-outlined text-lg">
                                            arrow_forward
                                        </span>
                                    </Link>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* ----------Statistiques----------- */}
            <section className="bg-brand-blue-dark py-16 px-4">
                <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {statistiques.map((stat) => (
                        <div key={stat.id}>
                            <p className="text-4xl md:text-5xl font-bold text-white mb-2">
                                {stat.chiffre}
                            </p>
                            <p className="text-gray-300 text-sm md:text-base">
                                {stat.label}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* ----------Bannière CTA----------- */}
            <section className="bg-gradient-to-r from-brand-blue to-brand-blue-dark py-16 px-4 text-center">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Besoin d'un service sur mesure ?
                    </h2>
                    <p className="text-gray-200 text-lg mb-8">
                        Notre équipe est à votre écoute pour répondre à tous vos besoins automobiles.
                    </p>
                    <Link
                        to="/contact"
                        className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-3 px-8 rounded transition-colors inline-block"
                    >
                        Contacter un expert
                    </Link>
                </div>
            </section>
        </>
    )
}
