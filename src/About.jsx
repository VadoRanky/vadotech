import React from 'react'
import us from "./assets/us.jpg"
const About = () => {
  return (
    <div>
      <section>
        <div>
            <img src={us} alt="" />
        </div>
        <div>
            <h1>About Us</h1>
            <p>Vado technology is a forward thinking tech company cutting-eage digital solutions.</p>
            <button>Send Message </button>
        </div>
      </section>
    </div>
  )
}

export default About
