var addHours = function (turno) {
    //Adicionando o dia
    var date = new Date();
    document.getElementById('data').innerHTML = date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();

    //Adicionando a hora de chegada
    if (turno == "chegada") {
        document.getElementById('chegada').innerHTML = date.getHours() + ":" + date.getMinutes();
    }
    //Adicionando a hora de saída
    else if (turno == "saida") {
        document.getElementById('saida').innerHTML = date.getHours() + ":" + date.getMinutes();
    }
}