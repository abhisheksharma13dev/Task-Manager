// ActionProvider is a class that handles creating chatbot messages and updating state
class ActionProvider {
  // Constructor receives two functions
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage; // create new chatbot messages
    this.setState = setStateFunc; //update the chatbot's state and store these func as class proprties so other can use them
  }

  // method to send a greeting msg
  greet = () => {
    const message = this.createChatBotMessage("Hello there!"); // creating a simple msg
    this.addMessageToState(message); // add msg to chat state
  };

  // method to handle display a task list
  handleTaskList = () => {
    // Create a message that includes a widget (UI component)
    const message = this.createChatBotMessage("Here are your tasks:", {
      widget: "taskList", // this will render a taskList component in the chat
    });
    this.addMessageToState(message); // add msg to chat state
  };

  defaultResponse = () => {
    // Default response when the bot doesn't understand the input
    const message = this.createChatBotMessage(
      "I didn't understand that. Can you try asking about tasks or say hi?"
    );
    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    //helper method to add a new msg to the chat state
    //update state by keeping aall state previous state propts(...prev) & and add new msg to the msg array
    this.setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
}

export default ActionProvider;
