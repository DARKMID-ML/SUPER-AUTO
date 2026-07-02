import superlogo from '../assets/logo_super_Auto.png'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Accueil', href: '/' },
    { name: 'Vente', href: '/vente' },
    { name: 'Location', href: '/location' },
    { name: 'Transit', href: '/transit' },
    { name: 'Services', href: '/services' },
  ]

  return (
    <footer className="bg-brand-blue-dark fixed bottom-0 left-0 right-0 z-50 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Colonne 1: Logo + Description + Copyright */}
          <div>
            <img
              src={superlogo}
              alt="Logo Super Auto"
              className="h-12 w-auto object-contain rounded mb-4"
            />
            <p className="text-gray-300 text-sm mb-4">
              Votre partenaire automobile au Mali depuis plus de 15 ans. 
              Vente, location et transit de véhicules premium.
            </p>
            <p className="text-gray-400 text-sm">
              © {currentYear} Super Auto Badéma Sylla. Tous droits réservés.
            </p>
          </div>

          {/* Colonne 2: Liens Rapides */}
          <div>
            <h3 className="text-lg font-bold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3: Nous Contacter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nous Contacter</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="material-symbols-outlined text-brand-red mr-2 mt-0.5">
                  location_on
                </span>
                <span className="text-gray-300 text-sm">
                  ACI 2000, Bamako, Mali
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-brand-red mr-2 mt-0.5">
                  phone
                </span>
                <span className="text-gray-300 text-sm">
                  +223 20 22 XX XX<br />
                  +223 74 XX XX XX
                </span>
              </li>
              <li className="flex items-start">
                <span className="material-symbols-outlined text-brand-red mr-2 mt-0.5">
                  email
                </span>
                <a
                  href="mailto:contact@superauto-mali.com"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  contact@superauto-mali.com
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4: Horaires */}
          <div>
            <h3 className="text-lg font-bold mb-4">Horaires</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex justify-between">
                <span className="text-gray-300">Lundi - Vendredi</span>
                <span className="text-white">08:00 - 18:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Samedi</span>
                <span className="text-white">09:00 - 15:00</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-300">Dimanche</span>
                <span className="text-white">Fermé</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}