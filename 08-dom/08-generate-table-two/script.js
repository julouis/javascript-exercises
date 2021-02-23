/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
	var target = document.getElementById("target");
	target.innerHTML = "<table><tbody></tbody></table>";

	const table = document.querySelector("tbody");
	var tableCode;

	for (i = 0; i < 10; i++) {
    
		tableCode = "<tr>";
        
		for (x = 0; x < 10; x++) {
			tableCode += `<td>${(x + 1) * (i + 1)}</td>`;
      
		}

		tableCode += "</tr>";
		table.innerHTML += tableCode;
	}

	// your code here
})();
