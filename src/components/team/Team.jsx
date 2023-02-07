import React from 'react'
import HeneelImage from "../../assets/heneel_photo.jpeg"
import "./team.css"
const Team = () => {
  return (
    <div className="team__container" id="team">
        <h1 className="team__heading" >
            Our Team <i className="uil uil-users-alt"></i>
        </h1>
        <img src={HeneelImage} alt="" className="team__photo" />
        <h4 className="image__description">(B.COM, CA, LLB)</h4>
        <p className="team__description">
        CA Heneel Shah has not just proven his academic mettle but also has professional experience at K S P M & Associates at a senior level wherein he has handled various regulatory domains like Direct & Indirect Taxes as well as Corporate laws. He has extensive experience in catering different clients of Prominent Industries like Real Estate, Gems & Jewellery, Chemicals & Pharmaceuticals, Media Industry, Textile Industry and Financial Sector. His passion for perfection has driven him to start consulting under his own legacy.
        </p>
    </div>
  )
}

export default Team
