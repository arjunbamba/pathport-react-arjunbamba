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
  
// export function fetchFollow(id) {
//     return fetch(`/api/following/${id}`).then((response) => {
//         if (response.status >= 400) {
//             return Promise.reject(
//                 `There was an error requesting the issue with and id of ${id}`
//             );
//         }
//         return response.json();
//     });
// }

// export function saveFollow(data) {
//     return fetch("/api/following", {
//         method: "post",
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }).then((response) => {
//         return response.json();
//     });
// }