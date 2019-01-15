// ********************************
// COMMENCEZ ICI SI VOUS VOULEZ UN POINT DE DÉPART PLUS FACILE POUR CETTE CESSION
// ********************************
//
// Instructions d'assignation du module 4.
//
// L'idée de cette affectation est de prendre un tableau de noms existant
// puis envoie le nom "Bonjour" ou le nom "Au revoir" sur la console.
// Le programme devrait dire "Bonjour" à n'importe quel nom, à l'exception des noms commençant par "J"
// ou "j", sinon, le programme devrait dire "Au revoir". Donc, le résultat final
// sur la console devrait ressembler à ceci:
/ *
Bonjour Yaakov
Au revoir John
Au revoir Jen
Au revoir Jason
Salut Paul
Bonjour Frank
Bonjour larry
Bonjour Paula
Bonjour Laura
Au revoir Jim
ATTENTION!!! ATTENTION!!!
Le code ne fonctionne pas actuellement! C'est à vous de le faire fonctionner
comme décrit dans les exigences et les étapes afin de compléter cette
affectation.
ATTENTION!!! ATTENTION!!!
* /

// ÉTAPE 1: (RIEN À FAIRE. DÉJÀ FAIT POUR VOUS)
// Enveloppe l'intégralité du contenu de script.js à l'intérieur d'un IIFE
// Voir la leçon 52, partie 2
// (Remarque, l'étape 2 sera effectuée dans le fichier SpeakHello.js.)
( fonction () {

var names = [ " Yaakov " , " John " , " Jen " , " Jason " , " Paul " , " Frank " , " Larry " , " Paula " , " Laura " , " Jim " ];

// ÉTAPE 10: (RIEN À FAIRE. DÉJÀ FAIT POUR VOUS)
// Boucle sur le tableau de noms et dit 'Bonjour' ou "Au revoir"
// en utilisant la méthode 'speak' ou bien helloSpeaker ou byeSpeaker
// méthode 'parle'.
// Voir Lecture 50, 1ère partie
pour ( var i =  0 ; i <  noms . longueur ; i ++ ) {

  // ÉTAPE 11: (RIEN À FAIRE. DÉJÀ FAIT POUR VOUS)
  // Récupère la première lettre du nom actuel dans la boucle.
  // Utilise la fonction 'charAt' de l'objet chaîne. Puisque nous recherchons
  // noms commençant par 'J' / 'j' en majuscule ou en minuscule, call
  // méthode 'toLowerCase' de l'objet chaîne sur le résultat afin que nous puissions comparer
  // au caractère minuscule 'j' après.
  // Recherchez ces méthodes sur le site Web de Mozilla Developer Network si nécessaire.
  var firstLetter = noms [i]. charAt ( 0 ). toLowerCase ();

  // ÉTAPE 12: (RIEN À FAIRE. DÉJÀ FAIT POUR VOUS)
  // Compare la 'firstLetter' récupérée dans STEP 11 à la minuscule
  // 'j'. Si identique, appelez la méthode 'speak' de byeSpeaker avec le nom actuel
  // dans la boucle. Sinon, appelez la méthode 'speak' de helloSpeaker avec le numéro actuel
  // nom dans la boucle.
  if (firstLetter ===  ' j ' ) {
    byeSpeaker . parler (noms [i]);
  } else {
    helloSpeaker . parler (noms [i]);
  }
}

}) ();
