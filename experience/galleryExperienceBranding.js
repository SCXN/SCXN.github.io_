// '𝙴𝚡𝚙𝚎𝚛𝚒𝚎𝚗𝚌𝚎 - 𝐛𝐫𝐚𝐧𝐝𝐢𝐧𝐠' gallery ｖａｒｉａｂｌｅｓ}
let brandingSelection = document.querySelectorAll(".brandingSelection")
let brandingSelected = document.getElementById("brandingExhibitImg")
let brandingCap = document.getElementById("brandingExhibitCap")
let brandingButt = document.getElementById("brandingExhibitButt")
let brandingTorso = document.getElementById("brandingGalleryBackgroundImg_")
let brandingSelectionCase = document.querySelectorAll(".brandingSelectionCase")
let brandingWriteUp = document.querySelectorAll(".brandingWriteUp")
let brandingWriteUpCase = document.getElementById("brandingExhibitAside")
let brandingSwitcher = document.getElementById("brandingExhibitSwitch")
let brandingSwitcherClose = document.getElementById("brandingSwitcherClose")
let brandingWriteUpCaseClasses = document.getElementById("brandingExhibitAside")

for (i = 0; i < brandingSelection.length; i++) {//          𝓕or every brandingSelection,
    let brandingSel = brandingSelection[i].src;              
    brandingSelection[i].onclick = function(){//            upon being brandingSelected:
        brandingCap.src = brandingSel,//                        1.) switch header bg
        brandingSelected.src = brandingSel,//                   2.) switch main exhibit
        brandingTorso.src = brandingSel,//                      3.) switch gallery bg
        brandingButt.src = brandingSel;//                       4.) switch footer bg..
    }//                                                         ··ᵗᵒ ˢᵉˡᵉᶜᵗⁱᵒⁿ
}
for (i = 0; i < brandingSelectionCase.length; i++) {//      𝓕or every brandingSelection,
    let brandingWU = brandingWriteUp[i].innerHTML;            
    brandingSelectionCase[i].onclick = function(){//        upon being brandingSelected:
        brandingWriteUpCase.innerHTML = brandingWU;//       Insert write-up into exhibit
    }//                                                    ⁽ᵃˡᵗʰᵒᵘᵍʰ ʷʳⁱᵗᵉ⁻ᵘᵖ ʳᵉᵐᵃⁱⁿˢ ʰⁱᵈᵈᵉⁿ⁾
}
// make writ-up visible or hidden & switch out button text ——
brandingSwitcher.onclick = function(){
    if (brandingWriteUpCaseClasses.className == "vertCentered textMarginBottomCase ghost"){
        brandingWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase",
        brandingSwitcher.className="hidden",
        brandingSwitcherClose.className="vertCentered textRight h100 whiteText"
    } else {
        brandingWriteUpCaseClasses.classList == "vertCentered textMarginBottomCase ghost"
    }
}
brandingSwitcherClose.onclick = function(){
    brandingWriteUpCaseClasses.classList = "vertCentered textMarginBottomCase ghost",
    brandingSwitcher.className="vertCentered textRight h100 whiteText",
    brandingSwitcherClose.className="hidden";
}