let a= ["The greatest glory in living lies not in never falling,but in rising every time we fall.",
"The way to get started is to quit talking and begin doing.",
"Your time is limited, so don't wasteit living someone else's life.",
"If life were predictable it would cease to be life, and be without flavor."];
   function quote(){
    
   let random=Math.floor(Math.random()*(a.length));
   document.getElementById('Quote').innerHTML=a[random];
}




