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


Events
------

jPolo exposes following jQuery events:

* **init**: triggered when the map is fully loaded.




TODO
----
* Modify Markers.
* Check if unify `addEventListener`/`addEventListenerMarker` methods with jQuery events is possible.