/* JavaScript file for the firdge app */

function mainScreenImg(whichButton){
    pic = document.getElementById("mainScreen");
    var newPic;
    switch(whichButton){
        case "fridge":
            newPic = "https://media-cdn.tripadvisor.com/media/photo-s/0e/65/52/04/ice-cream-cakes.jpg";
            break;
        case "browser":
            newPic = "https://lh3.googleusercontent.com/zew-fVRYWU9gYQm8Kph7HY33-XvVioSu73mrKYtWkvnfvY0pS1EaOOEwSfE-2PSsVm-0mV9Hhq_4TQ-jdrJf2WB-6w=w640-h400-e365-rj-sc0x00ffffff";
            break;
        case "tv":
            newPic = "https://pbs.twimg.com/media/DhkOq6TXkAAT80e.jpg";
            break;
        case "On":
            newPic = "https://preview.redd.it/my-minimalist-home-screen-v0-9v4f8dbvm4j81.png?auto=webp&s=9d6e22ddf6a1f0a643dcbe9b7ed3fa2220542453";
            break;
        default:
            newPic = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwoIDQgICAgICAgIDgoICAgHBw8ICQgKFREWFhURExMYKCggGBolGxMTITEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NDw0NDysZFRkrNysrLSsrKysrKysrKy0rLSsrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAXAAEBAQEAAAAAAAAAAAAAAAAAAQIH/8QAIRABAQEAAgICAwEBAAAAAAAAAAERIUExYVGBAqGx0RL/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/AOHCACwnKACoAu/6gC26gAAAAoIAC275QAAABZ1s30UBAAAAAAAAAAAAXbmbx5xAAFgIKAgAAKBCn0gAAAs9oAAAAAqAAtQBYgAsRb1yCCwBAW3c9cAgAALOfE0EFqAAApEUAAUEBFQAAABbUAABUWoAAAAAACoACxAAAAAAABZc5iALUAAAFqCggKCKIAACosKCLUWggAAAAAAAKgAAAKgAACl9IAAAAAt6/aAAu8Z9oAKi4CAACgCKgKgoIAAAAAAAAAAAAAAAAAAAAAAqKCAAAAAoIoUBBQRRAAUEAAAAAAAAFk3vEAABYF/qAAAAv45349AgAAALEWIAKAgsQAUAqACwQAAAAAAAFLAEAAVAVAAAAAAFgCAAAoIACxAABQEFBF+xAUqAAAAAAs7QBaIAAAKlAAAFucfPaAqKAgLAQAAAAABbMQABQQAAAFgfjnO3PjjsABAAUEWotBFRQQFBAAWcosQFRYAihnj+ACAAKCCn5cW9+wRUAAABfylnmZvKAvpAAFiAAoIogKEm7z45AAnOT54Lxx8cACLABFAQUAgAb0ioACgAgLAKCLEUEBQQAFRQEWlQBQBBUBq9ZMzi+6iNTMuzm5l+AZABQAEAAAAAFAAAFKgCC5+wBcuf9dS59pgACACoAtQAUAAQFVAEUABABc7QAVAB/9k=";
    }
    pic.src = newPic;
}

function powerButton(){
    var apps = document.getElementsByClassName("app");
    onOff = document.getElementById("power");

    if (onOff.value == "On") {
        onOff.value = "Off";
        onOff.style.backgroundColor = "gray";
        mainScreenImg("Off");
        setWeatherColor();
        for (var i = 0; i < apps.length; i++) {
            apps[i].style.visibility = 'hidden';
        }
    } else {
        onOff.value = "On";
        onOff.style.backgroundColor = "white";
        mainScreenImg("On");
        setWeatherColor();
        for (var i = 0; i < apps.length; i++) {
            apps[i].style.visibility = 'visible';
        }
    }
}

function darkMode(){
    dark = document.getElementById("dark");
    if (dark.value == "On") {
        dark.value = "Off";
        dark.style.backgroundColor = "gray";
        document.getElementById("screen").style.backgroundColor="lightblue";
        setWeatherColor();
    } else {
        dark.value = "On";
        dark.style.backgroundColor = "white";
        document.getElementById("screen").style.backgroundColor="darkslateblue";
        setWeatherColor();
    }
}

function setWeatherColor() {
    var power;
    var mode;

    if (document.getElementById("dark").value == "On"){
        mode = "da";
    } else {
        mode = "li";
    }

    if (document.getElementById("power").value == "On"){
        power = "On";
    } else {
        power = "Of";
    }

    var combo = mode + power;

    if (combo == "daOf"){
        document.getElementById("weather").style.color = "darkslateblue";
        document.getElementById("clock").style.color = "lightgray";
    } else if (combo == "liOf") {
        document.getElementById("weather").style.color = "lightblue";
        document.getElementById("clock").style.color = "black";
    } else if (combo == "daOn") {
        document.getElementById("weather").style.color = "lightgray";
        document.getElementById("clock").style.color = "lightgray";
    } else if (combo == "liOn") {
        document.getElementById("weather").style.color = "black";
        document.getElementById("clock").style.color = "black";
    }

}

function runClock(){
    var now = new Date();
    var clock = document.getElementById("clock");
    var hours;
    var mins;
    var timeOfDay;

    if (now.getHours() > 12) {
        hours = now.getHours() - 12;
        timeOfDay = "pm";
    } else if (now.getHours() < 10) {
        timeOfDay = "am";
    } else {
        hours = now.getHours();
        timeOfDay = "am";
    }

    if (now.getMinutes() < 10) {
        mins = "0" + now.getMinutes();
    } else {
        mins = now.getMinutes();
    }

    clock.textContent = hours + ":" + mins + timeOfDay;
}
setInterval(runClock, 1000);
