<?php // 𝓡𝑜𝓁𝓁 𝑜𝓊𝓉 𝓉𝒽𝑒 𝓅𝑜𝓈𝓈𝒾𝒷𝓁𝑒 ｓｅｌｅｃｔｉｏｎｓ ↓ 
    $dirImg = 'jinglesAndThemes/img';
    $dirWU = 'jinglesAndThemes/writeUp';
    $filesImg = scandir($dirImg);
    $filesWU = scandir($dirWU);
    $quant = count($filesImg)-1;
    for ($i = 2; $i <= $quant; $i++) {
        echo '<span class="jinglesAndThemesSelectionCase superCentered selectionCase"><img class="jinglesAndThemesSelection" src="jinglesAndThemes/img/',$filesImg[$i],'" alt=""><span class="hidden jinglesAndThemesWriteUp hiddenWriteUp">',include("/jinglesAndThemes/writeUp/$filesWU[$i]"),'</span></span>';
    }
?>



