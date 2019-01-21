(() => {
		// what do we want to work with
		// // thsi is a 1 o 1 selection
		var badge = document.querySelector('#badge');

		// this si a 1 to many selection
		var allTheBadges = document.querySelectorAll('.isabadge');

		// what do we want it to do
		function logMyId() {
			// log some stuff to dev tools
			console.log(this.id);
		}

		//how do we want to do that
		badge.addEventListener("click", logMyId);

		allTheBadges.forEach(currentbadge => currentbadge.addEventListener("click", logMyId));
})();