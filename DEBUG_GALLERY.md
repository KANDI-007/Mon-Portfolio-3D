# 🔍 Guide de débogage de la galerie

## Pour déboguer :

1. **Ouvrez la console du navigateur** (F12)
2. **Cliquez sur "Voir les images"** sur un projet
3. **Regardez les logs dans la console** :
   - 🔵 "Button clicked!" - Le bouton fonctionne
   - 🟢 "Opening gallery..." - La fonction est appelée
   - 🖼️ "ImageGallery render" - La galerie essaie de s'afficher

## Problèmes possibles :

### 1. Les images ne se chargent pas
- Vérifiez que les fichiers existent dans `src/image/`
- Les chemins peuvent être incorrects avec Vite

### 2. La galerie ne s'affiche pas
- Vérifiez le z-index (devrait être z-[9999])
- Vérifiez que `mounted` est `true` dans les logs

### 3. Le bouton ne fonctionne pas
- Vérifiez que "Button clicked!" apparaît dans la console
- Si non, il y a un problème avec le gestionnaire d'événements

## Solution rapide :

Si les images ne se chargent pas, essayez de :
1. Déplacer les images dans `public/images/`
2. Utiliser des chemins absolus : `/images/nom-image.png`

