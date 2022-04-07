// '𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎 - 𝐬𝐨𝐜𝐢𝐚𝐥 𝐬𝐭𝐫𝐚𝐭𝐞𝐠𝐲' gallery ｖａｒｉａｂｌｅｓ}
let socialStrategySelection = document.querySelectorAll(".socialStrategySelection")
let socialStrategySelected = document.getElementById("socialStrategyExhibitImg")
let socialStrategyCap = document.getElementById("socialStrategyExhibitCap")
let socialStrategyButt = document.getElementById("socialStrategyExhibitButt")
let socialStrategyTorso = document.getElementById("socialStrategyGalleryBackgroundImg_")
let socialStrategySelectionCase = document.querySelectorAll(".socialStrategySelectionCase")
let socialStrategyWriteUp = document.querySelectorAll(".socialStrategyWriteUp")
let socialStrategyWriteUpCase = document.getElementById("socialStrategyExhibitAside")
let socialStrategySwitcher = document.getElementById("socialStrategyExhibitSwitch")
let socialStrategySwitcherClose = document.getElementById("socialStrategySwitcherClose")
let socialStrategyWriteUpCaseClasses = document.getElementById("socialStrategyExhibitAside")

for (i = 0; i < socialStrategySelection.length; i++) {//          𝓕or every socialStrategySelection,
    let socialStrategySel = socialStrategySelection[i].src;              
    socialStrategySelection[i].onclick = function(){//            upon being socialStrategySelected:
        socialStrategyCap.src = socialStrategySel,//                        1.) switch header bg
        socialStrategySelected.src = socialStrategySel,//                   2.) switch main exhibit
        socialStrategyTorso.src = socialStrategySel,//                      3.) switch gallery bg
        socialStrategyButt.src = socialStrategySel;//                       4.) switch footer bg..
    }//                                                         ··ᵗᵒ ˢᵉˡᵉᶜᵗⁱᵒⁿ
}
for (i = 0; i < socialStrategySelectionCase.length; i++) {//      𝓕or every socialStrategySelection,
    let socialStrategyWU = socialStrategyWriteUp[i].innerHTML;            
    socialStrategySelectionCase[i].onclick = function(){//        upon being socialStrategySelected:
        socialStrategyWriteUpCase.innerHTML = socialStrategyWU;//       Insert write-up into exhibit
    }//                                                    ⁽ᵃˡᵗʰᵒᵘᵍʰ ʷʳⁱᵗᵉ⁻ᵘᵖ ʳᵉᵐᵃⁱⁿˢ ʰⁱᵈᵈᵉⁿ⁾
}
// make writ-up visible or hidden & switch out button text ——
socialStrategySwitcher.onclick = function(){
    if (socialStrategyWriteUpCaseClasses.className == "vertCentered textMarginBottomCase ghost"){
        socialStrategyWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase",
        socialStrategySwitcher.className="hidden",
        socialStrategySwitcherClose.className="vertCentered textRight h100 whiteText"
    } else {
        socialStrategyWriteUpCaseClasses.classList == "vertCentered textMarginBottomCase ghost"
    }
}
socialStrategySwitcherClose.onclick = function(){
    socialStrategyWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase ghost",
    socialStrategySwitcher.className="vertCentered textRight h100 whiteText",
    socialStrategySwitcherClose.className="hidden";
}