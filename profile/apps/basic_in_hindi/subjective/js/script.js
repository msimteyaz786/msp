

if(sessionStorage.getItem("user") == null)
    {
        window.location.replace("../../../index.html");
    }
    else
    {
        var current_user = sessionStorage.getItem("user");
    
        //yaha se all contact wala profile ka codting start hua hai. 
        function profile()
        {
        var profile_pic = document.getElementById("profile_pic");
        var url = localStorage.getItem(current_user+"image");
        profile_pic.style.backgroundImage = "url("+url+")";
        profile_pic.style.backgroundSize = "cover";
        profile_pic.style.backgroundPosition = "top";
        profile_pic.style.cursor = "not-allowed";        }
        profile();
        
           
    
        //search ki functionality yaha sse start hoti hai. aur ek line ka code upar hai jo ki line number 62 me hua hai. okay
        var search = document.getElementById("search");
        search.oninput = function()
        {
            var all_contact_name = document.getElementsByClassName("contact_name");
            var i;
            for(i=0; i<all_contact_name.length; i++)
            {
                if(all_contact_name[i].innerHTML.toUpperCase().match(search.value.toUpperCase())) //touppercase case ka matlab ki capital hop ya small letter sab search list me aa jata hai. thik hai bhai.
                {
                    all_contact_name[i].parentElement.style.display = "block";
                    //parentElement ko nahi rakhne par sirf name hi block hota hai
                }
                else
                {
                    all_contact_name[i].parentElement.style.display = "none";
    
                }
            }
    
        }
    }
