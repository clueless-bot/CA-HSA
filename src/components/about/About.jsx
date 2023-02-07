import React from 'react'
import "./about.css"
import AboutImg from "../../assets/about_us.jpg"
import Info from './Info'

const About = () => {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Our Company</h2>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />
            <div className="about__data">
                <Info/>
                <p className="about__description">
                HSA (a chartered accountancy firm) is a team of tax consultants and financial advisors in India rendering professional services in various drift of business cycle. The team comprises of dedicated professionals possessing expertise across a range of business needs. We abide by strong ethics, thereby adding value to our client business. We ensure the delivery of quality services to maintain elevated professional and ethical calibre. We strive to achieve professional reputation of the highest standard by providing holistic services and surpassing client’s expectations. We are committed to be Independent as it helps us to serve our client’s business needs in the most effective manner.

                </p>

                
            </div>
        </div>        
    </section>
  )
}

export default About
