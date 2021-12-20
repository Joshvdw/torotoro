export default {
  characters: ['kaia', 'sparrow'],
  script: [
      {
        type: 'bird-dialogue',
        character: 'kaia',
        dialogue: 'I am not very good at whistling.',
        sound: 'type2_mid2'
      },
      {
        type: 'bird-dialogue',
        character: 'sparrow',
        dialogue: 'chirp, chirp, chirp',
        sound: 'sparrow2'
      },
      {
        type: 'bird-dialogue',
        character: 'kaia',
        dialogue: 'But I really like the sound.',
        sound: 'type2_mid'
      },
      {
        type: 'narrator-question',
        dialogue: 'What do you think the Kiwi should do?',
        answers: ['Give up', 'Keep practicing', 'Get help', 'Stop'] 
      },
      {
        type: 'bird-dialogue',
        character: 'kaia',
        dialogue: 'Maybe I can get one of the other birds to teach me?',
        sound: 'type2_mid'
      },
      {
        type: 'narrator-dialogue',
        dialogue: 'If the Kiwi keeps practicing, it will get easier and more fun!',
        sound: 'click1'
      },
  ]
} 