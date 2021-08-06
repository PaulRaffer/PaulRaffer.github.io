// Copyright (c) 2020 - 2021 Paul Raffer


function loadFile(filePath)
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open("GET", filePath, false);
	xmlhttp.send();
	return xmlhttp.responseText;
}


function include(filePath)
{
	document.write(loadFile(filePath));
}
