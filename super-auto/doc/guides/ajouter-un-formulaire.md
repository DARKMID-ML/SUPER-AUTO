# Ajouter un formulaire

> Guide étape par étape pour ajouter un formulaire fonctionnel à une page.

---

## Concept

Un formulaire en React a 3 éléments :
1. **Des états** (`useState`) pour stocker les valeurs des champs
2. **Des champs** (`<input>`, `<select>`, `<textarea>`) liés aux états
3. **Un handler** (`onSubmit`) pour traiter la soumission

---

## Étape 1 : Ajouter les états

```tsx
import { useState } from 'react'

export default function MaPage() {
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [sujet, setSujet] = useState('')
    const [message, setMessage] = useState('')
    const [envoye, setEnvoye] = useState(false)

    // ... reste du composant
}
```

| État | Rôle |
|------|------|
| `nom` / `setNom` | Stocke la valeur du champ nom |
| `email` / `setEmail` | Stocke la valeur du champ email |
| `sujet` / `setSujet` | Stocke la valeur du select |
| `message` / `setMessage` | Stocke la valeur du textarea |
| `envoye` / `setEnvoye` | Détecte si le formulaire a été soumis |

---

## Étape 2 : Créer le handler de soumission

```tsx
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()  // ← CRUCIAL : empêche le rechargement de page
    
    // Ici, on enverra les données au backend (plus tard)
    console.log('Données envoyées:', { nom, email, sujet, message })
    
    // Afficher le message de succès
    setEnvoye(true)
}
```

---

## Étape 3 : Créer le formulaire

```tsx
return (
    <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-text-primary mb-6">
                Envoyez-nous un message
            </h2>

            {/* Message de succès */}
            {envoye && (
                <div className="bg-green-50 border border-green-400 text-green-700 p-4 rounded-lg mb-6 flex items-center">
                    <span className="material-symbols-outlined mr-2">check_circle</span>
                    Message envoyé ! Nous vous répondrons bientôt.
                </div>
            )}

            {/* Formulaire */}
            {!envoye && (
                <form onSubmit={handleSubmit}>
                    {/* Champ Nom */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-text-primary mb-2">
                            Nom complet *
                        </label>
                        <input
                            type="text"
                            required
                            value={nom}
                            onChange={(e) => setNom(e.target.value)}
                            placeholder="Entrez votre nom"
                            className="w-full border border-border-standard rounded p-3 
                                       focus:ring-2 focus:ring-brand-red focus:outline-none"
                        />
                    </div>

                    {/* Champ Email */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-text-primary mb-2">
                            Email *
                        </label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="exemple@email.com"
                            className="w-full border border-border-standard rounded p-3 
                                       focus:ring-2 focus:ring-brand-red focus:outline-none"
                        />
                    </div>

                    {/* Champ Sujet (select) */}
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-text-primary mb-2">
                            Sujet
                        </label>
                        <select
                            value={sujet}
                            onChange={(e) => setSujet(e.target.value)}
                            className="w-full border border-border-standard rounded p-3 
                                       focus:ring-2 focus:ring-brand-red focus:outline-none bg-white"
                        >
                            <option value="">Choisir un sujet</option>
                            <option value="achat">Achat de véhicule</option>
                            <option value="location">Location de véhicule</option>
                            <option value="autre">Autre</option>
                        </select>
                    </div>

                    {/* Champ Message (textarea) */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-text-primary mb-2">
                            Message *
                        </label>
                        <textarea
                            rows={5}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Votre message..."
                            className="w-full border border-border-standard rounded p-3 
                                       focus:ring-2 focus:ring-brand-red focus:outline-none resize-vertical"
                        />
                    </div>

                    {/* Bouton Enviar */}
                    <button
                        type="submit"
                        className="bg-brand-red hover:bg-brand-red-dark text-white 
                                   font-bold py-3 px-8 rounded transition-colors 
                                   flex items-center gap-2"
                    >
                        <span className="material-symbols-outlined">send</span>
                        ENVOYER
                    </button>
                </form>
            )}
        </div>
    </section>
)
```

---

## Récapitulatif des classes Tailwind pour formulaires

| Classe | Rôle |
|--------|------|
| `w-full` | Le champ prend 100% de la largeur |
| `border border-border-standard` | Bordure grise fine |
| `rounded` | Coins arrondis |
| `p-3` | Espace intérieur |
| `focus:ring-2 focus:ring-brand-red` | Auréole rouge au focus |
| `focus:outline-none` | Supprime la bordure par défaut |
| `mb-5` | Espace entre les champs |
| `block` | Le label est sur sa propre ligne |
| `bg-white` | Fond blanc pour le select |

---

## Vérification

- [ ] Tous les champs sont affichés avec leurs labels
- [ ] Les champs ont `value` et `onChange`
- [ ] Le formulaire ne recharge PAS la page
- [ ] Le message de succès s'affiche après soumission
- [ ] Les champs obligatoires sont marqués avec `required`
- [ ] Le responsive fonctionne
