/*
 * Add Production label to a site.
 */
(() => {
	addProductionLabel();

	function addProductionLabel() {
		const warningElement = document.createElement('div');
		warningElement.innerText = 'Production';

		const { style } = warningElement;
		style.position = 'fixed';
		style.left = '40%';
		style.top = '3%';
		style.zIndex = 9000;
		style.color = 'rgb(255, 0, 0)';
		style.pointerEvents = 'none';
		style.fontSize = '5em';
		style.textTransform = 'uppercase';

		document.body.appendChild(warningElement);
	}
})();
