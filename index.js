const skypeBtn = document.getElementById("skypeBtn");
const phoneBtn = document.getElementById("phoneBtn");
const emailBtn = document.getElementById("emailBtn");

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
    //resultPhone = phoneValue.replace(/\+\d.{13}/g,"****");
    /*if (phoneValue.length > 16) {
        phoneArr = phoneValue.split(' ');
        console.log(phoneArr);
    }*/
    
    phoneResult.innerText = resultPhone; 
}
phoneBtn.onclick = phoneAnonymizer;

function substr_replace (str, replace, start, length) { // eslint-disable-line camelcase
    //  discuss at: http://locutus.io/php/substr_replace/
    // original by: Brett Zamir (http://brett-zamir.me)
    //   example 1: substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 0)
    //   returns 1: 'bob'
    //   example 2: var $var = 'ABCDEFGH:/MNRPQR/'
    //   example 2: substr_replace($var, 'bob', 0, $var.length)
    //   returns 2: 'bob'
    //   example 3: substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 0, 0)
    //   returns 3: 'bobABCDEFGH:/MNRPQR/'
    //   example 4: substr_replace('ABCDEFGH:/MNRPQR/', 'bob', 10, -1)
    //   returns 4: 'ABCDEFGH:/bob/'
    //   example 5: substr_replace('ABCDEFGH:/MNRPQR/', 'bob', -7, -1)
    //   returns 5: 'ABCDEFGH:/bob/'
    //   example 6: substr_replace('ABCDEFGH:/MNRPQR/', '', 10, -1)
    //   returns 6: 'ABCDEFGH://'
  
    if (start < 0) {
      // start position in str
      start = start + str.length
    }
    length = length !== undefined ? length : str.length
    if (length < 0) {
      length = length + str.length - start
    }
  
    return [
      str.slice(0, start),
      replace.substr(0, length),
      replace.slice(length),
      str.slice(start + length)
    ].join('')
  }
  

//  Email anonymizer
function emailAnonymizer() { 
    let emailValue = document.getElementById("emailValue").value,
    emailResult = document.getElementById("emailResult");
    //let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    let resultEmail;
    if (resultEmail == undefined) {
        resultEmail = emailValue;
    }
    if (emailValue.search('@') != -1) {
        if (emailValue.search('ipsum') != -1) {
            resultEmail = emailValue;
        } else {
            let length = emailValue.indexOf('@')-2;
            let asterisk = '#';

            if (emailValue.search('Lorem') != -1) {
                for (let i = 7; i < length; i++) {
                    asterisk += '#';
                }
                resultEmail = substr_replace(emailValue, asterisk, 7, length-2);
            } else {
                for (let i = 1; i < length; i++) {
                    asterisk += '#';
                }
                resultEmail = substr_replace(emailValue, asterisk, 1, length);
            }
            
        }

    }
    

    emailResult.innerText = resultEmail; 
}
emailBtn.onclick = emailAnonymizer;