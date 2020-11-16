import React from "react";
import CreateForm from "./CreateForm";
import { useHistory } from "react-router-dom";

export default function CreateRec({ /*labels,*/ createRec }) {
  const history = useHistory();

  function handleSubmit(recommendation, categoryId, rating) {
    createRec(recommendation, categoryId, rating);
    //history.push("/"); // redirect to the route with path="/"
  }

  return (
    <div className="mt-3">
        <br></br>
        <br></br>
        <h2 style={{textAlign: "center"}}>Create Recommendation</h2>
        <h6 style={{textAlign: "center"}}>NOTE: THESE CANNOT BE EMPTY.</h6>
        <br></br>
        <br></br>
        <br></br>
        <CreateForm /*labels={labels}*/ onSubmit={handleSubmit} />
    </div>
  );
}