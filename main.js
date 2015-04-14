$(document).on('ready', function(event) {
  $(document).on( "click", function( event ) {
  var pin = $("<img class='pin' src='Red-Pin-Marker.png'>");
    $(pin).css('top', event.pageY);
    $(pin).css('left', event.pageX);
    $('body').append(pin);
});
  $(document).on('click','.pin',function(event) {
    event.stopPropagation();
    $(this).remove();
  });

});
