<?php
$page = $_GET['p'];
if($_GET['p'] == "" || $_GET['p'] == null) {
	$page = "1";
}
echo file_get_contents('http://www.recipepuppy.com/api/?q=' . $_GET['q'] . '&i=' . $_GET['i'] . '&p=' . $page );
?>