function initialize() {
	if (typeof jQuery == 'undefined') {
    var script = document.createElement('script');
    script.type = "text/javascript";
    script.src = "http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js";
    document.getElementsByTagName('head')[0].appendChild(script);
  }
		thumbs = [];
		a = $(".webm-file");
		for (i = 0; i < a.length; i++) {
			thumbs[i] = a[i].currentSrc;
		};
	})
};

function toggle() {
	$(document.body).append('<div id="player"><div id="video"></div><div id="playlist"></div></div>');
	player = $("#player").hide();
	player.css({
		"background-color":"#D5D5D5",
		"opacity":".8",
		"width":"150vh",
		"height":"80vh",
		"border":"1px solid black",
		"border-radius":"20px",
		"z-index":"10",
		"left":"50%",
		"top":"50%",
		"margin-left":"-70vh",
		"margin-top":"-40vh",
		"position":"absolute",
		"overflow":"auto"
	});
	//$("#video").css();
	$("#playlist").css({
		"float":"right",
		"width":"30vh",
		"height":"100%",
		"border-left":"1px solid black"
	});
	player.animate({
		opacity:"show"
	}, {
		queue:false
	});
	$(document.body).animate({
		backgroundColor:'rgba(0, 0, 0, .5)'
	}, {
		queue:false
	});	
};

function hide() {
	player.animate({
		opacity:"hide"
	}, {
		queue:false
	});
	$(document.body).animate({
		backgroundColor:'rgba(0, 0, 0, 0)'
	}, {
		queue:false
	});	
};

initialize();
