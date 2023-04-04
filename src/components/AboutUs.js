import React from 'react'
import "../styles/AboutUs.css"
import { FaBullseye, FaUserFriends, FaUsers } from 'react-icons/fa';

function AboutUs() {

    return (
        <div style={{backgroundImage:`url(${process.env.PUBLIC_URL + 'assets/B7.jpg'})`}} className="AboutUsContainer">
            <section>
            <div className="about_title"><h2>About Us</h2></div>
            {/* <p className="about_tale">Lorem ipsum dolor sit amet consectetur adipisicing elite.</p> */}
            </section>

            <section class="container_mvo">
                <div class="card">
                    <div class="icon">
                    <FaBullseye size={64} />
                    </div>
                    <h2>Mission</h2>
                    <p>The mission is to develop a user-friendly and reliable web-based platform for Agromatic, a crop prediction and fertilizer recommendation application, with the aim of enabling farmers worldwide to make informed decisions about their crops and optimize their yields while minimizing their environmental impact.</p>
                </div>
                <div class="card">
                    <div class="icon">
                        <FaUsers size={64} />
                    </div>
                    <h2>Vision</h2>
                    <p>Our vision is to revolutionize farming by empowering farmers worldwide with a user-friendly web platform for crop prediction and fertilizer recommendation. We aim to promote sustainable practices, reduce environmental impact, and improve farmers' livelihoods by providing them with accurate and reliable information to optimize their crop yields.</p>
                </div>
                <div class="card">
                    <div class="icon">
                        <FaUserFriends size={64} />
                    </div>
                    <h2>Objectives</h2>
                    <p>The objectives of the web-based platform for Agromatic are to provide farmers worldwide with an accessible and accurate solution for crop prediction and fertilizer recommendation, promote sustainable agriculture practices, and empower farmers to make informed decisions that improve their crop yields and livelihoods while minimizing environmental impact.</p>
                </div>
            </section>

            <div className="member_title"><h2>Team Members</h2></div>
            <section class="container_member">
                <div class="card">
                    <div class="image">
                    <img src="/assets/yuwindu.jpeg" alt="" />
                    </div>
                    <h2>Yuwindu Pathirage</h2>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p> */}
                </div>
                <div class="card">
                    <div class="image">
                    <img src="/assets/ridmika.png" alt="" />
                    </div>
                    <h2>Ridmika Hasaranga</h2>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p> */}
                </div>
                <div class="card">
                    <div class="image">
                    <img src="/assets/amandi.jpeg" alt="" />
                    </div>
                    <h2>Amandi Wijesuriya</h2>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p> */}
                </div>
                <div class="card">
                    <div class="image">
                    <img src="/assets/ghajanan.jpeg" alt="" />
                    </div>
                    <h2>Amirthalinham Ghajanan</h2>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elite.</p> */}
                </div>
            </section>
        </div>
    )
}

export default AboutUs