//document.getElementById("datetime").innerHTML = "WebSocket is not connected";

var websocket = new WebSocket('ws://'+location.hostname+'/');

function sendText(name) {
	console.log('sendText');
	var data = {};
	data["id"] = name;
	console.log('data=', data);
	json_data = JSON.stringify(data);
	console.log('json_data=' + json_data);
	websocket.send(json_data);
}

websocket.onopen = function(evt) {
	console.log('WebSocket connection opened');
	var data = {};
	data["id"] = "init";
	console.log('data=', data);
	json_data = JSON.stringify(data);
	console.log('json_data=' + json_data);
	websocket.send(json_data);
	//document.getElementById("datetime").innerHTML = "WebSocket is connected!";
}

websocket.onmessage = function(evt) {
	var msg = evt.data;
	console.log("msg=" + msg);
	var values = msg.split('\4'); // \4 is EOT
	console.log("values=" + values);
	switch(values[0]) {
		case 'ID':
			console.log("ID values[1]=" + values[1]);
			console.log("ID values[2]=" + values[2]);
			console.log("ID values[3]=" + values[3]);
			if (values[2] == "value") document.getElementById(values[1]).innerHTML = values[3];
			if (values[2] == "bcolor") document.getElementById(values[1]).style.backgroundColor = values[3];
			break;

		case 'RECEIVE':
			if (currentLine > maxLine) {
				var object = document.getElementById('article');
				object.removeChild(object.childNodes.item(0));
				currentLine = currentLine - 1;
			}
			console.log("MQTT values[1]=" + values[1]);
			console.log("MQTT values[2]=" + values[2]);
			var msg = document.createElement('div')
			msg.className = 'message-body';
			//msg.style.cssText = "color: red;" + "display:inline-block;" + "_display: inline;"
			msg.innerText = values[1] + ' ' + values[2];
			document.getElementById('article').appendChild(msg);

			currentLine = currentLine + 1;
			console.log("MQTT currentLine =", currentLine);
			break;

/*
		case 'NAME':
			console.log("NAME values[1]=" + values[1]);
			console.log("NAME values[2]=" + values[2]);
			console.log("NAME values[3]=" + values[3]);
			var textbox = document.getElementsByName(values[1]);
			console.log('textbox[0]=', textbox[0]);
			textbox[0].value = values[3];
			break;
*/
		default:
			break;
	}
}

websocket.onclose = function(evt) {
	console.log('Websocket connection closed');
	//document.getElementById("datetime").innerHTML = "WebSocket closed";
}

websocket.onerror = function(evt) {
	console.log('Websocket error: ' + evt);
	//document.getElementById("datetime").innerHTML = "WebSocket error????!!!1!!";
}
