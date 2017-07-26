var comentarios = [
    "@anna",
    "@edu",
    "@abel",
    "@sergio",
    "@manu",
    "@josi",
    "@leticia",
    "@ed"
];

var getRandom = function (numberOfComments) {
    var randomNumber = Math.floor(Math.random() * numberOfComments);
    for (var i=0; i<comentarios.length; i++) {
        if (i==randomNumber) return comentarios[i];
    }
}

document.getElementById("result").innerHTML = getRandom(comentarios.length);