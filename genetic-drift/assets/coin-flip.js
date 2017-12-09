function toss_coins() {
    let rounds = document.getElementById('rounds').value,
        heads = 0,
        tails = 0;

    for (let i = 0; i < rounds; i++) {
        if (Math.random() <= .5) {
            heads += 1;
        } else {
            tails += 1;
        }
    }
    document.getElementById('heads').innerText = heads;
    document.getElementById('tails').innerText = tails;

    console.log(heads, "heads ", tails, " tails");
}