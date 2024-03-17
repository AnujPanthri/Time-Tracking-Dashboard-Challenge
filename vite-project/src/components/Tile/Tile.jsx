import React from 'react'
import "./Tile.css";
import { FaEllipsisH } from "react-icons/fa";
import worklogo from "../../assets/images/icon-work.svg";
import playlogo from "../../assets/images/icon-play.svg";
import studylogo from "../../assets/images/icon-study.svg";
import exerciselogo from "../../assets/images/icon-exercise.svg";
import sociallogo from "../../assets/images/icon-social.svg";
import selfcarelogo from "../../assets/images/icon-self-care.svg";


function Tile({ data, timeMode }) {

  const classname = data.title.toLowerCase().replace(" ", "-");

  const time = data.timeframes[timeMode];

  var prev_text= "";
  switch(timeMode){
    case "daily":
      prev_text= "Yesterday";
      break;
    case "weekly":
      prev_text= "Last Week";
      break;
    case "monthly":
      prev_text= "Last Month";
      break;

  }

  var logo = "";
  switch (data.title) {
    case "Work":
      logo = worklogo;
      break;
    case "Play":
      logo = playlogo;
      break;
    case "Study":
      logo = studylogo;
      break;
    case "Exercise":
      logo = exerciselogo;
      break;
    case "Social":
      logo = sociallogo;
      break;
    case "Self Care":
      logo = selfcarelogo;
      break;
  }

  return (
    <div className={'tile_container ' + classname}>
      <div className='tile_container__tile'>

        <div className="tile_container__header">
          <span className='tile_container__title'>{data.title}</span>
          <span className='tile_container__option'><FaEllipsisH /></span>
        </div>

        <div className="tile_container__times">
          <span className='tile_container__curr_time'>{time.current}hrs</span>
          <span className='tile_container__prev_time'>{prev_text} - {time.previous}hrs</span>
        </div>

      </div>
      <img src={logo} className='tile_container__logo' alt="" />
    </div>
  )
}

export default Tile