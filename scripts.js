// the deck array with the images linked
const deck = [
  { name: 'Ace', suit: 'Hearts', value: 11, image: 'images/ace_of_hearts.png' },
  { name: 'Ace', suit: 'Clubs', value: 11, image: 'images/ace_of_clubs.png' },
  {
    name: 'Ace',
    suit: 'Diamonds',
    value: 11,
    image: 'images/ace_of_diamonds.png'
  },
  { name: 'Ace', suit: 'Spades', value: 11, image: 'images/ace_of_spades.png' },

  { name: '2', suit: 'Hearts', value: 2, image: 'images/2_of_hearts.png' },
  { name: '2', suit: 'Clubs', value: 2, image: 'images/2_of_clubs.png' },
  {
    name: '2',
    suit: 'Diamonds',
    value: 2,
    image: 'images/2_of_diamonds.png'
  },
  { name: '2', suit: 'spades', value: 2, image: 'images/2_of_spades.png' },

  { name: '3', suit: 'Hearts', value: 3, image: 'images/3_of_hearts.png' },
  { name: '3', suit: 'Clubs', value: 3, image: 'images/3_of_clubs.png' },
  {
    name: '3',
    suit: 'Diamonds',
    value: 3,
    image: 'images/3_of_diamonds.png'
  },
  { name: '3', suit: 'spades', value: 3, image: 'images/3_of_spades.png' },

  { name: '4', suit: 'Hearts', value: 4, image: 'images/4_of_hearts.png' },
  { name: '4', suit: 'Clubs', value: 4, image: 'images/4_of_clubs.png' },
  {
    name: '4',
    suit: 'Diamonds',
    value: 4,
    image: 'images/4_of_diamonds.png'
  },
  { name: '4', suit: 'spades', value: 4, image: 'images/4_of_spades.png' },

  { name: '5', suit: 'Hearts', value: 5, image: 'images/5_of_hearts.png' },
  { name: '5', suit: 'Clubs', value: 5, image: 'images/5_of_clubs.png' },
  {
    name: '5',
    suit: 'Diamonds',
    value: 5,
    image: 'images/5_of_diamonds.png'
  },
  { name: '5', suit: 'spades', value: 5, image: 'images/5_of_spades.png' },

  { name: '6', suit: 'Hearts', value: 6, image: 'images/6_of_hearts.png' },
  { name: '6', suit: 'Clubs', value: 6, image: 'images/6_of_clubs.png' },
  {
    name: '6',
    suit: 'Diamonds',
    value: 6,
    image: 'images/6_of_diamonds.png'
  },
  { name: '6', suit: 'spades', value: 6, image: 'images/6_of_spades.png' },

  { name: '7', suit: 'Hearts', value: 7, image: 'images/7_of_hearts.png' },
  { name: '7', suit: 'Clubs', value: 7, image: 'images/7_of_clubs.png' },
  {
    name: '7',
    suit: 'Diamonds',
    value: 7,
    image: 'images/7_of_diamonds.png'
  },
  { name: '7', suit: 'spades', value: 7, image: 'images/7_of_spades.png' },

  { name: '8', suit: 'Hearts', value: 8, image: 'images/8_of_hearts.png' },
  { name: '8', suit: 'Clubs', value: 8, image: 'images/8_of_clubs.png' },
  {
    name: '8',
    suit: 'Diamonds',
    value: 8,
    image: 'images/8_of_diamonds.png'
  },
  { name: '8', suit: 'spades', value: 8, image: 'images/8_of_spades.png' },

  { name: '9', suit: 'Hearts', value: 9, image: 'images/9_of_hearts.png' },
  { name: '9', suit: 'Clubs', value: 9, image: 'images/9_of_clubs.png' },
  {
    name: '9',
    suit: 'Diamonds',
    value: 9,
    image: 'images/9_of_diamonds.png'
  },
  { name: '9', suit: 'spades', value: 9, image: 'images/9_of_spades.png' },

  { name: '10', suit: 'Hearts', value: 10, image: 'images/10_of_hearts.png' },
  { name: '10', suit: 'Clubs', value: 10, image: 'images/10_of_clubs.png' },
  {
    name: '10',
    suit: 'Diamonds',
    value: 10,
    image: 'images/10_of_diamonds.png'
  },
  { name: '10', suit: 'spades', value: 10, image: 'images/10_of_spades.png' },

  {
    name: 'Jack',
    suit: 'Hearts',
    value: 10,
    image: 'images/jack_of_hearts2.png'
  },
  {
    name: 'Jack',
    suit: 'Clubs',
    value: 10,
    image: 'images/jack_of_clubs2.png'
  },
  {
    name: 'Jack',
    suit: 'Diamonds',
    value: 10,
    image: 'images/jack_of_diamonds2.png'
  },
  {
    name: 'Jack',
    suit: 'spades',
    value: 10,
    image: 'images/king_of_spades2.png'
  },

  {
    name: 'King',
    suit: 'Hearts',
    value: 10,
    image: 'images/king_of_hearts2.png'
  },
  {
    name: 'King',
    suit: 'Clubs',
    value: 10,
    image: 'images/king_of_clubs2.png'
  },
  {
    name: 'King',
    suit: 'Diamonds',
    value: 10,
    image: 'images/king_of_diamonds2.png'
  },
  {
    name: 'King',
    suit: 'spades',
    value: 10,
    image: 'images/King_of_spades2.png'
  },

  {
    name: 'Queen',
    suit: 'Hearts',
    value: 10,
    image: 'images/queen_of_hearts2.png'
  },
  {
    name: 'Queen',
    suit: 'Clubs',
    value: 10,
    image: 'images/queen_of_clubs2.png'
  },
  {
    name: 'Queen',
    suit: 'Diamonds',
    value: 10,
    image: 'images/queen_of_diamonds2.png'
  },
  {
    name: 'Queen',
    suit: 'spades',
    value: 10,
    image: 'images/queen_of_spades2.png'
  }
]

