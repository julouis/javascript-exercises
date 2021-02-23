/* becode/javascript
 *
 * /06-dom/10-match-password-two/script.js - 6.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    const run = document.querySelector('#run');

    run.onclick = function() {

        let passOne = document.querySelector('#pass-one');
        let passTwo = document.querySelector('#pass-two');

        if (passOne.value === passTwo.value) {
            passOne.innerHTML+=""
            passTwo.innerHTML+=""
        } else {
            passOne.value ="Error"
            passTwo.value ="Error"
        }
    }


    // your code here

})();
