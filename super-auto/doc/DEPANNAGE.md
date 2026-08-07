# Dépannage — Super Auto Badéma Sylla

> Erreurs courantes et leurs solutions. Consultez ce guide avant de demander de l'aide.
> Dernière mise à jour : Juillet 2026

---

## 1. Erreurs d'installation

### "command not found: pnpm"

**Cause :** pnpm n'est pas installé globalement.

**Solution :**
```bash
npm install -g pnpm
```

---

### "Cannot find module"

**Cause :** Les dépendances ne sont pas installées.

**Solution :**
```bash
cd super-auto
pnpm install
```

---

## 2. Erreurs de compilation

### "Module not found" ou "Cannot resolve"

**Cause :** Un import est incorrect ou le fichier n'existe pas.

**Vérifications :**
1. Le fichier importé existe-t-il ?
2. Le chemin est-il correct ? (`@/components/...` ou `../components/...`)
3. L'extension est-elle correcte ? (`.tsx` pour les composants, `.ts` pour les types)

---

### "Type 'X' is not assignable to type 'Y'"

**Cause :** Erreur de typage TypeScript.

**Solution :** Vérifier que les types correspondent. Si c'est un composant React, vérifier les props.

---

## 3. Erreurs de routing

### "La page ne s'affiche pas quand je clique sur un lien"

**Cause :** Le lien utilise `<a href>` au lieu de `<Link to>`.

**Solution :** Dans le composant concerné :
```tsx
// ❌ Mauvais
<a href="/contact">Contact</a>

// ✅ Bon
import { Link } from 'react-router-dom'
<Link to="/contact">Contact</Link>
```

---

### "La page se recharge entièrement quand je clique sur un lien"

**Cause :** Même problème — `<a href>` fait un rechargement complet.

**Solution :** Remplacer `<a href>` par `<Link to>`.

---

### "Page blanche après navigation"

**Cause :** La route n'est pas définie dans `App.tsx`.

**Solution :** Vérifier que la route existe :
```tsx
<Routes>
    <Route path="/" element={<Acceuil />} />
    <Route path="/contact" element={<Contacte />} />
    {/* La route manquante doit être ici */}
</Routes>
```

---

## 4. Erreurs de formulaires

### "Le formulaire recharge la page quand je clique sur ENVOYER"

**Cause :** Il manque `e.preventDefault()` dans `handleSubmit`.

**Solution :**
```tsx
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()  // ← AJOUTER CECI EN PREMIER
    // ... logique du formulaire
}
```

---

### "Le champ ne s'affiche pas correctement"

**Cause :** Le champ n'est pas contrôlé par React.

**Solution :** Ajouter `value` et `onChange` :
```tsx
<input
    value={nom}
    onChange={(e) => setNom(e.target.value)}
/>
```

---

## 5. Erreurs de styling

### "Les styles Tailwind ne fonctionnent pas"

**Vérifications :**
1. `index.css` importe-t-il `@import "tailwindcss"` ?
2. Les classes sont-elles dans `className` (pas `class`) ?
3. Les classes dynamiques fonctionnent-elles ? (`bg-${color}` ne marche PAS)

---

### "Les couleurs custom ne fonctionnent pas"

**Cause :** Les couleurs ne sont pas définies dans `index.css`.

**Vérification :** Dans `src/index.css` :
```css
@theme {
    --color-brand-red: #C41E3A;  // ← Doit être défini
}
```

---

### "Les classes responsive ne fonctionnent pas"

**Cause :** Le préfixe `md:` ou `lg:` est mal utilisé.

**Vérification :**
```tsx
// ✅ Bon — le style mobile est le premier, md: écrase sur tablette
<div className="flex flex-col md:flex-row">

// ❌ Mauvais — md:sans-style ne fait rien
<div className="md:flex-row">
```

---

## 6. Erreurs de build

### "tsc error" lors du build

**Cause :** Erreur TypeScript dans le code.

**Solution :** Lire le message d'erreur, il indique le fichier et la ligne exacts.

---

### Build réussi mais page blanche en production

**Cause :** Le `base` n'est pas configuré dans Vite (si le site n'est pas à la racine).

**Solution :** Dans `vite.config.ts`, ajouter `base: './'` si nécessaire.

---

## 7. Erreurs de serveur de dev

### "Port 5173 already in use"

**Cause :** Un autre processus utilise le port.

**Solution :**
```bash
# Tuer le processus sur le port 5173
lsof -ti:5173 | xargs kill -9

# Ou utiliser un autre port
pnpm dev -- --port 3000
```

---

## 8. Erreurs Git

### "node_modules" apparaît dans git status

**Cause :** Le `.gitignore` ne fonctionne pas correctement.

**Solution :** Vérifier que `.gitignore` contient `node_modules/`.

---

## 9. Questions fréquentes

### "Comment ajouter une nouvelle page ?"

Voir [Guide de modification — Ajouter une page](GUIDE-DEMODIFICATION.md#je-veux-ajouter-une-page).

### "Comment changer les couleurs ?"

Voir [Guide de modification — Changer les couleurs](GUIDE-DEMODIFICATION.md#je-veux-changer-les-couleurs-du-thème).

### "Comment ajouter un formulaire ?"

Voir [Guide de modification — Ajouter un formulaire](GUIDE-DEMODIFICATION.md#je-veux-ajouter-un-formulaire).

---

*Dépannage — Super Auto Badéma Sylla — Version 1.0*
