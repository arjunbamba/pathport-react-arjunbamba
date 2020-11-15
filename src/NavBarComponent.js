import React, {useState, useEffect} from "react";

export default function NavBarComponent() {

    const [link1Color, setLink1Color] = useState({backgroundColor: "black", color: "darkgray"});
    const [link2Color, setLink2Color] = useState({backgroundColor: "black", color: "darkgray"});
    const [link3Color, setLink3Color] = useState({backgroundColor: "black", color: "darkgray"});
    const [link4Color, setLink4Color] = useState({backgroundColor: "black", color: "darkgray"});
    const [link5Color, setLink5Color] = useState({backgroundColor: "black", color: "darkgray"});
    const [link6Color, setLink6Color] = useState({backgroundColor: "black", color: "darkgray"});
    const [link7Color, setLink7Color] = useState({backgroundColor: "black", color: "darkgray"});
    const [link8Color, setLink8Color] = useState({backgroundColor: "black", color: "darkgray"});

    return (
        <>

          {/* NAVIGATION BAR */}

          {/* <nav class="navbar navbar-expand-lg navbar-dark bg-dark"> */}
          <nav className="navbar sticky-top navbar-expand-lg navbar-dark" style={{backgroundColor: 'black'}}>

            <a className="navbar-brand" href="/#tab-main-vid"><b>PATH</b>PORT</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">

              <ul className="navbar-nav mr-auto">

                <li className="nav-item active">
                  <a className="nav-link" 
                  onMouseOver={ (e)=>{ setLink1Color({backgroundColor:'white', color:'black'}) } }
                  onMouseOut={ (e)=>{ setLink1Color({backgroundColor:'black', color:'darkgray'}) } }
                  style={{backgroundColor: link1Color.backgroundColor, color: link1Color.color, transition:'all 0.5s ease'}}
                  href="/#tab-main-vid" id="active-menu">
                    Home<span className="sr-only">(current)</span>
                  </a>
                </li>

                <li className="nav-item">
                  <a className="nav-link inactive-menu" 
                  onMouseOver={ (e)=>{ setLink2Color({backgroundColor:'white', color:'black'}) } } 
                  onMouseOut={ (e)=>{ setLink2Color({backgroundColor:'black', color:'darkgray'}) } }
                  style={{backgroundColor: link2Color.backgroundColor, color: link2Color.color, transition:'all 0.5s ease'}}
                  href="/#tab-welcome">
                    Welcome
                  </a>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" 
                  onMouseOver={ (e)=>{ setLink3Color({backgroundColor:'white', color:'black'}) } }
                  onMouseOut={ (e)=>{ setLink3Color({backgroundColor:'black', color:'darkgray'}) } }
                  style={{backgroundColor: link3Color.backgroundColor, color: link3Color.color, transition:'all 0.5s ease'}}
                  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  
                    About Us 
                  </a>
                  
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: 'black'}}>
                    <li>
                      <a className="dropdown-item" 
                      onMouseOver={ (e)=>{ setLink4Color({backgroundColor:'white', color:'black'}) } }
                      onMouseOut={ (e)=>{ setLink4Color({backgroundColor:'black', color:'darkgray'}) } }
                      style={{backgroundColor: link4Color.backgroundColor, color: link4Color.color, transition:'all 0.5s ease'}}
                      href="/#tab-aboutus"> 
                        Our Start
                      </a>
                    </li> 

                    <li>
                      <a className="dropdown-item" 
                      onMouseOver={ (e)=>{ setLink5Color({backgroundColor:'white', color:'black'}) } }
                      onMouseOut={ (e)=>{ setLink5Color({backgroundColor:'black', color:'darkgray'}) } }
                      style={{backgroundColor: link5Color.backgroundColor, color: link5Color.color, transition:'all 0.5s ease'}}
                      href="/aboutus"> 
                        Learn More
                      </a>
                    </li>            
                  </ul>
                </li>

                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" 
                  onMouseOver={ (e)=>{ setLink6Color({backgroundColor:'white', color:'black'}) } }
                  onMouseOut={ (e)=>{ setLink6Color({backgroundColor:'black', color:'darkgray'}) } }
                  style={{backgroundColor: link6Color.backgroundColor, color: link6Color.color, transition:'all 0.5s ease'}}
                  href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">  
                    Explore 
                  </a>
                  
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{backgroundColor: 'black'}}>
                    <li>
                      <a className="dropdown-item" 
                      onMouseOver={ (e)=>{ setLink7Color({backgroundColor:'white', color:'black'}) } }
                      onMouseOut={ (e)=>{ setLink7Color({backgroundColor:'black', color:'darkgray'}) } }
                      style={{backgroundColor: link7Color.backgroundColor, color: link7Color.color, transition:'all 0.5s ease'}}
                      href="/#tab-food"> 
                        Adventure at Heart
                      </a> 
                    </li> 

                    <li>
                      <a className="dropdown-item" 
                      onMouseOver={ (e)=>{ setLink8Color({backgroundColor:'white', color:'black'}) } }
                      onMouseOut={ (e)=>{ setLink8Color({backgroundColor:'black', color:'darkgray'}) } }
                      style={{backgroundColor: link8Color.backgroundColor, color: link8Color.color, transition:'all 0.5s ease'}} 
                      href="/browse"> 
                        Browse
                      </a>
                    </li>            
                  </ul>
                </li>
        
              </ul>

            </div>

          </nav>

          {/* NAVIGATION BAR */}

        </>
    );
}