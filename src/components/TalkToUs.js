import React,{Fragment} from 'react'
import "../styles/TalkToUs.css"


const Contact = () => {
  return (
    <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/B7.jpg'})`}} className="TalkToUsContainer">
      <Fragment>
        <section className='contact'>
          <div className='contact-heading'>
            <h2>Talk To Us</h2>
          </div>

          <div className='talk-container'>
            <div className='row'>
              <div className='column'>
                <div className='contact-widget'>

                  <div className='contact-widget-item'>
                    <div className='icon-talk'>
                      <i class='fas fa-map-marker-alt'></i>
                    </div>
                    <div className='text'>
                      <h3>Address</h3>
                      <p>123 Main Street, Anytown SL</p>
                    </div>
                  </div>

                  <div className='contact-widget-item'>
                    <div className='icon-talk'>
                      <i class='fas fa-phone'></i>
                    </div>
                    <div className='text'>
                      <h3>Contact Us</h3>
                      <p>+94 123 456 7890</p>
                    </div>
                  </div>

                  <div className='contact-widget-item'>
                    <div className='icon-talk'>
                      <i class='fas fa-envelope'></i>
                    </div>
                    <div className='text'>
                      <h3>Mail</h3>
                      <p>info@agromatics.com</p>
                    </div>
                  </div>

                </div>
                </div>

                <div className='column'>
                  <div className='contact-form'>
                    <form action='#'>
                      <input type='text' placeholder='Name' />
                      <input type='email' placeholder='Email' />
                      <textarea placeholder='Comment'></textarea>
                      <button type='submit' className='site-btn'> Send Message </button>
                    </form>
                  </div>
                </div>

              
            </div>

            <div className='row'>
              <div className='map-column'>
                <div className='contact-map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.21123402388!2d79.8598505!3d6.8652714999999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25ba4e617b3d9%3A0xd5a3b0418f1cf497!2sInformatics%20Institute%20of%20Technology%20(IIT)!5e0!3m2!1sen!2slk!4v1676782862172!5m2!1sen!2slk" 
                  width="600" 
                  height="450" 
                  style={{border:0}}
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Fragment>
    </div>
  )
}
export default Contact;