# Projets Cordova

Ce dépôt contient trois projets Cordova distincts, chacun dans sa propre branche. Ces projets démontrent diverses fonctionnalités et conceptions d'interface utilisateur utilisant Cordova. Voici une brève description de chaque projet et des instructions pour les configurer.

## Branches et Projets

1. **main** : Cette branche principale contient ce README et d'autres informations générales.
2. **todo-app** : Cette branche contient un projet Cordova pour une application de liste de tâches.
3. **contact-app** : Cette branche contient un projet Cordova pour une application de gestion de contacts.
4. **bmi-calculator** : Cette branche contient un projet Cordova pour une application de calcul de l'IMC.

## Configuration de chaque projet

Pour configurer et exécuter l'un de ces projets, suivez les étapes ci-dessous. Assurez-vous d'avoir Cordova installé sur votre machine.

### Prérequis

- Node.js
- Cordova CLI
- Git

### Étapes

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/halimaspreadcode/cordova-projects.git
    cd cordova-projects
    ```

2. Passez à la branche du projet souhaité :
    ```sh
    git checkout branch-name
    ```

    Remplacez `branch-name` par l'un des suivants :
    - `todoApp`
    - `Contact-app`
    - `Imc-app`

3. Naviguez vers le répertoire du projet :
    ```sh
    cd www
    ```

4. Ajoutez les plateformes nécessaires :
    ```sh
    cordova platform add ios
    cordova platform add android
    ```

5. Construisez le projet :
    ```sh
    cordova build
    ```

6. Exécutez le projet sur un émulateur ou un appareil réel :
    ```sh
    cordova run ios
    cordova run android
    ```

Suivez ces étapes pour chaque projet en changeant simplement de branche pour explorer et travailler sur différentes applications.
