import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import BrowseStyle from './BrowseStyle.module.css';

export default function BrowseForm({onSubmit}) {

    const [formData, setFormData] = useState("1")
    const history = useHistory();

    function handleSubmit(event) {
        onSubmit(formData);
        // setTimeout(() => {
        // console.log('This will run after 2 seconds!')
        // }, 2000);
        history.push("/browse_results");
    }

    function handleClick(event) {
        setFormData(event.target.value);
    } 

    return (
        <>

          <div className={BrowseStyle.my_heading}>
            <p className={BrowseStyle.browseText}>Browse our recommendations!</p>
          </div> 

          <div className={BrowseStyle.my_spacing}></div>

          <div className="container">

            <form onSubmit={handleSubmit} method="GET" className="mt-3">

              <div className="form-group row">
                <label htmlFor="category-id" className="col-sm-3 col-form-label text-sm-right">Category:</label>
                <div className="col-sm-7">
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input className="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox3" value="1" role="OutdoorRadio" defaultChecked />Outdoors
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input className="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox1" value="2" role="ArtRadio" />Art & Culture
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <label className="form-check-label">
                      <input className="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox2" value="3" role="MusicRadio" />Music
                    </label>
                  </div>
                  {/*                   
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox4" value="4" />Museums
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox5" value="5" />History
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox6" value="6" />Beaches
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox7" value="7" />Amusement Parks
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox8" value="8" />Sports
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox9" value="9" />Kid-Friendly
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox10" value="10" />Local Favorites
                    </label>
                  </div> 
                  */}
                </div>
              </div> 

              <br />

              <div className="form-group row">
                <div className="col-sm-3"></div>
                <div className="col-sm-7">
                  <button type="submit" role="submit" className="btn btn-primary">Browse</button>
                  <br></br><br></br>
                  <button type="reset" role="reset" className="btn btn-light">Reset</button>
                </div>
              </div> 

            </form>
            
          </div> 
        
        </>
    );
}