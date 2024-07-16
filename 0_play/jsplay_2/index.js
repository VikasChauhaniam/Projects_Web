let t1 = performance.now();

for(let i=1; i<=100000; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'this is para' + i;

    document.body.appendChild(newElement);
}

let t2 = performance.now();

console.log("time taken " + (t2-t1) + " ms");



let t3 = performance.now();
// //after optimisation
let mydiv = document.createElement('div');

for(let i=1; i<=100000; i++){
    let newElement = document.createElement('p');
    newElement.textContent = 'this is para' + i;

    mydiv.appendChild(newElement);
}
document.body.appendChild(mydiv);

let t4 = performance.now();

console.log("time taken " + (t4-t3) + " ms");
