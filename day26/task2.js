// const Electronics = document.getElementById("electronics");
// const itemElect = document.getElementById("itemElect");
// const Fashion = document.getElementById("fashion");
// const Mobiles = document.getElementById("mobiles");

// function itemElectro(){
//         let Li;
//         let Ul = document.createElement("ul");
//         let items = [
//           "Camera",
//           "Gaming Accessoris",
//           "Laptop & desktop",
//           "tablet",
//           "Smart watch",
//         ];
//         for (let i = 0; i < items.length; i++) {
//           Li = document.createElement("li");
//           Li.textContent = items[i];
//           Ul.appendChild(Li);
//         }
//         itemElect.appendChild(Ul);
//         Electronics.addEventListener("mouseleave", function(){
//             Ul.innerHTML = ""
//         })
// }

// function itemElectro(){
//     itemElect.innerHTML = `
//     <ul class="itemUl">
//         <li>camera</li>
//         <li>Gaming Accessories</li>
//         <li>Laptop & desktop</li>
//         <li>tablet</li>
//         <li>Smart watch</li>
//     <ul>
//     `;
//     Electronics.addEventListener("mouseleave", function(){
//         itemElect.innerHTML = ``;
//     })
// }

// Electronics.addEventListener("mouseover", itemElectro)
// Electronics.removeEventListener("mouseleave", itemElectro);

const electronics = document.getElementById("electronics");
const fashion = document.getElementById("fashion");
const cosmetics = document.getElementById("cosmetics");
const dress = document.getElementById("dress");
const brands = document.getElementById("brands");

const dropDown = document.getElementById("dropDown");
const electroUl = document.getElementById("electroUl");
const fashionUl = document.getElementById("fashionUl");
const consmaticUl = document.getElementById("consmaticUl");
const dressUl = document.getElementById("dressUl");
const brandUl = document.getElementById("brandUl");

const LPsub = document.getElementById("LPsub");
const ELsample = document.getElementById("ELsample");
const Spsub = document.getElementById("Spsub");
const ELsample2 = document.getElementById("ELsample2");
const GAsub = document.getElementById("GAsub");
const ELsample3 = document.getElementById("ELsample3");
const SMsub = document.getElementById("SMsub");
const ELsample4 = document.getElementById("ELsample4");

const subDress = document.getElementById("subDress");
const sample = document.getElementById("sample")
const subFoot = document.getElementById("subFoot");
const fsample2 = document.getElementById("fsample2");
const subBag = document.getElementById("subBag");
const fsample3 = document.getElementById("fsample3");
const subWatch = document.getElementById("subWatch")
const fsample4 = document.getElementById("fsample4");

const subSk = document.getElementById("subSk");
const Sksample1 = document.getElementById("Sksample1");
const subHr = document.getElementById("subHr");
const Sksample2 = document.getElementById("Sksample2");
const subMk = document.getElementById("subMk");
const Sksample3 = document.getElementById("Sksample3");
const subCs = document.getElementById("subCs");
const Sksample4 = document.getElementById("Sksample4");

const subED = document.getElementById("subED");
const Drsample1 = document.getElementById("Drsample1");
const subWD = document.getElementById("subWD");
const Drsample2 = document.getElementById("Drsample2");
const ssubCl = document.getElementById("ssubCl");
const Drsample3 = document.getElementById("Drsample3");
const subfm = document.getElementById("subfm");
const Drsample4 = document.getElementById("Drsample4");
const subRt = document.getElementById("subRt");
const Drsample5 = document.getElementById("Drsample5");

electronics.addEventListener("mouseover", function(){
    dropDown.style.display = "flex"
    electroUl.style.visibility = "visible"
    electroUl.addEventListener("mouseleave", function(){
        electroUl.style.visibility = "hidden"
        dropDown.style.display = "none"
    })

    LPsub.addEventListener("mouseover", function(){
        ELsample.style.display = "block"
    })
    ELsample.addEventListener("mouseleave", function(){
        ELsample.style.display = "none"
    })

    Spsub.addEventListener("mouseover", function(){
        ELsample2.style.display = "block"
    })
    ELsample2.addEventListener("mouseleave", function(){
        ELsample2.style.display = "none"
    })

    GAsub.addEventListener("mouseover", function(){
        ELsample3.style.display = "block"
    })
    ELsample3.addEventListener("mouseleave", function(){
        ELsample3.style.display = "none"
    })

    SMsub.addEventListener("mouseover", function(){
        ELsample4.style.display = "block"
    })
    ELsample4.addEventListener("mouseleave", function(){
        ELsample4.style.display = "none"
    })
})

