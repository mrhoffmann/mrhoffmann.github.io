<!DOCTYPE html>
<html lang="EN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" http-equiv="Cache-control" content="public">
<link rel="stylesheet" href="css.css"/>
<?php
$email="fredrik@hoffmanns.nu";
$default="https://hoffmanns.nu";
$url="https://www.gravatar.com/avatar/".md5(strtolower(trim($email)))."?d=".urlencode($default)."&s=250";
?>
<title><?php echo str_replace("http","",str_replace("https","",str_replace("://","",$default)))?></title>
</head>
<body>
<img src="<?php echo $url?>" title="<?php echo $url?>"/>
