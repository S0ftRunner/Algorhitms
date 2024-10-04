
/**
 * 
 * @param {Array<string>} array 
 * @returns {Array<string>}
 */
function sortByLength (array) {
      return array.sort((a, b) => a.length - b.length);
}

sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]);

/**
 * Более развернутое решение:
 * 
function compareNumeric(a, b) {
	if (a < b) return -1;
	if (a > b) return 1;
}

function sortByLength (array) {
	let arrayL = array.map((value) => {
		return value.length;
	})
	arrayL = arrayL.sort(compareNumeric);
	let resArr = arrayL.map((value) => {
		for (let i = 0; i < array.length; i++) {
			if (array[i].length === value) {
				return array[i];
			}
		}
	})
	return resArr;
};
 */