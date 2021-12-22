const sentences = [
  {
    sentence: "Have courage and be kind",
    author: "Cinderella"
  },
  {
    sentence: "Nothing is impossible. The word itself says 'I'm possible'!",
    author: "Audrey Hepburn"
  },
  {
    sentence: "If it makes you happy, it doesn't have to make sense to others",
    author: ""
  },
  {
    sentence: "I can and will have more than I ever dreamed possible",
    author: ""
  },
  {
    sentence: "Choose to live your life, not settle for it!",
    author: ""
  },
  {
    sentence: "What's MEANT for you WILL find you, even if you feel like it has already passed you!",
    author: ""
  },
  {
    sentence: "What if it does work out exaclty how you imagine or greater?",
    author: ""
  }
]

const randomId = Math.floor(Math.random()*sentences.length)

const choosenSentence = sentences[randomId]

const formattedSentence = `
  "${choosenSentence.sentence}" - <i>${choosenSentence.author || "Unknown"}</i>
`

document.querySelector("#sentenceTarget").innerHTML = formattedSentence;
