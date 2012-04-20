jPolo Google Maps Plugin
========================
A jQuery Plugin for displaying maps using Google Maps API v3.


How to use
----------

Call jPolo on a selected jQuery object:

	$('#the-map').jPolo();

You can pass a google.maps.MapOptions object to customize the map:

	$('#the-map').jPolo({zoom:8,
				center: new google.maps.LatLng(-34.397, 150.644),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			});


Features
--------
Not to much... right now you can only add Markers.
* Add Markers



TODO
----
* Bind events.
* Modify Markers.