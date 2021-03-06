Assumptions
==
Hardy Weinberg's principle uses the assumption of an infinite population size.
Genetic drift however makes the assumption of a finite population size. Hardy Weinberg's principle seems quite unrealistic since all populations are finite.

> Population size is typically denoted by the letter **N**.

Chance Effect
===
Since populations are finite, every change in allele frequencies may be attributed to chance, this phenomenon is thus called Chance Effect. Chance Effect is the principal cause of Genetic Drift.

> Chance effect is much stronger in smaller populations.

Example of Chance
===
### Flipping a fair coin

A fair coin has two sides: **heads(_H_)** and **tails(_T_)**.
On any flip, the is a 50% chance that it will show a head, and a 50% chance that it will show a tail. This demonstrates a **5 : 5** ratio. However, with a finite population size, this may not always be the case. Eg. if the coin is flipped 10 times, there could be a **4 : 6** ratio, a **3 : 7** ratio, or even a **10 : 0** ratio.

The main task under genetic drift is figuring out how often a scenario(**ratios**) will be true in a finite population. Also there will be the issue of growth in the popultation being examined.

#### Why Growing Population?
When a fair coin is tossed, heads and tails both have a 50% chance of appearing. However, this may not always be true in a small finite population as it will give many instances of extreme ratios. eg, if the coin is tossed **10** times, there's a higher chance of seeing a **1 : 9** than there would be if the coin was tossed **100** times.

> We will be able to create this perfectly in a binomial distribution because
  flipping a coin is an event that guarantees only two possible outcomes(**H**, **T**), we will be able to calculate the exact probability distribution given the probabilities of the two outcomes and the number of events.

Eg.
==

If a coin is flipped __10__ times, what is the probability that it will return exactly __2__ tails.


#### Chart of Table of Outcomes
|Number of Flips|Visualized Outcomes|Total Distinct Outcome|
|---------------|-------------------|-------------|
| 1             | H  T (2<sup>1</sup>)       |      2      |
| 2             |    HH HT TH TT (2<sup>2</sup>)   |      4      |
| 3             |        ... (2<sup>3</sup>)       |      8      |
|      ...      |        ...        |     ...     |
| 10            |   2<sup>10</sup>  |    1024     |


Let's populate a table to show the required outcome of **2** tails (**8** heads)

```
  1   2   3   4   5   6   7   8   9   10
| H | T | H | H | H | H | H | T | H | H | 
```
[Link to coin tossing flipping](./coin-flip.html)
 
There are 10 possible slots for the first tail to appear, and then there are 9 possible slots for the second tail to appear, so we could write **`10 * 9`**, but this is wrong(we will not have __90__ possible combinations since the outcome would be the same if both tails swapped positions). Next thing we ought to do is divide by the number of tails (ie. __2__).

The evaluation now becomes **`(10 * 9) / 2`** which will give answer of __45__.
___

What does this mean?

> This means that out of the 1024 possible outcomes, only **45** will be
exactly **2** tails.
Break this down mathematically,

**`45 / 1024`** _answer_: *__`4.39%`__*
____

__Note:__ If a fair coin is flipped many times, the average of the values should be close to the midpoint.

Let's create this principle in Javascript. We'll generate a bunch of random numbers from __0__ to __10__ and find the average after 1000 rounds.

[Link to example file](./random.html)
```javascript
let sum = 0,
    rounds = 1000;
for (let i = 0; i < rounds; i++) {
    sum += getRandomIntInclusive(0, 10);
}

let average = sum / rounds;
alert(`The average after ${rounds} rounds is ${average}`);

/*
* The Math.random() function returns random values between
* 0 and 1. This function will make it return numbers in
* our own custom range.
* */
function getRandomIntInclusive(min, max) {
    // return the smallest integer greater than or equal to min.
    min = Math.ceil(min);
    // return the largest integer less than or equal to max.
    max = Math.floor(max);
    
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
```  
refer to [The Math.random() specification on MDN . . .][Math.random specification]
> try changing the value of **`rounds`** to lower values and then to higher values **(preferably powers of 10)**. You'll realize that it reinforces the point _**Chance Effect** is much stronger in smaller populations than it is in larger populations_.


## To Flip a Fair Coin in Javascript
flip a fair coin and count number of heads an tails to prove
> If a fair coin is flipped many times, the average of the values should be close to the midpoint.

```javascript
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
```



[Math.random specification]:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#Getting_a_random_integer_between_two_values_inclusive