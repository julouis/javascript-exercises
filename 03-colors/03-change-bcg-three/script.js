/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function() {
        var randomColorRed = Math.floor(Math.random()*256);
        var randomColorGreen = Math.floor(Math.random()*256);
        var randomColorBlue = Math.floor(Math.random()*256);

        document.body.style.backgroundColor="rgb("+randomColorRed+","+randomColorGreen+","+randomColorBlue+")";
    })

    // your code here

})();
