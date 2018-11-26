/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var default_state=0;
var temp_score=0;
var total_score=[0,0];
var current_score=0;
var current_player=0;
var wining_threshold=20;
document.querySelector('.btn-roll').addEventListener('click',btn);
document.querySelector('.dice').style.display='none';
document.querySelector('.btn-hold').addEventListener('click',hld);
document.querySelector('.btn-new').addEventListener('click',default_state_init())
function default_player()
    {
    
        if(document.querySelector('.player-0-panel').classList.contains('active')=== true )
            {

            }
        else if(document.querySelector('.player-1-panel').classList.contains('active')=== true)
            {
                document.querySelector('.player-1-panel').classList.toggle('active');
                document.querySelector('.player-0-panel').classList.toggle('active');
            }

        
    }
function default_state_init() 
    {   
        total_score=[0,0];
        current_score=0;
        current_player=0;
        temp_score=0;
        document.querySelector('.dice').style.display='none';
        document.querySelector('#current-0').textContent=default_state;
        document.querySelector('#current-1').textContent=default_state;
        document.querySelector('#score-1').textContent=default_state;
        document.querySelector('#score-0').textContent=default_state;
        default_player();

    }

function btn()
    {
        document.querySelector('.dice').style.display='block';
        var dice = Math.floor(Math.random()*6)+1;
        
        if(dice===1)
            {
                
                document.querySelector('.dice').src='dice-'+dice+'.png';
                document.querySelector('.dice').style.display='none';
                document.querySelector('#current-'+current_player).textContent=0;
                current_player===0 ? current_player=1 : current_player=0;
                current_score=0;
                player_change();
                
            }
        else
            {
                current_score+=dice;
                document.querySelector('#current-'+current_player).textContent=current_score;
                document.querySelector('.dice').src='dice-'+dice+'.png';
            }

    }
function win_con()  
            {
                if(total_score[current_player]>=wining_threshold)
                    {
                        window.alert('Player '+(current_player+1)+' wins')
                        default_state_init();
                    }
               
            }
function win_class_init() 
        {
            document.querySelector('.player-1-panel').classList.remove('active');
            document.querySelector('.player-0-panel').classList.remove('active');
            document.querySelector('.player-'+current_player+'-panel').classList.add('winner');
            document.querySelector('.dice').style.display='none';
            document.querySelector('.btn-roll').style.display='none';
            document.querySelector('.btn-roll').style.display='none';
            
        }

function hld()
    {
        document.querySelector('.dice').style.display='none';
        total_score[current_player]+=current_score;
        document.querySelector('#score-'+current_player).textContent=total_score[current_player];
        document.querySelector('#current-'+current_player).textContent=current_score;
        current_score=0;
        win_con();
        document.querySelector('#current-'+current_player).textContent=0;
        player_change();
        current_player===0 ? current_player=1 : current_player=0;
        
    }

function player_change()
    {
        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

    }





