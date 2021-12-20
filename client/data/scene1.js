export default {
  characters: ['kauri', 'aria', 'kaia'],
  script: [
    {
      type: 'narrator-dialogue',
      dialogue: 'Use the left and right arrow keys to explore the story!',
      sound: 'click1'
    },
    {
      type: 'bird-dialogue',
      character: 'kauri',
      dialogue: 'Kaia the Kiwi can\'t fly.',
      sound: 'type1_short'
    },
    {
      type: 'bird-dialogue',
      character: 'aria',
      dialogue: 'He won\'t be able to play with us.',
      sound: 'type2_mid'
    },
    {
      type: 'bird-dialogue',
      character: 'kauri',
      dialogue: 'Let\'s leave him and play!',
      sound: 'type1_short'
    },
    {
      type: 'narrator-question',
      dialogue: 'How do you think the Kiwi feels?',
      answers: ['Happy', 'Sad', 'Angry', 'Okay'] 
    },
    {
      type: 'bird-dialogue',
      character: 'kaia',
      dialogue: 'I want to play with them, but I cannot fly.',
      sound: 'type1_long'
    },
    {
      type: 'narrator-dialogue',
      dialogue: 'The Kiwi is very good at digging and smelling.',
      sound: 'click1'
    },
    {
      type: 'narrator-dialogue',
      dialogue: 'He can help the other birds find worms to play with!',
      sound: 'click1'
    }
  ]
}
