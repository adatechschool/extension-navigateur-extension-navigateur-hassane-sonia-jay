# Contexte

On peut installer des extensions à son navigateur, qui permettent d’ajouter des fonctionnalités non « natives » à celui ci.

Une fonctionnalité « native » est une fonctionnalité déjà inclue dans le navigateur. Par exemple, [l’inspecteur de Firefox](https://developer.mozilla.org/fr/docs/Learn/Common_questions/What_are_browser_developer_tools) et [de Chrome](https://developer.chrome.com/docs/devtools/overview/) sont natifs.

Une fonctionnalité « non native » est par opposition une fonctionnalité qu’il faut installer en plus. Par exemple, l’extension [Dyslexiefont](https://www.dyslexiefont.com/) permet d’avoir des fonctionnalités d’amélioration des pages web pour les personnes ayant besoin d’une petite aide pour faciliter la lecture.

Ce projet a pour objectif de développer une extension pour le navigateur de votre choix. Vous pouvez l’aborder soit:

- en vous choisissant un sujet de votre idée (il y a quelques idées dans la section « Idées d’extensions à développer »)
- en suivant les idées proposées (plus décrites) dans la section orientation du projet

## **Contraintes générales**

- Langage: Javascript
- Navigateur: Chrome - _dans cette fiche nous parlons d’autres navigateurs aussi pour vous donner une ouverture mais nous allons utiliser Chrome pour réduire le périmètre de ce projet_
- Durée de la séquence: 2 semaines

## **Objectifs globaux pédagogiques**

- Découvrir l’écosystème d’un navigateur
- Explorer les mécanismes d’un navigateur (DOM, moteur exécution JS,...)
- Se familiariser avec la documentation d’un navigateur
- Découvrir comment coder une extension pour navigateur
- Manipuler du CSS, HTML et JavaScript
- Manipuler une API et l’utiliser pour créer son extension
- Développer une API et l’utiliser pour créer son extension
- Apprendre à s’organiser en équipe
  - Découper en petites taches
  - Se distribuer les taches
  - Utiliser des outils de suivi de projet (comme [Miro](https://miro.com/)) pour pouvoir communiquer sur son avancée

## **Se mettre d’accord sur l’orientation du projet**

Ce projet est composé de plusieurs étapes pour coder des extensions différentes permettant d’appréhender progressivement le développement d’une extension.
Vous pouvez travailler sur les sujets proposés dans chaque étape et ensuite travailler sur votre idée ou choisir de travailler directement sur votre propre idée en manipulant d’abord le HTML et le CSS, ensuite une API existante et finir avec le développement d’une API.

Voici quelques idées si vous souhaitez travailler sur un projet non décrit:

- faire une extension qui “féminise les noms de métiers sur le web”
- un bloqueur de publicités, de mouchards ou d’autres contenus estimés comme indésirables
- faire une extensions pour [l’accessibilité](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/obligations/) (visuel, auditif), qui permet de faciliter la lecture des pages Web (exemple: changer la taille de la font, la font en elle-même, les couleurs des font ou du fond de la page, etc)

## **Outils nécessaires**

- Un éditeur de texte
- Un navigateur Web (Chrome)
- Un outil de développement du navigateur (le [devtool de Chrome](https://developer.chrome.com/docs/devtools/open/), et par exemple _pour votre culture le [devtool de Firefox](https://developer.mozilla.org/fr/docs/Outils)_)
- [Git](https://fr.wikipedia.org/wiki/Git)
- [Github](https://github.com/) ou [Gitlab](https://about.gitlab.com/) (ou assimilé, avec un compte)
- [Miro](https://miro.com/) pour partager facilement et s’organiser en équipes
- Outil de conférence pour partager son écran

Pour partager votre projet en équipe, utilisez le répertoire Github mis à disposition par les encadrants·es.

Si vous souhaitez utiliser ce projet pour nourrir votre portfolio, n’hésitez pas à le « [forker](https://www.christopheducamp.com/2013/12/16/forker-un-repo-github/) » pour le récupérer sur un compte personnel.

# Je débute

## **Personnaliser ses pages Web**

Nous vous proposons de réaliser une extension pour personnaliser les pages du navigateur que vous allez parcourir.

L’extension pourrait permettre par exemple:

- de colorier les balises `h1` de tous les sites en vert
- d’entourer toutes les images des sites avec une bordure rouge
- de changer la taille de la [font](https://fr.wikipedia.org/wiki/Police_d%27%C3%A9criture) utilisée sur les sites

**Objectifs pédagogiques**

- Se familiariser avec le langage Javascript
- Manipuler du CSS et du HTML
- Discuter d’un projet commun avec d’autres personnes pour débattre / faire des choix

# Je suis à l'aise

## Option **1. Changer les images du Web**

- Ce que l’extension peut faire: Quand vous naviguez sur des sites Web, toutes les images rencontrées sont remplacées par les images de votre choix (par exemple des portraits de l’adorable [Grumpy Cat](https://fr.wikipedia.org/wiki/Grumpy_Cat))
- L’extension est affichée dans les boutons d’extension du navigateur dès qu’elle est installée. Au click du bouton, on peut choisir l’image avec laquelle on veut remplacer toutes les images du web. L’image choisie est ensuite affichée en miniature sur le bouton.

**Objectifs pédagogiques**

- Mieux comprendre le fonctionnement d’une extension, et tout ce qui gravite autour
- Customiser son extension
- Travailler en équipe pour se découper les taches à effectuer pour mener à bien le projet

## Option **2. Choisir la font utilisée sur le navigateur**

- Ce que l’extension peut faire: Quand vous naviguez sur une page Web, le plug-in permet, avec un bouton, de choisir une font à appliquer à la page web pour changer la manière dont le contenu est écrit. Le bouton servira à activer/désactiver la font et à la choisir.

**Objectifs pédagogiques**

- Manipuler les fonts pour comprendre comment les intégrer à une page web
- Utiliser le bouton de l’extension Web
- Faire un travail d’équipe pour faire les choix de direction du projet et se départager les taches

# Je veux aller plus loin

## Option **1. Découvrir la définition d’un mot**

- Ce que l’extension peut faire: Quand vous naviguez sur une page Web, le plug-in permet de souligner les mots qu’il connait. Si vous cliquez sur un mot souligné, une pop-up s’ouvre pour vous afficher la définition du mot. Tip: Wikipédia propose une [API de recherche](https://korben.info/comment-utiliser-lapi-de-recherche-de-wikipedia.html)

**Objectifs pédagogiques**

- Manipuler une API et l’utiliser pour créer son extension
- Faire un travail d’équipe pour rechercher et comparer les APIs possibles à utiliser pour ce projet

## Option **2. Lancer des tests**

- Ce que l’extension peut faire: Quand vous naviguez sur votre navigateur, il est possible d’appuyer sur le bouton de l’extension pour lancer les tests d’un répertoire distant (sur Github ou Gitlab par exemple).
  Exemple d’extension existante: https://github.com/mdn/webextensions-examples/tree/master/mocha-client-tests 2 (le but étant d’en recréer une à soi, pas d’utiliser celle la)

**Objectifs pédagogiques**

- Commencer à appréhender le fonctionnement des tests automatisés sur une plateforme comme Github ou Gitlab
- Intégrer un outil existant dans une extension Web
- Faire un travail d’équipe pour faire les choix de direction du projet et se départager les taches

# Je veux aller plus loin

## **Remplacer la page d’accueil par une application de to do list**

Développer une extension de navigateur qui remplace la page d’accueil (= la page qui s’affiche quand on ouvre une nouvelle fenêtre ou un nouvel onglet) par une application de to do list.
Les étapes suivantes sont à réaliser dans l’ordre, seule la première étant obligatoire pour valider l’exercice, les suivantes permettent de continuer plus loin en montant en complexité :

1. **API.** Utiliser JSON Placeholder qui fournit une fake API REST avec des fausses données https://jsonplaceholder.typicode.com/ et les todos sont accessibles sur la ressource [/todos](https://jsonplaceholder.typicode.com/todos) de l’API.
   Pour ce qui est du design de l’application vous pouvez trouver l’inspiration sur [Sketch App Sources](https://www.sketchappsources.com/) où de nombreuses maquettes sont disponibles, ou [sur Dribbble en cherchant “todo list app”](https://dribbble.com/search/todo%20list%20app) par exemple.
2. Sauvegarde des données dans le stockage local du navigateur.
3. Afficher le jour et l’heure sur l’interface.
4. Afficher la météo du jour (plusieurs APIs de météo gratuites existent, [cet article](https://geekflare.com/fr/weather-api/) en référence plusieurs différentes).
5. Afficher la barre de recherche du navigateur sur l’interface, pour permettre à l’utilisateur de taper une recherche comme il peut le faire sur la page d’accueil d’origine.
6. Utiliser [l’API d’Unsplash](https://unsplash.com/developers) pour mettre une photo en arrière plan. Version avancé de cette tâche : faire changer l’image tous les jours.
7. Pour aller encore plus loin, la dernière étape est le développement de l’API de todo from scratch pour utiliser leur propre API CRUD et non plus celle de JSON Placeholder.

**Objectifs pédagogiques**

- Manipuler une API et l’utiliser pour créer son extension
- Développer une API et l’utiliser pour créer son extension
- Faire un travail d’équipe pour rechercher et comparer les APIs possibles à utiliser pour ce projet

# Ressources générales

- [Premiers pas avec Javascript](https://developer.mozilla.org/fr/docs/Learn/JavaScript/First_steps) [FR]
- [Développer une extension navigateur et comprendre les flux](https://blog.ippon.fr/2018/02/08/developper-une-extension-pour-navigateur/) (Manifest V2) [FR]
- [Comment migrer une extension Manifest V2 vers Manifest V3](https://developer.chrome.com/docs/extensions/migrating/) [EN]
- [Documentation officielle Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/) [EN]
- [Anatomie d’une extension Web](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension) [FR]
- [\*Premiers pas avec une extension pour firefox](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension) [FR]\*
- [Premiers pas avec une extension pour Chrome](https://developer.chrome.com/extensions/getstarted) [FR]
- [\*Gérer le bouton de son extension sous Firefox](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension) [FR]\*
- Pour commencer à appréhender la découpe de projet [ici](https://www.occitech.fr/blog/2014/05/decoupez-vos-stories-en-carpaccio/) et [ici](https://medium.com/@nils.lesieur/ciel-mon-backlog-est-découpé-430f3465596a) [FR]
- [\*Des idées d’extensions Web sur Firefox](https://developer.mozilla.org/fr/docs/Mozilla/Add-ons/WebExtensions/Exemples) [FR]\*
- [Les Web Extensions, du reve et du cauchemar](https://www.paris-web.fr/2018/conferences/les-webextensions-du-reve-et-du-cauchemar.php) [FR]

# Autres ressources proposées par les promotions précédentes

- [Un premier aperçu du manifeste](https://developer.chrome.com/docs/extensions/mv3/manifest/) [EN] (Audrey, promotion Clara Zetkin)
- [Vidéo pour comprendre plus facilement l’extension](https://www.youtube.com/watch?v=hkOTAmmuv_4&list=PLRqwX-V7Uu6bL9VOMT65ahNEri9uqLWfS) [EN] (Audrey, promotion Clara Zetkin)
  _Attention certaines informations ne sont plus à jour mais la vidéo reste une bonne ressource d’entrée pour comprendre comment fonctionnent les “balises” du manifeste_
