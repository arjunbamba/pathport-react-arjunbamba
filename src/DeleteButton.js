import React from "react";

import { useHistory } from "react-router-dom";

export default function DeleteButton({category_id, DeleteID, handleDelete}) 
{
    const history = useHistory();
    
    function handleSubmit(event) {
        event.preventDefault();

        handleDelete(category_id, DeleteID);

        history.push("/DeleteConfirmation");
    }
    
    return (
    <form onSubmit={handleSubmit}>
        <button type="submit" value={DeleteID} className="btn btn-outline-danger delete-btn">
            Delete
        </button>
    </form>
    );
}