# Projet Angular - Gestion de Cartes Monstres

TD projet d'entraînement Angular (v19+) pour gérer une collection de cartes de monstres (style TCG). L'application permet de créer, modifier, visualiser et supprimer des cartes via une interface utilisant Angular Material.

## Fonctionnalités

*   **CRUD complet** : Création, lecture, mise à jour et suppression de monstres.
*   **Formulaires Réactifs** :
    *   Validation des champs (HP, Force d'attaque, etc.).
    *   Gestion des erreurs avec `MatError`.
    *   Upload d'image avec prévisualisation immédiate.
*   **Navigation** : Système de routing avec paramètre dynamique (`/Monster/:id`).
*   **Sécurité** : Protection des routes via un `Guard` (vérification de connexion).
*   **UI/UX** : Utilisation des composants Angular Material (Inputs, Selects, Dialogues de confirmation).

## Stack Technique

*   **Frontend** : Angular (Standalone Components, Signals, RxJS).
*   **UI** : Angular Material.
*   **Backend** : API Python/Django (tourne sur le port 8000).

## Installation et Lancement

### 1. Prérequis Backend
Assurez-vous que l'API Django est lancée pour que les requêtes HTTP fonctionnent. Pour lancer le Back END 

### Première installation :

Double-cliquez sur setup.bat
Attendez la fin de l'installation
Démarrages suivants :

### Double-cliquez sur start_server.bat

start_server.bat - Démarrage du serveur (Windows)
create_default_admin.bat - Création du compte admin
create_admin.py - Script Python pour créer l'admin
create_default_admin.sh - Version Linux (bonus)
IDENTIFIANTS.txt - Fichier avec les identifiants

nom d'utilisateur: admin
mot de passe: admin123

### 2. Lancer le Frontend
Installez les dépendances :
```bash
npm install
```

Lancez le serveur de développement :
```bash
ng serve
```



