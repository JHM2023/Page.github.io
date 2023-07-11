window.addEventListener('DOMContentLoaded', (event) => {
    const moles = document.querySelectorAll('.mole');
    const scoreDisplay = document.getElementById('score');
    let score = 0;
    let isPlaying = false;
  
    function startGame() {
      score = 0;
      isPlaying = true;
      updateScore();
  
      moles.forEach((mole) => {
        mole.addEventListener('click', whack);
      });
  
      showRandomMole();
      setTimeout(stopGame, 10000); // Game duration: 10 seconds
    }
  
    function stopGame() {
      isPlaying = false;
      moles.forEach((mole) => {
        mole.removeEventListener('click', whack);
      });
      alert('Game over! Your final score is ' + score);
    }
  
    function showRandomMole() {
      if (!isPlaying) return;
  
      const randomIndex = Math.floor(Math.random() * moles.length);
      const mole = moles[randomIndex];
      mole.style.display = 'block';
  
      setTimeout(() => {
        mole.style.display = 'none';
        showRandomMole();
      }, Math.random() * 2000 + 1000); // Random time between 1 to 3 seconds
    }
  
    function whack() {
      if (!isPlaying) return;
  
      score++;
      updateScore();
    }
  
    function updateScore() {
      scoreDisplay.textContent = 'Score: ' + score;
    }
  
    startGame();
  });
  