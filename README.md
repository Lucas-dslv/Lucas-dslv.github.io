# Portfolio — Lucas Da Silva

Portfolio statique en HTML, CSS et JavaScript, prêt pour GitHub Pages.

## Fichiers

- `index.html` : contenu et structure du site
- `style.css` : styles responsive, animations et composants
- `script.js` : menu mobile, animations au défilement et année dynamique
- `CNAME` : domaine personnalisé `lucas-dasilva.me`
- `assets/favicon.svg` : favicon

## Personnalisation avant publication

1. Ouvrir `index.html` et remplacer les textes par ton contenu réel.
2. Dans la section Projets, remplacer les trois exemples par tes vrais projets, avec leurs technologies et liens.
3. Remplacer `contact@lucas-dasilva.me` par ton adresse de contact réelle (ou configurer cette adresse).
4. Ajouter tes liens GitHub / LinkedIn et éventuellement un CV.
5. Vérifier le résultat sur ordinateur et mobile.

Les projets présents dans cette version sont des modèles visuels : ne les présente pas comme des réalisations terminées tant que tu ne les as pas remplacés.

## Tester localement

Le site fonctionne sans compilation ni dépendance.

- Ouvre simplement `index.html` dans un navigateur, ou
- lance un serveur local depuis ce dossier :

```bash
python -m http.server 8000
```

Puis visite `http://localhost:8000`.

## Déployer sur GitHub Pages

1. Crée un dépôt public nommé `TON-PSEUDO.github.io` (remplace `TON-PSEUDO` par ton identifiant GitHub).
2. Copie les fichiers et le dossier `assets/` à la racine du dépôt.
3. Vérifie que le fichier `CNAME` contient `lucas-dasilva.me`.
4. Dans **Settings → Pages**, sélectionne **Deploy from a branch**, branche `main`, dossier `/(root)`.
5. Clique sur Save et attends la fin du déploiement.

Tu peux aussi envoyer les fichiers avec Git :

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/TON-PSEUDO.github.io.git
git push -u origin main
```

Si le dépôt contient déjà des fichiers ou un historique, adapte les commandes pour ne pas écraser tes changements.

## Configurer le domaine

Dans le tableau de bord DNS du fournisseur qui gère `lucas-dasilva.me` :

1. Ajoute le domaine dans **Settings → Pages → Custom domain** sur GitHub.
2. Pour le domaine racine (`@`), configure les quatre enregistrements A ci-dessous :

| Type | Nom | Valeur |
|---|---|---|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

3. Pour `www.lucas-dasilva.me`, ajoute un enregistrement CNAME :
   - Nom : `www`
   - Cible : `TON-PSEUDO.github.io` (remplace par ton vrai identifiant GitHub).
4. Supprime les anciens enregistrements A/AAAA ou CNAME contradictoires pour ces mêmes hôtes, si tu en as, en faisant attention à ne pas perturber d'autres services.
5. Attends la propagation DNS, puis active **Enforce HTTPS** dans Settings → Pages quand l'option est disponible.

Les modifications DNS peuvent prendre jusqu'à 24 heures à se propager. Consulte la documentation officielle :
https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## Notes

- Pas de backend, pas de build et aucune dépendance JavaScript externe.
- Les polices Google Fonts nécessitent une connexion internet ; des polices système sont utilisées en secours.
- Le formulaire de contact n'est pas inclus : le bouton ouvre le client e-mail avec `mailto:`.
