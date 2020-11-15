import React, {useState} from "react";

// import { fetchRecs } from "./api";

import { useHistory } from "react-router-dom";

export default function DeleteButton({category_id, DeleteID, handleDelete}) 
{
    // const [DeleteRec, setDeleteRec] = useState(DeleteID);
    // const [isPresent, setIsPresent] = useState(false);
    // var idToDelete = -1;


    const history = useHistory();
    
    function handleSubmit(event) {
        event.preventDefault();

        handleDelete(category_id, DeleteID);

        history.push("/DeleteConfirmation");
        
        // var found = 0;
        // fetchRecs(category_id)
        // .then((response) => {
        //     setDeleteRec(DeleteID);
        //     found = response.find((rec) => rec.id===DeleteRec);
        //     if (found) {
        //         // setIsPresent(true);
        //         idToDelete = found.id;
        //         handleDelete(idToDelete);
        //     }
        //     else {
        //         // setIsPresent(false);
        //     }
        // })  
    }
    
    return (
    <form onSubmit={handleSubmit}>
        <button type="submit" value={DeleteID} className="btn btn-outline-danger delete-btn">
            Delete
        </button>
    </form>
    );
}