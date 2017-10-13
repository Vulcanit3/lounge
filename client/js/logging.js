function saveActiveChannelLogs(){

//Get Channel

chat = document.getElementById("chat");
channel = chat.getElementsByClassName("chan active")[0];
channelTitle = channel.dataset.title;

// Get Message
messages = [].slice.call(channel.getElementsByClassName('msg'));
nickname = document.getElementById('nick-value').innerText;

var data = "Channel logs: " + channelTitle + " and for user: " + nickname + " | Stored by WebChat on channel";
//Foreach Message

messages.forEach( function (e)
{
	var DateStamp;
	var Message;
	var Sender;

  	//Get DateStamp
  	DateStamp = e.dataset.time;

	if(e.classList.contains("message")){
		Sender = e.dataset.from	
		Message = e.lastElementChild.lastElementChild.innerHTML.replace(/<(?:.|\n)*?>/gm, '');
	}
	else{
		Sender = "Server";//e.getElementsByClassName("from")[0].lastElementChild.innerHTML;
		Message = e.lastElementChild.innerHTML.replace(/<(?:.|\n)*?>/gm, '');	
	}

	//Add data to the blob
	data += "\n" + DateStamp + " " + Sender + ": " + Message;

});

// Create blob
var Message = new Blob([data], {type: "text/plain;charset=utf-8"});

// Download blob as file
saveAs(Message, channelTitle+".log");
}


// Event Listener for the little button on the left panel
document.getElementById("download-logs").addEventListener("click", function(){
	saveActiveChannelLogs();
});