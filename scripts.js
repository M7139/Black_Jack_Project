// the deck array with the images linked
const deck = [
  { name: 'Ace', Suit: 'Hearts', value: '11', image: 'images/ace_of_hearts' },
  { name: 'Ace', Suit: 'Clubs', value: '11', image: 'images/ace_of_clubs' },
  {
    name: 'Ace',
    Suit: 'Diamonds',
    value: '11',
    image: 'images/ace_of_diamonds'
  },
  { name: 'Ace', Suit: 'Spades', value: '11', image: 'images/ace_of_spades' },

  { name: '2', Suit: 'Hearts', value: '2', image: 'images/2_of_hearts' },
  { name: '2', Suit: 'Clubs', value: '2', image: 'images/2_of_clubs' },
  { name: '2', Suit: 'Diamonds', value: '2', image: 'images/2_of_diamonds' },
  { name: '2', Suit: 'spades', value: '2', image: 'images/2_of_spades' },

  { name: '3', Suit: 'Hearts', value: '3', image: 'images/3_of_hearts' },
  { name: '3', Suit: 'Clubs', value: '3', image: 'images/3_of_clubs' },
  { name: '3', Suit: 'Diamonds', value: '3', image: 'images/3_of_diamonds' },
  { name: '3', Suit: 'spades', value: '3', image: 'images/3_of_spades' },

  { name: '4', Suit: 'Hearts', value: '4', image: 'images/4_of_hearts' },
  { name: '4', Suit: 'Clubs', value: '4', image: 'images/4_of_clubs' },
  { name: '4', Suit: 'Diamonds', value: '4', image: 'images/4_of_diamonds' },
  { name: '4', Suit: 'spades', value: '4', image: 'images/4_of_spades' },

  { name: '5', Suit: 'Hearts', value: '5', image: 'images/5_of_hearts' },
  { name: '5', Suit: 'Clubs', value: '5', image: 'images/5_of_clubs' },
  { name: '5', Suit: 'Diamonds', value: '5', image: 'images/5_of_diamonds' },
  { name: '5', Suit: 'spades', value: '5', image: 'images/5_of_spades' },

  { name: '6', Suit: 'Hearts', value: '6', image: 'images/6_of_hearts' },
  { name: '6', Suit: 'Clubs', value: '6', image: 'images/6_of_clubs' },
  { name: '6', Suit: 'Diamonds', value: '6', image: 'images/6_of_diamonds' },
  { name: '6', Suit: 'spades', value: '6', image: 'images/6_of_spades' },

  { name: '7', Suit: 'Hearts', value: '7', image: 'images/7_of_hearts' },
  { name: '7', Suit: 'Clubs', value: '7', image: 'images/7_of_clubs' },
  { name: '7', Suit: 'Diamonds', value: '7', image: 'images/7_of_diamonds' },
  { name: '7', Suit: 'spades', value: '7', image: 'images/7_of_spades' },

  { name: '8', Suit: 'Hearts', value: '8', image: 'images/8_of_hearts' },
  { name: '8', Suit: 'Clubs', value: '8', image: 'images/8_of_clubs' },
  { name: '8', Suit: 'Diamonds', value: '8', image: 'images/8_of_diamonds' },
  { name: '8', Suit: 'spades', value: '8', image: 'images/8_of_spades' },

  { name: '9', Suit: 'Hearts', value: '9', image: 'images/9_of_hearts' },
  { name: '9', Suit: 'Clubs', value: '9', image: 'images/9_of_clubs' },
  { name: '9', Suit: 'Diamonds', value: '9', image: 'images/9_of_diamonds' },
  { name: '9', Suit: 'spades', value: '9', image: 'images/9_of_spades' },

  { name: '10', Suit: 'Hearts', value: '10', image: 'images/10_of_hearts' },
  { name: '10', Suit: 'Clubs', value: '10', image: 'images/10_of_clubs' },
  { name: '10', Suit: 'Diamonds', value: '10', image: 'images/10_of_diamonds' },
  { name: '10', Suit: 'spades', value: '10', image: 'images/10_of_spades' },

  {
    name: 'Jack',
    Suit: 'Hearts',
    value: '10',
    image: 'images/jack_of_hearts2'
  },
  { name: 'Jack', Suit: 'Clubs', value: '10', image: 'images/jack_of_clubs2' },
  {
    name: 'Jack',
    Suit: 'Diamonds',
    value: '10',
    image: 'images/jack_of_diamonds2'
  },
  {
    name: 'Jack',
    Suit: 'spades',
    value: '10',
    image: 'images/king_of_spades2'
  },

  {
    name: 'King',
    Suit: 'Hearts',
    value: '10',
    image: 'images/king_of_hearts2'
  },
  { name: 'King', Suit: 'Clubs', value: '10', image: 'images/king_of_clubs2' },
  {
    name: 'King',
    Suit: 'Diamonds',
    value: '10',
    image: 'images/king_of_diamonds2'
  },
  {
    name: 'King',
    Suit: 'spades',
    value: '10',
    image: 'images/King_of_spades2'
  },

  {
    name: 'Queen',
    Suit: 'Hearts',
    value: '10',
    image: 'images/queen_of_hearts2'
  },
  {
    name: 'Queen',
    Suit: 'Clubs',
    value: '10',
    image: 'images/queen_of_clubs2'
  },
  {
    name: 'Queen',
    Suit: 'Diamonds',
    value: '10',
    image: 'images/queen_of_diamonds2'
  },
  {
    name: 'Queen',
    Suit: 'spades',
    value: '10',
    image: 'images/queen_of_spades2'
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
  playerCards: document.getElementById('yourCards'),
  dealerScore: document.getElementById('dealerSum'),
  playerScore: document.getElementById('yourSum'),
  message: document.getElementById('results'),
  hitBtn: document.getElementById('hit'),
  standBtn: document.getElementById('stay'),
  hiddenCard: document.getElementById('hidden')
}

// function to initialize the game
window.onload = function () {
  startGame()
  elements.hitBtn.addEventListener('click', hit)
  elements.standBtn.addEventListener('click', stand)
}

// function to shuffle the deck *Fisher-Yates algo*
const shuffleDeck = (deck) => {
  const shuffled = [...deck]
  for (let i = shuffleDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}

//function to calcluate the score
const calcScore = (hand) => {
  let score = hand.reduce((accumulator, card) => accumulator + card.value, 0)

  const aces = hand.filter((card) => card.name === 'Ace').length // check if the hand has aces

  while (score > 21 && aces > 0) {
    score -= 10
    aces--
  }
  // this will loop through until the hand has no aces and will adjust the score depending if the player busts or not.*if the total value of the deck is larger than 21 it will count the aces as 1 and if not it will count it ast 11*
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

// functoin to start the game
const startGame = () => {
  currentDeck = shuffleDeck(deck)
  dealerHand = []
  playerHand = []
  gameOver = false
  canHit = true

  // Deal initial cards
  dealerHand.push(currentDeck.pop())
  playerHand.push(currentDeck.pop())
  playerHand.push(currentDeck.pop())

  renderGame()
}

const renderGame = () => {
  // Clear previous cards
  elements.dealerCards.innerHTML = '<h3>Dealer Cards:</h3>'
  elements.playerCards.innerHTML = '<h3>Your Cards:</h3>'

  // Render dealer cards
  elements.dealerCards.appendChild(createCardImg(dealerHand[0], !gameOver))
  if (gameOver) {
    for (let i = 1; i < dealerHand.length; i++) {
      elements.dealerCards.appendChild(createCardImg(dealerHand[i]))
    }
  }

  // Render player cards
  playerHand.forEach((card) => {
    elements.playerCards.appendChild(createCardImg(card))
  })

  // Update scores
  elements.dealerScore.textContent = gameOver ? calcScore(dealerHand) : '?'
  elements.playerScore.textContent = calcScore(playerHand)
  elements.hitBtn.disabled = !canHit || gameOver
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
