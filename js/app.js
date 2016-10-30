console.log('you should see this');
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function

var isX = true;
var makeMark;

$('#board').on('click', function(event) {
    if (isX) {
        makeMark = 'X';
    } else {
        makeMark = 'O';
    }
    isX = !isX;
    $(event.target).html(makeMark);
    // console.log(makeMark);

});




}); // document closer
