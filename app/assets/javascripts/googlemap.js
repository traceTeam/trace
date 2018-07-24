function initMap() {
  var curr_loc = {lat: 37.529, lng: 126.927}
  
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: curr_loc,
    zoomControl: false,
    scaleControl: true,
    disableDefaultUI: true
  });
  
   var marker = new google.maps.Marker({
    position: curr_loc,
    map: map
  });
  
  /*var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 4,
    center: curr_loc,
    disableDefaultUI: true
  });
  
 
 */
}