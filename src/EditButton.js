import React from "react";

import { useHistory } from "react-router-dom";

export default function EditButton({id, category_id, name, category, rating, saveData}) 
{
    const history = useHistory();
    
    function handleSubmit(event) {
        event.preventDefault();

        saveData(id, category_id, name, category, rating);

        history.push("/EditRec");
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <button type="submit" value={id} className="btn btn-outline-info delete-btn">
                Edit
            </button>
        </form>
    );
}