fashion.addEventListener("mouseover", function(){
    dropDown.style.display = "flex"
    fashionUl.style.visibility = "visible"
    fashionUl.addEventListener("mouseleave", function(){
        fashionUl.style.visibility = "hidden"
        dropDown.style.display = "none"
    })

    subDress.addEventListener("mouseover", function(){
        sample.style.display = "block"
    })
    sample.addEventListener("mouseleave", function(){
        sample.style.display = "none"
    })

    subFoot.addEventListener("mouseover", function(){
        fsample2.style.display = "block"
    })
    fsample2.addEventListener("mouseover", function(){
        fsample2.style.display = "none"
    })

    subBag.addEventListener("mouseover", function(){
        fsample3.style.display = "block"
    })
    fsample3.addEventListener("mouseleave", function(){
        fsample3.style.display = "none"
    })

    subWatch.addEventListener("mouseover", function(){
        fsample4.style.display ="block"
    })
    fsample4.addEventListener("mouseleave", function(){
        fsample4.style.display = "none"
    })
})

cosmetics.addEventListener("mouseover", function(){
    dropDown.style.display = "flex"
    consmaticUl.style.visibility = "visible"
    consmaticUl.addEventListener("mouseleave", function(){
        consmaticUl.style.visibility = "hidden"
        dropDown.style.display = "none"
    })

    subSk.addEventListener("mouseover", function(){
        Sksample1.style.display = "block"
    })
    Sksample1.addEventListener("mouseleave", function(){
        Sksample1.style.display = "none"
    })

    subHr.addEventListener("mouseover", function(){
        Sksample2.style.display = "block"
    })
    Sksample2.addEventListener("mouseleave", function(){
        Sksample2.style.display = "none"
    })

    subMk.addEventListener("mouseover", function(){
        Sksample3.style.display = "block"
    })
    Sksample3.addEventListener("mouseleave", function(){
        Sksample3.style.display = "none"
    })

    subCs.addEventListener("mouseover", function(){
        Sksample4.style.display = "block"
    })
    Sksample4.addEventListener("mouseleave", function(){
        Sksample4.style.display = "none"
    })



})

dress.addEventListener("mouseover", function(){
    dropDown.style.display = "flex"
    dressUl.style.visibility = "visible"
    dressUl.addEventListener("mouseleave", function(){
        dressUl.style.visibility = "hidden"
        dropDown.style.display = "none"
    })

    subED.addEventListener("mouseover", function(){
        Drsample1.style.display = "block"
    })
    Drsample1.addEventListener("mouseleave", function(){
        Drsample1.style.display = "none"
    })

    subWD.addEventListener("mouseover", function(){
        Drsample2.style.display = "block"
    })
    Drsample2.addEventListener("mouseleave", function(){
        Drsample2.style.display = "none"
    })

    ssubCl.addEventListener("mouseover", function(){
        Drsample3.style.display = "block"
    })
    Drsample3.addEventListener("mouseleave", function(){
        Drsample3.style.display = "none"
    })

    subfm.addEventListener("mouseover", function(){
        Drsample4.style.display = "block"
    })
    Drsample4.addEventListener("mouseleave", function(){
        Drsample4.style.display = "none"
    })

    subRt.addEventListener("mouseover", function(){
        Drsample5.style.display = "block"
    })
    Drsample5.addEventListener("mouseleave", function(){
        Drsample5.style.display = "none"
    })
})

brands.addEventListener("mouseover", function(){
    dropDown.style.display = "flex"
    brandUl.style.visibility = "visible"
    brandUl.addEventListener("mouseleave", function(){
        brandUl.style.visibility = "hidden"
        dropDown.style.display = "none"
    })
})



