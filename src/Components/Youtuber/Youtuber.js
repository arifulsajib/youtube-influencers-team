import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Youtuber.css";

const Youtuber = (props) => {
    const {youtuber, handleAddToTeam} = props;
    const {name, category, country, followers, yearsActive, pic} = youtuber;

    // Font awesome icons
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />

    return (
        <div className="youtuber">
            <div className="pic-div">
                <img src={pic} alt="" width="200px" height="200px"/>
            </div>
            <div className="info-div">
                <h3 className="name">{name}</h3>
                <p>Category: {category}</p>
                <p>Years active: {yearsActive}</p>
                <p>Country: {country}</p>
                <h4>Followers: {followers} M</h4>
                <button onClick={() => handleAddToTeam(youtuber)} className="btn-add">{cartIcon} Add to Team</button>

            </div>
        </div>
    );
};

export default Youtuber;