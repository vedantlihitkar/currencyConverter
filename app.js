/// prject is incomplete 


const base_url ="https://api.currencyapi.com/v3/latest?apikey=cur_live_7UStkUqQNBmahSoy8K635tE3Sjr5fK1UVPmVloZ2&base_currency="


const dropdown = document.querySelectorAll(".dropdown select");
const button =document.querySelector("button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");


for (let select of dropdown) {
    for (let currcode in countryList) {
        let newOPt = document.createElement("option");
        //onewOpt se option me values populate hoge matlab ke ek option me ek currcode aiyga
        newOPt.innerText = currcode;
        newOPt.value = currcode;
        if (select.name === "from" && currcode === "USD") {
            newOPt.selected = "selected"
        } else if(select.name === "to" && currcode === "INR"){
            newOPt.selected = "selected"
        }
  // ye if else se default value set hora 
        select.append(newOPt);
    }
    select.addEventListener("change",(evt)=>{
        updatFlag(evt.target)
        //target -jaha change aiya vo hum updateflag to pass karege
    })
}


const updatFlag =(element)=>{
    let currcode=element.value; 
    // element parameter aiya target se(currency code )

   let countryCode =countryList[currcode];
   let newSrc =`https://flagsapi.com/${countryCode}/flat/64.png`
   let img =element.parentElement.querySelector("img");
img.src =newSrc
}


button.addEventListener("click", async (evt)=>{
 evt.preventDefault()//ye use karne se default valuse vapas set nhi hogi usa ind vagera
 let amount =document.querySelector(".amount input")
 let amtvalue =amount.value;
//  console.log(amtvalue)
 if(amtvalue ===""|| amtvalue<1){
    amtvalue=1;
    amount.value ="1";
}

// console.log(fromCurr.value,toCurr.value);
// const URL = `${base_url}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;

let response = await fetch ();
// console.log(response);
let data = await response.json()

})
