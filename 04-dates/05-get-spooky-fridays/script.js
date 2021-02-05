/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	document.getElementById("run").addEventListener("click", function () {
		var year = document.getElementById("year").value;
		var daysInYear = 365;
        var arrayMonth = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];

		if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
			daysInYear = 366;
		}

        for (var days=1;days<daysInYear+1;days++) {
            var month=0;
            var date = new Date(year, month, days);
            if (date.getDate()==13 && date.getDay()==5) {
                console.log("Friday 13 "+arrayMonth[date.getMonth()]);
            }
        }

	});

	// your code here
})();
