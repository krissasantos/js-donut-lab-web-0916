//JS Donut Counter Lab

//declare 2 variables one for guests and one for donuts

//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.


//use parseInt to convert the users answer from a string to an integer.


//write a conditional to check if there are enough donuts
// function donutsAnyone(donuts, guests){
//     var donuts = parseInt(prompt("Number of donuts?"))
//     var guests = parseInt(prompt("Number of guests?"))
//
//   if (donuts < guests) {
//     // return `Not enough donuts for your guests! Currently: {donuts} {guests}`
//     return "Not enough donuts for your guests! + donuts" ;
//   }
//   else {
//     alert("Not enough donuts for your guests! + guests + donuts")
//     // alert("Hello!")
//   }
// }

function donutsAnyone() {
    var donuts = parseInt(prompt("Number of donuts?"))
    var guests = parseInt(prompt("Number of guests?"))

  if (donuts < guests) {
    return `Not enough donuts for your guests! Currently: Guests: ${guests} ||  Donuts: ${donuts}` ;
  }
  else {
        alert(`Donut Party! Currently: Guests:${guests} || Donuts: ${donuts}`)
  }
}


  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
