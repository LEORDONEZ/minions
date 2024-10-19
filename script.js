// Selección de botones en la Página 1
document.getElementById("si1").addEventListener("click", function(){
    window.location.href = "pagina-si1.html"; // Redirige a la página 2
});

document.getElementById("no1").addEventListener("click", function(){
    window.location.href = "pagina-no1.html"; // Redirige a la página 3
});

// Para las páginas siguientes, debes asegurarte de que estos eventos solo se ejecuten en las páginas correspondientes.
// Selección de botones en la Página 2 (si es que existe en esa página)
if (document.getElementById("si2")) {
    document.getElementById("si2").addEventListener("click", function(){
        window.location.href = "pagina-si2.html"; // Redirige a la página 4
    });

    document.getElementById("no2").addEventListener("click", function(){
        window.location.href = "pagina-no2.html"; // Redirige a la página 5
    });
}

// Selección de botones en la Página 3 (si es que existe en esa página)
if (document.getElementById("si3")) {
    document.getElementById("si3").addEventListener("click", function(){
        window.location.href = "pagina6.html"; // Redirige a la página 6
    });

    document.getElementById("no3").addEventListener("click", function(){
        window.location.href = "pagina7.html"; // Redirige a la página 7
    });
}