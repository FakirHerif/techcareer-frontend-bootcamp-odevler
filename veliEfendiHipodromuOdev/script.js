function start() {

    document.querySelector(".span").style = "visibility: hidden"
    document.querySelector(".winner").style = "visibility: hidden"

    const startButton = document.getElementById("startButton");

    startButton.disabled = true;
    
    const atlar = document.querySelectorAll(".at");
    console.log(atlar);

    let finishedCount = 0;

    atlar.forEach((at) => {
        let total = 0;
        const yaris = setInterval(() => {

            let random = Math.random() * 100;

            total += random;

            at.style.marginLeft = total + "px";

            if (total >= window.innerWidth - 100) {
                clearInterval(yaris);
                finishedCount++; 

                if (finishedCount === 1) {
                    console.log(`--- Kazanan: ${at.alt} ---`);
                    document.querySelector(".span").innerHTML = `-----> KAZANAN: ${at.alt.toUpperCase()} <-----`

                    document.querySelector(".span").style = "visible"
                    document.querySelector(".winner").style = "visible"
                }

                if (finishedCount === atlar.length) {
                    console.log("Yarış bitti!");
                    startButton.disabled = false;
                }
            }
        }, 100);
    });
}
