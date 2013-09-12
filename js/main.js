jQuery(document).ready(function($) {
	
	var randomTime = Math.floor(Math.random()*3000+100);
	var randomTimeTweet = Math.floor(Math.random()*6000+3000);
	var randomTimeColors= Math.floor(Math.random()*10000+800);
	var spanClassList = [];
	var lastRandomIndex;
	var randomClassNumber;
	var randomTop;
	var randomLeft;
	var thewidth;
	var theheight;
	// var numberTweets = 0;
	var tweetList = [];
	var pointNum = 0;
	var thisLoader = [];
	var thisRotate = [];
	var thisFlip = [];
	var l = 0;
	var r = 0;
	var f = 0;
	var boxSize;
	// var lastEffectNumber;

	function loadingAnimation(){
		setInterval(function(){
			pointNum++;
			if ( pointNum == 1 ) {
			    $('#loading').text(".  ");
			}
			if ( pointNum == 2 ) {
			    $('#loading').text(".. ");
			}
			if ( pointNum == 3 ) {
			    $('#loading').text("...");
			}
			if ( pointNum == 4 ) {
				$('#loading').empty();
			    pointNum = 0;
			}
			// loadingAnimation();
		},400);
	}

	loadingAnimation();

	function addNewTweet(){
		setTimeout(function(){
			var numberTweets = tweetList.length;
			var randomTweetNumber = Math.floor(Math.random()*numberTweets);
			var randomTweet = tweetList[randomTweetNumber];
			randomTweet = "<li>" + randomTweet + "</li>";
			randomTimeTweet = Math.floor(Math.random()*6000+3000);
			$('#tweetlist').append(randomTweet);
			tweetList = jQuery.grep(tweetList, function(value) {
			  return value != randomTweet;
			});
			console.log(tweetList);
			$("li:first-child").addClass('primero');
			// $("li:nth-child(2)").addClass('segundo');

			var actualHeight = $(window).height() - 40;
			addNewTweet();
			boxSize = $("#tweet-box").height();

			if ( boxSize > actualHeight ) {
				$('.primero').remove();
			}

		},randomTimeTweet);
	}

	addNewTweet();

	function newPosition(){
		thewidth = $(window).width() - 100;
		theheight = $(window).height() - 100;

		randomLeft = Math.floor((Math.random()*thewidth));
		randomTop = Math.floor((Math.random()*theheight));
	}

	function setNewPosition(z) {
		
		newPosition();

		if ( !$(z).isNumeric ) {
			z = spanClassList[randomClassNumber];
			z = '.' + z ;
		}

		$(z).css({
			//'position': 'absolute',
			'top' : randomTop,
			'left' : randomLeft
		});

	}

	function setNewPositionHover(z) {

		newPosition();

		var theFontSize = Math.floor(Math.random()*300+16) + "px";

		$(z).css({
			//'position': 'absolute',
			'top' : randomTop,
			'left' : randomLeft,
			// 'font-size' : theFontSize
		});

	}
	
	function setTimeRandom(){

		setTimeout(function(){

			randomTime = Math.floor(Math.random()*3000+100);
			randomClassNumber = Math.floor(Math.random()*15+1);

			while ( randomClassNumber == lastRandomIndex ) {
				randomClassNumber = Math.floor(Math.random()*15+1);
			}

			lastRandomIndex = randomClassNumber;
			randomClass = spanClassList[randomClassNumber];

			setNewPosition(randomClass);

			// console.log(randomClass);

			setTimeRandom();	

		},randomTime);

	}

	function parseElements(p) {
	    var p = $(randomClassColors);

	    if ( i == 1 ) {
			$(p).addClass("loader");
			var randomFast = Math.floor(Math.random()*10000+5000);
			setTimeout(function(){
				$(p).removeClass("loader");				
			},randomFast);
			l++;
		}
		if ( i == 2 ) {
			$(p).addClass("rotate");
			var randomFast = Math.floor(Math.random()*10000+5000);
			setTimeout(function(){
				$(p).removeClass("rotate");				
			},randomFast);
			r++;
		}
		if ( i == 3 ) {
			$(p).addClass("flip");
			var randomFast = Math.floor(Math.random()*10000+5000);
			setTimeout(function(){
				$(p).removeClass("flip");				
			},randomFast);
			f++;
		}

	}

	function setTimeRandomColors(){

		setTimeout(function(){

			var randomTimeColors = Math.floor(Math.random()*10000+800);
			randomClassNumberColors = Math.floor(Math.random()*15+1 & 0xFE);

			while ( randomClassNumberColors == lastRandomIndex ) {
				randomClassNumberColors = Math.floor(Math.random()*15+1 & 0xFE);
			}

			lastRandomIndex = randomClassNumberColors;
			randomClassColors = '.' + spanClassList[randomClassNumberColors];

			i = Math.floor(Math.random()*3+1);
			// while ( i == lastEfSfectNumber ) {
			// 	i = Math.floor(Math.random()*3+1);
			// }
			// lastEffectNumber = i;

			// $('span').removeClass("bigger");

			parseElements.call( $(thisLoader[l])[0] );

			// if ( i == 1 ) {
			// 	// thisLoader[l] = $(randomClassColors);
			// 	parseElements.call( $(thisLoader[l])[0] );
			// 	l++;
			// }
			// if ( i == 2 ) {
			// 	// thisRotate[r] = $(randomClassColors);
			// 	parseElements.call( $(thisRotate[r])[0] );
			// 	r++;
			// }
			// if ( i == 3 ) {
			// 	// thisFlip[f] = $(randomClassColors);
			// 	parseElements.call( $(thisFlip[f])[0] );
			// 	f++;
			// }
			// if ( i == 4 ) {
			// 	var multiplyText = $(randomClass).text();
			// 	var moreText = $(randomClass).text();
				
			// 	setTimeout(function(){
			// 		setInterval(function(){
			// 			$(randomClass).html(moreText + multiplyText);
			// 			moreText = $(randomClass).text;
			// 		},100);
					
			// 		$('span').removeClass("bigger");

			// 	},5000);
			// }


			console.log(i);


			// console.log(randomClass);

			setTimeRandomColors();	

		},randomTimeColors);

	}

	setTimeRandomColors();

	$("span").each(function(index) {
		var theClass = $(this).attr('class');
    	spanClassList.push(theClass);
	});

	console.log(spanClassList);

	setTimeRandom();

	$('span').mouseenter( function(){

		setNewPositionHover(this);
	});

	// For advanced example which allows you to customize how tweet time is
	// formatted you simply define a function which takes a JavaScript date as a
	// parameter and returns a string!
	// See http://www.w3schools.com/jsref/jsref_obj_date.asp for properties
	// of a Date object.
	function dateFormatter(date) {
	  return date.toTimeString();
	}

	// ##### Advanced example 2 #####
	// Similar as previous, except this time we pass a custom function to render the
	// tweets ourself! Useful if you need to know exactly when data has returned or
	// if you need full control over the output.

	twitterFetcher.fetch('377576093164634112', '', 200, true, false, false, '', false, handleTweets, false); //Wikileaks
	twitterFetcher.fetch('377585697583947776', '', 200, true, false, false, '', false, handleTweets, false); //Syria
	twitterFetcher.fetch('377590310580137984', '', 200, true, false, false, '', false, handleTweets, false); //Anonymus
	twitterFetcher.fetch('377592605678129152', '', 200, true, false, false, '', false, handleTweets, false); //PirateBay
	twitterFetcher.fetch('377593439514152960', '', 200, true, false, false, '', false, handleTweets, false); //War

	function handleTweets(tweets){
	    var x = tweets.length - 1;
	    var n = 0;
	    var element = document.getElementById('example4');
	    // var html = '<ul class="tweet-list">';
	    var html;
	    while(n < x) {
	      // html += '<li>' + tweets[n] + '</li>';
	      n++;
	      tweetList.push(tweets[n]);
	    }
	    // html += '</ul>';

	    console.log(tweetList);
	    
	}

	$(window).resize(function() {
		thewidth = $(window).width() - 100;
		theheight = $(window).height() - 100;
	});

});


