import React, {useState, useEffect} from 'react'
import Card from './Card'

function BusinessCards() {
  const [businessCards, setBusinessCards] = useState([]);

  useEffect(() => {
    let url = "https://cgi-osd-kodtest-default-rtdb.europe-west1.firebasedatabase.app/businessCards.json";
    fetch(url)
    .then(response => {
      if(!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      setBusinessCards(data);
      console.log(data);
    })
    .catch(error => {
      console.log(error.message);
    })
  }, []);

  return (
    <main>
      <h2>Business Cards of our Eminent Team Members</h2>
      <p className="intro">
        On this page you'll find contact information for all our employees. Our employees stand at the very heart of our success – they devote their ideas, creativity, knowledge and entrepreneurial spirit to ensuring that we can do our very best for our customers. Please feel free to get in touch with any of our Tech Heroes for business inquiries!
      </p>
      <div className="card-container">
      {
        businessCards.map((card) => (
         <Card key={card.id} card={card} />
        ))
      }
      </div>
      </main>
  )
}

export default BusinessCards