/* becode/javascript
 *
 * /06-dom/09-match-password-one/script.js - 6.9: vérification de mots de passe (1)
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
            passOne.style.borderColor="";
            passTwo.style.borderColor="";
        } else {
            passOne.style.borderColor="red";
            passTwo.style.borderColor="red";
        }
    }

    // your code here

})();
