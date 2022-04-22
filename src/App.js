// import { useEffect, useState } from "react";
// import { UsernameForm } from "./components/usernameForm";
// import faker from "faker";
import './App.css';
import Feed from "./components/Feed/feed";
import Nav from "./components/Navbar/Navbar";
// import Story from "./components/Story/Story"

// import state to add user input and 
// const App = () => {
//   const [user, setUser] = useState();
//   const [username, setUsername] = useState();

//   // prevent default used to stop the page re rendering 
//   const submitHandler = (e) => {
//     e.preventDefault();
//     setUsername(user)
//   }

//   return (
//     <div className="App">
//       {username ? <h1>{username}</h1> : <h1>Please Enter Your Name</h1>}
//       <UsernameForm submitHandler={submitHandler} setUser={setUser} />
//     </div>
//   );
// }

const App = () => {
  // user, email and email
return (
  <div>
    <Nav />
    <Feed />
  </div>
)

};

export default App;
