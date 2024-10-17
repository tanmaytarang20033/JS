//for loop

let a
for(a=1;a<=10;a++){
    console.log(a);
}

//While loop

let b=1;
while(b>=10){
    console.log(b)
    b++;
}


//do while loop

let c=1;
do{
    c++;
    console.log(c);
}while(c>=10)


//break when number =6 with for loop

for(let i=1; i<=10 ; i++){
    if(i%2==0)
    {
        console.log("Even number");

        if(i==6)
        {
            break;
        }
    }

else {
    console.log("Odd number");
}
}