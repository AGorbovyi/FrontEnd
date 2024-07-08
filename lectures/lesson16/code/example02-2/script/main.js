const callBF = (n) => {
    console.log(`Hello world ${n}`);
    const paragrafElement = document.querySelector('#paragraf');
    paragrafElement.textContent = n;
}


const intervalQ = (num, callback) => {
    let counter = 0;
    const callbackModified = () => {
        counter++;
        callback(counter);
        if (counter >= num) {
            clearInterval(intervalID)
        }
    }
    const intervalID = setInterval(callbackModified, 1000);
}
intervalQ(10, callBF);