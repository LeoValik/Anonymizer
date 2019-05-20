define(function (require) {

    const skypeBtn = document.getElementById("skypeBtn");
    //  Skype usernames anonymizer
    function skypeAnonymizer() {
        let skypeValue = document.getElementById("skypeValue").value,
        skypeResult = document.getElementById("skypeResult");

        let spliter = skypeValue.match(/\w+/g);
        let resultSkype;
        for (let i=0; i < spliter.length; i++) {
            if (spliter[i] == 'skype')
                {
                    if (spliter[i+2] == 'call') 
                    {
                        //spliter[i+1] = 'X';
                        resultSkype = skypeValue.split(`${spliter[i+1]}`).join('X');
                    }
                    else if (spliter[i+2] == 'chat') 
                    {
                        //spliter[i+1] = '*';
                        resultSkype = skypeValue.split(`${spliter[i+1]}`).join('*');
                    }
                    //else spliter[i+1] = '#';
                    else 
                    {
                        resultSkype = skypeValue.split(`${spliter[i+1]}`).join('#');
                    }
                } 
            if (resultSkype == undefined) {
                resultSkype = skypeValue;
            }
            skypeResult.innerText = resultSkype;       
        }

    }
    skypeBtn.onclick = skypeAnonymizer;
});

