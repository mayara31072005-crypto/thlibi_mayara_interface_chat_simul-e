# 💬 **Mini Chat Interactif – Alice & Bob**

Bienvenue dans ce projet front-end simulant une **Application web simulant une messagerie interactive** entre deux contacts :**Alice**et **Bob (fictif).**  
L’interface est moderne, responsive et les messages sont sauvés automatiquement grâce au *LocalStorage*.

## 💻 **1. Nom et description du projet**
**Mini Chat Interactive - Alice & Bob:**
Ce projet est une **interface web simulant une messagerie simple** entre deux contacts. 
L'utilisateur peut envoyer des messages à Alice et Bob, et Bob génère des réponses automatiques.
Chaque conversation est enregistrée dans le navigateur, même après rechargement.

## 🛠️ **2. Technologies utilisées**

* **HTML5** – structure de l'application
* **CSS3** – styles, animations, responsive
* **JavaScript (Vanilla JS)** – gestion du chat, stockage, réponses automatiques
* **LocalStorage** – sauvegarde des messages par contact
* **Animations CSS** – effets de transition et de messages entrants
  
## ⭐ **3. Fonctionnalités principales**

* Envoyer des messages à **Alice ou Bob**
* **Réponses automatiques de Bob** (choisies dans une liste, avec délai et effet "écrit...")
* **Sauvegarde automatique** des conversations avec **LocalStorage**
* **Badge de notification** lorsque Bob répond pendant que vous êtes sur la conversation d'Alice
* **Changement de conversation** (Alice $\leftrightarrow$ Bob) avec mise à jour du thème
* **Dernier message affiché** dans la liste de contacts
* **Effet d'animation** pour les nouveaux messages
* **Interface responsive** (PC / tablette / mobile)
## 🌐 **4. Lien vers la page GitHub Pages (rendu final)**

## 🚀 **5. Nouveautés explorées / Apprentissages**

* Manipuler le **DOM en JavaScript** pour créer, afficher et styliser les messages
* Utiliser **localStorage** pour sauvegarder des tableaux d'objets
* Créer une interface de messagerie réaliste : **bulle, avatars, thème dynamique**
* Gérer des **animations CSS** (fade-in, slide, hover)
* Implémenter une **simulation de typing** ("écrit...") avec un délai aléatoire
* Utiliser une **structure de données JS** ($objectContactData$) pour gérer les contacts
## 🚧 **6. Difficultés rencontrées**

* Sauvegarder et recharger correctement les messages **selon le contact actif**
* Gérer l'ordre des réponses de Bob et les **conserver même après un rechargement**
* Synchroniser le **badge de notification** et l'indicateur « écrit... »
* Adapter l'interface à **plusieurs tailles d'écran**
* Gérer les **classes CSS dynamiques** lors du changement de contact
## 🔧 **7. Solutions apportées**

* Création d'une clé **localStorage par contact**
* Implémentation d'un **index de réponses** stocké pour Bob
* Utilisation d'une fonction **`switchContact()`** claire pour :
    * changer d'avatar
    * changer le thème du chat
    * recharger les messages du bon contact
* Mise en place d'un système d'**animations CSS** pour les nouveaux messages
* Gestion du **typing indicator** avec un `setTimeout()` simulant la saisie
* Amélioration de la lisibilité avec une **structure CSS organisée et des effets visuels**
