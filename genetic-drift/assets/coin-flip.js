let rounds = 10,
    heads = 0,
    tails = 0;

for (let i = 0; i < rounds; i++) {
    if (Math.random() <= .5) {
        heads += 1;
    } else {
        tails += 1;
    }
}
console.log(heads, "heads ", tails, " tails");