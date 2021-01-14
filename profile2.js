var prevScrollpos=window.pageYOffset;
window.onscroll = function() {
var currentScrollPos=window.pageYOffset;
	if (prevScrollpos > currentScrollPos)
	{document.getElementById("navbar").style.top="0";}
	else {document.getElementById("navbar").style.top ="-100px";}
	prevScrollpos=currentScrollPos;}
	
	 writeRandomQuote = function () {
    var quotes = new Array();
    quotes[0] = "English is todays language but programing is the language of tomorrow.";
    quotes[1] = "Allah is the greatest!";
    quotes[2] = "All problem can be solved with code.";
    quotes[3] = "Computer programming is freedom of expression.";
	quotes[4] = "Computer programming has no bounds, your imagination is your limitation.";
    var rand = Math.floor(Math.random()*quotes.length);
    document.write(quotes[rand]);
  }
  writeRandomQuote();
