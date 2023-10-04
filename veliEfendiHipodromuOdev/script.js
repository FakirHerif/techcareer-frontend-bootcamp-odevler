function start() {
    const atlar = document.querySelectorAll(".at");
    console.log(atlar);

    let finishedCount = 0;

    atlar.forEach((at, index) => {
        let total = 0;
        const yaris = setInterval(() => {

            let random = Math.random() * 100;

            total += random;

            at.style.marginLeft = total + "px";

            if (total >= window.innerWidth - 700) {
                clearInterval(yaris);
                finishedCount++; 

                if (finishedCount === 1) {
                    alert(`Kazanan: ${at.alt}`);
                }

                if (finishedCount === atlar.length) {
                    console.log("Yarış bitti!");
                }
            }
        }, 100);
    });
}
