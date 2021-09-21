import React from "react";
import "./Toppart.css";
import MyLocationIcon from '@mui/icons-material/MyLocation';



const Toppart= () => {
    return(

        <div class="main-box">

          <div className="intro" id="int">
            <div className="header width">
              <div className="logo">
                <img src="https://seeklogo.com/images/S/swiggy-logo-E7548BE9FF-seeklogo.com.png"


                  width="200px"
                />
              </div>
              <div className="btn-one">
                <a href="#" className="login-btn">
                  Login
                </a>
                <a href="#" className="signup-btn">
                  Sign Up
                </a>
              </div>
            </div>
            <div className="contain width">
              <div id="containers">
                <div class="transition">

                  <div><span></span></div>

                  </div>


              </div>
              <p class="para-above-srch">Order food from favourite restaurants near you.</p>
            </div>
            <div className="input-container width">
              <input type="text" placeholder="Enter your delivery location" />
              <button type="submit" className="locate-btn">
              <MyLocationIcon fontSize="11px;"/>Locate Me
              </button>
              <button type="submit" className="food-btn">
                FIND FOOD
              </button>
            </div>
            <div className="cities width">
              <p class="para-above-srch">POPULAR CITIES IN INDIA</p>
              <ul className="city-names">
                <li className="acgkb">Ahemdabad</li>
                <li>Bangalore</li>
                <li className="acgkb">Chennai</li>
                <li>Delhi</li>
                <li className="acgkb">Gurgaon</li>
                <li>Hyderabad</li>
                <li className="acgkb">Kolkata</li>
                <li>Mumbai</li>
                <li className="acgkb">Pune</li>
                <li>& more</li>
              </ul>
            </div>
          </div>
          <div className="right-div"><img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_1340/Dinner1-new_s93yyf"/></div>

      </div>
    );
  };
export default Toppart;
