import React from 'react';
import './App.css';
import ContactCard from './ContactCard';

const App = () => {
  return(
    <div>
    <ContactCard 
    avatarUrl = 'https://via.placeholder.com/150'
    name = "Jenny Han" email="jenny@gmail.com" age= {25} />
    <ContactCard
      avatarUrl = 'https://via.placeholder.com/150'
    name = "Paul john" email="paul@gmail.com" age= {40} />
     />
    <ContactCard 
        avatarUrl = 'https://via.placeholder.com/150'
    name = "Peter jan" email="peter@gmail.com" age= {45} />
    />
    </div>
  )
}

export default App;



