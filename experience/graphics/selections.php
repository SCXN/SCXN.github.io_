<?php // 𝓡𝑜𝓁𝓁 𝑜𝓊𝓉 𝓉𝒽𝑒 𝓅𝑜𝓈𝓈𝒾𝒷𝓁𝑒 ｓｅｌｅｃｔｉｏｎｓ ↓ 
    $dirImg = 'graphics/img';
    $dirWU = 'graphics/writeUp';
    $filesImg = scandir($dirImg);
    $filesWU = scandir($dirWU);
    $quant = count($filesImg)-1;
    for ($i = 2; $i <= $quant; $i++) {
        echo '<span class="graphicsSelectionCase superCentered selectionCase"><img class="graphicsSelection" src="graphics/img/',$filesImg[$i],'" alt=""><span class="hidden graphicsWriteUp hiddenWriteUp">',include("/graphics/writeUp/$filesWU[$i]"),'</span></span>';
    }
?>



