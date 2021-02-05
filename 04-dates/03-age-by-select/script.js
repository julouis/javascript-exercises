/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	document.getElementById("run").addEventListener("click", function () {
		var day = document.getElementById("dob-day").value;
		var month = document.getElementById("dob-month").value;
		var year = document.getElementById("dob-year").value;

		var date = new Date();

		var getDay = date.getDay();
		var getMonth = date.getMonth() + 1;
		var getYear = date.getFullYear();

        var age=(getYear-year)-1;

		if (getMonth > month) {
			age = getYear - year;
		}
		if ((getMonth = month)) {
			if (getDay >= day) {
				age = getYear - year;
			}
		} 
		alert("Bonjour, vous êtes agé de "+age+" années !")
	});

	// your code here
})();
