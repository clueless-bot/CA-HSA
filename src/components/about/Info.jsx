import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
      <i className='bx bx-award about__icon'></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">6+ Years </span>
      </div>

      <div className="about__box">
      <i className='bx bx-briefcase-alt-2 about__icon' ></i>
        <h3 className="about__title">Clients</h3>
        <span className="about__subtitle">200+ Clients</span>
      </div>

      <div className="about__box">
      <i className='bx bx-support about__icon' ></i>
        <h3 className="about__title">Support</h3>
        <span className="about__subtitle">8:00 AM to 12:AM</span>
      </div>

    </div>
  )
}

export default Info
