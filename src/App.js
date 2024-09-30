
export default class App {
	/**
	 * Méthode principale. Sera appelée après le chargement de la page.
	 */
	static main() {
		// Exemple 1: Transition avec ajout de classe
		document.getElementById('btnDemarrer').addEventListener('click', function () {
			document.getElementById('boite-animee').classList.toggle('anim-droite');
		});

		// Exemple 3: Animation au survol
		const boiteSurvol = document.getElementById('boite-survol');
		boiteSurvol.addEventListener('mouseover', () => {
			boiteSurvol.classList.add('anim-scale');
		});
		boiteSurvol.addEventListener('mouseout', () => {
			boiteSurvol.classList.remove('anim-scale');
		});

		// Exemple 4: Animation via requestAnimationFrame
		const boiteRotate = document.getElementById('boite-rotate');
		App.tourner(boiteRotate, 1);
	}
	static tourner(element, degres = 1) {
		let rotation = 0;
		if (element.style.transform) {
			rotation = parseInt(element.style.transform.replace('rotate(', '').replace('deg)', ''));
		}
		rotation += degres;
		element.style.transform = `rotate(${rotation}deg)`;
		requestAnimationFrame(() => {
			App.tourner(element, degres);
		});
	}
}
