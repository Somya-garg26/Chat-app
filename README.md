# Chat-app
##MERN Stack Real-Time Chat App
  This is a real-time chat application built using the MERN stack (MongoDB, Express.js, React.js, Node.js) along with Socket.io for live, bi-directional communication between users
  
##About the Project
  This project is a basic version of a real-time group chat app. Users can send and receive messages instantly. It’s a full-stack application where:
-The backend handles user connections, chat messages, and database storage.
-The frontend displays the chat UI and connects users using Socket.io.

##Features
1.Real-time messaging using Socket.io
2.MongoDB integration for storing chat history
3.Simple and clean user interface
4.Multiple users can chat at the same time
5.React-based frontend with live updates

##How the Project is Built
1.Backend (Node + Express)
-Created REST APIs to handle messages and user login.
-Connected to MongoDB using Mongoose.
-Added Socket.io server for handling real-time events.

2.Frontend (React)
-Created chat interface using React components.
-Used Socket.io client to send and receive live messages.
-Integrated Axios for API calls to the backend.

3.Real-time Chat
-Users join the chat via the frontend.
-When one user sends a message, it is emitted through Socket.io.
-The server receives and broadcasts it to all other connected users.
-Messages are saved in MongoDB for history.

##How to Run the Project
## Backend:

cd server
npm install
node index.js

## Frontend:

cd client
npm install
npm start

##What I Learned
-How real-time apps work using Socket.io
-Full-stack development with the MERN stack
-Connecting frontend and backend with APIs and sockets
-Organizing a project from backend to frontend

## Future Improvements
-Add user authentication (login/register)
-Support private chats or rooms
-Improve mobile responsiveness
-Add emojis and file sharing

##Screenshots of my output:-

![Image](https://github.com/user-attachments/assets/a787ba81-7348-4e74-a632-65ddcb5b3c94)

![Image](https://github.com/user-attachments/assets/e153d283-987b-4ab3-b792-a9ab6a76e101)

![Image](https://github.com/user-attachments/assets/a81435b6-0311-461a-b662-a26919704f55)

![Image](https://github.com/user-attachments/assets/d88e7d5c-4798-4a56-9cfe-d3365615fe8b)

![Image](https://github.com/user-attachments/assets/30f473cd-bc3d-4dc4-ab4e-972e1995d20d)

![Image](https://github.com/user-attachments/assets/cde28108-be74-4d30-9a34-8d3155416df8)
