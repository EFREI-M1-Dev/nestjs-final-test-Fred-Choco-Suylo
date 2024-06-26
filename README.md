# NestJS Évaluation finale
- Frédéric DABADIE (Groupe 2)
- Louis LUBINEAU (Groupe 3)
- Théo RICHARD (Groupe 2)

# Installation 
- Clone du repository :
```batch 
git clone https://github.com/EFREI-M1-Dev/nestjs-final-test-Fred-Choco-Suylo.git
```
- Entrée dans le projet :
```batch 
cd nestjs-final-test-Fred-Choco-Suylo
```
- Installer les packages du projet :
```batch 
npm ci
```

# Démarrer le Serveur et les Tests

⚠️**Ne pas oublier d'[installer](https://www.docker.com/products/docker-desktop/) et de démarrer Docker Desktop**⚠️ 

<table>
      <tr>
        <td><b>ENVIRONNEMENT</b></td>
        <td><b>DÉMARRAGE DU SERVEUR</b></td>
        <td><b>DÉMARRAGE DES TESTS</b></td>
    </tr>
    <tr>
        <td><b>Unix/Linux</b></td>
        <td>npm run start:postgres:linux</td>
        <td>npm run test:e2e:postgres:linux</td>
    </tr>
    <tr>
        <td><b>Windows</b></td>
        <td>npm run start:postgres:windows</td>
        <td>npm run test:e2e:postgres:windows</td>
    </tr>
</table>

# NOTE : ⚠️Execution des test⚠️
Les tests sont censés être exécutés dans deux bases de données différentes suite à la correction [**suivante**](https://github.com/pviara/nestjs-final-test/commit/bc9305d2888a89739121f878ff19db6c0693522f).  
Dans notre cas, après avoir effectué des recherches de notre côté avant cette correction, nous avons utilisé l'argument **"--runInBand"** qui permet l'exécution des tests en séquence plutôt qu'en parallèle. Nous avons décidé de le conserver suite à nos échanges.

# Développement :
### Pour exécuter un test seul
```batch
npm run test:e2e:single -- --testNamePattern="LeNomDuTest"
```
Exemple:
```batch
npm run test:e2e:single -- --testNamePattern="should return an HTTP error status 400 when given userId is not valid"
```
-----------------

# Sujet de l'Évaluation finale
Pour ce test final vous allez être évalués sur votre maîtrise du framework NestJS. Ce projet, qui est une TodoList et qu'il vous faudra dupliquer (fork), contient un certain nombre de tests automatisés. Chacun d'entre eux couvre une fonctionnalité spécifique : création d'un utilisateur, création d'une tâche, vérification que le serveur renvoie une erreur dans tel ou tel cas etc.

🎯 **Votre objectif est simple :** faire passer tous ces tests en implémentant vous-mêmes ces fonctionnalités.

## Critères
Avant de rendre votre projet, vous devez vous assurer d'avoir respecté **4 critères obligatoires** :

### 🚀 Le projet fonctionne
* aucune erreur non gérée n'est jetée au runtime
* aucune erreur non gérée n'est jetée au compile time

| Contexte | Barème               |
| ------------- | -------------------- |
| Erreur au runtime       | -2 pts par erreur    |
| Erreur au compile time  | 0 immédiat           |


### 💾 Une BDD est utilisée
* une base de données relationnelle ou noSQL est utilisée
* un ORM est configuré dans le `DatabaseModule` et est utilisé

| Contexte | Barème    |
| ------------- | -------------------- |
| Pas de BDD    | -7 pts               |
| ORM différent de TypeORM et Mongoose | +2 pts |

### 🧹 Le code est clean
Votre code se doit d'être propre, compréhensible et convenablement segmenté.

| Contexte | Barème    |
| ------------- | -------------------- |
| les classes, méthodes, variables etc. sont mal nommées | -2 pts |
| le code contient des commentaires jugés inutiles | -2 pts |
| les contrôleurs contiennent autre chose que de la logique de validation/HTTP | -4 pts |
| les services contiennent autre chose que de la logique métier | -4 pts |

### 🚧 Pas de sur-configuration
Assurez-vous que je n'ai **aucune configuration supplémentaire à faire**, si ce n'est :

- d'installer les `node_modules` avec `npm ci`
- de lancer les tests avec le script npm approprié
- de lancer votre serveur avec le script npm approprié

| Contexte | Barème               |
| ------------- | -------------------- |
| `npm ci` ne fonctionne pas      | 0 immédiat   |
| le projet nécessite la moindre configuration supplémentaire | 0 immédiat |
| le script npm de lancement des tests n'est pas indiqué dans le readme  | -5 pts |
| le script npm de lancement du serveur n'est pas indiqué dans le readme  | -5 pts |

## Setup
### 🏗️ Initialisation
1. Si ce n'est pas déjà fait, [inscrivez-vous](https://github.com/join) sur GitHub
2. Faites un fork de ce repository selon ce qui est indiqué dans [la documentation](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo?platform=windows)
3. Clonez le repository que vous venez de vous attribuer grâce au fork
4. Installez ses dépendances en utilisant la commande `npm ci`

### 💾 Base de données
Deux SGBD ont été contenairisés via Docker :
* PostgreSQL, pour du relationnel
* MongoDB, pour du noSQL

Cela vous permet à vous (et à moi) de ne pas avoir à les installer sur nos machines. Pour pouvoir utiliser ces SGBD contenairisés :
1. Installez [Docker Desktop](https://www.docker.com/products/docker-desktop/) sur votre machine
2. Lancez-le
3. Lorsque vous voudrez lancer votre serveur, utilisez le script npm de votre choix : `npm run start:mongodb` ou `npm run start:postgres` (ces scripts démarrent une base de données, puis lancent le serveur en watch mode)

Pour pouvoir communiquer avec votre base de données depuis votre projet NestJS, vous devrez configurer l'outil d'ORM de votre choix parmi :
* [TypeORM](https://docs.nestjs.com/techniques/database)
* [Mongoose](https://docs.nestjs.com/techniques/mongodb)
* [Sequelize](https://docs.nestjs.com/techniques/database#sequelize-integration)
* [MikroORM](https://docs.nestjs.com/recipes/mikroorm)
* [Prisma](https://docs.nestjs.com/recipes/prisma)

### 🧪 Tests
Les tests utilisés pour vous noter sont localisés dans le dossier `test`. Considérez-les comme les spécifications du projet, vous n'aurez d'autre choix que de les respecter à la lettre.

Pour lancer ces tests, utilisez le script npm de votre choix : `npm run test:e2e:mongodb` ou `npm run test:e2e:postgres` (ces scripts démarrent une base de données, puis lancent les tests e2e).

NB : Pour les besoins de cette évaluation, vous noterez peut-être que le code des tests e2e n'est pas spécialement clean. Ne faites pas ça chez vous.


## Auteur
[> Fredray-21](https://github.com/Fredray-21)

