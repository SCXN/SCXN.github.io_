// '𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎 - 𝐣𝐢𝐧𝐠𝐥𝐞𝐬 & 𝐭𝐡𝐞𝐦𝐞𝐬' gallery ｖａｒｉａｂｌｅｓ}
let jinglesAndThemesSelection = document.querySelectorAll(".jinglesAndThemesSelection")
let jinglesAndThemesSelected = document.getElementById("jinglesAndThemesExhibitImg")
let jinglesAndThemesCap = document.getElementById("jinglesAndThemesExhibitCap")
let jinglesAndThemesButt = document.getElementById("jinglesAndThemesExhibitButt")
let jinglesAndThemesTorso = document.getElementById("jinglesAndThemesGalleryBackgroundImg_")
let jinglesAndThemesSelectionCase = document.querySelectorAll(".jinglesAndThemesSelectionCase")
let jinglesAndThemesWriteUp = document.querySelectorAll(".jinglesAndThemesWriteUp")
let jinglesAndThemesWriteUpCase = document.getElementById("jinglesAndThemesExhibitAside")
let jinglesAndThemesSwitcher = document.getElementById("jinglesAndThemesExhibitSwitch")
let jinglesAndThemesSwitcherClose = document.getElementById("jinglesAndThemesSwitcherClose")
let jinglesAndThemesWriteUpCaseClasses = document.getElementById("jinglesAndThemesExhibitAside")

for (i = 0; i < jinglesAndThemesSelection.length; i++) {
    let jinglesAndThemesSel = jinglesAndThemesSelection[i].src;
    jinglesAndThemesSelection[i].onclick = function(){
        jinglesAndThemesCap.src = jinglesAndThemesSel,
        jinglesAndThemesSelected.src = jinglesAndThemesSel,
        jinglesAndThemesTorso.src = jinglesAndThemesSel,
        jinglesAndThemesButt.src = jinglesAndThemesSel;
    }
}
for (i = 0; i < jinglesAndThemesSelectionCase.length; i++) {
    let jinglesAndThemesWU = jinglesAndThemesWriteUp[i].innerHTML;            
    jinglesAndThemesSelectionCase[i].onclick = function(){
        jinglesAndThemesWriteUpCase.innerHTML = jinglesAndThemesWU;
    }
}

jinglesAndThemesSwitcher.onclick = function(){
    if (jinglesAndThemesWriteUpCaseClasses.className == "vertCentered textMarginBottomCase ghost"){
        jinglesAndThemesWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase",
        jinglesAndThemesSwitcher.className="hidden",
        jinglesAndThemesSwitcherClose.className="vertCentered textRight h100 whiteText"
    } else {
        jinglesAndThemesWriteUpCaseClasses.classList == "vertCentered textMarginBottomCase ghost"
    }
}
jinglesAndThemesSwitcherClose.onclick = function(){
    jinglesAndThemesWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase ghost",
    jinglesAndThemesSwitcher.className="vertCentered textRight h100 whiteText",
    jinglesAndThemesSwitcherClose.className="hidden";
}