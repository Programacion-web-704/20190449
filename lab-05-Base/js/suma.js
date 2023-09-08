function sumar() {
    let op1 = document.getElementById("id1").value;
    let op2 = document.getElementById("id2").value;

    let valor = parseInt(op1) + parseInt(op2);

    document.getElementById("rpta").innerHTML=valor;
}

function restar() {
    let op1 = document.getElementById("id1").value;
    let op2 = document.getElementById("id2").value;

    let valor = parseInt(op1) - parseInt(op2);

    document.getElementById("rpta").innerHTML=valor;
}

function multiplicar() {
    let op1 = document.getElementById("id1").value;
    let op2 = document.getElementById("id2").value;

    let valor = parseInt(op1) * parseInt(op2);

    document.getElementById("rpta").innerHTML=valor;
}

function dividir() {
    let op1 = document.getElementById("id1").value;
    let op2 = document.getElementById("id2").value;

    let valor = parseInt(op1) / parseInt(op2);

    document.getElementById("rpta").innerHTML=valor;
}