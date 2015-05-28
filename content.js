var shouldDebug = false

var debug = function(message) {
	if(shouldDebug) {
		console.log(message);
	}
};

function hashHandler() {
    this.oldHash = window.location.hash;
    this.Check;

    var that = this;
    var detect = function(){
        if(that.oldHash!=window.location.hash){
            window.setTimeout(initialize, 100);
            that.oldHash = window.location.hash;
        }
    };
    this.Check = setInterval(function() { detect(); }, 100);
}
var hashDetection = new hashHandler();

var initialize = function() {
	if(window.location.hash.indexOf("#inbox") !== -1) {
		debug('gmail-issues add is running');
    
		var title = document.querySelectorAll(".hP")[0];
		if (title != undefined) {
			var aTag = document.createElement('a');
    		aTag.setAttribute('href', 'https://issues.genexus.com/displaysearchissuesresults.aspx?' + encodeURIComponent(title.innerText));
    		aTag.setAttribute('style', 'font-size: small;');
    		aTag.innerHTML = "Search Issue";
	    	debug(title.innerText);

    		title.parentNode.appendChild(aTag);
		}
	}
}

initialize();