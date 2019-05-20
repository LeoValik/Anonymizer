define(function (require) {

    const emailBtn = document.getElementById("emailBtn");
    //  Email anonymizer
    function emailAnonymizer() { 
        let emailValue = document.getElementById("emailValue").value,
        emailResult = document.getElementById("emailResult");
        //let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let resultEmail;
        let substr = require('./substr_replace');  // For file substr_replace.js
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
                    resultEmail = substr.substr_replace(emailValue, asterisk, 7, length-2);
                } else {
                    for (let i = 1; i < length; i++) {
                        asterisk += '#';
                    }
                    resultEmail = substr.substr_replace(emailValue, asterisk, 1, length);
                }           
            }
        }

        emailResult.innerText = resultEmail; 
        
    }
    emailBtn.onclick = emailAnonymizer;
});

