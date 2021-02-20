/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // your code here
    var image = document.getElementById("source").getAttribute("data-image");

    var imageNewLocation = document.getElementById("target").innerHTML = `<img src="${image}">` ;

    imageNewLocation.src=image;

    console.log(imageNewLocation)

    // console.log(image.dataset.image); 

})();
