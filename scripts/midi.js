const teclas = document.querySelectorAll(".tecla");

teclas.forEach(teclaElement => {
    teclaElement.onclick = function() {
        let sound = this.textContent.toLowerCase();
        document.querySelector("#som_tecla_" + sound).play();
    };
    teclaElement.onkeydown = function (event) {
        if (event.code == "Space" || event.key == "Enter") {
            this.classList.add("ativa");
        };
    };
    teclaElement.onkeyup = function (event) {
        if (event.code == "Space" || event.key == "Enter") {
            this.classList.remove("ativa");
        };
    };
});
