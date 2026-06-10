# DevOps TP — Automatisation du déploiement

## Description
Ce projet illustre l'automatisation du déploiement d'une application Node.js/Express
via un script Bash et un pipeline CI/CD GitHub Actions.

## Structure du projetdevops-tp/
├── app.js              # API Express (/ping → pong)
├── app.test.js         # Tests Jest
├── package.json        # Dépendances et scripts
├── auto_deploy.sh      # Script de déploiement automatique
├── .github/
│   └── workflows/
│       └── ci.yml      # Pipeline GitHub Actions
└── README.md## Partie 1 — Script Bash

### Utilisation
```bash
chmod +x auto_deploy.sh
bash auto_deploy.sh https://github.com/abdall-k/devops-tp.git
```

### Fonctionnalités
- Vérification des dépendances (git, node, npm)
- Clonage ou mise à jour du repo
- Installation des dépendances
- Exécution des tests
- Démarrage en arrière-plan avec sauvegarde du PID

## Partie 2 — GitHub Actions

Pipeline déclenché à chaque push sur `main` :
1. Checkout du code
2. Installation de Node.js 18
3. Installation des dépendances
4. Exécution des tests Jest
5. Build de l'application

## Lancer l'application localement

```bash
npm install
npm test
npm start
```

L'application tourne sur http://localhost:3000
Tester : http://localhost:3000/ping
