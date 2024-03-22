
var backgroundImages = [
    'https://i.gifer.com/7YX1.gif',
    'https://www.geocities.ws/annisas/imagee/balii.gif',
    'https://media.giphy.com/media/l1J3tqlqSwfLAg5u8/giphy.gif'
];


var body = document.body;


function setRandomBackground() {
    var randomIndex = Math.floor(Math.random() * backgroundImages.length);
    var randomBackground = backgroundImages[randomIndex];
    body.style.backgroundImage = 'url("' + randomBackground + '")';
}

ik
setInterval(setRandomBackground, 5000);

function show() {
    var confirmation = confirm("Anda akan diarahkan ke halaman Bromo. Lanjutkan?");
    if (confirmation) {
        window.location.href = "./pages/bromo.html";
    }
}
