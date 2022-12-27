const body = document.body;
const background = document.getElementById("background");
const snow = document.getElementById("snow");
const trees = document.getElementById("trees");

let element_list = [background, ...snow.children, trees].reverse();

body.addEventListener("mousemove", (e) => {
    element_list.forEach((element, index) => {
        let layer = (index + 1) / 2;
        let max = 250;
        let width_to_percent = parseFloat(getComputedStyle(body).width) / 100;
        let percent_to_moveby = ((e.pageX / width_to_percent) * (max / 100)) - (max / 2);
    
        element.style.transform = `translateX(${percent_to_moveby / layer}px)`;
    })
})
