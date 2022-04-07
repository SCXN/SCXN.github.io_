<?php // 𝓡𝑜𝓁𝓁 𝑜𝓊𝓉 𝓉𝒽𝑒 𝓅𝑜𝓈𝓈𝒾𝒷𝓁𝑒 ｓｅｌｅｃｔｉｏｎｓ ↓ 
    $dirImg = 'socialStrategy/img';
    $dirWU = 'socialStrategy/writeUp';
    $filesImg = scandir($dirImg);
    $filesWU = scandir($dirWU);
    $quant = count($filesImg)-1;
    for ($i = 2; $i <= $quant; $i++) {
        echo '<span class="socialStrategySelectionCase superCentered selectionCase"><img class="socialStrategySelection" src="socialStrategy/img/',$filesImg[$i],'" alt=""><span class="hidden socialStrategyWriteUp hiddenWriteUp">',include("/socialStrategy/writeUp/$filesWU[$i]"),'</span></span>';
    }
?>



