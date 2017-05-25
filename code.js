/* ----------------------------- begin view ----------------------------- */

var view = {
	showNumber: function (n) {
		var el = document.getElementById("showResult");
		el.innerHTML = n;
	}
};

/* ------------------------------ end view ------------------------------ */


/* ----------------------------- begin model ----------------------------- */

var model = {
	number: 0,

	calculate: function (x, y) {
		this.number = x * y;
		var result = this.number;

		view.showNumber(result);
	} 
};
/* ------------------------------ end model ------------------------------ */


/* --------------------------- begin controller -------------------------- */

var controller = {
	handleClick: function () {
		model.calculate(3,6);
	}
};
/* ---------------------------- end controller --------------------------- */


/* --------------------- anonymous initialize function ------------------- */
(function(){
	var app = {
		init: function () {
			this.main();
			this.event();

		},
		main: function () {

		},
		event: function () {
			var el = document.getElementById("calcUser");
			el.onclick = controller.handleClick;
		}
	};
	app.init();
}());
/* --------------------- anonymous initialize function ------------------- */
