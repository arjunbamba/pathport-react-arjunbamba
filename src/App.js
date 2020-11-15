import React, {useState, useEffect} from 'react';

import HomeStyle from './HomeStyle.module.css';
import AboutUsStyle from './AboutUsStyle.module.css';

import NavBarComponent from "./NavBarComponent";
import BrowseForm from "./BrowseForm";
import PageNotFound from "./PageNotFound";

import { BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect, useHistory } from "react-router-dom";

function App() {
  const history = useHistory();

  const [link9Color, setLink9Color] = useState({backgroundColor: "black", color: "white"});
  const [link10Color, setLink10Color] = useState({backgroundColor: "black", color: "white"});


  function handleSubmit(formData) {
    console.log(formData);
    history.push("/");
  }

  return (
    <Router> 
      <Switch>

        <Route path="/" exact={true}>
          <span className={HomeStyle.body}>
            <div className={HomeStyle.my_main} id="tab-main-vid">
              <video autoPlay loop muted className={HomeStyle.main_video}>
                <source src="/media/la_3.mp4" type="video/mp4" />
              </video>
              <div className={`${HomeStyle.my_overlay} ${HomeStyle.my_caption1}`}>
                <p className={HomeStyle.my_animated_para}><strong>WELCOME TO LOS ANGELES!</strong></p>
              </div>
            </div>

            <NavBarComponent />

            {/* Main */}
            <main>
              <div className={HomeStyle.my_main}>
                <section className={`${HomeStyle.et_slide} ${HomeStyle.my_pic1}`} id="tab-welcome"></section>
                <div className={`${HomeStyle.my_overlay} ${HomeStyle.my_caption1}`}>
                  <h1><strong>LOS ANGELES</strong></h1>
                  <h5>WELCOME TO THE CITY OF ANGELS!</h5>
                </div>
              </div>

              <div className={HomeStyle.my_main}>
                <section className={`${HomeStyle.et_slide} ${HomeStyle.my_pic2}`} id="tab-aboutus"></section>
                <div className={`${HomeStyle.my_overlay} ${HomeStyle.my_caption1}`}>
                  <h1><strong>ABOUT US</strong></h1>
                  <h5>PathPort’s goal is to make sure you and your loved ones have a fabulous time exploring Los Angeles.</h5>
                  
                  <a href="/aboutus">
                    <button type="button" className="btn btn-outline-dark"
                    onMouseOver={ (e)=>{ setLink9Color({backgroundColor:'white', color:'black'}) } }
                    onMouseOut={ (e)=>{ setLink9Color({backgroundColor:'black', color:'white'}) } }
                    style={{backgroundColor: link9Color.backgroundColor, color: link9Color.color, transition:'all 0.5s ease'}}>
                      LEARN MORE
                    </button>
                  </a>
                </div>
              </div>

              <div className={HomeStyle.my_main}>
                <section className={`${HomeStyle.et_slide} ${HomeStyle.my_pic3}`} id="tab-food"></section>
                <div className={`${HomeStyle.my_overlay} ${HomeStyle.my_caption1}`}>
                  <h1><strong>ADVENTURE AT HEART</strong></h1>
                  <h5>
                    At PathPort, we celebrate the spirit of adventure.
                  </h5>
                  <h5>
                    What would you like? Browse through our catalogue of recommendations! 
                  </h5>
                  <a href="/browse">
                    <button type="button" className="btn btn-outline-dark"
                    onMouseOver={ (e)=>{ setLink10Color({backgroundColor:'white', color:'black'}) } }
                    onMouseOut={ (e)=>{ setLink10Color({backgroundColor:'black', color:'white'}) } }
                    style={{backgroundColor: link10Color.backgroundColor, color: link10Color.color, transition:'all 0.5s ease'}}>
                      BROWSE
                    </button>
                  </a>
                </div>
              </div>
            </main>
          </span>
        </Route>

        <Route path="/aboutus" exact={true}>

          <NavBarComponent />

          <main>
            <div className={AboutUsStyle.my_main}>
              <section className={`${AboutUsStyle.et_slide} ${AboutUsStyle.my_pic4}`}></section>
              <div className={`${AboutUsStyle.my_overlay} ${AboutUsStyle.my_caption1}`}>
                <h5>
                  We are a passionate and ambitious group of peers bound by an unbridled spirit of adventure. Despite our urban location, we have seen firsthand how the outdoors offers a unique opportunity for students to come together, regardless of their walk of life or level of skill. Where there is adventure to be had, PathPort is there to share it with our community. Whether you’re a beginner or an old pro, we’d love to have you join us.
                </h5>

                <h5>
                  Our goal is to get as many people outside as possible. Whether you're an experienced mountaineer or have never set foot outside in the concrete jungle of LA, we've got a recommended place for you to explore! So, feel free to browse through our recommendations and explore the places. Please let us know how they were!
                </h5>
              </div>
            </div>
          </main>

        </Route>

        <Route path="/browse" exact={true}>

          <NavBarComponent /> 

          <BrowseForm onSubmit={handleSubmit} />

        </Route>

        <Route path="/browse_results" exact={true}>
          
        </Route>


        <Route path="*">
          <PageNotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
