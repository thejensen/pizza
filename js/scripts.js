// Business Logic

function Pizza(toppings, size) {
  this.toppings = [];
  this.size = [];
  console.log(this.size);
}

var basePrice = 8;

Pizza.prototype.price = function () {
  for (var i = 0; i < this.toppings.length; i++) {
    basePrice += 1;
  }
  for (var i = 0; i < this.size.length; i++) {
    if (this.size[i] === "12") {
      basePrice += 2;
    } else if (this.size[i] === "14") {
      basePrice += 4;
    } else if (this.size[i] === "18") {
      basePrice += 6;
    }
  }
  return basePrice;
}

// User Interface Logic

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var newPizza = new Pizza();

    var inputtedToppings = $('.form-check-input:checked').map(function() {
      newPizza.toppings.push($(this).val());
    });
    var inputtedSize = ($('input:radio[name="size"]:checked').val());
    newPizza.size.push(inputtedSize);
    $('#price').text(newPizza.price());
    // $('.form-check').empty();
  });
});
