// Change Language
function changeLanguage(language){
    localStorage.setItem("lang", language);

    // Add your language option here (Don't use the number 0)
    switch(language){
        // case 1:
        //     json = YOUR_LANGUAGE;
        //     break;
        default:
            json = ptbr;
            break;
        }

    


    if(localStorage.getItem('page') == "index"){
        menu();
    } 
}