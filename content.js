
var shouldDebug = false;

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

function removeStringFromBegining(text, start) {
	var len = start.length
	if (text.substring(0, len) === start) {
	    text = text.substring(len, text.length);
	}
	return text
}

function standarizedTitle(title) {
	var aux = title;
	aux = removeStringFromBegining(aux, "Re: ");
	aux = removeStringFromBegining(aux, "Fwd: ");
	return encodeURIComponent(aux);
}

function isIssue() {
	var found = false;
	var emailsList = document.querySelectorAll("span.g2");
	var i;
	var emailDir;
	for (i = 0; i <	emailsList.length; i++) {
		emailDir = emailsList[i].getAttribute("email");
		debug("Found email address: " + emailDir);
		if (emailDir == "rochaissues@genexus.com") {
			found = true;
			break;
		}
	}
	return found;
}

var initialize = function() {
	debug('gmail-issues add is running');

	var title = document.getElementsByClassName("hP")[0];
	if (title != undefined) {
		if (isIssue()) {
			var aTag = document.createElement('a');
			aTag.setAttribute('href', 'https://issues.genexus.com/displaysearchissuesresults.aspx?' + standarizedTitle(title.textContent));
			aTag.setAttribute('style', 'font-size: small;');
			aTag.innerHTML = "Search Issue";
			debug(title.textContent);

			title.parentNode.appendChild(aTag);
		}
	}
};

initialize();
