# matcha-api

**matcha-api** est une API REST robuste construite avec **Node.js**, **TypeScript**, **Express** et **MongoDB Atlas**. Elle est conçue avec une architecture modulaire pour faciliter l’évolutivité, la lisibilité et la maintenance.

---

## Fonctionnalités

- Architecture claire et modulaire
- Connexion à MongoDB Atlas via Mongoose
- Linting & formatage avec ESLint + Prettier
- Tests unitaires avec Jest
- Chargement sécurisé des variables d’environnement avec dotenv
- Structure extensible pour services, middlewares, validations, etc.

---

## Installation

```bash
# Cloner le dépôt
git clone https://github.com/ton-utilisateur/matcha-api.git
cd matcha-api

# Installer les dépendances
yarn install

# Configurer les variables d’environnement
cp .env.example .env
# Remplir .env avec les bonnes valeurs
```

---

## Scripts disponibles

| Script          | Description                                            |
| --------------- | ------------------------------------------------------ |
| `yarn dev`      | Lance le serveur en mode développement (`ts-node-dev`) |
| `yarn build`    | Compile le code TypeScript en JavaScript (`dist/`)     |
| `yarn start`    | Exécute l'app compilée avec Node.js                    |
| `yarn lint`     | Vérifie les erreurs de style avec ESLint               |
| `yarn lint:fix` | Corrige automatiquement les erreurs de lint            |
| `yarn format`   | Formate le code avec Prettier                          |
| `yarn test`     | Lance les tests unitaires avec Jest                    |

---

## Variables d’environnement

Fichier `.env` :

```env
PORT=3000
MONGODB_URI=mongodb+srv://<user>:<password>@cluster.mongodb.net/matcha?retryWrites=true&w=majority
APP_NAME=matcha-api
NODE_ENV=development
```

---

## Structure du projet

```
matcha-api/
├── src/
│   ├── config/          # Connexions (ex: MongoDB)
│   ├── controllers/     # Logique métier des routes
│   ├── models/          # Schémas Mongoose
│   ├── routes/          # Déclaration des routes Express
│   ├── middlewares/     # Middlewares personnalisés
│   ├── services/        # Logique métier, accès DB
│   ├── utils/           # Fonctions utilitaires (logs, validations...)
│   ├── tests/           # Tests unitaires (Jest)
│   ├── app.ts           # App Express : routes, middlewares, etc.
│   └── index.ts         # Point d’entrée : DB + server
├── .env
├── .env.example
├── .eslintrc.json
├── .prettierrc
├── .gitignore
├── tsconfig.json
├── jest.config.js
└── README.md
```

---

## Conventions & bonnes pratiques

- Les noms de fichiers sont en kebab-case : `user.controller.ts`
- Utilisation stricte de TypeScript (types explicites, `strict` dans `tsconfig.json`)
- Middleware global de gestion des erreurs
- Structure MVC + services clairs (pas de logique DB dans les routes)

---

## Licence

MIT — libre d’utilisation, de modification et de distribution.
