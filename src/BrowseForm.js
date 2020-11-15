import React, {useState, useEffect} from "react";
import { useHistory } from "react-router-dom";
import BrowseStyle from './BrowseStyle.module.css';

export default function BrowseForm({onSubmit}) {

    const [formData, setFormData] = useState("1")

    function handleSubmit(event) {
        event.preventDefault();
        console.log("before submitting is " + formData)
        onSubmit(formData);
    }

    function handleClick(event) {
        console.log(event.target.value);
        setFormData(event.target.value);
    }

    return (
        <>

          <div class={BrowseStyle.my_heading}>
            <p className={BrowseStyle.browseText}>Browse our recommendations!</p>
          </div> 

          <div class={BrowseStyle.my_spacing}></div>

          <div class="container">

            <form onSubmit={handleSubmit} method="GET" class="mt-3">

              <div class="form-group row">
                <label for="category-id" class="col-sm-3 col-form-label text-sm-right">Category:</label>
                <div class="col-sm-7">
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox3" value="1" checked />Outdoors
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox1" value="2" />Art & Culture
                    </label>
                  </div>
                  <div class="form-check form-check-inline">
                    <label class="form-check-label">
                      <input class="form-check-input mr-2" type="radio" onClick={handleClick} name="category" id="inlineCheckbox2" value="3" />Music
                    </label>
                  </div>
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
                </div>
              </div> 

              <div class="form-group row">
                <label for="user-id" class="col-sm-3 col-form-label text-sm-right">Submitted By (optional):</label>
                <div class="col-sm-7">
                  <input type="text" class="form-control" id="user-id" name="user" placeholder="Username" />
                </div>
              </div> 

              <br />

              <div class="form-group row">
                <div class="col-sm-3"></div>
                <div class="col-sm-7">
                  <button type="submit" class="btn btn-primary">Browse</button>
                  <button type="reset" class="btn btn-light">Reset</button>
                </div>
              </div> 

            </form>
            
          </div> 
        
        </>
    );
}