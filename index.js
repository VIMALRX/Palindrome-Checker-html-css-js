document.getElementById("head").textContent="Palindrome Checker";
function check(){
    let a=document.getElementById("pal").value;
    let c=document.getElementById("result")
    let b=a.toLowerCase();
    let t="";
        for(j=b.length-1;j>=0;j--){
          t+=b.charAt(j);
        }
    
    if(t==b){
    c.textContent="palindrome";
c.style.color="green"}
    else{
    c.textContent="Not palindrome";
    c.style.color="red"; 
    }
}
