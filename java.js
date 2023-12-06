  
const data=new Date()
const dia=data.getDay()
const mes=data.getMonth()+1
const ano=data.getFullYear()
const hora=data.getHours()
const minutos=data.getMinutes()
const segundos=data.getSeconds()
document.getElementById("Hora").innerHTML="hora certa:"+hora+":"+minutos+":"+segundos
if(hora<10){Hora.innerHTML="Hora que O.S foi Gerada"+"0"+hora+":"
    }
else{Hora.innerHTML="Hora que O.S foi Gerada"+hora+":"}

if(minutos<10){Minutos.innerHTML="0"+minutos+":"
    
}
else{Minutos.innerHTML=minutos+":"}


if(segundos<10){Segundos.innerHTML="0"+segundos
    
}
else{Segundos.innerHTML=segundos}

document.getElementById("Dt").innerHTML="-"+dia+"/"+mes+"/"+ano;
if(dia<10) {Dt.innerHTML="-0"+dia+"/"+mes+"/"+ano;
    
}
if(mes<10) {Dt.innerHTML="-"+dia+"/0"+mes+"/"+ano;
    
}

  
   var signaturePad1 = new SignaturePad(document.getElementById('signatureCanvas1'));
        var signaturePad2 = new SignaturePad(document.getElementById('signatureCanvas2'));

        function touchStart(event) {
            event.preventDefault(); // Evita o comportamento padrão do toque
            var touches = event.changedTouches;
            for (var i = 0; i < touches.length; i++) {
                if (event.target === document.getElementById('signatureCanvas1')) {
                    signaturePad1._strokeBegin(touches[i]);
                } else if (event.target === document.getElementById('signatureCanvas2')) {
                    signaturePad2._strokeBegin(touches[i]);
                }
            }
        }

        function touchMove(event) {
            event.preventDefault(); // Evita o comportamento padrão do toque
            var touches = event.changedTouches;
            for (var i = 0; i < touches.length; i++) {
                if (event.target === document.getElementById('signatureCanvas1')) {
                    signaturePad1._strokeMove(touches[i]);
                } else if (event.target === document.getElementById('signatureCanvas2')) {
                    signaturePad2._strokeMove(touches[i]);
                }
            }
        }

        function clearSignature(signatureNumber) {
            if (signatureNumber === 1) {
                signaturePad1.clear();
            } else if (signatureNumber === 2) {
                signaturePad2.clear();
            }
        }


document.getElementById('fileInput').addEventListener('change', handleFileSelect);

        function handleFileSelect(event) {
            var files = event.target.files;
            var gallery = document.getElementById('gallery');

            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                var reader = new FileReader();

                reader.onload = function (e) {
                    var img = document.createElement('img');
                    img.src = e.target.result;
                    img.style.width = '100px';
                    gallery.appendChild(img);
                };

                reader.readAsDataURL(file);
            }
        }

               
