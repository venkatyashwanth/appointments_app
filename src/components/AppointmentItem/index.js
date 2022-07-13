import React from 'react'
import './index.css'

const AppointmentItem = (props) => {
  const {appointmentDetails,toggleStarred} = props
  const {id, title, date, isStarred} = appointmentDetails;

  const starImgUrl = isStarred
  ? "https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png"
  : "https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png"

  const onClickStar = () => {
    toggleStarred(id)
  }

  return (
    <li className='appointment-item'>
      <div className='header-container'>
        <p className='title'>{title}</p>
        <button className='star-button' type='button' onClick={onClickStar}>
          <img src={starImgUrl} alt="star" className='star'/>
        </button>
      </div>
      <p className='date'>{date}</p>
    </li>
  )
}

export default AppointmentItem