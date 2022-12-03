import React from 'react'

function Card({ card }) {
  return (
    <article className="card">
    <div className="image-container"><img src={card.image} alt={"Profile picture of " + card.name}/></div>
    <h3>{card.name} {card.surName}</h3>
    <address>
      <p><i className="fa-solid fa-envelope fa-sm contact-icon" title="envelope icon" area-hidden="true"></i><a href={"mailto:" + card.email} alt={"Link to create email to " + card.name}>{card.email}</a></p>
      <p><i className="fa-solid fa-phone fa-sm contact-icon" title="phone icon" area-hidden="true"></i><a href={"tel:" + card.telephone} alt={"Link to make phone call to " + card.name}>{card.telephone}</a></p>
    </address>
  </article>
  )
}

export default Card