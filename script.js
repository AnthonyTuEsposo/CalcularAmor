function love() {

    var firstName = document.getElementById("name1").value;

    var secondName = document.getElementById("name2").value;

    if (firstName.length <= 2) {
        alert("Ingrese al menos 3 caracteres");
    }
    if (secondName.length <= 2) {
        alert("Ingrese al menos 3 caracteres");
    }
    else {
        const names = [firstName.trim().toUpperCase(), secondName.trim().toUpperCase()];
        const perfectMatchNames = ["CRISTHOFER", "ISABEL","ANTHONY","ANTHONY CRISTHOFER","ANTHONY CALLIRGOS","ANTHONY CRISTHOFER CALLIRGOS VICTORIANO","DALIA ISABEL ANGUITA ARENA","DALIA ISABEL","DALIA ANGUITA","DALIA ANGUITA ARENA","ANTHONY CALLIRGOS VICTORIANO","ISABEL ANGUITA ARENA","CRISTHOFER CALLIRGOS VICTORIANO","ISABEL ANGUITA","CRISTHOFER CALLIRGOS"];
      
        if (names.every(name => perfectMatchNames.includes(name))) {
          document.getElementById("output").innerHTML = "El puntaje para " + firstName + " y " + secondName + " es 100%";
          document.querySelector(".statement").innerHTML = "Felicidades! Son Almas Gemelas";
        } else {
          document.getElementById("output").innerHTML = "El puntaje para " + firstName + " y " + secondName + " es 0%";
          document.querySelector(".statement").innerHTML = "Pesimo! Nunca estaran juntos";
        }
      }
}
