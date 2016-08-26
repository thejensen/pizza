// Business Logic

function Pizza(toppings, size) {
  this.toppings = [];
  this.size = [];
}
//
// var basePrice = 10
//
// Pizza.prototype.price = function () {
//   for (var i = 0; i < pizza.toppingsArray.length; i++) {
//     basePrice += 1
//   }
//   for (var i = 0; i < pizza.size.length; i++) {
//     pizza.size[i]
//   }
// }

// User Interface Logic
//
// var newPizza = new Pizza();

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var newPizza = new Pizza();

    var toppingsArray = []

    var inputtedToppings = $('.form-check-input:checked').map(function() {
      toppingsArray.push($(this).val());
    });
    var inputtedSize = $('input:radio[name="size"]:checked').val();


    console.log(toppingsArray, inputtedSize);

  });
});
