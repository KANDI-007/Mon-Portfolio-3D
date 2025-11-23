# Guide de Déploiement sur Netlify

## 📋 Prérequis

- Compte GitHub : [github.com](https://github.com)
- Compte Netlify : [netlify.com](https://www.netlify.com)
- Node.js installé (version 18 ou supérieure)

## 🚀 Étapes de Déploiement

### 1. Préparer le Repository GitHub

```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Créer le commit initial
git commit -m "Initial commit - Portfolio 3D"

# Ajouter le remote GitHub
git remote add origin https://github.com/KANDI-007/Mon-Portfolio-3D.git

# Pousser sur GitHub
git branch -M main
git push -u origin main
```

### 2. Déployer sur Netlify

#### Option A : Via l'Interface Web (Recommandé)

1. **Connecter GitHub à Netlify :**
   - Aller sur [app.netlify.com](https://app.netlify.com)
   - Cliquer sur "Add new site" → "Import an existing project"
   - Sélectionner "GitHub" et autoriser l'accès
   - Choisir le repository `KANDI-007/Mon-Portfolio-3D`

2. **Configurer le Build :**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Ces paramètres sont automatiquement détectés grâce à `netlify.toml`

3. **Déployer :**
   - Cliquer sur "Deploy site"
   - Attendre la fin du build (environ 2-3 minutes)
   - Votre site sera disponible sur une URL Netlify (ex: `mon-portfolio-3d.netlify.app`)

#### Option B : Via Netlify CLI

```bash
# Installer Netlify CLI globalement
npm install -g netlify-cli

# Se connecter à Netlify
netlify login

# Initialiser le site
netlify init

# Déployer en production
netlify deploy --prod
```

### 3. Configuration Personnalisée (Optionnel)

#### Changer le nom du site

1. Aller dans "Site settings" → "Change site name"
2. Choisir un nom unique (ex: `kandi-salman-portfolio`)
3. Votre URL sera : `kandi-salman-portfolio.netlify.app`

#### Ajouter un Domaine Personnalisé

1. Aller dans "Domain settings"
2. Cliquer sur "Add custom domain"
3. Suivre les instructions pour configurer votre domaine

## 🔄 Mises à Jour Automatiques

Une fois connecté à GitHub, Netlify déploiera automatiquement votre site à chaque push sur la branche `main`.

## ✅ Vérifications Post-Déploiement

- [ ] Le site se charge correctement
- [ ] Les animations 3D fonctionnent
- [ ] Le formulaire de contact ouvre WhatsApp
- [ ] Les boutons de navigation fonctionnent
- [ ] Le téléchargement du CV fonctionne
- [ ] Les liens sociaux sont corrects
- [ ] Le site est responsive (mobile/tablette/desktop)

## 🐛 Résolution de Problèmes

### Le build échoue

- Vérifier que toutes les dépendances sont dans `package.json`
- Vérifier que `node_modules` est dans `.gitignore`
- Vérifier les logs de build dans Netlify

### Les images ne s'affichent pas

- Vérifier que les chemins d'images sont corrects
- Vérifier que les images sont bien dans `src/image/`

### Le formulaire ne fonctionne pas

- Vérifier que le numéro WhatsApp est correct (+228 71037803)
- Tester sur mobile (WhatsApp fonctionne mieux sur mobile)

## 📞 Support

Pour toute question ou problème :
- Email : kandilare20@gmail.com
- WhatsApp : +228 71037803
- GitHub : [@KANDI-007](https://github.com/KANDI-007)

---

**Bon déploiement ! 🚀**

