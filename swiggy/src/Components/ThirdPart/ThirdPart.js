import React from "react";
import "./ThirdPart.css";
const ThirdPart = () => {
  return (
    <div class="App-Download">

        <div className="container">
          <div className="paraa">

          <h2> Restaurants in<br/> your pocket</h2>



            <p> Order from your favorite restaurants & track </p>
              <p>on the go, with the all-new Swiggy app.</p>

            <div class="applink">
              <a target="_blank"  href="https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en_IN&gl=US">
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"/>
                </a>



              <a  target="_blank"  href="https://apps.apple.com/in/app/swiggy-food-order-delivery/id989540920">
                <img src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"/>
                </a>



            </div>
          </div>
          <div className="iphone-previews">
            <img class="iphone-pics" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"/>

            <img class="iphone-pics" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"/>

          </div>
        </div>

    </div>
  );
};

export default ThirdPart;
