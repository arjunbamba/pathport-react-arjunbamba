// export function fetchOutdoors() {
//     return fetch("/api/outdoors").then((response) => {
//       return response.json();
//     });
// }
  
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

// export function destroyFollow(id) {
//     return fetch(`/api/following/${id}`, {
//         method: "DELETE",
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