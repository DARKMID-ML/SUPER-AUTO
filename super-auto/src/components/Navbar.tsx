// 1. Importer React et les hooks nécessaires
import { useState, useEffect } from 'react'
import superlogo from '../assets/logo_super_Auto.png'

// 2. Créer le composant (fonction qui retourne du JSX)
export default function Navbar() {
    // 3. Déclarer les variables d'état avec useState
    const [isMenuOpen, setIsMenuOpen] = useState(false) // Menu mobile ouvert/fermé
    const [isScrolled, setIsScrolled] = useState(false) // Scroll détecté ou non

    // 4. Utiliser useEffect pour détecter le scroll
    useEffect(() => {
        const handleScroll = () => {
            // Si on a scrollé de plus de 20px
            if (window.scrollY > 20) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        // Ajouter l'écouteur d'événement
        window.addEventListener('scroll', handleScroll)

        // Nettoyer l'écouteur quand le composant se démonte
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // 5. Retourner le JSX (HTML + JavaScript)
    const navLinks = [
        { name: 'Accueil', href: '/' },
        { name: 'Vente', href: '/vente' },
        { name: 'Location', href: '/location' },
        { name: 'Transit', href: '/transit' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/90 backdrop-blur-md shadow-md' 
                : 'bg-white shadow-md'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src={superlogo}
                            alt="Logo Super Auto"
                            className="h-12 w-auto object-contain"
                        />
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-text-primary hover:text-brand-red transition-colors font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <div className="hidden md:block">
                        <button className="bg-brand-red hover:bg-brand-red-dark text-white font-bold py-2 px-4 rounded transition-colors">
                            Essaie gratuit
                        </button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 text-text-primary"
                        >
                            <span className="material-symbols-outlined text-3xl">
                                {isMenuOpen ? 'close' : 'menu'}
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white border-t border-border-standard">
                    <div className="px-4 pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="block px-3 py-2 text-base font-medium text-text-primary hover:text-brand-red"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <button className="w-full mt-4 bg-brand-red hover:bg-brand-red-dark text-white font-bold py-2 px-4 rounded transition-colors">
                            Essaie gratuit
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}

