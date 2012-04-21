!function( $ ){
	
	$.fn.jPolo = function(option){
		var args = Array.prototype.slice.call(arguments, 1);
		//return this.each( function(){

			var $this = $(this),
				data = $this.data('jPolo'),
				options = typeof option == 'object' && option;

			if( !data )
			{
				$this.data('jPolo', (data = new jPolo(this, option)) );
			}

			if( typeof option == 'string' )
			{
				var returnValue = data[option].apply( data, args );
				return returnValue;
			}
			else
				return this;
	//	});
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
			this.map = new google.maps.Map( this.$element[0], this.options );
			//this.map.checkResize();

			var that = this;
			google.maps.event.addListenerOnce( this.map, 'bounds_changed', function(){
					that.$elemnt.trigger('init', that.map);
				});
		},

		/*!	\brief Removes the map, and frees all objects
		*/
		reset:function(){

			this.$element.html('');
			this.map = null;
			this.markers = [];
		},


		/*! \brief Adds a Marker to the map.

			\param markerOptions
			\callback: 
		*/
		addMarker: function( markerOptions ){

			markerOptions.map = this.map;
			var marker = new google.maps.Marker( markerOptions );

			this.markers = this.markers || [];

			if( marker.id )
			{
				this.markers[ marker.id ] = marker;
			}
			else
				this.markers.push( marker );
		},


		/*!	\brief Returns a given Marker
		*/
		getMarker : function( id ){

			return this.markers[id] ;
		},




		/*!	\brief Add a listener to the map.
		*/
		addEventListener : function( eventType, eventData_Callback ){

			google.maps.event.addListener( this.map, eventType, eventData_Callback );
		},


		/*!	\brief Add a listener to a mark
		*/
		addEventListenerMarker : function( eventType, MarkerId, eventData_Callback ){

			if( typeof MarkerId == 'string' )
			{
				google.maps.event.addListener( this.getMarker(MarkerId), eventType, eventData_Callback );
			}
			else
				google.maps.event.addListener( MarkerId, eventType, eventData_Callback );
		}
	};

}(window.jQuery);