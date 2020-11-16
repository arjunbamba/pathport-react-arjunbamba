export function fetchRecs(category) {
    return fetch(`/api/${category}`, {
        method: "GET"
    }).then((response) => {
      return response.json();
    }); 
}

export function deleteRec(category_id, DeleteID) {
    return fetch(`/api/${category_id}/${DeleteID}`, {
        method: "DELETE",
    })
    .then((response) => {
        console.log(response);
        return response.json;
    });
}

// pass in updated_Object in correct format and save
export function editRec(updated_Object, saved_category_id, saved_id) {
  return fetch(`/api/${saved_category_id}/${saved_id}`, {
    method: "PATCH",
    body: JSON.stringify(updated_Object),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => {
    return response.json();
  });
}

export function saveRec(data, categoryId) {
    return fetch(`/api/${categoryId}`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
        },
    }).then((response) => {
        return response.json();
    });
}