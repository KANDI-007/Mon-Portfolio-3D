# 📋 Instructions de Configuration

## ✅ Ce qui a été fait

1. **Projets mis à jour** :
   - ✅ Application EDIBA INTER (avec images)
   - ✅ Application de Réservation Médicale (avec images)
   - ✅ Formulaire Web UCAO (nouveau projet avec images)
   - ✅ KEY IMMO - Plateforme Immobilière (nouveau projet avec images)
   - ✅ Placeholders magnifiques pour les projets sans images

2. **Images des projets** :
   - Toutes les images sont configurées dans `src/utils/imagePaths.ts`
   - Les images sont chargées depuis `src/image/`

3. **Boutons fonctionnels** :
   - ✅ Bouton CV dans Hero (lien vers le CV)
   - ✅ Boutons GitHub/LinkedIn configurés (à personnaliser)

## 🔧 Configuration à faire

### 1. Liens sociaux (IMPORTANT)

Éditez le fichier `src/config/socialLinks.ts` et remplacez les URLs par vos vrais profils :

```typescript
export const socialLinks = {
  github: 'https://github.com/VOTRE-USERNAME', // Remplacez ici
  linkedin: 'https://linkedin.com/in/VOTRE-PROFIL', // Remplacez ici
  twitter: 'https://twitter.com/VOTRE-USERNAME', // Optionnel
};
```

### 2. CV PDF

Le CV est actuellement dans `src/cv/CV-LARE-Kandi-Salman-.pdf`.

**Option 1** : Garder dans `src/cv/` (fonctionne avec Vite)
- Le lien actuel devrait fonctionner

**Option 2** : Déplacer vers `public/` (recommandé pour production)
- Créez un dossier `public/cv/`
- Copiez le fichier PDF dedans
- Changez le lien dans `src/components/Hero.tsx` :
  ```tsx
  href="/cv/CV-LARE-Kandi-Salman-.pdf"
  ```

### 3. Images des projets

Les images sont configurées dans `src/utils/imagePaths.ts`. Si certaines images ne s'affichent pas :

1. Vérifiez que les fichiers existent dans `src/image/`
2. Vérifiez les noms de fichiers (attention aux espaces et caractères spéciaux)
3. Les placeholders s'afficheront automatiquement si les images ne chargent pas

### 4. Test des fonctionnalités

Testez que tout fonctionne :
- ✅ Défilement des images dans les projets (cliquez sur les points en bas)
- ✅ Téléchargement du CV
- ✅ Liens GitHub/LinkedIn
- ✅ Formulaire de contact
- ✅ Navigation entre sections

## 🎨 Personnalisation

### Modifier les projets

Éditez `src/components/Projects.tsx` pour :
- Modifier les descriptions
- Ajouter/supprimer des fonctionnalités
- Changer les technologies
- Ajouter de nouveaux projets

### Modifier les couleurs

Les couleurs des projets sont définies dans le tableau `projects` :
- `color: 'from-cyan-500 to-blue-500'` (dégradé Tailwind)

## 🐛 Problèmes courants

### Les images ne s'affichent pas
- Vérifiez les chemins dans `src/utils/imagePaths.ts`
- Vérifiez que les fichiers existent
- Les placeholders s'afficheront automatiquement en cas d'erreur

### Le CV ne se télécharge pas
- Vérifiez que le fichier existe
- Essayez de déplacer le CV dans `public/cv/`

### Les boutons sociaux ne fonctionnent pas
- Vérifiez `src/config/socialLinks.ts`
- Assurez-vous que les URLs sont complètes (avec https://)

## 📝 Notes

- Tous les boutons sont maintenant fonctionnels
- Les images sont chargées dynamiquement
- Les placeholders sont automatiques pour les projets sans images
- Le design est harmonisé avec le reste du portfolio

