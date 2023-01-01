function change() {
    if(document.getElementById("nav").classList.contains('visible')) {
        document.getElementById("nav").classList.add('open');
        document.getElementById("nav").classList.remove('visible');
    } else {
        document.getElementById("nav").classList.add('visible');
        document.getElementById("nav").classList.remove('open');
    }
}

