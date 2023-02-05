import React from 'react'

const Social = () => {
  return (
    <div>
      <div className="home__social">
        <a href="mailto:email@gmail.com" className="home__social-icon" target="_blank">
        <i className="uil uil-envelope"> </i>
        </a>
        
        <a href="https://wa.me/9773500045?text=" className="home__social-icon" target="_blank">
        <i className="uil uil-whatsapp-alt"></i>
        </a>

        <a href="https://www.linkedin.com/in/ca-heneel-shah-2886481a0/" className="home__social-icon" target="_blank">
        <i className="uil uil-linkedin"> </i>
        </a>
      </div>
    </div>
  )
}

export default Social
