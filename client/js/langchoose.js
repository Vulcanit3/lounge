// Detect language and automatically fill in channel

window.onload = function()
        {
        var languageStr = window.navigator.userLanguage || window.navigator.language;
        var langArray = languageStr.split("-"); //simplify "en-us" down to "en"
        var lang = langArray[0];

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
                channel = "#international";
        }

document.getElementById("connect:channels").value = channel;

        }
