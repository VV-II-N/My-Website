const boxColor = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9];

function randomNumber(){
        let x = Math.floor(Math.random() * 256);
        let y = Math.floor(Math.random() * 256);
        let z = Math.floor(Math.random() * 256);
    return [x, y, z]
}
function randomColor(){
    for (let i of boxColor){
    let result = randomNumber();
    document.getElementById(i).style.backgroundColor = `rgb(${result})`;
    }
}