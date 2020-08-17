<?php
if(isset($_POST['bgc1'])){
$bgc1 = $_POST['bgc1'];
$bgc2 = $_POST['bgc2'];
echo '<style>c1{background-color='.bgc2'} c2{background-color='.bgc1'}</style>';
};?>
