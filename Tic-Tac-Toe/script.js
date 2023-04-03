const toggleBtn = document.querySelector('.toggle-btn');

toggleBtn.addEventListener('click', function() {
  document.querySelector('body').classList.toggle('change-mode');
  document.querySelector('.toggle-btn').classList.toggle('change-mode');
})

const x_turn = 'x';
const o_turn = 'o';
const winn_combinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]
const message = document.querySelector('.message');
const msg = document.getElementById('msg');
const restartBtn = document.getElementById('restart');
const cells = document.querySelectorAll('[data-cell]');
let zero_Turn = false;
console.log(zero_Turn)

startgame()

function startgame() {
  message.classList.remove('active')
  cells.forEach(cell => {
    cell.classList.remove(x_turn);
    cell.classList.remove(o_turn);
    cell.removeEventListener('click', handleCheck)
    cell.addEventListener('click', handleCheck, { once: true })
  })
}

restartBtn.addEventListener('click', startgame)



function handleCheck(e) {
  console.log(e.target)
  const cell = e.target;
  const current_turn = zero_Turn ? o_turn : x_turn;
  showmark(cell, current_turn)
  if (checkWin(current_turn)) {
    endGame(false)
  }
  else if (isdraw()) {
    endGame(true)
  }
  else {
    swapTurn()
  }

}

function isdraw() {
  return [...cells].every(cell => {
    return cell.classList.contains(o_turn) || cell.classList.contains(x_turn)
  })
}
function endGame(draw) {
  if (draw) {
    msg.innerText = 'Match Draw!!'
  }
  else {
    msg.innerHTML = `${zero_Turn ? "O's" : "X's"} Wins!`;
  }
  //  console.log(zero_Turn)

  message.classList.add('active');
}

function checkWin(current_turn) {
  return winn_combinations.some(combination => {
    return combination.every(index => {
      return cells[index].classList.contains(current_turn)
    })
  })
}

function showmark(cell, current_turn) {
  cell.classList.add(current_turn)
}

function swapTurn() {

  zero_Turn = !zero_Turn;
  console.log(zero_Turn)
}



