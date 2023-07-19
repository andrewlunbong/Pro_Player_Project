import React from "react";
import { Link } from 'react-router-dom';

const EmailPage = () => {
  return (
    
    <div className="grid grid-rows-6 grid-col-2 gap-2 ">
      <div className="card shadow-xl ">
        <div className="card-body  ">
          <p>Date:</p>
          <p>From:</p>
          <p>To:</p>
          <p>Subject:</p>
          <div className="card-actions">
          </div>
        </div>
      </div>

      
      <div className="card shadow-xl row-span-6 ">
      <figure className="px-10 pt-7">
        <img src="https://fifastatic.fifaindex.com/FIFA23/teams/light/10.png" alt="Logo"  />
      </figure>
        <div className="card-body ">
          {/* <h2 className="card-title">News</h2> */}
          <p class="text-left"> Good Afternoon Angelito,<br></br>

I hope this email finds you in good spirits. As the season comes to a close, 
I wanted to take a moment to review your performance in our FIFA Career Mode journey. 
It has been an eventful and exciting season, and I am pleased to provide you with an 
overview of your progress and achievements. Throughout the season, you have exhibited 
tremendous dedication, skill, and commitment on the virtual pitch. Your performance has 
been exceptional, and your contributions to the team have been invaluable. <br></br>

Yours Sincerely
Manager</p>
          <div className="card-actions"></div>
        </div>
      </div>
    </div>
  );
};

export default EmailPage;
