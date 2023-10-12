/* eslint-disable react/jsx-key */
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Pizza and Sons</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {/* --ternary operator--*/}
      {numPizzas > 0 ? (
        // <> react fragment to render the <p> and <ul> together without wrapping
        // in a <div>. Use <React.Fragment></> in order to add a key.
        <>
          <p>Authentic Menu, Good food!</p>

          <ul className="pizzas">
            {/* loop over the pizzaData array; "pizza is the position of each 
            object element per iteration"
            Then pass in the entire object element(pizzaObj = {pizza}) into the 
            Pizza component.
            The component does the rest of the work by accessing the object per 
            elements({pizzaObj.photoName})
            */}
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} />
            ))}
          </ul>
        </>
      ) : null}
    </main>
  );
}
// destructured prop{from pizza.pizzaObj to {pizzaObj}}
function Pizza({ pizzaObj }) {
  // early return
  // if (pizzaObj.soldOut) return null;

  return (
    // if the pizza object contains the class soldOut=true, add the classname "soldout" otherwise nothing
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p> {pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT!" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>
          We&apos;re not open currently, check back between {openHour}:00 and
          {closeHour}:00.
        </p>
      )}
    </footer>
  );
}

function Order({ closeHour }) {
  return (
    <div className="order">
      <p> We&apos;re open until {closeHour}:00</p>
      <button className="btn"></button>
    </div>
  );
}

export default App;
