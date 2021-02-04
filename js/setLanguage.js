// Change Language
function changeLanguage(language){
    var lang= sessionStorage.setItem("language", language);
    switch(lang){
        // case 1:
        //     json = YOUR_LANGUAGE;
        //     break;
        default:
            json = ptbr;
            break;
        }
}