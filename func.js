document.querySelectorAll(".dialog").forEach(elem => 
{
    elem.querySelector("#pass").addEventListener("keyup",function(event)
    {
        let pwd=elem.querySelector("#pass").value;
        let label=elem.querySelector("p");
        if(pwd)
        {
            if(pwd.length>=8)
            {
                if(!(/\d/.test(pwd)))
                {
                    label.innerHTML="Please add atleast one number.";
                }
                else
                {
                    if(!(/[A-Z]/.test(pwd)))
                    {
                        label.innerHTML="Please add atleast one Uppercase Letter [A-Z]"
                    }
                    else
                    {
                        if(!(/[!@#$%^&*_]/.test(pwd)))
                        {
                            label.innerHTML="Please add atleast one Special Character"
                        }
                        else
                        {
                            label.innerHTML="Password acceptable"
                        }
                    }
                }
            }
            else
            {
                label.innerHTML="Please enter atleast 8 characters"
            }
        }
        else
        {
            label.innerHTML="Please enter a password";
        }
    })
});

document.querySelector("#passCnfm").addEventListener("keyup", function(event)
{
    let pwd=document.querySelector("#dlg1 #pass").value;
    let cnfPwd=document.querySelector("#passCnfm").value;
    let label=document.querySelector("#dlg1 p");
    if(pwd==cnfPwd)
    {
        label.innerHTML="Password Matches";
    }
    else
    {
        label.innerHTML="Please type same password again";
    }
});

document.querySelector("#signUpLink").addEventListener("click",function(event)
{
    let dialog1 = document.querySelector("#dlg");
    dialog1.style.transform = "translate(0px, -100vh)";
    
    let dialog2 = document.querySelector("#dlg1");
    dialog2.style.transform = "translate(0px, -105vh)";
});

document.querySelector("#logInLink").addEventListener("click",function(event)
{
    let dialog1 = document.querySelector("#dlg");
    dialog1.style.transform = "translate(0px, 0vh)";
    
    let dialog2 = document.querySelector("#dlg1");
    dialog2.style.transform = "translate(0px, 1vh)";
});