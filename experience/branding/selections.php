<?php // 𝓡𝑜𝓁𝓁 𝑜𝓊𝓉 𝓉𝒽𝑒 𝓅𝑜𝓈𝓈𝒾𝒷𝓁𝑒 ｓｅｌｅｃｔｉｏｎｓ ↓ 
    $dirImg = 'branding/img';
    $dirWU = 'branding/writeUp';
    $filesImg = scandir($dirImg);
    $filesWU = scandir($dirWU);
    $quant = count($filesImg)-1;
    for ($i = 2; $i <= $quant; $i++) {
        echo '<span class="brandingSelectionCase superCentered selectionCase"><img class="brandingSelection" src="branding/img/',$filesImg[$i],'" alt=""><span class="hidden brandingWriteUp hiddenWriteUp">',include("/branding/writeUp/$filesWU[$i]"),'</span></span>';
    }
?>



