// 1)
let warmHugs = "Hi, I'm Olaf and I like warm hugs.";
    console.log(warmHugs.toUpperCase());
warmHugs = warmHugs.replace ("like", "love");
    console.log(warmHugs);

// 2)
let beenImpaled = "Oh, look at that. I've been impaled.";
    console.log(beenImpaled.slice(-18));

// 3)
let dotDotDot = `...`;
let skullBones = `I don't have a skull${dotDotDot}or bones.`;
    console.log(skullBones);

// 4)
    console.log(Math.PI);

// 5)
let randomNumber = Math.random();
randomNumber *= 3;
randomNumber++;
randomNumber = Math.floor(randomNumber);
    console.log(randomNumber);

// BONUS
// 6)
    console.log(" Let It Go!".toUpperCase().repeat(2));

// let frozen = " Let It Go!";
// console.log(frozen.toUpperCase().repeat(2));

// 7)
let reindeers = "Reindeers are better than people.";
reindeers = reindeers.replace(/\s+/g, "_"); 
    console.log(reindeers);

// 8)
    console.log(Math.sqrt(2));

// 9)
let newRandomNumber = Math.floor(Math.random() * 23) + 1;
    console.log(newRandomNumber);
    
