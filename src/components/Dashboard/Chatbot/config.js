import { createChatBotMessage } from "react-chatbot-kit";

const config = { // main configration obj for the chatbot
  botName: "Tasker Bot",
  initialMessages: [createChatBotMessage("Hello! How can I help?")], // inital msg when chat is start

  // custom ui components to override default ones
  customComponents: {
    header: () => <div className="custom-header">Tasker Bot</div>,
  },

  // styling for different parts of the chat
  customStyles: {
    // botMessageBox: { backgroundColor: "#1976d2" },
    chatButton: { backgroundColor: "#1976d2" },
    chatInput: { border: "1px solid #ddd", borderRadius: "10px" },
  },


  // Define interactive widgets that can appear in messages
  widgets: [
    {
      widgetName: "taskList",
      widgetFunc: (props) => {      // Function that renders the widget
        return (
          <div className="task-list">
            <h4>Your Tasks:</h4>
            <ul>
                 {/* Render each task from props.tasks as list items */}
              {props.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
        );
      },
      props: {  // props are passed here
        tasks: ["Task 1", "Task 2", "Task 3"],  // task list
      },
    },
  ],
};

export default config;
