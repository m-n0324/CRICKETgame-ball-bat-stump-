// this will generate random number manth.random btw 0 and 3
let randomNumber = Math.random()*3
if( randomNumber >0 && randomNumber<= 1){
  let computerChoice = 'BAT';
  console.log('computer choice is BAT');
} else if( randomNumber > 1 && randomNumber <= 2){
  let computerChoice = 'BALL';
  console.log('computer choice is BALL');
} else{
  let computerChoice= 'STUMP'
  console.log('computer choice is STUMP');
}
         