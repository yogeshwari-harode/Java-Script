<!DOCTYPE html>
<html>
<head>
	<title>javascript</title>
	<style>
		
		body{
			background-color: tan;
			text-align: center;
		}
		button{
			margin: 150px;
			background-color: #e74c3c;
			border: none;
			padding: 12px 50px;
			border-radius: 20px;
			box-shadow: 2px 4px 5px;
		}

	</style>
</head>



<script>
	
	function hello()
	{
		var name = prompt("What is your name : ");
		document.write("Hello " + name);
	}
</script>

<body>

<button type="button" onclick="hello()">Click me</button>

</body>
</html>
