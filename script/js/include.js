// Copyright (c) 2020 - 2021 Paul Raffer


function loadFile(filePath)
{
	var result = null;
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", filePath, true);
	xmlhttp.send();
	if (xmlhttp.status==200) {
		result = xmlhttp.responseText;
	}
	console.log(xmlhttp.status);
	return result;
}


function include(filePath)
{
	document.write(loadFile(filePath));
}
