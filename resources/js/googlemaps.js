function initialize() {
	var mapCanvas = document.getElementById('map');
	var mapOptions = {
		scrollwheel: false,
		center: new google.maps.LatLng(51.515171,-2.534839),
		zoom: 16,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(mapCanvas, mapOptions);

	var iconImage = {
		url: 'assets/img/map-pointer.png',
		anchor: new google.maps.Point(21,63)
	};
	var marker = new google.maps.Marker({
		position: mapOptions.center,
		map: map,
		icon: iconImage
	});

}
$(document).ready(function(){
	if ($('#map').length > 0 ){
		google.maps.event.addDomListener(window, 'load', initialize);
	}
});

