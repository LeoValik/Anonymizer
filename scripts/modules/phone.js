define(function (require) {

    const phoneBtn = document.getElementById("phoneBtn");
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
});

