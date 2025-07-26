// The MessageParser class is responsible for analyzing user messages and determining the appropriate response
class MessageParser {
  constructor(actionProvider) { 
    // Stores the actionProvider which contains all response methods
    this.actionProvider = actionProvider;
  }

    // Main method that analyzes incoming messages
  parse(message) {
    const lowerCase = message.toLowerCase();     // Convert message to lowercase

        // Check if message contains greeting words
    if (lowerCase.includes("hi") || lowerCase.includes("hello")) {
      this.actionProvider.greet();  // if yes then triggers the greeting response

    } else if (lowerCase.includes("task")) { // check msg if about task
      this.actionProvider.handleTaskList(); // if yes then visible the task list  

    } else {  //  show any other msg then show the I didn't understand that. Can you....
      this.actionProvider.defaultResponse();
    }
  }
}

export default MessageParser;
