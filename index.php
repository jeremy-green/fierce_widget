<?php
	$p = isset($_GET['pub']) ? $_GET['pub'] : 'finance';
?>
<!DOCTYPE html>
<html dir="ltr" lang="en-US">
<head>
<meta charset="UTF-8" />
<title>TEST</title>
<style type="text/css">
label {
	display:block;
}
.left {
	float:left;
}
.right {
	float:right;
}
textarea {
	width:350px;
}
</style>
</head>
<body>
<div class="left">
<?php
$pub = array(
	'finance', 'financeit', 'complianceit', 'biotech', 'biotechit', 'biotechresearch', 'biomarkers', 'drugdelivery', 'medicaldevices', 'pharma', 'pharmamanufacturing', 'vaccines', 'cro', 'government', 'governmentit', 'homelandsecurity', 'cio', 'mobileit', 'contentmanagement', 'healthcare', 'healtit', 'healthfinance', 'mobilehealthcare', 'healthpayer', 'practicemanagement', 'energy', 'smartgrid'
);
?>
<script src="script.js"></script>
<script>Fierce.go({
	publication: "<?php echo $p; ?>",
});
</script>
</div>
<div class="right">
<form action="" method="get">
<select id="pub" name="pub">
<?php foreach($pub as $item) : ?>
<option value="<?php echo $item; ?>">Fierce<?php echo ucwords($item); ?></option>
<?php endforeach; ?>
</select>
<input type="submit" value="Select a Publication" />
</form>
<label for="ta">Code to Copy:</label>
<textarea id="ta">
&lt;script src="script.js"&gt;&lt;script&gt;
&lt;script&gt;Fierce.go("<?php echo $p; ?>");&lt;script&gt;
</textarea>
</div>
</body>
</html>