let result = []

/*
Struttura del file CSV:
[asse X] [asse Y]
la prima colonna viene ignorata
*/

// Variabili di configurazione

// yDivisore rappresenta il numero di segmenti sull'asse Y (si consigliano valore superiori ad 8)
let yDivisor = 10

// dotEnable abilita i punti (x, y) che vengono collegati per formare il grafico
let dotEnable = false;


// Funzione utilizzata per leggere il file CSV inserito dall'utente
function readFile(input) {
    let file = input.files[0];
  
    let reader = new FileReader();
  
    reader.readAsText(file);
  
    reader.onload = function() {
      result = reader.result;
    };
  
    reader.onerror = function() {
      alert(reader.error);
    };
}

function draw() {
    if (!result.length) {
        // Se si prova a disegnare il grafico senza inserire il file non viene fatto nulla se non avvisarlo con un alert
        alert("File Mancante\nInserire file!")
    } else {
        let c = document.getElementById("canva");
        var w = c.width;
        var h = c.height;
        let ctx = c.getContext("2d");
        ctx.strokeStyle = "#ffffff";
        ctx.lineWidth = 2;
        ctx.font = "bold 8px Verdana";
        ctx.fillStyle = "#FFE62D"
        

        // Disegna asse Y
        ctx.moveTo(w/15, h/6);
        ctx.lineTo(w/15, h/1.1); // h/1.15
        
        // Disegna asse X
        ctx.moveTo(w/20, h/15*13); // w/15
        ctx.lineTo(w/1.05, h/15*13);

        let csv = result.split("\n")

        // Lunghezza dell'asse X
        let lenX = Math.round(Math.sqrt(Math.abs((w/15)**2-(w/1.1)**2)))
        const divisoreX = Math.round(lenX / csv.length)

        // Lunghezza dell'asse Y
        let lenY = Math.round(Math.sqrt(Math.abs((w/12)**2-(w/1.15)**2)))
        const divisoreY = Math.round(lenY / yDivisor)

        // Valore temporaneo per il valore massimo sull'asse Y
        let max = Number(csv[1][1].replaceAll('"', ''))
        
        for (let i in csv) {
            if (i!=0) {
                let effData = csv[i].split(",")

                // Riempi asse X con valori
                ctx.moveTo(w/15+divisoreX*i,h/15*13)
                ctx.lineTo(w/15+divisoreX*i, h/30*27)
                ctx.fillText(effData[0].replaceAll('"', ''), w/15+divisoreX*i+2, h/30*27+2);

                /*
                Cambia valore alla variabile max se si trova un valore più alto, è utilizzato poi come valore massimo sull'asse Y
                La funzione Number() prende come input una stringa e restituisce un intero, è utilizzata perché altrimenti JS confronta solo la prima cifra dei due numeri e non il numero completo
                */
                if (Number(effData[1].replaceAll('"', '')) > max) {
                    max = Number(effData[1].replaceAll('"', ''))
                }
            }
        }

        let newMax = ((Number(max.toString()[0])+1) * (10**(getPow(max)-1))) 
        for (let i of Array(yDivisor).keys()) {
            // Riempi asse Y con valori
            ctx.moveTo(w/15, h/15*12-(divisoreY*i)/3)
            ctx.lineTo(w/15-30, h/15*12-(divisoreY*i)/3)
            ctx.fillText((newMax/yDivisor)*(i+1), w/15-50, (h/15*12-(divisoreY*i)/3)-5)
        }
        ctx.stroke()
        
        // Inizia il grafico da 0, 0
        ctx.moveTo(w/15,h/1.155)

        // Disegna il grafico
        for (let i in csv) {
            i++
            let effData = csv[i].split(",")
            //alert(Number(effData[1].replaceAll('"', '')) / (newMax/yDivisor))
            ctx.lineTo(w/15+divisoreX*i, h/1.155 - 45*(Number(effData[1].replaceAll('"', '')) / (newMax/yDivisor)))
            ctx.stroke()
            if (dotEnable) {drawPoint(w/15+divisoreX*i, h/1.155 - 45*(Number(effData[1].replaceAll('"', '')) / (newMax/yDivisor)), ctx) }
        }
        // Uso più volte lo stroke perché ho riscontrato che a volte non funziona se viene messo soltanto alla fine
        ctx.stroke()
    }
}

// Funzione per disegnare punti usata nel testing e se si abilitano i punti
function drawPoint(x, y, canvas) {
    canvas.beginPath();
    canvas.fillStyle = "red";
    canvas.arc(x, y, 5, 0, Math.PI*2, true);
    canvas.fill();
}

// Funzione utlilizzata per ottere la potenza del 10 del numero
function getPow(numb) {
    return(Number(numb.toString().length))
}
