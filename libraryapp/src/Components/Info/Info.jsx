import React, { useContext } from 'react';
import { cardsContext } from '../../App';
import EventImg1 from '../../assets/event1.jpg';
import './Info.css';

function Info() {

  const { title, date, description } = useContext(cardsContext);


  return (
    <>
      <section className="card">
        <div className="rightCard-container">
          <img src={EventImg1} className="event" />
        </div>
        <div className="leftCard-container">
          <h1 className="tittle-event">{title}</h1>
          <h4 className="date-hour">{date}</h4>
          <p className="description-event">{description}</p>
        </div>
      </section>

        <section className="card">
        <div className="rightCard-container">
        <img src={EventImg1} className="event" />
        </div>
        <div className="leftCard-container">
        <h1 className="tittle-event">{title}</h1>
        <h4 className="date-hour">{date}</h4>
        <p className="description-event">{description}</p>
        </div>
        </section>
    </>
  );
}

export default Info;