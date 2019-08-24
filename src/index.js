import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Components

import Header from "./components/header";
import ContactList from "./components/contactList";
import ContactForm from "./components/contactForm";
import ContactBloc from "./components/contactBloc";
import ContactSlider from "./components/contactSliders";

const App = () =>{

  const List = [
      { name: "Camila Tery", sex: "women", avatar: 50, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", },
      { name: "Joel Williamson", sex: "men", avatar: 45, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", },
      { name: "Deann Payne", sex: "men", avatar: 46, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation", },
      { name: "Leona Hunter", sex: "women", avatar: 49, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", },
      { name: "Donald Perkins", sex: "men", avatar: 47, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", },
      { name: "Micki Lork", sex: "women", avatar: 48, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", },
      { name: "Olifer Still", sex: "men", avatar: 30, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", },
      { name: "Joel Williamson", sex: "men", avatar: 45, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", },
      { name: "Bocs Jenkins", sex: "men", avatar: 20, desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam", }
    ];

  const Section = [
    { name: "Deann Payne", sex:"men", avatar:20, date:"11-07-1987", city:"Odesa", rank:"Admin", history:"The name  but the Anglican church exists worldwide. It began in the sixth century in England, when Pope Gregory the Great sent St. Augustine to Britain to bring a more disciplined Apostolic succession to the Celtic Christians. The Anglican Church evolved as part of the Roman church, but the Celtic influence was folded back"},
    { name: "Olena Bii", sex:"women", avatar:21, date:"11-07-1975", city:"Rivne", rank:"HR", history:"The name  but the Anglican church exists worldwide. It began in the sixth century in England, when Pope Gregory the Great sent St. Augustine to Britain to bring a more disciplined Apostolic succession to the Celtic Christians. The Anglican Church evolved as part of the Roman church, but the Celtic influence was folded back"},
    { name: "Micki Lork", sex:"men", avatar:22, date:"11-07-1991", city:"Lviv", rank:"Curator", history:"The name  but the Anglican church exists worldwide. It began in the sixth century in England, when Pope Gregory the Great sent St. Augustine to Britain to bring a more disciplined Apostolic succession to the Celtic Christians. The Anglican Church evolved as part of the Roman church, but the Celtic influence was folded back"}
  ];
 
  const Images  = [
    {namb:"1"},
    {namb:"2"},
    {namb:"3"},
    {namb:"4"},
    {namb:"5"},
    {namb:"6"},
    {namb:"7"}
  ];


  return(
      <section className="row-section">
        <div className="container">
            <Header />
            <ContactForm />
            <ContactList ContactList={List}  />
            <ContactBloc ContactBloc={Section} />
            <ContactSlider ContactSlider = {Images} />

        </div>
    </section>

  )  
}

ReactDOM.render(<App />, document.getElementById('root'));

