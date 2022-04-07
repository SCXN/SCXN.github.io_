// '𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎 - 𝐰𝐞𝐛 𝐝𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭' gallery ｖａｒｉａｂｌｅｓ}
let webDevelopmentSelection = document.querySelectorAll(".webDevelopmentSelection")
let webDevelopmentSelected = document.getElementById("webDevelopmentExhibitImg")
let webDevelopmentCap = document.getElementById("webDevelopmentExhibitCap")
let webDevelopmentButt = document.getElementById("webDevelopmentExhibitButt")
let webDevelopmentTorso = document.getElementById("webDevelopmentGalleryBackgroundImg_")
let webDevelopmentSelectionCase = document.querySelectorAll(".webDevelopmentSelectionCase")
let webDevelopmentWriteUp = document.querySelectorAll(".webDevelopmentWriteUp")
let webDevelopmentWriteUpCase = document.getElementById("webDevelopmentExhibitAside")
let webDevelopmentSwitcher = document.getElementById("webDevelopmentExhibitSwitch")
let webDevelopmentSwitcherClose = document.getElementById("webDevelopmentSwitcherClose")
let webDevelopmentWriteUpCaseClasses = document.getElementById("webDevelopmentExhibitAside")

for (i = 0; i < webDevelopmentSelection.length; i++) {//          𝓕or every webDevelopmentSelection,
    let webDevelopmentSel = webDevelopmentSelection[i].src;              
    webDevelopmentSelection[i].onclick = function(){//            upon being webDevelopmentSelected:
        webDevelopmentCap.src = webDevelopmentSel,//                        1.) switch header bg
        webDevelopmentSelected.src = webDevelopmentSel,//                   2.) switch main exhibit
        webDevelopmentTorso.src = webDevelopmentSel,//                      3.) switch gallery bg
        webDevelopmentButt.src = webDevelopmentSel;//                       4.) switch footer bg..
    }//                                                         ··ᵗᵒ ˢᵉˡᵉᶜᵗⁱᵒⁿ
}
for (i = 0; i < webDevelopmentSelectionCase.length; i++) {//      𝓕or every webDevelopmentSelection,
    let webDevelopmentWU = webDevelopmentWriteUp[i].innerHTML;            
    webDevelopmentSelectionCase[i].onclick = function(){//        upon being webDevelopmentSelected:
        webDevelopmentWriteUpCase.innerHTML = webDevelopmentWU;//       Insert write-up into exhibit
    }//                                                    ⁽ᵃˡᵗʰᵒᵘᵍʰ ʷʳⁱᵗᵉ⁻ᵘᵖ ʳᵉᵐᵃⁱⁿˢ ʰⁱᵈᵈᵉⁿ⁾
}
// make writ-up visible or hidden & switch out button text ——
webDevelopmentSwitcher.onclick = function(){
    if (webDevelopmentWriteUpCaseClasses.className == "vertCentered textMarginBottomCase ghost"){
        webDevelopmentWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase",
        webDevelopmentSwitcher.className="hidden",
        webDevelopmentSwitcherClose.className="vertCentered textRight h100 whiteText"
    } else {
        webDevelopmentWriteUpCaseClasses.classList == "vertCentered textMarginBottomCase ghost"
    }
}
webDevelopmentSwitcherClose.onclick = function(){
    webDevelopmentWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase ghost",
    webDevelopmentSwitcher.className="vertCentered textRight h100 whiteText",
    webDevelopmentSwitcherClose.className="hidden";
}