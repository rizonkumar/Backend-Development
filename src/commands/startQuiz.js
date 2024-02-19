const questions = require("../data/questions.json");

module.exports = {
  name: "startquiz",
  description: "Starts a quiz.",
  async execute(message, args) {
    // Example: Select a random question to start
    const question = questions[Math.floor(Math.random() * questions.length)];
    message.channel.send(question.question); // Simplified for example
    // Further implementation needed for tracking questions, answers, and scores
  },
};
