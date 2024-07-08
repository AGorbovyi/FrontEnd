const functionExample = (a) => {
    return a + 2;    
}

const result = functionExample(6);
console.log(result);
const result2 = functionExample(10);
console.log(result2);


const arr = [1, 3];
const result3 = arr.map(functionExample);
console.log(result3);