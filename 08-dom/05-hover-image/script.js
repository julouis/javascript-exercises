/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var newImage = document.querySelector(".material figure img").getAttribute("data-hover");
    var oldImage = document.querySelector(".material figure img").getAttribute("src");
    console.log(newImage)

    document.querySelector(".material figure img").removeAttribute("src")

    document.querySelector(".material figure img").onmouseover = function() {mouseOver()};
    document.querySelector(".material figure img").onmouseout = function() {mouseOut()};

    function mouseOver() {
        document.querySelector(".material figure img").src = newImage;
    }
    function mouseOut() {
        document.querySelector(".material figure img").src = oldImage;
    }


    //document.querySelector(".material figure img").innerHTML = `onmouseover="${newImage}"`;



    // your code here

})();
