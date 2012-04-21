!function( $ ){
	
	$.fn.jPolo = function(option){
		var args = Array.prototype.slice.call(arguments, 1);
		return this.each( function(){

			var $this = $(this),
				data = $this.data('jPolo'),
				options = typeof option == 'object' && option;

			if( !data )
			{
				$this.data('jPolo', (data = new jPolo(this, option)) );
			}

			if( typeof option == 'string' )
			{
				// call methods
				// data[option]()
				// call data[option] with the arguments passed
				returnValue = data[option].apply( data, args );
			}
		});
	}


	var jPolo = function( element, options ){
		this.$element	= $(element);
		this.options	= $.extend( {}, options );
		this.init();
	}

	jPolo.prototype = {
		constructor: jPolo,

		init: function(){

			// Creates the map
			/*
			var myOptions = {
				zoom: 8,
				center: new google.maps.LatLng(-34.397, 150.644),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			*/
			
			this.map = new google.maps.Map( this.$element[0], this.options );

		},


		/*! \brief Adds a Marker to the map.

			\param markerOptions
			\callback: 
		*/
		addMarker: function( markerOptions ){

			markerOptions.map = this.map;
			console.log('Mark options');
			console.log( markerOptions );
			var marker = new google.maps.Marker( markerOptions );

			console.log( marker );
			console.log( marker.id );

			this.markers = this.markers || [];
			this.markers[ marker.id ] = marker;
		}
	};

}(window.jQuery);