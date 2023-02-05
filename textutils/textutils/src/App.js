import logo from "./logo.svg";
import "./App.css";

function App() {

  let name= "Ansh"; 
  return (
    <>
      <nav>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </nav>
      <div className="container">
        <h1>Hello {name}</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque illo
        nulla dolores at quasi magnam impedit modi? Iure explicabo aperiam quia
        optio aut cumque ea eius, eos mollitia quae? Et quod quidem corporis
        minima sequi error laudantium odio. Quis harum voluptatem quam commodi
        excepturi, minima sit deleniti, eaque, eum expedita consequuntur
        nesciunt ab! Consectetur repellendus facilis fugiat voluptate nam, amet
        saepe ullam porro cum deserunt magnam, numquam quasi omnis!
      </div>
    </>
  );
}

export default App;
