
function rollDice(){


const numberofDice = document.getElementById('numofDice').value;
const diceResult = document.getElementById('diceResults');
const diceImages = document.getElementById('diceImages');

const values = [];
const images = [];

for(i = 1 ; i <= numberofDice ; i++)
{
    const value = Math.floor(Math.random()*6) + 1;
    values.push(value);
    images.push(`<img src="images/${value}.png" >`);
}
diceResult.textContent = `dice : ${values.join(', ')}`;
diceImages.innerHTML = images.join('');
}


