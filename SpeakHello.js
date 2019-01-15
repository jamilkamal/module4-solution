// ETAPE 2: Envelopper le contenu entier de SpeakHello.js dans un IIFE
// Voir la leçon 52, partie 2


// ETAPE 3: Créez un objet appelé 'helloSpeaker' auquel vous allez attacher
// la méthode "speak" et que vous exposerez au contexte global
// Voir Lecture 52, 1ère partie
// var helloSpeaker =

// NE PAS attacher la variable speakWord à l'objet 'helloSpeaker'.
var speakWord =  " Bonjour " ;

// ÉTAPE 4: Réécrivez la fonction 'parler' de telle sorte qu'elle soit attachée à la
// objet helloSpeaker au lieu d'être une fonction autonome.
// Voir la leçon 52, partie 2
fonction  parle ( nom ) {
  console . log (speakWord +  "  "  + name);
}

// ÉTAPE 5: Exposez l'objet 'helloSpeaker' dans la portée globale. Nomme le
// 'helloSpeaker' sur la portée globale également.
// Voir la leçon 52, partie 2
// (Remarque, l'étape 6 sera effectuée dans le fichier SpeakGoodBye.js.)
// xxxx.xxxx = helloSpeaker;
