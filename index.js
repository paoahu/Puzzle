
const huecos = document.querySelectorAll(".hueco")
const piezas = document.querySelectorAll(".pieza")

piezas.forEach(pieza => {
    pieza.addEventListener("dragstart", event => {
        console.log("Estoy arrastrando la pieza")
        pieza.classList.add("dragging")
        event.dataTransfer.setData("id", pieza.id)
    });

    pieza.addEventListener("dragend", () => {
        console.log("He terminado de arrastrar")
        pieza.classList.remove("dragging")
    });
});

huecos.forEach(hueco => {
    hueco.addEventListener("dragover", event => {
        event.preventDefault()
        //console.log("dragover");
    });

    hueco.addEventListener("drop", event => {
        console.log("drop");
        const id_pieza = event.dataTransfer.getData("id")
        console.log("pieza id: ", id_pieza)
        const pieza = document.getElementById(id_pieza)
        hueco.appendChild(pieza)
    })
})
