/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    var randomArray = [];
    var sum=0;

    document.getElementById("run").addEventListener("click", function() {
        for (i=0;i<10;i++) {
            var randomNumber = Math.floor(Math.random()*100+1);
            randomArray[i]= randomNumber;

            document.getElementById("n-"+(i+1)).innerHTML=randomArray[i];

            if (i==0) {
                var min=randomArray[i];
                var max=randomArray[i];
            }

            if (randomArray[i] < min) {
                min= randomArray[i];
            }

            if (randomArray[i]> max) {
                max = randomArray[i];
            }

            sum= sum+randomArray[i];

        }
        var average = sum/randomArray.length;

        document.getElementById("min").innerHTML=min;
        document.getElementById("max").innerHTML=max;
        document.getElementById("sum").innerHTML=sum;
        document.getElementById("average").innerHTML=average;
       

    })

    // your code here

})();
