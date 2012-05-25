jPolo Google Maps Plugin
========================
A jQuery Plugin for displaying maps using Google Maps API v3.


How to use
----------

Call jPolo on a selected jQuery object:

	$('#the-map').jPolo();

You can pass a `google.maps.MapOptions` object to customize the map:

	$('#the-map').jPolo({zoom:8,
				center: new google.maps.LatLng(-34.397, 150.644),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});


Methods
--------
* reset: Removes the Map.
* addMarker: Creates a `Marker`.
* getMarker: Returns a `Marker` object given an `id`
* addEventListener: Adds a callback to the event specified triggered by the map.
* addEventListenerMarker: Adds a callback to specified event triggered by specified marker.
* centerOnMarks: Centers map so every placer `Marker` is visible.


Events
------

jPolo exposes following jQuery events:

* **init**: triggered when the map is fully loaded.


HTML API
--------
Using `data` attribute you can specify some map attributes:

*  `markers`: Specifies a `Marker` to be placed on the map.  
			  Just set the following JSON object as its value:

			      {
			        id:&lt;Marker ID>,     // Unique identifier for the Marker
			        lat:&lt;Lattitude>,    // Lattitude
			        lon:&lt;Longitued>,    // Longitude
			        draggable:True/False   // Marker draggable?
			      }  

  **Example**

			      <div id="the-map" data-markers="{lat:-34.397, lon:150.644}"></div>


TODO
----
* Modify Markers.
* Check if unify `addEventListener`/`addEventListenerMarker` methods with jQuery events is possible.