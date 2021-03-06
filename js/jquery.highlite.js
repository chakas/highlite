(function($) {
    //get the highlighted text
	function getSelectionText() {
 	    var parentEl = null, sel;
   		if (window.getSelection) {
        sel = window.getSelection();
        console.log(sel.toString());
        sel = sel.toString();
     	    if(sel.length > 1){
    		    	var spn = '<span class="selected">' + sel + '</span>';
			        document.activeElement.innerHTML = document.activeElement.innerHTML.replace (sel, spn);
	        	}
        	}
	}
	// jQuery plugin definition
	$.fn.highlite = function(params) {
		$("*").keypress(function(evnt){
			if(evnt.shiftKey && evnt.which == 72){
				console.log("init highlighted");
				getSelectionText();
			}
			$('span.selected').css({"background-color":"yellow"});
		});
	};
})(jQuery);
