function theme(ID = "darkOrLight", ID2 = "theme",home="https://hanralatalliardwork.github.io/wolf_escape_home/",themeD="files/customisation/css/boostrap_dark.css",themeL="files/customisation/css/bootstrap.css") {
    var WasChecked = document.getElementById(ID).checked,
    if (WasChecked === false) {
        document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL+"\">";
        createCookie('theme',"L","","/");
    } else {
        document.getElementById(ID2).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeD+"\">";
        createCookie('theme',"D","","/");
    }
}

function initialiseTheme(ID,IDRead,,home="https://hanralatalliardwork.github.io/wolf_escape_home/",themeD="files/customisation/css/boostrap_dark.css",themeL="files/customisation/css/bootstrap.css") {
    try {
        e=readCookie("theme")
        if (e==="L"){
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL +"\">";
            document.getElementById(IDRead).checked=false;
            createCookie("theme","L","","/")
        }
        if (e==="D"){
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeD+ "\">";
            document.getElementById(IDRead).checked=true;
            createCookie("theme","D","","/")
        }
        if (e===""){
            document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL+"\">";
            document.getElementById(IDRead).checked=false;
            createCookie("theme","L","","/")
        }
    } catch(err) {
        document.getElementById(ID).innerHTML = "<link rel=\"stylesheet\" href=\"" + home + themeL+"\">";
        // document.cookie="theme=L";
        createCookie("theme","L","","/");
    }
}