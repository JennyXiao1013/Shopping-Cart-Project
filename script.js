var totalitem = [];
var prices = [];
var allprices = [];
$('.button').click(function() {
    var name = $(".things").val();
    var price = $(".price").val();
    $(".cart").append(
        '<div class="item"><p>' + name + '</p><p class="money">' + price + '</p></div>');
    // $('.cart').append("<p>" + totalitem + "</p>");
    totalitem.push(name);
    $(".totali").text("Total Item:" + totalitem.length);
    var totalPrice = 0;
    allprices.push(price);
    allprices.forEach(function(money) {
        var priceAsNumber = parseInt(money);
        totalPrice = totalPrice + priceAsNumber;
    });
    $(".totalp").text("Total Price:" + totalPrice);
});
$(".check").click (function(){
    var totalPrice = 0;
    allprices.forEach(function(money) {
        var priceAsNumber = parseInt(money);
        totalPrice = totalPrice + priceAsNumber;
alert("Your total is " + "$" + totalPrice + "." + " Thank you for your purchase " + totalitem[0] + " and other items.");
    
    });
});

// $(".button").click(function() {
//     var prices = $(".price").val();
//     allprices.push(prices);
//     $(".itemprice").append("<p>" + prices + "</p>");
// });