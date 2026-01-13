let computerMove='';
        let result='';
        let score=JSON.parse(localStorage.getItem('score'))|| {
            wins:0,
            losses :0,
            ties:0
        };

        function updateScoreDisplay() {
      document.querySelector('.js-score').innerHTML =
        `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
        function removeScore(){
            score.wins=0;
            score.losses = 0;
            score.ties=0;
            localStorage.removeItem('score');
            alert(`Score has been reseted.
Wins: ${score.wins},
Losses: ${score.losses}, Ties: ${score.ties}`);
updateScoreDisplay();
        }
        


        /*if (score === null){
            score.Win=0;
            score.Lose = 0;
            score.Tie=0;
        }*/
        

       
      function pickcomputerMove(){
        const randomNumber = Math.random();
            
            
            if (randomNumber>0 && randomNumber< 1/3){
                computerMove = 'Rock';
                
                
            }
            else if(randomNumber>1/3 && randomNumber<2/3){
                computerMove = 'Paper';
                
            }
            else if(randomNumber>2/3 && randomNumber<1){
                computerMove = 'Scissor';
               

                
            }

           return computerMove;
            

        
        }

        document.querySelector('.js-rock-button').addEventListener('click', ()=>{ playGame('Rock')});

        document.querySelector('.js-paper-button').addEventListener('click', ()=>{ playGame('Paper')});

        function playGame(playerMove){
            const computerMove = pickcomputerMove();
            if (playerMove==='Scissor'){
                if (computerMove === 'Rock') {
                result = 'You lose.';
            } else if (computerMove === 'Paper') {
                result = 'You win.';
            } else if (computerMove === 'Scissor') {
                result = 'You tie.';
            }

            }

            else if (playerMove==='Paper'){
                 if (computerMove === 'Rock') {
            result = 'You win.';
          } else if (computerMove === 'Paper') {
            result = 'You tie.';
          } else if (computerMove === 'Scissor') {
            result = 'You lose.';
          }

            }

            else if(playerMove==='Rock'){
                 if (computerMove === 'Rock') {
            result = 'You tie.';
          } else if (computerMove === 'Paper') {
            result = 'You lose.';
          } else if (computerMove === 'Scissor') {
            result = 'You win.';
          }

            }

            if (result==='You win.'){
                score.wins+=1;
            }
            else if (result==='You lose.'){
                score.losses+=1;
            }
            else if(result==='You tie.'){
                score.ties+=1;
            }

            localStorage.setItem('score',JSON.stringify(score));
            document.querySelector('.js-result').innerHTML = result;

            document.querySelector('.js-moves').innerHTML = `You 
    <img src = "img/${playerMove}-emoji.png" class="move-icon">
    <img src="img/${computerMove}-emoji.png" class="move-icon">`;

             /*alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);*/


updateScoreDisplay();
        }

         
    updateScoreDisplay();

        let isAutoPlaying = false;

        let intervalId;

    function autoPlay(){
      if(!isAutoPlaying){
        intervalId = setInterval(() => {
        const playerMove = pickcomputerMove();
        playGame(playerMove);
      }, 1000);
      isAutoPlaying = true;
      }
      
      else{
        clearInterval(intervalId);
        isAutoPlaying = false;
      }
    }


     