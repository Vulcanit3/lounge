// Automatically select default channel by determining user's browser language
// Additionally generate a random Chat_Guest nickname
// ScoutLink TechTeam - techteam@scoutlink.net

window.onload = function()
{
	// Get browser language preference
	var languageStr = window.navigator.userLanguage || window.navigator.language;
	var langArray = languageStr.split("-"); // Cut down to first two chars
	var lang = langArray[0];

	// Get value for 'channel' based on 'lang'
	switch (lang) {
		case "fr":
			channel = "#francais";
			break;
		case "da":
		case "no":
		case "se":
			channel = "#scandinavia";
			break;
		case "de":
			channel = "#deutsch";
			break;
		case "nl":
			channel = "#dutch";
			break;
		case "nz":
			channel = "#kiwi";
			break;
		case "pl":
			channel = "#polish";
			break;
		case "it":
			channel = "#italiano";
			break;
		case "hr":
			channel = "#croatian";
			break;
		case "pt":
			channel = "#portugues";
			break;
		case "zh":
			channel = "#chinese";
			break;
		case "es":
			channel = "#espanol";
			break;
		case "fi":
			channel = "#suomi";
			break;
		case "ru":
			channel = "#russian";
			break;
		case "id":
			channel = "#indonesian";
			break;
		case "is":
			channel = "#icelandic";
			break;
		case "ar":
			channel = "#arabics";
			break;
		case "ro":
			channel = "#romanian";
			break;
		case "en":
			channel = "#english";
			break;
		default:
			channel = "#international"
	}

	// Choose a random nick
	document.getElementById('connect:nick').value = 'Chat_Guest_' + Math.floor((Math.random() * 99999) + 9999);

	// Output channel to dropdown
	document.getElementById("connect:channels").value = channel;
}

