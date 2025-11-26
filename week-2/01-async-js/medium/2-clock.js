const incrementCounter = () => {
    let now = new Date();
    let localTime = new Date().toLocaleTimeString();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    console.log(`${h}:${m}:${s}`)
    console.log(localTime);
};

setInterval(incrementCounter, 1000);
