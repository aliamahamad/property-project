function includeHTML() {
	var z, i, element, file, xhttp;
	// loop throung a collection of all HTML elements
	z = document.getElementsByTagName("*");
	for (i = 0; i < z.length; i++) {
		element = z[i];
		// search for elements with certain attribute
		file = element.getAttribute(inc-html);
		if (file) {
			xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4) {
					// make an HTTP request using the attribute value as the file name
					if (this.status == 200) {element.innerHTML = this.responseText;}
					if (this.status == 404) {element.innerHTML = "page not found.";}
					// remove the attribute, and call this function once more
					element.removeattribute("inc-html");
					includeHTML();
				}
			}
			xhttp.open("GET", file, true);
			xhttp.send();
			// exit function

			return
		}
	}
};