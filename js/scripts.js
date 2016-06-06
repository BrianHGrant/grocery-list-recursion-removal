var groceryList = [];
var htmlOutput = "";
function weirdRecursion(thisthing) {
  var toDelete = thisthing.attr('class').split(' ')[1];
  var index = groceryList.indexOf(toDelete);
  groceryList.splice(index, 1);
  // alert('this part is engaging');
  htmlOutput = "";
  groceryList.forEach(function(item) {
    htmlOutput += "<li><span class=\"removal " + item + "\">X</span>" + item + "</li>";
  });
  $('#myList ul').html(htmlOutput);
  var counter = groceryList.length;
  if (counter > 0) {
    $('span').click(function() {
      weirdRecursion($(this));
    });
  }
}


$(document).ready(function() {
  $("input#item").one("click", function() {
    $(this).val("");
  });


  $('#addItem').submit(function() {
    htmlOutput = "";//resets list out put, array remains the same
    groceryList.push($('input#item').val());
    groceryList.sort(function (a, b) {
      return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    groceryList.forEach(function(item) {
      htmlOutput += "<li><span class=\"removal " + item + "\">X</span>" + item + "</li>";
    });
    $('#myList ul').html(htmlOutput);
    $('input#item').val("");//reset input


    event.preventDefault();


    $('span').click(function() {
      weirdRecursion($(this));
    });

    });



    // $('h1').click(function(){
    //   alert('static elements work');
    // });


});
