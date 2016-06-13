const log = document.createElement('div');

// Landon wrote a function to make drawing to the page 1 call
function addEntry(msg) {
	console.log(msg);
  log.appendChild(document.createTextNode(msg));
  log.appendChild(document.createElement('br'));
}

for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    addEntry(`FIZZBUZZ: ${i} is divisible by 3 and 5`);
  } else if (i % 3 === 0) {
    addEntry(`FIZZ: ${i} is divisible by 3`);
  } else if (i % 5 === 0) {
    addEntry(`BUZZ: ${i} is divisible by 5`);
  } else {
    addEntry(i);
  }
}

document.body.appendChild(log);
