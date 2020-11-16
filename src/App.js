import React, {useState} from 'react';

// *****  THIRD PARTY REACT LIBRARY  *****/
// ***** SOURCE: https://medium.com/@adolf.schmuck/how-to-customize-the-title-of-any-page-in-react-45ef14d2a695  *****/
import { Helmet } from 'react-helmet';

import HomeStyle from './HomeStyle.module.css';
import AboutUsStyle from './AboutUsStyle.module.css';
import ResultsStyle from './ResultsStyle.module.css';

// ***** REUSABLE CUSTOMIZED, GENERIC COMPONENT *****/
import NavBarComponent from "./NavBarComponent"; 

import BrowseForm from "./BrowseForm";
import CreateRec from "./CreateRec";
import PageNotFound from "./PageNotFound";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";

import { BrowserRouter as Router, Switch, Route /*, Link, NavLink, Redirect, useHistory*/ } from "react-router-dom";

import { fetchRecs, deleteRec, editRec, saveRec } from "./api";

function App() {
  // const history = useHistory();

  const [link9Color, setLink9Color] = useState({backgroundColor: "black", color: "white"});
  const [link10Color, setLink10Color] = useState({backgroundColor: "black", color: "white"});

  const [results, setResults] = useState([]);

  const [saved_id, set_saved_id] = useState("");
  const [saved_category_id, set_saved_category_id] = useState("");
  const [saved_name, set_saved_name] = useState("");
  const [saved_category, set_saved_category] = useState("");
  const [saved_rating, set_saved_rating] = useState("");

  // my custom errors for blanks
  const [NameError, setNameError] = useState("");
  const [CategoryError, setCategoryError] = useState("");
  const [RatingError, setRatingError] = useState("");

  const [bad_edit_status, setBadEdit_Status] = useState("");
  const [good_edit_status, setGoodEdit_Status] = useState("");

  function handleBrowseSubmit(formData) {
    return fetchRecs(formData).then((recs) => {
      console.log(recs);
      setResults(recs);
    })
    .catch(error => {
      console.log(error);
    });
  }

  function handleDelete(category_id, DeleteID) {
    deleteRec(category_id, DeleteID).then((response) => {
      console.log(response);

      //refresh old results
      const filteredRecs = results.filter((result) => {
        return result.id !== DeleteID;
      });
      setResults(filteredRecs);
    });
  }

  function handleUpdateSubmit(event) {
    event.preventDefault();

    let submission_name = saved_name;
    let submission_category = saved_category;
    let submission_rating = saved_rating;

    if (submission_name !== "" && submission_category !== "" && submission_rating !== "") {
      let updated_Object = {
        id: saved_id,
        category_id: saved_category_id,
        recommendation: saved_name,
        category: saved_category,
        rating: saved_rating
      };

      // resetting my errors for next timee
      setNameError("");
      setCategoryError("");
      setRatingError("");
      setBadEdit_Status("");

      // make api call to save goal inputs
      editRec(updated_Object, saved_category_id, saved_id).then((response) => {
        console.log(response);
        setGoodEdit_Status("SUCCESSFULLY UPDATED.");
      });
    }
    else {
      if (submission_name === "") {
        setNameError("Please enter a recommendation.")
      }
      if (submission_category === "") {
        setCategoryError("Please enter a category.");
      }
      if (submission_rating === "") {
        setRatingError("Please enter a rating.");
      }
      setGoodEdit_Status("");
      setBadEdit_Status("UNSUCCESSFUL: PLEASE FIX THE ERRORS ABOVE.");
    }
  }

  function saveData(id, category_id, name, category, rating) {
    set_saved_id(id);
    set_saved_category_id(category_id);
    set_saved_name(name);
    set_saved_category(category);
    set_saved_rating(rating);
  }

  function handleNameChange(event) {
    set_saved_name(event.target.value);
  }
  function handleCategoryChange(event) {
    set_saved_category(event.target.value);
  }
  function handleRatingChange(event) {
    set_saved_rating(event.target.value);
  }

  function createRec(recommendation, categoryId, rating) {
    let category_name = "";
    if (categoryId === 1) {
      category_name = "Outdoors";
    }
    if (categoryId === 2) {
      category_name = "Arts & Culture";
    }
    if (categoryId === 3) {
      category_name = "Music";
    }
    saveRec({
      category_id: categoryId,
      recommendation: recommendation,
      category: category_name,
      rating: rating,
    }, categoryId).then((newRec) => {
      // setIssues(issues.concat(newIssue));
      console.log(newRec)
    });
  }

  return (
    <Router> 
      <Switch>

        <Route path="/" exact={true}>
          <Helmet>
            <title>Home | PathPort</title>
          </Helmet>
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

                  {/* <!-- Button trigger modal --> */}
                  <button type="button" className="btn btn-dark btn-outline-light" data-toggle="modal" data-target="#exampleModalCenter">
                    View Credits
                  </button>

                  {/* <!-- Modal --> */}
                  <div className="modal fade" id="exampleModalCenter" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" style={{color: "black"}}>
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLongTitle"><strong>Credits</strong></h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body" style={{fontSize: 12 + "pt"}}>
                          <strong>Created by Arjun Bamba</strong>
                          <br></br>
                          <strong>Special Thanks to the Coolest Professor Ever: David Tang</strong>
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                      </div>
                    </div>
                  </div>

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
          <Helmet>
            <title>About Us | PathPort</title>
          </Helmet>

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

        <Route path="/browse" exact={true} title="Browse Recommendations!">
          <Helmet>
            <title>Browse | PathPort</title>
          </Helmet>

          <NavBarComponent /> 

          <BrowseForm onSubmit={handleBrowseSubmit} />

        </Route>

        <Route path="/browse_results" exact={true}>
          <Helmet>
            <title>Results | PathPort</title>
          </Helmet>   

          <NavBarComponent />

          <div className={ResultsStyle.my_heading}>
            <p>Our recommendations</p>
          </div> 
          
          <div className="container-fluid">

            <div className="row mb-4" style={{textAlign: "center"}}>
              <div className="col-12 mt-4">
                <a href="/browse" role="button" className="btn btn-primary">Search Again!</a>
              </div> 
            </div> 

            <div className={ResultsStyle.my_spacing}></div>

            <div className="row">
              <div className="col-12">
                We have the following {results.length} recommendation(s) for you:
              </div> 
            </div>

            <div className="row row-cols-3" style={{textAlign: "center"}}>
              {/* For every result, a new col needs to be created */}
              {results.map((result) => {
                let id = result.id;
                let name = result.recommendation;
                let category = result.category;
                let category_id = result.category_id;
                let rating = result.rating;

                return (
                  <>
                    <div className="col">
                      <br></br>
                      {name}
                      <br></br>
                      Category: {category}
                      <br></br>
                      Rating: {rating}
                      <br></br>
                      <br></br>
                      
                      {/* 
                      <a href="/deleteConfirmation" className="btn btn-outline-danger delete-btn">
                        Delete
                      </a> 
                      */}

                      <DeleteButton category_id={category_id} DeleteID={id} handleDelete={handleDelete} />
                      <br></br>
                      <EditButton id={id} category_id={category_id} name={name} category={category} rating={rating} saveData={saveData} />

                      <br></br><br></br>
                      <hr style={{backgroundColor: 'white'}}></hr>
                    </div>
                  </>
                );
              })}
            </div>

          </div>

        </Route>

        <Route path="/EditRec" exact={true}>
          <Helmet>
            <title>Edit | PathPort</title>
          </Helmet>

          <NavBarComponent />

          <>
            <br></br>
            <br></br>
            <h2 style={{textAlign: "center"}}>Edit Recommendation</h2>
            <h6 style={{textAlign: "center"}}>NOTE: THESE CANNOT BE EMPTY.</h6>
            <br></br>
            <br></br>
            <br></br>
            <form onSubmit={handleUpdateSubmit} style={{width: 80 + "%", marginLeft: "auto", marginRight: "auto" }}>
              <div className="form-group row">
                <label for="rec_name" className="col-sm-2 col-form-label">Recommendation Name: </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="rec_name" value={saved_name} onChange={handleNameChange} />
                  <div id="error" className="text-danger">
                    {NameError}
                  </div>
                </div>
              </div>
              
              <div className="form-group row">
                <label for="category_name" className="col-sm-2 col-form-label">Category: </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="category_name" value={saved_category} onChange={handleCategoryChange} />
                  <div id="error" className="text-danger">
                    {CategoryError}
                  </div>
                </div>
              </div>

              <div className="form-group row">
                <label for="rating_name" className="col-sm-2 col-form-label">Rating: </label>
                <div className="col-sm-10">
                  <input type="text" className="form-control" id="rating_name" value={saved_rating} onChange={handleRatingChange} />
                  <div id="error" className="text-danger">
                    {RatingError}
                  </div>
                </div>
              </div>

              {/*               
              <fieldset className="form-group">
                <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">Category: </legend>
                  <div className="col-sm-10">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked />
                      <label className="form-check-label" for="gridRadios1">
                        First radio
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
                      <label className="form-check-label" for="gridRadios2">
                        Second radio
                      </label>
                    </div>
                    <div className="form-check disabled">
                      <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
                      <label className="form-check-label" for="gridRadios3">
                        Third disabled radio
                      </label>
                    </div>
                  </div>
                </div>
              </fieldset>

              <div className="form-group row">
                <div className="col-sm-2">Checkbox</div>
                <div className="col-sm-10">
                  <div claclassNamess="form-check">
                    <input className="form-check-input" type="checkbox" id="gridCheck1" />
                    <label className="form-check-label" for="gridCheck1">
                      Example checkbox
                    </label>
                  </div>
                </div>
              </div>
              */}

              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">Update!</button>
                  <br></br>
                  <br></br>
                  <div id="error" className="text-warning">
                    {bad_edit_status}
                  </div>
                  <div id="success" className="text-success">
                    {good_edit_status}
                  </div>
                </div>
              </div>

            </form>
          </>
        </Route>

        <Route path="/CreateRec" exact={true}>
          <Helmet>
            <title>Create Recommendation | PathPort</title>
          </Helmet>

          <NavBarComponent />

          <CreateRec createRec={createRec} />
        </Route>

        <Route path="/DeleteConfirmation" exact={true}>
          <Helmet>
            <title>Confirmation | PathPort</title>
          </Helmet>

          <NavBarComponent />
          
          <br></br>
          <br></br>
          <h2 style={{textAlign: "center"}}>Deletion Successful!</h2>
          <br></br>
          <a style={{marginLeft: 46 + "%", marginRight: 46 + "%"}} href="/browse" role="button" className="btn btn-primary">Search Again!</a>
          <br></br>
          <br></br>
          <br></br>
        </Route>


        <Route path="*">
          <Helmet>
            <title> Error | PathPort</title>
          </Helmet>

          <NavBarComponent />

          <PageNotFound />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
