/*დაწერეთ პროგრამა, რომელიც მოსთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი1-დან 10დე. გამოიყენეთ ვაილის და დუ ვაილის ფუნქცეიბ/*/
let number =Number(prompt("enter the secret number from 1 to 10"))
secretNumber=7
while(number!==secretNumber){
    number=Number(prompt("enter the secret number from 1 to 10"))
}
 console.log("correct")
 
 
 let secretNumber=72;
 let number;

 do{
     number=Number(prompt("secret number"));
 }while (number!==secretNumber) 
 
 console.log("correct")
 
 /*დაწერეთ პროგრამ, რომელიც კონსოლში გამოპრინტავს რიცხვებს 0დან 10ის ჩათვლით*/
 for(let number=0; number<=10; number++) {
     console.log(number);
 } 
 /*დაწერე პროგრამ, რომელიც ბეჭდავს რიცხვებს 1დან 20დე for loopის გამოყენებით*/
 for(let number=0; number<20; number++) {
     console.log(number);
 }
 
 /* დაწერე პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს hello იმდენჯერ რამდენსაც უდრის ეს შეყვანილი რიცხ*/
 let Input = Number(prompt("pick the number"))
 for(let I = 0; I < Input; I++) {*/ 
     console.log('HELLO');
 }
 /*დაწერე პროგრამა, რომელიც გამოთვლის ყველა რიცხვის ჯამს 1დან 100დე*/
 
 let result = 0;
for (let i = 1; i < 100; i++) {
  result = result + i;
}
 console.log(result)
 /* დაწერეთ პროგრამა, რომელიც გამოთვლის კენტი რიცხვების ჯამს 0დან 100დე*/
 let result=0
 for(let i=1; i<=100; i++) {
  if(i % 2 !==0) {
      
     result=result+i;
  }
 }
 
console.log(result);
 

