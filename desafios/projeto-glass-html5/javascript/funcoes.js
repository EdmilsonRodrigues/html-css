var vis = document.getElementById('menu');
var icon = window.document.getElementById('icone')

function clicarMenu() {
    if (vis.style.display == 'none') {
        vis.style.display = 'block';
    } else {
        vis.style.display = 'none';
    }
}

function padraoMenu() {
    if (window.innerWidth >= 768) {
        vis.style.display = 'block'
    } else {
        vis.style.display = 'none'
    }
}

function mudaFoto(tipo) {
    if (tipo == 0) {
        var arquivo = "imagens/glass-oculos-preto-peq.png"
    }
    else {
        if (tipo == 1) {
            var arquivo = "imagens/home.png"
        } else {
            if (tipo == 2) {
                var arquivo = "imagens/especificacoes.png"
            } else {
                if (tipo == 3) {
                    var arquivo = "imagens/fotos.png"
                } else {
                    if (tipo == 4) {
                        var arquivo = "imagens/multimidia.png"
                    } else {
                        var arquivo = "imagens/icone-contato.png"
                    }
                }

            }
        }   
    }
    if (window.innerWidth >= 768) {
        icon.src = arquivo
    } else {
        let icon = window.document.querySelector('source#iconep')
        icon.srcset = arquivo        
    }
}