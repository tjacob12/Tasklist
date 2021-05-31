
const titles = ['Harry Potter','Just Go With It','Never Back Down','Spongebob Squarepants','50 First Dates','Cars','Spiderman','The Wolf Of Wall Street',
'Inception','Peter Pan','The Lord of The Rings']; 

const explanations = ['This movie is about a dud with a stick...','This movie is about people who go on holiday...','This movie is about two guys with daddy issues who beat each other up...',
'This movie is about a rectangle...','This movie is about a chick, she has the worst memory...','In this movie, car go fast...','In this movie this guy just does not pay his rent, no matter how many times the landlord asks...',
'In this movie there\'s like illegal stuff, lots of money, and a blonde chick...','In this movie everyone is like sleeping all the time...',
'In this movie some kids die and an angel escorts them to heaven...','In this movie some small guys go for a walk...'];

const hints = ['It\'s Magic','Adam, Drew and Jennifer','Kanye West - Stronger','It\'s a cartoon','50 times...','Peta-Paka','HAWOOooooooooooo','Dreams...','Always flying, cuz he neverlands',
'You will not vacate past this exact position'];

const UserMovieGuess=document.getElementById('UserMovieGuess');
const button = document.getElementById('button');
const button2 = document.getElementById('button2');
const output = document.getElementById('output');

button.addEventListener('click', () => {
  const randomNumber = generateRandomNumber(11);
  const number = input.value;
  if(explanations[randomNumber]==titles{
      output.innerHTML = 'Correct: the movie guess is correct';
  }
      else {
          output.innerHTML = 'Incorrect: The guess is wrong.Try again';
      }
  
}

function generateRandomNumber(num){
    return Math.floor(Math.random()*(num + 1));
}

