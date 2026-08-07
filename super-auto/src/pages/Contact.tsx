import { useForm, ValidationError } from '@formspree/react';
import { Link } from "react-router-dom"

export default function Contact() {
    const [state, handleSubmit] = useForm("xaqraoal");

    if (state.succeeded) {
        return (
            <>
                <section className="pt-28 pb-12 bg-brand-blue-dark text-white">
                    <div className="max-w-7xl mx-auto px-4">

                        <h1 className="text-4xl md:text-5xl font-bold">NOUS CONTACTER</h1>
                    </div>
                </section>
                <section className="py-16 bg-brand-light">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="bg-green-50 border border-green-400 text-green-700 p-8 rounded-lg text-center max-w-lg mx-auto">
                            <span className="material-symbols-outlined text-4xl mb-2">check_circle</span>
                            <p className="text-lg font-medium">
                                Message envoyé ! Merci de nous avoir contactés.
                                Nous vous répondrons dans les plus brefs délais.
                            </p>
                        </div>
                    </div>
                </section>
            </>
        );
    }

    return (
        <>
            {/* ============================== */}
            {/* BLOC A : HEADER                */}
            {/* ============================== */}
            <section className="pt-28 pb-12 bg-brand-blue-dark text-white">
                <div className="max-w-7xl mx-auto px-4">
                    {/* Breadcrumb */}
                    {/* <p className="text-sm text-gray-300 mb-4">
                        <Link to="/" className="hover:text-white transition-colors">Accueil</Link>
                        <span className="mx-2">{'>'}</span>
                        <span className="text-white">Contact</span>
                    </p> */}
                    {/* Titre */}
                    <h1 className="text-4xl md:text-5xl font-bold">NOUS CONTACTER</h1>
                </div>
            </section>

            {/* ============================== */}
            {/* BLOC B : CONTENU 2 COLONNES     */}
            {/* ============================== */}
            <section className="py-16 bg-brand-light">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* ============================== */}
                    {/* COLONNE GAUCHE : COORDONNÉES    */}
                    {/* ============================== */}
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary mb-6">
                            Nos Coordonnées
                        </h2>

                        {/* Adresse */}
                        <div className="flex items-start mb-6">
                            <span className="material-symbols-outlined text-brand-red mr-3 text-xl">
                                location_on
                            </span>
                            <div>
                                <h3 className="font-bold text-text-primary">Adresse</h3>
                                <p className="text-text-secondary">ACI 2000, Bamako, Mali</p>
                            </div>
                        </div>

                        {/* Téléphone */}
                        <div className="flex items-start mb-6">
                            <span className="material-symbols-outlined text-brand-red mr-3 text-xl">
                                phone
                            </span>
                            <div>
                                <h3 className="font-bold text-text-primary">Téléphone</h3>
                                <p className="text-text-secondary">+223 20 22 XX XX</p>
                                <p className="text-text-secondary">+223 74 XX XX XX</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start mb-6">
                            <span className="material-symbols-outlined text-brand-red mr-3 text-xl">
                                email
                            </span>
                            <div>
                                <h3 className="font-bold text-text-primary">Email</h3>
                                <a href="mailto:contact@superauto-mali.com"
                                   className="text-brand-red hover:text-brand-red-dark transition-colors">
                                    contact@superauto-mali.com
                                </a>
                            </div>
                        </div>

                        {/* Horaires */}
                        <div className="flex items-start mb-6">
                            <span className="material-symbols-outlined text-brand-red mr-3 text-xl">
                                schedule
                            </span>
                            <div>
                                <h3 className="font-bold text-text-primary">Horaires</h3>
                                <p className="text-text-secondary">Lun - Ven : 08:00 - 18:00</p>
                                <p className="text-text-secondary">Samedi : 09:00 - 15:00</p>
                                <p className="text-text-secondary">Dimanche : Fermé</p>
                            </div>
                        </div>

                        {/* Carte placeholder */}
                        <div className="bg-brand-surface border border-border-standard rounded-lg p-8 text-center mt-8">
                            <span className="material-symbols-outlined text-brand-red text-4xl mb-2">
                                map
                            </span>
                            <p className="text-text-secondary font-medium">
                                Bamako, Mali — ACI 2000
                            </p>
                        </div>
                    </div>

                    {/* ============================== */}
                    {/* COLONNE DROITE : FORMULAIRE     */}
                    {/* ============================== */}
                    <div>
                        <h2 className="text-2xl font-bold text-text-primary mb-6">
                            Envoyez-nous un message
                        </h2>

                        <form onSubmit={handleSubmit}>
                            {/* Champ Nom */}
                            <div className="mb-5">
                                <label htmlFor="nom" className="block text-sm font-medium text-text-primary mb-2">
                                    Nom complet *
                                </label>
                                <input
                                    id="nom"
                                    type="text"
                                    name="nom"
                                    required
                                    placeholder="Entrez votre nom complet"
                                    className="w-full border border-border-standard rounded p-3 
                                               focus:ring-2 focus:ring-brand-red focus:outline-none
                                               text-text-primary"
                                />
                                <ValidationError prefix="Nom" field="nom" errors={state.errors} />
                            </div>

                            {/* Champ Email */}
                            <div className="mb-5">
                                <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                                    Email *
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    name="email"
                                    required
                                    placeholder="exemple@email.com"
                                    className="w-full border border-border-standard rounded p-3 
                                               focus:ring-2 focus:ring-brand-red focus:outline-none
                                               text-text-primary"
                                />
                                <ValidationError prefix="Email" field="email" errors={state.errors} />
                            </div>

                            {/* Champ Téléphone */}
                            <div className="mb-5">
                                <label htmlFor="telephone" className="block text-sm font-medium text-text-primary mb-2">
                                    Téléphone
                                </label>
                                <input
                                    id="telephone"
                                    type="tel"
                                    name="telephone"
                                    placeholder="+223 XX XX XX XX"
                                    className="w-full border border-border-standard rounded p-3 
                                               focus:ring-2 focus:ring-brand-red focus:outline-none
                                               text-text-primary"
                                />
                            </div>

                            {/* Champ Sujet (select) */}
                            <div className="mb-5">
                                <label htmlFor="sujet" className="block text-sm font-medium text-text-primary mb-2">
                                    Sujet
                                </label>
                                <select
                                    id="sujet"
                                    name="sujet"
                                    className="w-full border border-border-standard rounded p-3 
                                               focus:ring-2 focus:ring-brand-red focus:outline-none
                                               text-text-primary bg-white"
                                >
                                    <option value="">Choisir un sujet</option>
                                    <option value="achat">Achat de véhicule</option>
                                    <option value="location">Location de véhicule</option>
                                    <option value="transit">Service Transit</option>
                                    <option value="apres-vente">Service après-vente</option>
                                    <option value="autre">Autre</option>
                                </select>
                            </div>

                            {/* Champ Message (textarea) */}
                            <div className="mb-6">
                                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                                    Message *
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    required
                                    placeholder="Décrivez votre demande..."
                                    className="w-full border border-border-standard rounded p-3 
                                               focus:ring-2 focus:ring-brand-red focus:outline-none
                                               text-text-primary resize-vertical"
                                />
                                <ValidationError prefix="Message" field="message" errors={state.errors} />
                            </div>

                            {/* Bouton Envoyer */}
                            <button
                                type="submit"
                                disabled={state.submitting}
                                className="bg-brand-red hover:bg-brand-red-dark text-white 
                                           font-bold py-3 px-8 rounded transition-colors 
                                           flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                <span className="material-symbols-outlined">send</span>
                                {state.submitting ? 'ENVOI EN COURS...' : 'ENVOYER'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}