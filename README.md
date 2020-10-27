# Chatly 🎃
# <a href="https://ibb.co/bbYQj54"><img src="https://i.ibb.co/BnvcH2h/1.png" alt="1" border="0"></a>

## About the project! 🎨

Mobile chating app built with <b>React Native, Apollo, GraphQL, GraphQL PubSub </b>.
Main goal was to try out doing mobile dev with RN. Turned out pretty fun!🤗

Things that were new for me: 
* React Native
* Expo
* GraphQL PubSub
* Didn't have much experiance with Apollo before 

## Main Screen

On the main screen there are 2 main things:
* List of user's available rooms
* Bottom Tab which gives info about logged in user + let's log out

When we join one of the room, and then leave we will still get <b>notification</b
about upcoming messages. It happens like that cuz even when we leave the room,
we're still subscribed to the last chat.

<img src="https://i.ibb.co/6HJ9bQG/mainscreen.png" alt="mainscreen" border="0" width="425"> <img src="https://i.ibb.co/wBzTLqC/mainscreen-Not.png" alt="mainscreen-Not" border="0" width="425">


## Chat Room Screen 👀
It simply uses Gifted Chat ( https://github.com/FaridSafi/react-native-gifted-chat ) for UI.
Consumes the <b> messages + typing subscriptions. </b> So it is visible when someone is typing in the chat.
New messages are shown instantly.

 <img src="https://i.ibb.co/BnvcH2h/1.png" alt="1" border="0" width="425"> <img src="https://i.ibb.co/YNbVw37/2.png" alt="2" border="0" width="425"> 

## Login/Register Screen 🔑

Used Formik + UI Kitten for inputs/buttons. 
The token after loggin in is stored in Async Storage + In the memory ( Context API ).

<img src="https://i.ibb.co/VYyK39r/login.png" alt="login" border="0" width="425"> <img src="https://i.ibb.co/ssv98tD/register.png" alt="register" border="0" width="425">
<img src="https://i.ibb.co/Yt4nQ2k/registered.png" alt="registered" border="0" width="425"> <img src="https://i.ibb.co/NVHXc2D/loginin.png" alt="loginin" border="0" width="425">




## Stack

- Expo

- UI Kitten

- React Native 

- React Hooks API

- Context API

- Phoenix Socket

- Async-storage

- GraphQL

## Todo ⛏

- Make themes

- Refactor auth page

