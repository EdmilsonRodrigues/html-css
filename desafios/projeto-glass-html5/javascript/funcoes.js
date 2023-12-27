var vis = document.getElementById('menu');

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