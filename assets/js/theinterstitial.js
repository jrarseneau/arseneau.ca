// Changes links to open within webApp on iOS
(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")

// Scroll to top after page loads
window.addEventListener("load",function() {
	setTimeout(function(){
		window.scrollTo(0, 0);
	}, 0);
});

$('#hamburger-button').click(function() {
	if($('section[role="sidebar"]').css("display") == "none")
	{
		$('section[role="main"]').animate({
			right: '275px'
		}, 600);
		$('section[role="sidebar"]').toggle( "slide", { direction: "right" }, 600);
	}
	else
	{
		$('section[role="sidebar"]').toggle( "slide", { direction: "right" }, 600);
		$('section[role="main"]').animate({
			right: '0'
			}, 600);
	}
});
// Function to reload our page if the viewport changes. Need to add JS to detect viewport size
//window.onresize = function(event)
//{
//document.location.reload(true);
//}
