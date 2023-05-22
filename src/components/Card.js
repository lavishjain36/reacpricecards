import React from "react";
import "./Card.css";


//create card component
const Card=(props)=>{
// Iterate through array of cards using array map method 

return  props.data.map((card,i)=>{
//provide unique key for each card component and dynamically add value usin props

  return <div className="col-lg-4" key={i}>
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
          <h5 className="card-title text-muted text-uppercase text-center">
            {card.plan}
          </h5>
          <h6 className="card-price text-center">
            ${card.cost}
            <span className="period">/month</span></h6>
            <hr/>
            <ul className="fa-ul">
                <li className={props.data[i].usersCount.fontWeight}>
                <span className="fa-li"><i className="fas fa-check"></i></span>
                {card.usersCount.user}
                </li>

                <li><span className="fa-li"><i className="fas fa-check"></i></span>
                {card.storage}
                </li>

                <li><span className="fa-li"><i className="fas fa-check"></i></span>
               {card.projects}
               </li>
               <li><span className="fa-li"><i className="fas fa-check"></i></span>
               {card.access}
               </li>

               <li className={card.projectsNumbers.text}><span className="fa-li"><i className={card.projectsNumbers.icon}></i>
               </span>
               {card.projectsNumbers.privateProjects}
               </li>

               <li className={card.phone.text}><span className="fa-li"><i className={card.phone.icon}></i>
               </span>
               {card.phone.phoneSupport}
               </li>

               <li className={card.domain.text}><span className="fa-li"><i className={card.domain.icon}></i>
               </span>
               {card.domain.subDomain}
               </li>

               <li className={card.monthlyReports.text}><span className="fa-li"><i className={card.monthlyReports.icon}></i>
               </span>
               {card.monthlyReports.report}
               </li>
            </ul>
            <div className="d-grid">
              <a href="/" className="btn btn-primary text-uppercase">Button</a>
            </div>

          </div>
        </div>
    </div>

})

};


export default Card;