import React from 'react';
import "./TeamCart.css";

const TeamCart = (props) => {
    const {teamCart} = props;
    const totalFollowers = teamCart.reduce((previous, current) => previous + current.followers ,0);

    let key = 0;

    return (
        <div className="teamCart">
            <h2>My Team</h2>
            <hr />
            <h3>Total Added: {teamCart.length}</h3>
            <h3>Total Followers: {totalFollowers.toFixed(2)} M</h3>
            <ul>
                {
                    teamCart.map(youtuber => {
                        key = key + 1;
                        return <li key={key}>{youtuber.name}</li>
                    })
                }
            </ul>
        </div>
    );
};

export default TeamCart;