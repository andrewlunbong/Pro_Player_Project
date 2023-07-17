import React from "react";
import { Link } from 'react-router-dom';

const LeagueTableCard = ({LeagueTable})=>{
    return (
        
        <Link to="/email" className="card w-96 bg-base-100 shadow-xl">
            <h1 className="card-title">Notifications</h1>
            <figure><img src="https://logowik.com/content/uploads/images/premier-league9031.jpg" alt="Shoes" /></figure>
            <div className="card-body">
            <div className="card-actions justify-end">
            </div>
            </div>
        </Link>
       
    );
};

export default LeagueTableCard