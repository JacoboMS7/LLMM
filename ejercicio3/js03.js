function cambiarCoche() {
            var selectCoches = document.getElementById('seleccionarCoches');
            document.getElementById('miCoche').src = selectCoches.value;  
        }
function cambiarSpiderman(){
            var selectSpiderman = document.getElementById('seleccionarSpiderman');
            document.getElementById("miSpiderman").src = selectSpiderman.value;
        }
function cambiarEstilo(estilo){
            document.getElementById('tema').href = estilo;
        }