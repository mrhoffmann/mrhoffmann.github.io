<!DOCTYPE html>
<html lang="EN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0" http-equiv="Cache-control" content="public">
<link rel="stylesheet" href="css.css" Content-Type="text/css; charset=utf-8"/>
<?php
$domain = "<domain here>"
$email = "email@".$domain;
$default = "https://".$domain;
$size = 250;
$url = "https://www.gravatar.com/avatar/" . md5( strtolower( trim( $email ) ) ) . "?d=" . urlencode( $default ) . "&s=" . $size;
$default = str_replace("http", "", str_replace("https", "", str_replace("://", "", $default)));
?>
<title><?php echo $default ?></title>
</head>
<body>
<img id="circle" src="<?php echo $url ?>" title="<?php echo $url ?>"/>
</body>
</html>
