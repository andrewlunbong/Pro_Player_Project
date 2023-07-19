import React from "react";
import { Link } from 'react-router-dom';

const PlayerDevelopment = () => {
  return (
    <div className="m-auto mt-6 mb-6 w-10/12">
    <div>
      <div className="card card-side bg-base-100 shadow-xl col-span-2">
        {/* <figure className="w-10"><img src="https://logowik.com/content/uploads/images/premier-league9031.jpg" alt="Movie" /></figure> */}
        <div className="card-body">
          <p>Age:</p>
          <p>Position:</p>
          <p>Preferred foot:</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Overall</button>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 ">
      <div className="card shadow-xl col-span-1  ">
        <div className="card-body ">
          <h2 className="card-title ">Goalkeeper</h2>
          <div className="grid grid-cols-2 ">
          <p>Positioning</p>
          <progress className="progress progress-error w-25" value={10} max="100"></progress>
          <p>Gk Diving</p>
          <progress className="progress progress-error w-25" value={10} max="100"></progress>
          <p>Gk Handling</p>
          <progress className="progress progress-error w-25" value={10} max="100"></progress>
          <p>Gk Kicking</p>
          <progress className="progress progress-error w-25" value={10} max="100"></progress>
          <p>Gk Reflexes</p>
          <progress className="progress progress-error w-25" value={10} max="100"></progress>
          <div className="card-actions justify-end">
          </div>
        </div>
        </div>
      </div>
      <div className="card shadow-xl col-span-1">
        <div className="card-body ">
          <h2 className="card-title ">Defence</h2>
          <div className="grid grid-cols-2">
          <p>Slid Tackle</p>
          <progress className="progress progress-error w-25" value={70} max="100"></progress>
          <p>Standing Tackle</p>
          <progress className="progress progress-error w-25" value={62} max="100"></progress>
          <p>Strength</p>
          <progress className="progress progress-error w-25" value={65} max="100"></progress>
          <p>Jumping</p>
          <progress className="progress progress-error w-25" value={60} max="100"></progress>
          <p>Interception</p>
          <progress className="progress progress-error w-25" value={70} max="100"></progress>
          <p>Aggression</p>
          <progress className="progress progress-warning w-25" value={45} max="100"></progress>
          <p>Reaction</p>
          <progress className="progress progress-warning w-25" value={50} max="100"></progress>
          <p>Heading</p>
          <progress className="progress progress-warning w-25" value={55} max="100"></progress>
          <div className="card-actions justify-end">
          
          </div>
        </div>
        </div>
      </div>
      <div className="card shadow-xl col-span-1">
        <div className="card-body ">
          <h2 className="card-title ">Midfield</h2>
          <div className="grid grid-cols-2 ">
          
          <p>Short Pass</p>
          <progress className="progress progress-error w-25" value={70} max="100"></progress>
          <p>Long Pass</p>
          <progress className="progress progress-error w-25" value={62} max="100"></progress>
          <p>Ball Control</p>
          <progress className="progress progress-error w-25" value={65} max="100"></progress>
          <p>Dribbling</p>
          <progress className="progress progress-error w-25" value={60} max="100"></progress>
          <p>Vision</p>
          <progress className="progress progress-error w-25" value={70} max="100"></progress>
          <p>Sprint</p>
          <progress className="progress progress-warning w-25" value={45} max="100"></progress>
          <p>Agility</p>
          <progress className="progress progress-warning w-25" value={50} max="100"></progress>
          <p>Stamina</p>
          <progress className="progress progress-warning w-25" value={55} max="100"></progress>
          <div className="card-actions justify-end">
          
          </div>
        </div>
        </div>
      </div>
      <div className="card shadow-xl col-span-1">
        <div className="card-body ">
          <h2 className="card-title ">Attack</h2>
          <div className="grid grid-cols-2 ">
          <p>Finishing</p>
          <progress className="progress progress-error w-25" value={70} max="100"></progress>
          <p>Shot Power</p>
          <progress className="progress progress-error w-25" value={62} max="100"></progress>
          <p>Curve</p>
          <progress className="progress progress-error w-25" value={65} max="100"></progress>
          <p>Long Shots</p>
          <progress className="progress progress-error w-25" value={60} max="100"></progress>
          <p>Penalties</p>
          <progress className="progress progress-error w-25" value={70} max="100"></progress>
          <p>Volleys</p>
          <progress className="progress progress-warning w-25" value={45} max="100"></progress>
          <p>Free Kicks</p>
          <progress className="progress progress-warning w-25" value={50} max="100"></progress>
          <p>Stamina</p>
          <progress className="progress progress-warning w-25" value={55} max="100"></progress>
          <div className="card-actions justify-end">
          
          </div>
        </div>
        </div>
      </div>

    </div>
    </div>
    </div>
  );
};

export default PlayerDevelopment;
