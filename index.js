const allNumb = []
const createCells = () => {
    const gameTable = document.getElementById("gameTable")
    for (let i = 0; i < 76; i++) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        if (i < 9) {
            cell.innerText = "0" + (i + 1)
            allNumb[i] = cell
        }else{
            cell.innerText = i + 1
            allNumb[i] = cell
        }
        gameTable.appendChild(allNumb[i])
        
    }
}

const generateRanNumb = () => {
    const btzGen = document.getElementById("genNumb")
    btzGen.onclick = event => {
        let numCass = []
        let numCas = Math.floor(Math.random() * 77)
        numCass.push(numCas)
        for (let i = 0; i < allNumb.length; i++) {
           if (numCas != numCass[i] ) {
            if (numCas == allNumb[i].innerText) {
                console.log('numero trovat', numCas);
                allNumb[i].style.backgroundColor = "white"
            } 
           }
                
        
            
        }
    }
    
}



















window.onload = function() {
    createCells()
    generateRanNumb()
}