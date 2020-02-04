import React from 'react';
import './PetCard.scss';
import { upperCaseWord } from '../helpers';

class PetCard extends React.Component {
  render() {
    const {name, photos, age, size, gender, species, contact } = this.props.pet;
    return (
      <div className="pet-card">
        <h2>
          <i className="far fa-star star-elem"></i>
          <i className="far fa-star star-elem"></i>
            {upperCaseWord(name)}
          <i className="far fa-star star-elem"></i>
        </h2>
        <p className="pet-card__description">
          <i className="far fa-circle circle-elem"></i>
          <span>{age}</span>
          <i className="far fa-circle circle-elem"></i>
          <span>{size}</span>
          <i className="far fa-circle circle-elem"></i>
          <span>{gender}</span>
          <i className="far fa-circle circle-elem"></i>
          <span>{species}</span>
          <i className="far fa-circle circle-elem"></i>
        </p>
        {
          (photos.length >= 1) ? <img src={photos[0].small} alt={name} width="150" /> : <i class="fas fa-dog dog-elem--big"></i>
        }
        <p className="pet-card__contact">
          {
            (contact.email) ? 
            <span className="pet-card__contact__elem--email">
              <i className="fas fa-envelope"></i>
              <span>{contact.email}</span>
            </span> : ''
          }

          {
            (contact.phone) ? 
              <span className="pet-card__contact__elem--phone">
                <i className="fas fa-phone-alt"></i>
                <span>{contact.phone}</span>
              </span> : ''
          }

          <span>{contact.description}</span>
        </p>
      </div>
    )
  }
}

export default PetCard;