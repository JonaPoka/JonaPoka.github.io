function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));  
}

const phrases = ['a Full-Stack', 'a Java', 'a Python', 'a C++', 'a C#', 'a C++', 'a PHP', 'a Kotlin'];
const el = document.getElementById('typewriter');

let sleepTime = 100;

let curPhaseIndex = 0;

const writeLoop = async () => {
  while (true) {
    let curWord = phrases[curPhaseIndex];
    for (let i = 0; i < curWord.length; i++) {
      el.innerText = curWord.substring(0, i + 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 10);

    for (let i = curWord.length; i > 0; i--) {
      el.innerText = curWord.substring(0, i - 1);
      await sleep(sleepTime);
    }

    await sleep(sleepTime * 5);

    if (curPhaseIndex === phrases.length - 1) {
      curPhaseIndex = 0;
    } else {
      curPhaseIndex++;
    }
  }
};

writeLoop();