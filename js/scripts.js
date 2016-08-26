// Business Logic

function Pizza(toppings, size) {
  this.toppings = [];
  this.size = [];
}

var basePrice = 10

Pizza.prototype.price = function () {
  for (var i = 0; i < pizza.toppingsArray.length; i++) {
    basePrice += 1
  }
  for (var i = 0; i < pizza.size.length; i++) {
    pizza.size[i]
  }
}

// User Interface Logic

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var newPizza = new Pizza();

    var inputtedToppings = $('.form-check-input:checked').map(function() {
      newPizza.toppings.push($(this).val());
    });
    newPizza.size.push($('input:radio[name="size"]:checked').val());


    console.log(newPizza);

  });
});
