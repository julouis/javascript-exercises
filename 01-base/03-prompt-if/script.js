/* becode/javascript
 *
 * /01-base/03-prompt-if/script.js - 1.3: promp & if
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

  var x=prompt("Do you want some cake? (y/n)");

  if (x=="y") {
    alert("The cake was a lie");
  } else {
    alert("More cake for me then");
  }

})();