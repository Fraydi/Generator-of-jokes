/* Frydie Goldstein 
The program generates a sentence addressing the user, a joke and a wish to continue. */

// Return a random number in a range of recieiving num
function generateNum(num) {
    return Math.floor(Math.random() * num)
  }

// A collection of sentences to assemble
const senCollection = {
    userAppeal: ["Welcome! Ready for a good laugh? Here's a joke to brighten up your day:",
    "Dear user, I hope you're ready to crack a smile!\nEnjoy this lighthearted joke just for you:",
    "Greetings, joke enthusiast! Get ready for a dose of humor to kickstart your day:",
    "Hello there! In need of a cheerful moment?\nSit back, relax, and enjoy this delightful joke:",
    "Hey, user!\nGet ready to chuckle with this fantastic joke we have in store for you:",
    "Dear user, I hope you're having a fantastic day so far.\nBrace yourself for a laugh with this amusing joke:"],
    jokes: ["maybe I'm not perfect,\n But at least no one sees that about me.",
    "It wouldn't be accurate to say that I fail at everything,\n I only fail at the things I try to do.",
    "The difference between a serious person and a non-serious person:\nA non-serious person solves his problems by jumping off the roof,\nA serious man solves his problems by jumping off the roof with a barbell tied around his neck.",
    "I made a decision to appeal to the lowest common denominator going forward.\nAnd it won't be challenging,\nI'll raise the level little by little - and there I'll be.",
    "I'm at least a hundred years ahead of my time.\nIn other words: I have a very unpleasant smell."],
    wish: ["I hope that joke brought a smile to your face. Have a wonderful day ahead!",
    "Hope that joke brightened your day a little. Wishing you continued laughter and happiness!",
    "I'M glad I could bring some humor your way. May the rest of your day be filled with joy!",
    "Laughter is the best medicine, and I hope that joke provided a good dose. Take care and keep smiling!",
    "I hope you enjoyed that joke and it brought a moment of laughter. Wishing you a fantastic day!",
    "I'm glad I could bring a smile to your face. Keep that laughter going and have an amazing day!"]
}
// console.log(senCollection.userAppeal.length)
// console.log(senCollection.userAppeal[generateNum(senCollection.userAppeal.length)])

// The assembly of the message to be displayed to the user
let message = `${senCollection.userAppeal[generateNum(senCollection.userAppeal.length)]} \n \n
${senCollection.jokes[generateNum(senCollection.jokes.length)]} \n
By: Tal Milner\n \n
${senCollection.wish[generateNum(senCollection.wish.length)]}`


console.log(message)