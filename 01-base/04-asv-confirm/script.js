/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    var confirm="no";

    while (confirm!="yes") {

        var age=prompt("Quel est votre âge ?");
        var genre=prompt("Quel est votre genre  ?");

        alert("Vous avez "+age+"années et êtes de genre "+genre);

        confirm=prompt("Est-ce correct ? (y/n)");
    }

})();
