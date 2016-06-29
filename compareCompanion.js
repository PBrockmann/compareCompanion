
// ==============================================================================================
// Author: Patrick.Brockmann@lsce.ipsl.fr
// 2016/06/29
// ==============================================================================================

requirejs.config({
  paths: {
    "jquery": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min",
    "jqueryui": "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min",
  }
});

require(["jquery", "jqueryui"], function($) {

$(document).ready(function() {

  var link = document.createElement("link");			// load jQuery.ui.css
  link.type = "text/css";
  link.rel = "stylesheet";
  link.href = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css";
  document.getElementsByTagName("head")[0].appendChild(link);

  $('img').bind('keydown', function(event) {
        //console.log(event.keyCode);
        switch(event.keyCode) {
                case 83:                                        // 's' for select
                        if (! $(this).prop('selected')) {
                                $(this).prop('selected', true).css('border', '3px solid black');
                        } else {
                                $(this).prop('selected', false).css('border', 'none');
                        }
                        if ($('img:selected').length == 0) {
				$('.control').prop('disabled', true).css('opacity', 0.3).css('cursor', 'default');
			} else {
				$('.control').prop('disabled', false).css('opacity', 1.0).css('cursor', 'pointer');
			}
                        break;
                case 67:                                        // 'c' for clear 
                        $('img').prop('selected', false).css('border', 'none');       
			$('.control').prop('disabled', true).css('opacity', 0.3).css('cursor', 'default');
                        break;
		// http://www.sitepoint.com/forums/showthread.php?513905-Can-t-call-window-open()-from-a-keyPress-event
                //case 88:                                        // 'x' to open a new windon with selected images
                //        break;
        }
  });

  $('img').bind('mouseover', function() {               // set the focus when mouseover to capture key event
        this.focus();
  });
  $('img').prop('tabindex', -1);                         // to enable the focus
  $('img').prop('selected', false);                     // by default none selected

  $('a').prop('target', '_blank');                      // to correct all anchors
  $('td').css('display', 'inline');                     // to display without horiz. scroll bar

  var r = $('<input class="control" type="image" id="comparisonButton" style="position: fixed; bottom: 30px; right: 30px;"/>');
  $('body').append(r);
  $('.control').prop('disabled', true).css('opacity', 0.3).css('cursor', 'default');

  // compare png image from https://www.iconfinder.com/icons/175463/compare_icon#size=128 
  // converted to base64 with https://www.base64-image.de/
  $('#comparisonButton').prop('src', 'data:image/png;base64,\
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');
  $('#comparisonButton').prop('title', 'Open comparison window');

  $('#comparisonButton').bind('click', function() {
        var contentHTML = '';
        $('img:selected').each(function(i, el) {
                contentHTML = contentHTML + '     <img src="' + $(el).prop("src") + '">\n';
		// if href from parent anchor is needed
		//var source = window.location.href.split('/');
                //source.pop();
                //source = source.join('/');
                //contentHTML = contentHTML + '     <img src="' + source + '/' +  $(el).parent("a").attr("href") + '">\n';

        })
        if (contentHTML != '') {
                var newWindow = window.open("", "myImagesComparison");
        	newWindow.document.title = "My images comparison";

	        var link = document.createElement("link");
    		link.type = "text/css";
    		link.rel = "stylesheet";
    		link.href = "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/themes/smoothness/jquery-ui.css"; 
    		newWindow.document.getElementsByTagName("head")[0].appendChild(link);

                var contentStyle = 'img { float: left; }\n';
                var s = newWindow.document.createElement("style");
                s.type = "text/css";
                s.appendChild(document.createTextNode(contentStyle));
                newWindow.document.getElementsByTagName("HEAD")[0].appendChild(s);

	        contentHTML = '<div id="sortable">\n' + contentHTML + '</div>\n'; 
	        contentHTML = contentHTML + '<div id="slider" style="width: 100px; position: fixed; bottom: 40px; right: 40px;"></div>\n';
	        contentHTML = contentHTML + '<input type="text" id="sliderVal" value=2 readonly ' +
  				                   'style="width: 50px; position: fixed; bottom: 15px; right: 40px; border: 0; font-weight:bold;">\n';
		//console.log(contentHTML);
        	newWindow.document.body.innerHTML = contentHTML;

      		var s = newWindow.document.createElement("script");
      		s.type = "text/javascript";
      		s.src = "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.2.0/require.min.js";
      		newWindow.document.getElementsByTagName("HEAD")[0].appendChild(s);

		var contentScript =  'var checkReady = function(callback) {\n' +			// to wait for loading of require.js
                		     '       if (window.requirejs) {\n' + 
                		     '               callback();\n' +
                		     '       }else {\n' + 
                		     '               window.setTimeout(function() { checkReady(callback); }, 100);\n' +
                		     '       }\n' +       
                		     '};\n' +             
                		     'checkReady(function($) {\n' + 
				     '   requirejs.config({\n' +					// dependancies on jQuery and jQuery.ui
				     '       paths: {\n' +
				     '         "jquery": "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.0.0/jquery.min",\n' + 
				     '         "jqueryui": "https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min",\n' +
				     '       }\n' +
				     '     });\n' +
				     '   require(["jquery", "jqueryui"], function($) {\n' +
				     '     		$(document).ready(function() {\n' +
				     '				$("#sortable").sortable();\n' +			// make sortable all elements from div
                                     '                          var heights = $("img").map(function () { return $(this).prop("naturalHeight"); }).get();\n' +
                                     '                          maxHeight = Math.max.apply(null, heights);\n' + 
                                     '                          var widths = $("img").map(function () { return $(this).prop("naturalWidth"); }).get();\n' +
                                     '                          maxWidth = Math.max.apply(null, widths);\n' + 
                                   //'                          console.log(maxWidth, maxHeight);\n' +
  				     '				$("#slider").slider({ value: 2, min: 1, max: 8, step: 1,\n' +
  				     '					slide: function(event, ui) { \n' +
                                     '                                                $("#sliderVal").val(ui.value);\n' +
                		     '                                                $("img").css("width", (100/$("#sliderVal").val()).toFixed(3) + "%");\n'  +
                		     						      // calculate the height from the rendered width prop to ratio of image h/w
                		     '                                                newHeight = $("img").prop("width") * maxHeight/maxWidth;\n' +
                		     '                                                $("img").css("height", newHeight.toFixed(3) + "px");\n'  +
                		     '                                         }\n' +
  				     '				});\n' +
                                     '                          $("#slider").prop("title", "Number of columns");\n' +
                		     '                          $("img").css("width", "50%");\n'  +
                		     '                          newHeight = $("img").prop("width") * maxHeight/maxWidth;\n' +
                		     '                          $("img").css("height", newHeight.toFixed(3) + "px");\n'  +
                		   //'                          $("img").css("border", "1px solid");\n' +
				     '			});\n' +
				     '	})\n' +
				     '});\n';
      		var s = newWindow.document.createElement("script");
      		s.type = "text/javascript";
		//console.log(contentScript);
		s.appendChild(document.createTextNode(contentScript));
      		newWindow.document.getElementsByTagName("BODY")[0].appendChild(s);

        	newWindow.focus();
        }

  });			// bind click

});			// document ready

});			// require ready
