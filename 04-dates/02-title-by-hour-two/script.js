/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    var days = new Date();
    var hour = days.getHours();
    var minute = days.getMinutes();

    if (minute < 10
        document.getElementById("run").addEventListener("click",function() {
            /* for(var i=0;i<fruits.length;i++) {
            console.log(fruits[i]);
             } */
            fruits.forEach(fruit => {
                console.log(fruit);
            });
            
        // your code here
    
    })();
    ) {
        minute=""+0+minute;
    }

    var time = ""+hour+minute;

    console.log(""+hour+minute);


    var message = "Hello"
    if (time>1730) {
        message= "Good Evening"
    } 
    document.getElementById("target").innerHTML = message;
    // your code here

})();