let currentDeck = []
let dealerHand = []
let playerHand = []
let gameOver = false
let canHit = true

// The DOM elements
const elements = {
  dealerCards: document.getElementById('dealerCards'),
  playerCards: document.getElementById('playerCards'),
  dealerScore: document.getElementById('dealerSum'),
  playerScore: document.getElementById('playerSum'),
  message: document.getElementById('results'),
  hitBtn: document.getElementById('hit'),
  standBtn: document.getElementById('stay'),
  restartBtn: document.getElementById('restart')

}

// function to initialize the game
window.onload = function () {
  // add click event to action buttons
  elements.hitBtn.addEventListener('click', hit)
  elements.standBtn.addEventListener('click', stand)
  elements.restartBtn.addEventListener('click', startGame)


  // call start game method
  startGame()
}

// function to start the game
const startGame = () => {
  currentDeck = shuffleDeck(deck)
  dealerHand = []
  playerHand = []
  gameOver = false
  canHit = true
  elements.message.textContent = ''

  // Deal initial cards
  dealerHand.push(currentDeck.pop())
  dealerHand.push(currentDeck.pop())
  playerHand.push(currentDeck.pop())
  playerHand.push(currentDeck.pop())

  renderGame()
}

const renderGame = () => {
  // Clear previous cards
  elements.dealerCards.innerHTML = ''
  elements.playerCards.innerHTML = ''

  // Render dealer cards
   dealerHand.forEach((card,index) => {
    // only hide the first card from the dealer hand if the game is not over
    isHidden =  !gameOver && index === 0
    // append image and pass isHidden value
    elements.dealerCards.appendChild(createCardImg(card,isHidden))
  })

  // Render player cards
  playerHand.forEach((card) => {
    elements.playerCards.appendChild(createCardImg(card))
  })

  // Update scores
  elements.dealerScore.textContent = gameOver ? calcScore(dealerHand) : '?'
  elements.playerScore.textContent = calcScore(playerHand)
  elements.hitBtn.disabled = !canHit || gameOver
}

// function to shuffle the deck *Fisher-Yates algo*
const shuffleDeck = (deck) => {
  const shuffled = [...deck]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

//function to calcluate the score
const calcScore = (hand) => {
  let score = hand.reduce((total, card) => total + card.value, 0)
  const aces = hand.filter((card) => card.name === 'Ace').length

  // this will loop through until the hand has no aces and will adjust the score depending if the player busts or not.
  // *if the total value of the deck is larger than 21 it will count the aces as 1 and if not it will count it ast 11*
  while (score > 21 && aces > 0) {
    score -= 10
    aces--
  }
  return score
}

// function to creat the card image
const createCardImg = (card, hidden = false) => {
  const img = document.createElement('img')
  img.src = hidden ? 'images/card_back.png' : card.image
  img.className = 'card'
  img.alt = `${card.name} of ${card.suit}`
  return img
}

// This function lets the player Hits
const hit = () => {
  if (!canHit || gameOver) return

  playerHand.push(currentDeck.pop())
  if (calcScore(playerHand) > 21) {
    canHit = false
    stand()
  }
  renderGame()
}
// this function lets the player stand and will make the dealer draw until score is =>17 and will determine the winner
const stand = () => {
  if (gameOver) return

  gameOver = true
  canHit = false

  // Dealer draws until score >= 17
  while (calcScore(dealerHand) < 17) {
    dealerHand.push(currentDeck.pop())
  }

  // Determine winner
  const playerScore = calcScore(playerHand)
  const dealerScore = calcScore(dealerHand)

  if (elements.message) {
    elements.message.textContent =
      playerScore > 21
        ? 'You busted! Dealer wins'
        : dealerScore > 21
        ? 'Dealer busted! You win!'
        : playerScore === dealerScore
        ? "Push! It's a tie!"
        : playerScore > dealerScore
        ? 'You win!'
        : 'You lose!'
  }

  renderGame()
}
