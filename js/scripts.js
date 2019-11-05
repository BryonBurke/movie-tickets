function Ticket (title, time, finalPrice){
  this.title = title,
  this.time = time,
  this.price = price

}


var ticketPrice = function(movieTime, seniorDiscount, premium){
  if (seniorDiscount === 'on') {
    price = 7;
  } else if(movieTime === '3pm') {
    price = 9;
  } else if(premium === true){
    price = 12;
  } else {
    price = 10}
  console.log(price);
  return price;
}






$(document).ready(function () {
  $('#movieTickets').submit(function (event) {
    event.preventDefault();


    var movieTitle = $("#movieTitles").val();
    var movieTime = $("#movieTimes").val();
    var seniorDiscount =$("#seniorDiscount:checked").val();
    var premium;

    if (movieTitle === "PremiumMovie"){
      premium = true
    }
    var finalPrice = ticketPrice(movieTime, seniorDiscount, premium)









    let myTicket = new Ticket(movieTitle, movieTime, finalPrice)
    console.log(myTicket);
    // myTicket.price();


    // console.log(myTicket);
    // console.log(myTicket.discount);






  })
});
