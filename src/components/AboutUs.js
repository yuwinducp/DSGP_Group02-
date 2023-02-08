import React from 'react'
import "../styles/AboutUs.css"
import { FaBullseye, FaUserFriends, FaUsers } from 'react-icons/fa';

function AboutUs() {

    return (
        <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/B7.jpg'})`}} className="AboutUsContainer">
            <section>
            <div className="about_title"><h2>About Us</h2></div>
            <p className="about_tale">Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
            </section>

            <section class="container_mvo">
                <div class="card">
                    <div class="icon">
                    <FaBullseye size={64} />
                    </div>
                    <h2>Mission</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                </div>
                <div class="card">
                    <div class="icon">
                        <FaUsers size={64} />
                    </div>
                    <h2>Vission</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                </div>
                <div class="card">
                    <div class="icon">
                        <FaUserFriends size={64} />
                    </div>
                    <h2>Objectives</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                </div>
            </section>
            
            <div className="member_title"><h2>Team Members</h2></div>
            <section class="container_member">
                <div class="card">
                    <div class="image">
                    <img src="/assets/LOGO.png" alt="" />
                    </div>
                    <h2>Yuwindu Pathirage</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                </div>
                <div class="card">
                    <div class="image">
                    <img src="/assets/LOGO.png" alt="" />
                    </div>
                    <h2>Ridmika Hasaranga</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                </div>
                <div class="card">
                    <div class="image">
                    <img src="/assets/LOGO.png" alt="" />
                    </div>
                    <h2>Amandi Wijesuriya</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                </div>
                <div class="card">
                    <div class="image">
                    <img src="/assets/LOGO.png" alt="" />
                    </div>
                    <h2>Amirthalinham Ghajanan</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p>
                </div>
            </section>
        </div>
    )
}

export default AboutUs