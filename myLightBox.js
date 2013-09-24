(function($, window, document, undefined) {

	$.fn.lightBox = function(options) {
		var element;

		var myLightBox = {
			options: {
				overLaySpeed: 300,
				overLayOpacity: 0.5,
				overLayColor: 'black'
			},

			init: function( options){
				$.extend(myLightBox.options, options);
				myLightBox.addLightBoxListener();
			},

			addLightBoxListener: function(){
				$(element).on('click', function(e){
					myLightBox.addOverlay();
					myLightBox.addImageBox($(this).attr('src') || $(this).attr('href'));
					e.preventDefault();
				});
			},

			addOverlay: function(){
				$('<div id="overlay"></div>').css({
					'position': 'fixed',
					'top': '0px',
					'left': '0px',
					'width': '100%',
					'height': '100%',
					'background': this.options.overLayColor + ' url(img/loader.gif) no-repeat scroll center center',
					'opacity': 0
				}).prependTo($('body')).animate({opacity: this.options.overLayOpacity}, this.options.overLaySpeed);
			},

			addImageBox: function(imgAdr){
				$('<div id="imageBox"></div>').css({
					'position': 'fixed',
					'display': 'none'
				}).appendTo('body');
				myLightBox.addImage(imgAdr);
			},

			addImage: function(imgAdr){
				$('<img>')
					.attr('src', imgAdr)
					.load(function(){
						myLightBox.positionLightBox();
					})
					.on('click', function(){
						myLightBox.remove();
					})
					.appendTo('#imageBox'); 
			},

			positionLightBox: function(){
				var top = ($(window).height() - $('#imageBox').height()) / 2;
				var left = ($(window).width() - $('#imageBox').width()) / 2;
				$('#imageBox')
					.css({
						'top': top,
						'left': left
					})
					.fadeIn();
			},

			remove: function(){
				$('#overlay, #imageBox').remove();
			}
		}

		return this.each(function(){
			element = this;
			var obj = Object.create( myLightBox );
			obj.init(options);
		});
	}
})(jQuery, window, document);