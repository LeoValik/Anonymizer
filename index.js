const skypeBtn = document.getElementById("skypeBtn");
const phoneBtn = document.getElementById("phoneBtn");

//  Skype usernames anonymizer
function skypeAnonymizer() {
    let skypeValue = document.getElementById("skypeValue").value,
    skypeResult = document.getElementById("skypeResult");

    let spliter = skypeValue.match(/\w+/g);
    console.log('Skype input is ' + skypeValue);
    console.log(spliter);

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
        if (resultSkype == undefined) {
            resultSkype = skypeValue;
        }
        skypeResult.innerText = resultSkype;       
    }

}
skypeBtn.onclick = skypeAnonymizer;

//  Phone number anonymizer
function phoneAnonymizer() { 
    let phoneValue = document.getElementById("phoneValue").value,
    phoneResult = document.getElementById("phoneResult");
    let resultPhone;

    if (resultPhone == undefined) {
        resultPhone = phoneValue;
    }
    //resultPhone = phoneValue.slice(0, -3).join('XXX');
    if ((phoneValue.length == 15) || (phoneValue.length == 16)) 
    {
        resultPhone = phoneValue.replace(/.{3}$/,"XXX");
    }
    
    phoneResult.innerText = resultPhone; 
}
phoneBtn.onclick = phoneAnonymizer;
