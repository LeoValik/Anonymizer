const skypeBtn = document.getElementById("skypeBtn");
/*function someFunc(){
    let skypeValue = document.getElementById("skypeValue").value,
    skypeResult = document.getElementById("skypeResult");

    //alert(document.getElementById("skypeValue").value);
    skypeResult.innerHTML = skypeValue;
    }
*/
//skypeBtn.onclick = someFunc;
    

//  Skype usernames anonymizer
function skypeAnonymizer() {
    let skypeValue = document.getElementById("skypeValue").value,
    skypeResult = document.getElementById("skypeResult");

    //  skypeValue.includes('skype');

    /*  let spliter = skypeValue.split(/:|,/);  // Result: (2) ["skype", "lorem"]
        spliter[1] = '#';       // spliter[1]="lorem" -> spliter[1]="#"
        spliter.join(':');      // Result: "skype:#"
    */

   let spliter = skypeValue.split(/:|,/);  // Result: (2) ["skype", "lorem"]
   spliter[1] = '#';       // spliter[1]="lorem" -> spliter[1]="#"      
   skypeResult.innerHTML = spliter.join(':');       // Result: "skype:#"

}
skypeBtn.onclick = skypeAnonymizer;