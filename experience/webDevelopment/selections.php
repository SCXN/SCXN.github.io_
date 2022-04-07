<?php // 𝓡𝑜𝓁𝓁 𝑜𝓊𝓉 𝓉𝒽𝑒 𝓅𝑜𝓈𝓈𝒾𝒷𝓁𝑒 ｓｅｌｅｃｔｉｏｎｓ ↓ 
    $dirImg = 'webDevelopment/img';
    $dirWU = 'webDevelopment/writeUp';
    $filesImg = scandir($dirImg);
    $filesWU = scandir($dirWU);
    $quant = count($filesImg)-1;
    for ($i = 2; $i <= $quant; $i++) {
        echo '<span class="webDevelopmentSelectionCase superCentered selectionCase"><img class="webDevelopmentSelection" src="webDevelopment/img/',$filesImg[$i],'" alt=""><span class="hidden webDevelopmentWriteUp hiddenWriteUp">',include("/webDevelopment/writeUp/$filesWU[$i]"),'</span></span>';
    }
?>



