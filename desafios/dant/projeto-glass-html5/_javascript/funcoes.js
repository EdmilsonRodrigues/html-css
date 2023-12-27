var vis = document.getElementById('menu');
vis.style.display = 'none';

function clicarMenu() {
    if (vis.style.display == 'none') {
        vis.style.display = 'block';
    } else {
        vis.style.display = 'none';
    }
}