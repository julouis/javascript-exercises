/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    var adjectivesArray = Array.from(adjectives);

    document.getElementById("run").addEventListener("click", function() {

        var randBirds = Math.floor(Math.random()*birds.length);
        var randAdjectives = Math.floor(Math.random()*adjectivesArray.length);


        console.log(randBirds);
        console.log(randAdjectives);
        console.log(adjectivesArray);
        console.log(birds[0].fem);

        var e="";
        if (birds[randBirds].fem==true) {
            var e="e";
        }

        document.getElementById("target").innerHTML = birds[randBirds].name+" "+adjectivesArray[randAdjectives]+e;

    })




    // your code here
})();
