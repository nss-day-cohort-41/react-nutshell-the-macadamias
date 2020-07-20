import React from "react";
import "./Events.css";

const EventCard = (props) => {
  let setFriendClass = ""
  let displayClass = ""

  const dateConverter= (suppliedDate) => {
    let date = suppliedDate.toString()
    date = date.slice(0,10)
    date = date.split("-")
    return date = `${date[1]}-${date[2]}-${date[0]}`
  }

  props.event.date = dateConverter(props.event.date)

  const setNextClass = (props.setNext) ? "section__nextEvent" : ""
  if (props.activeUserId !== props.event.userId) { 
    setFriendClass = "section__friend"
    displayClass = "hidden"
  }
     
  return (
    <>
    <section className={`section__card event--${props.event.id}  ${setFriendClass}`}>
      <div className="div__card__event">
   
                <div className={`header__card  ${setNextClass}`}> {props.event.name}
                    <button className={`btn ${displayClass}`} onClick={() => props.deleteEvent(props.event.id)} ><i className="fa fa-trash"></i></button>
                </div>
                <p className="card__text"><strong>Date:</strong>  {props.event.date}</p>
                <p className="card__text"><strong>Location:</strong>  {props.event.place}</p>
               
      </div>
    </section>
    </>
  );
};

export default EventCard;