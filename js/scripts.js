//Business Logic
function TicketRecipt(){
  this.tickets = [],
  this.currentId = 0
}

TicketRecipt.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket);
}

TicketRecipt.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


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
  return price;
}

function displayTicket(ticketToDisplay){
  var ticketResult = $('.ticketResult');
}

//User Logic
var ticketRecipt = new TicketRecipt();

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
    let ticket = new Ticket(movieTitle, movieTime, finalPrice)

    ticketRecipt.addTicket(ticket);

    console.log(ticketRecipt);
  })
});
