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
