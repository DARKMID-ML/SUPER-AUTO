# Roadmap — Super Auto Badéma Sylla

> Feuille de route du projet avec les phases de développement et priorités.
> Dernière mise à jour : Juillet 2026

---

## Phases terminées

### Phase 0 : Nettoyage ✅

- [x] Supprimer les dépendances inutilisées
- [x] Supprimer les fichiers template Vite
- [x] Passer à pnpm comme package manager unique
- [x] Corriger le favicon
- [x] Ajouter les meta tags SEO
- [x] Clean install des dépendances

### Phase 1 : Routing ✅

- [x] Installer react-router-dom
- [x] Configurer BrowserRouter dans main.tsx
- [x] Créer les routes dans App.tsx
- [x] Remplacer `<a href>` par `<Link to>` dans Navbar

---

## Phases en cours

### Phase 2 : Pages simples 🟡

| Page | Statut | Priorité |
|------|--------|----------|
| Contact | En cours | Haute |
| Services | Pas commencé | Haute |
| Transit | Pas commencé | Moyenne |

**Objectif :** Créer les pages les plus simples d'abord (pas de filtres, pas de modales).

---

## Phases à venir

### Phase 3 : Page Accueil complète

**Priorité : Haute**

- [ ] Section Véhicules en vedette (onglets + grille `.map()`)
- [ ] Section Pourquoi Nous Choisir (4 valeurs)
- [ ] Section Témoignages clients (3 avis)
- [ ] Bannière CTA finale
- [ ] Corriger les liens CTA du Hero

### Phase 4 : Composants réutilisables

**Priorité : Moyenne**

- [ ] Intégrer `VehicleCard.tsx` dans les pages
- [ ] Créer `VehicleModal.tsx` (fenêtre de détail)
- [ ] Intégrer `SectionTitle.tsx`
- [ ] Utiliser les données de `services.ts` et `testimonials.ts`

### Phase 5 : Pages Vente & Location

**Priorité : Moyenne**

- [ ] Page Vente : filtres (marque, année, carburant, localisation)
- [ ] Page Vente : pagination
- [ ] Page Vente : tri
- [ ] Page Vente : état vide (aucun résultat)
- [ ] Page Location : filtres (type, places, options)
- [ ] Page Location : pagination
- [ ] Modale de détail véhicule

### Phase 6 : Formulaires

**Priorité : Moyenne**

- [ ] Formulaire Contact (nom, email, tel, sujet, message)
- [ ] Formulaire Transit devis (nom, tel, email, type, pays, message)
- [ ] Messages de confirmation
- [ ] Validation des champs

### Phase 7 : Polish

**Priorité : Basse**

- [ ] Responsive complet (testé mobile, tablette, desktop)
- [ ] Animations (Ken Burns, hover, transitions)
- [ ] Accessibilité (aria-labels, navigation clavier, contrastes)
- [ ] Performance (lazy loading images, optimisation)
- [ ] Images réelles (remplacer les URLs fausses)
- [ ] SEO complet (meta tags par page)

### Phase 8 : Backend

**Priorité : Basse (futur)**

- [ ] Setup Node.js + Express
- [ ] Schéma Prisma (vehicles, contacts, transit_quotes, services)
- [ ] API endpoints CRUD
- [ ] Seed de données
- [ ] Connecter le frontend aux API
- [ ] Interface d'administration
- [ ] Authentification JWT
- [ ] Envoi d'emails

---

## Estimation

| Phase | Durée estimée | Complexité |
|-------|--------------|------------|
| Phase 0 | Terminé | Facile |
| Phase 1 | Terminé | Facile |
| Phase 2 | 2-3 jours | Facile |
| Phase 3 | 1-2 jours | Moyen |
| Phase 4 | 1-2 jours | Moyen |
| Phase 5 | 3-4 jours | Difficile |
| Phase 6 | 1-2 jours | Moyen |
| Phase 7 | 2-3 jours | Moyen |
| Phase 8 | 5-10 jours | Difficile |

**Total estimé : ~15-20 jours** (hors backend)

---

*Roadmap — Super Auto Badéma Sylla — Version 1.0*
