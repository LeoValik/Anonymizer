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


    //let spliter = skypeValue.split(/:|,/);
    let spliter = skypeValue.match(/\w+/g);
    console.log(skypeValue);
    console.log(spliter);
/*
    for (let i=0; i < spliter.length; i++) {
        if (spliter[i] == 'skype')
            {
                if (spliter[i+2] == 'call') 
                {
                    spliter[i+1] = 'X';
                }
                else if (spliter[i+2] == 'chat') 
                {
                    spliter[i+1] = '*';
                }
                else spliter[i+1] = '#';
            }
    }
    skypeResult.innerHTML = spliter.join(':');
*/
let resultSkype;
for (let i=0; i < spliter.length; i++) {
    if (spliter[i] == 'skype')
        {
            if (spliter[i+2] == 'call') 
            {
                //spliter[i+1] = 'X';
                resultSkype = skypeValue.split(`${spliter[i+1]}`).join('X');
                console.log(skypeValue.split(`${spliter[i+1]}`).join('X'));
            }
            else if (spliter[i+2] == 'chat') 
            {
                //spliter[i+1] = '*';
                resultSkype = skypeValue.split(`${spliter[i+1]}`).join('*');
                console.log(skypeValue.split(`${spliter[i+1]}`).join('*'));
            }
            //else spliter[i+1] = '#';
            else 
            {
                resultSkype = skypeValue.split(`${spliter[i+1]}`).join('#');
                console.log(skypeValue.split(`${spliter[i+1]}`).join('#'));
            }
        } 
        /*if (spliter[i] != 'skype') 
        {
            resultSkype = skypeValue;
        }*/

        skypeResult.innerHTML = resultSkype;
        

    }

}
skypeBtn.onclick = skypeAnonymizer;



    //  skypeValue.includes('skype');

    /*  let spliter = skypeValue.split(/:|,/);  // Result: (2) ["skype", "lorem"]
        spliter[1] = '#';       // spliter[1]="lorem" -> spliter[1]="#"
        spliter.join(':');      // Result: "skype:#"
    */

  /* if (skypeValue == '') {
    skypeResult.innerHTML = '';
   } else {
        let spliter = skypeValue.split(/:|,/);  // Result: (2) ["skype", "lorem"]
        spliter[1] = '#';       // spliter[1]="lorem" -> spliter[1]="#"      
        skypeResult.innerHTML = spliter.join(':');       // Result: "skype:#"
   }*/

   //skypeResult.innerHTML = skypeValue.replace(/\s#\*.*/, '#');