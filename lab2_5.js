//Function
let id;
let name;
let course;
let sem;
let HTML;
let CSS;
let JS;

function Student(id,name,course,sem){
  console.log(`Student Id:${id}\nStudent name:${name}\nCourse:${course}\nSemester:${sem}`);

}

function Marks(HTML,CSS,JS){

   console.log(`Marks of the Subjects:\nHTML:${HTML}\nCSS:${CSS}\nJS:${JS}`);
   let result= HTML+CSS+JS;
   console.log(`Result:${result}`);
   let percentage = (result/300)*100
   console.log(`Percentage:${percentage}`);
}

Student(1,"John","BTECH",1)
Marks(50,60,70)

Student(2,"Joe","BCA",2)
Marks(70,80,90)
