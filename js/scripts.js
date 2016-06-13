//business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

var newContact;

// user interface logic
$(document).ready(function() {
  $('#add-address').click(function() {
    var addressHTML = "";
    var addressHTML = $('#new-addresses').html;
    $('#new-addresses').append(addressHTML);

  });
    $("form#new-contact").submit(function(event) {
      event.preventDefault();

      var inputtedFirstName = $("input#new-first-name").val();
      var inputtedLastName = $("input#new-last-name").val();

      newContact = new Contact(inputtedFirstName, inputtedLastName);

      $(".new-address").each(function() {
        var inputtedStreet = $(this).find("input.new-street").val();
        var inputtedCity = $(this).find("input.new-city").val();
        var inputtedState = $(this).find("input.new-state").val();
        var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState);
        newContact.addresses.push(newAddress);
      });

      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");
      });

      $(".contact").last().click(function() {
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.firstName);
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);

        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.state + "</li>");
      });

      $("input#new-first-name").val("");
      $("input#new-last-name").val("");
    });

});
