/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let passOne = document.querySelector('#pass-one');
    let validity = document.querySelector('#validity');
    passOne.setAttribute("maxlength","8")
    passOne.value="";

    passOne.addEventListener('input', function() {

        let numberOfDigits = passOne.value.replace(/[^0-9]/g,"").length;

        if ((passOne.value.length == 8) && (numberOfDigits>=2)) {
            validity.innerHTML = "Ok";
        }
    })

    // your code here

})();
