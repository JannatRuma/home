const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Web Development",
				weight: 11.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "JavaScript",
				weight: 14
			}, {
				text: "AngularJS",
				weight: 5
			}, {
				text: "Programming",
				weight: 14.2
			}, {
				text: "Python",
				weight: 10
			}, {
				text: "C#",
				weight: 9
			}, {
				text: "JAVA",
				weight: 15
			}, {
				text: "newText",
				weight: 4
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Full-Stack Java Web Developer.", "currently working as Programmer.", "love everything about code.", "love to solve problems.", "also love to learn and work with new technologies."
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#0a797c"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}
	
	function ratestar() {
		var a;
		a = document.getElementById("div1");
		a.innerHTML = "&#xf006;";
		setTimeout(function () {
		a.innerHTML = "&#xf123;";
		}, 1000);
	setTimeout(function () {
		a.innerHTML = "&#xf005;";
		}, 2000);
}
ratestar();
setInterval(ratestar, 3000);

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
