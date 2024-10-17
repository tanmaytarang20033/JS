let month="December";
let season;

switch (month){
    case "January" : case "February": case "December":
        season="Winter Season";
        break;

     case "March" : case "April" : case  "May":
        season="Spring Season";
        break;
        
     case "June": case "July": case "August":
        season="Summer Season";
        break;
        
     default:
        season="Autumn Season";
        break;
}
        
console.log(season);
      
