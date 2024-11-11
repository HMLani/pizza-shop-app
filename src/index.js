import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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
]

function Pizzas({ name, ingredients, price, photoName }) {
  return (
    <div className='pizza'>
      <h2>{name}</h2>
      <p>{ingredients}</p>
      <p>${price}</p>
      <img src={photoName} alt={name} />
    </div>
  );
}

function PizzaMenu() {
  return(
    <div className='pizzamenu'>
      {pizzaData.map(pizza => (
        <div className='cards' key = {pizza.name}>
          <Pizzas
            name = {pizza.name}
            ingredients = {pizza.ingredients}
            price = {pizza.price}
            photoName = {pizza.photoName}
          />
        </div>
      ))}
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>Our Menu</h1>
    </header>
  );
}


function App() {
  return (
    <div>
      <Header />

      <PizzaMenu />

      <Footer />
    </div>
  );
}

function Footer() {
  const timeNow = new Date().getHours();
  const openTime = timeNow >= 10 && timeNow <= 22;

  return (
    <footer>
      {openTime ? <p>
        We're currently Open!<br/><br/> Authentic Italian Cuisine, all from our stone oven<br/><br/> 
        <button>Order Now!</button> </p> : <p>Sorry, we are closed now</p>}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

 