// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
const myBikes = [
    { nome : "mybike1",
      peso : "15kg"

    },
    { nome : "mybike2",
      peso : "16kg"

    },
    { nome : "mybike3",
      peso : "13kg"

    },
    { nome : "mybike4",
      peso : "18kg"

    }
]
const textElem = document.getElementById("bike-weight")
console.log(textElem);

const mySecondArray = [...myBikes]
console.log(mySecondArray);

const [first, second, third] = mySecondArray;
textElem.innerHTML =
` la bici con peso minore è ${third.nome} che pesa ${third.peso} !
`
console.log(third);

