import React from "react";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import WelcomeMessage from "./components/WelcomeMessage.jsx";
import Greeting from "./components/Greeting.jsx";
import Counter from "./components/Counter.jsx";
import ToggleText from "./components/ToggleText.jsx";
import LiveInput from "./components/LiveInput.jsx";
import FruitList from "./components/FruitList.jsx";
import AddFruit from "./components/AddFruit.jsx";
import LoginForm from "./components/LoginForm.jsx";
import FetchPosts from "./components/FetchPosts.jsx";

function App() {
  return (
    <div className="App" style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <Header />
      <WelcomeMessage />
      <Greeting name="Amna" />
      <Counter />
      <ToggleText />
      <LiveInput />
      <FruitList />
      <AddFruit />
      <LoginForm />
      <FetchPosts />
      <Footer />
    </div>
  );
}

export default App;
