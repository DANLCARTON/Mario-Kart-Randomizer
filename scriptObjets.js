import { accCol } from "./themes.js";

var items = Array("banana", "tripleBananas", "greenShell", "tripleGreenShells", "redShell", "tripleRedShells", "spinyShell", "bobOmb", "mushroom", "tripleMushrooms", "goldenMushroom", "bulletBill", "blooper", "lightning", "star", "fireFlower", "boomerangFlower", "piranhaPlant", "superHorn", "crazyEight", "coin", "boo", "feather");

function getOdds() {
    let value = document.querySelector("input[name=nbObjects]:checked").value;
    switch (value) {
        case ("ffew"):
            return 16;
        case ("few"):
            return 33;
        case ("regu"):
            return 50;
        case ("lot"):
            return 66;
        case ("llot"):
            return 83;
        case ("rand"):
            return Math.random() * 100;
    }

}

function colorItem(item) {
    let toColor = document.getElementById(item);
    toColor.classList.add("selected");
    toColor.style.backgroundColor = accCol;
}

function pickItems() {
    let odds = getOdds();
    for (let i in items) {
        if (Math.random() * 100 < odds) {
            colorItem(items[i]);
        }
    }
}

function discolorItems() {
    for (let i = 0; i < items.length; i++) {
        document.getElementById("items").getElementsByTagName("div")[i].classList.remove("selected");
        document.getElementById("items").getElementsByTagName("div")[i].style.backgroundColor = "#00000000"
    }
}

function selectItem(item) {
    colorItem(item.id);
}

function unselectItem(item) {
    item.classList.remove("selected");
    item.style.backgroundColor = "#00000000"
}

// - EVENTLISTENERS - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

document.getElementById("chooseItem").getElementsByTagName("button")[0].addEventListener("click", () => {
    discolorItems();
    pickItems();
});

document.getElementById("resetItem").getElementsByTagName("button")[0].addEventListener("click", () => {
    discolorItems();
})


for (let i = 0; i < items.length; i++) {
    document.getElementById("items").getElementsByTagName("div")[i].addEventListener("click", () => {
        let item = document.getElementById("items").getElementsByTagName("div")[i];
        if (item.classList.contains("selected")) {
            unselectItem(item);
        } else {
            selectItem(item);
        }
    })
}