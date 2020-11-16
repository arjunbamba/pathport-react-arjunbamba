import React, { useState } from "react";

export default function CreateForm({ /*labels,*/ onSubmit, rec={recommendation: "", categoryId: 1, rating: ""} }) {
  const [recommendation, setRecommendation] = useState(rec.recommendation);
  const [categoryId, setCategoryId] = useState(rec.categoryId);
  const [rating, setRating] = useState(rec.rating);

  // my custom errors for blanks
  const [NameError, setNameError] = useState("");
  const [CategoryError, setCategoryError] = useState("");
  const [RatingError, setRatingError] = useState("");

  const [bad_edit_status, setBadEdit_Status] = useState("");
  const [good_edit_status, setGoodEdit_Status] = useState("");


  function handleSubmit(event) {
    event.preventDefault();

    let submission_name = recommendation;
    let submission_category = categoryId;
    let submission_rating = rating;

      // clean up from last time
      setNameError("");
      setCategoryError("");
      setRatingError("");
      setBadEdit_Status("");
      setGoodEdit_Status("");

    if (submission_name !== "" && submission_category !== "" && submission_rating !== "") {
        onSubmit(recommendation, categoryId, rating);
        setGoodEdit_Status("SUCCESSFULLY CREATED.");
    
        // clean up for next time
        setRecommendation("");
        setCategoryId(1);
        setRating("");
    }
    else {
      if (submission_name === "") {
        setNameError("Please enter a recommendation.")
      }
      if (submission_category === "") {
        setCategoryError("Please select a category.");
      }
      if (submission_rating === "") {
        setRatingError("Please enter a rating.");
      }
      setBadEdit_Status("UNSUCCESSFUL: PLEASE FIX THE ERRORS ABOVE.");
    }

  }

  function handleRecommendationChange(event) {
    setRecommendation(event.target.value);
  }
  function handleCategoryChange(event) {
    const categoryId = Number(event.target.value);
    setCategoryId(categoryId);
  }
  function handleRatingChange(event) {
    setRating(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit} style={{width: 80 + "%", marginLeft: "auto", marginRight: "auto" }}>
      <div className="form-group">
        <label htmlFor="recommendation">Recommendation</label>
        <input
          type="text"
          value={recommendation}
          onChange={handleRecommendationChange}
          className="form-control"
          id="recommendation"
        />
        <div id="error" className="text-danger">
            {NameError}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="category">Category</label>
        <select
          className="form-control"
          id="category"
          value={categoryId}
          onChange={handleCategoryChange}
        >
            <option key="1" value="1">Outdoors</option>
            <option key="2" value="2">Arts & Culture</option>
            <option key="3" value="3">Music</option>
            
            {/* 
            {labels.map((label) => {
                return (
                    <option key={label.id} value={label.id}>
                        {label.name}
                    </option>
                );
            })}
            */}
        </select>
        <div id="error" className="text-danger">
            {CategoryError}
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="rating">Rating</label>
        <input
          type="text"
          value={rating}
          onChange={handleRatingChange}
          className="form-control"
          id="rating"
        />
        <div id="error" className="text-danger">
            {RatingError}
        </div>
      </div>

      <button type="submit" className="btn btn-primary">
        Save
      </button>
      
        <br></br>
        <br></br>
        <div id="error" className="text-warning">
          {bad_edit_status}
        </div>
        <div id="success" className="text-success">
            {good_edit_status}
        </div>
    </form>
  );
}