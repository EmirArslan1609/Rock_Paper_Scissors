const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () =>{
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', ()=>{
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const ComputerHand = document.querySelector('.computer-hand');

        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach (option => {
            option.addEventListener('click', function() {
                const computerNumbers = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumbers];
            
            setTimeout(() => {

                compareHands(this.textContent, computerChoice); 

                playerHand.src = `./assets/${this.textContent}.png`;
                ComputerHand.src = `./assets/${computerChoice}.png`; 
            }, 2000);

            playerHand.style.animation = "shakePlayer 2s ease";
            ComputerHand.style.animation = "shakeComputer 2s ease";

            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }


    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');

        if(playerChoice === computerChoice){
            winner.textContent = 'its a tie!';
            return;
        }

        if(playerChoice === 'rock' && computerChoice === 'paper' || playerChoice === 'paper' && computerChoice === 'scissors' || playerChoice === 'scissors' && computerChoice === 'rock'){
            winner.textContent = 'Computer Wins!';
            cScore++;
            updateScore();
        }
        else{
            winner.textContent = 'Player Wins!';
            pScore++;
            updateScore();
        }
    }





    startGame();
    playMatch();
};

game();