//Business Logic
function TicketReciept(){
  this.tickets = [],
  this.currentId = 0
}

TicketReciept.prototype.addTicket = function(ticket) {
  ticket.id = this.assignId();
  this.tickets.push(ticket);
}

TicketReciept.prototype.assignId = function() {
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
    price = '$' + 7 + ' - Senior Discount';
  } else if(movieTime === '3pm') {
    price = '$' + 9 + ' - Matinee Discount';
  } else if(premium === true){
    price = '$' + 12 + ' - First Run';
  } else {
    price = '$' + 10}
  return price;
}

function displayTicket(ticketToDisplay){
  var ticketList = $("ul#userTicket");
  var htmlForContactInfo = "";
  ticketToDisplay.tickets.forEach(function(ticket) {
    htmlForContactInfo += "<li id=" + ticket.id + ">" + "Title: " + ticket.title + " <br>Time: " + ticket.time + "<br> Price: " + ticket.price +  "</li><br>";
  });
  ticketList.html(htmlForContactInfo);
}

//User Logic
var ticketReciept = new TicketReciept();

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

    ticketReciept.addTicket(ticket);

    console.log(ticketReciept);
    displayTicket(ticketReciept)
  })
});
