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
				// call methods
				// data[option]()
				// call data[option] with the arguments passed
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
			/*
			var myOptions = {
				zoom: 8,
				center: new google.maps.LatLng(-34.397, 150.644),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			}
			*/

			
			this.map = new google.maps.Map( this.$element[0], this.options );
			this.markers = [];
			//this.map.checkResize();

			var that = this;
			google.maps.event.addListenerOnce( this.map, 'bounds_changed', function(){

				// Check if there is data-API
				var marker = that.$element.data('marker');
				if( marker )
				{
					// TODO: handle multiple marks
					marker.position = new google.maps.LatLng(marker.lat, marker.lon);
					that.addMarker(marker);

					// Center based on all placed marks
					that.centerOnMarks();
				}

				that.$element.trigger('init', that.map);
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

			return marker;
		},


		/*!	\brief Returns a given Marker
		*/
		getMarker : function( id ){

			return (this.markers[id])? this.markers[id]:null;
		},


		/*! \brief Center all marks
		*/
		centerOnMarks : function(){

			var bounds = new google.maps.LatLngBounds(),
				count = 0;

			for( var m in this.markers )
			{
				if( typeof this.markers[m] ==='object' )
				{
					count ++;
					bounds.extend( this.markers[ m ].getPosition() );
				}
			}

			this.map.fitBounds( bounds );
			if( count==1 )
			{
				this.map.setZoom(18);
			}
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