//Pair programmed most of this with Henrik Norberg last saturday, I thought this was up on github already.

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
    evaluate();
});


  var evaluate = function(){
     if(check(0,1,2)) alert('You win row 1');
     if(check(3,4,5)) alert('You win row 2');
     if(check(6,7,8)) alert('You win row 3');
     if(check(2,4,6)) alert('You win on a diagnol 1');
     if(check(0,4,8)) alert('You win on a diagnol 2');

}

var check = function(num1,num2,num3){
    var $boxes = $('.box');

    if(isNothing($boxes[num1].innerText,$boxes[num2].innerText,$boxes[num3].innerText)) return false

//    console.log('Checking ', $boxes[num1].innerText, $boxes[num2].innerText,$boxes[num3].innerText)

    return ($boxes[num1].innerText === $boxes[num2].innerText)  &&  ($boxes[num2].innerText === $boxes[num3].innerText)
}

var isNothing = function(val1,val2,val3){
  return (val1 === '') && (val2 ==='') && (val3 ==='')
};


$('#button').on('click', function(){
  location.reload();
})

}); // document closer
