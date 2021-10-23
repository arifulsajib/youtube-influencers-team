import React, { useEffect, useState } from 'react';
import TeamCart from '../TeamCart/TeamCart';
import Youtuber from '../Youtuber/Youtuber';
import "./Main.css";

const Main = () => {
    const [youtubers, setYoutubers] = useState([]);
    const [teamCart, setTeamCart] = useState([]);

    //fetch data
    useEffect(() => {
        fetch("./influencers.json")
        .then(res => res.json())
        .then(data => setYoutubers(data));
    },[]);

    // Add to team btn handler
    const handleAddToTeam = (youtuber) => {
        const newTeamCart = [...teamCart,youtuber];
        setTeamCart(newTeamCart);
    }

    return (
        <div className="main-container">
            <div className="youtubers-contianer">
                {
                    youtubers.map(youtuber => <Youtuber key={youtuber.key} youtuber={youtuber} handleAddToTeam ={handleAddToTeam}></Youtuber> )
                }
            </div>
            <div className="team-cart">
                <TeamCart teamCart={teamCart}></TeamCart>
            </div>
        </div>
    );
};

export default Main;