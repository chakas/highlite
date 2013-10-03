$(function() {
 //    //get the highlighted text
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
		$("*").keypress(function(evnt){
			if(evnt.shiftKey && evnt.which == 72){
				console.log("init highlighted");
				getSelectionText();
			}
		});
	  $(window).on('beforeunload', function() {
			if($('span.selected').length>0){
				var data="";
				//Below code will loop through the spans
				$.each($('span.selected'),function(){
					data = data	+"=hlx="+$(this).text();
				});
				localStorage['highliter-notes']=data;
			}
			return 'Do you want to save the highlighted text to localstorage??';
	});
});
