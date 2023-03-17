function scuberGreetingForFeet(distance) {
  let result;
 if (distance < 400 ) {
    result = 'This one is on me!';
  } else if (distance < 2000) {
    result = "That will be twenty bucks.";
  } else if   (distance > 2000){
    result = "I will gladly take your thirty bucks.";
    if (distance > 2500) {
      result = "No can do."
    } 
  }
 return result;
}

function ternaryCheckCity(city){
  let checkCity; 
  // Write your code here!
  return (city === 'NYC' ? "Ok, sounds good." : "No go."); 
   
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  
  let says;
  switch (tip) {
    case 'generous' :
      says = "Thank you so much.";
    break; 
    case 'not as generous':
      says = "Thank you.";
    break;
   default:
      says = "Bye."
    break;
  }
  return says;
}