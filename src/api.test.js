import { createServer } from "miragejs";

import { fetchRecs, deleteRec, editRec, saveRec } from "./api";

let server;

beforeEach(() => {
  server = createServer({
    routes() {
        this.logging = false;
        
        this.get("/api/1", () => {
            return {
                "1": [
                    {
                    "id": 1,
                    "category_id": "1",
                    "recommendation": "The Japanese Garden",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 2,
                    "category_id": "1",
                    "recommendation": "Hollywood Sign",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 3,
                    "category_id": "1",
                    "recommendation": "Topanga State Park",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 4,
                    "category_id": "1",
                    "recommendation": "Griffith Observatory",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 5,
                    "category_id": "1",
                    "recommendation": "Runyon Canyon Park",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 6,
                    "category_id": "1",
                    "recommendation": "Grand Park",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 7,
                    "category_id": "1",
                    "recommendation": "Venice Canals",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 8,
                    "category_id": "1",
                    "recommendation": "Los Angeles Zoo",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "id": 9,
                    "category_id": "1",
                    "recommendation": "The Huntington Library, Art Collections, and Botanical",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "id": 10,
                    "category_id": "1",
                    "recommendation": "Angeles National Forest",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "id": 11,
                    "category_id": "1",
                    "recommendation": "Elysian Park",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "id": 12,
                    "category_id": "1",
                    "recommendation": "Santa Monica Mountains National Recreation Area",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "id": 13,
                    "category_id": "1",
                    "recommendation": "Huntington Desert Garden",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "recommendation": "Chipotle",
                    "category_id": 1,
                    "rating": "Awesome",
                    "id": 14,
                    "category": "Outdoors"
                    },
                    {
                    "category_id": 1,
                    "recommendation": "Ski Resort",
                    "category": "Outdoors",
                    "rating": "Okay",
                    "id": 15
                    }
                ]
            };
        });
    },
  });
});

afterEach(() => {
    server.shutdown();
});

test("testing fetchRecs(1)", () => {
    return fetchRecs("1").then((posts) => {
        expect(posts).toEqual(
            {
                "1": [
                    {
                    "id": 1,
                    "category_id": "1",
                    "recommendation": "The Japanese Garden",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 2,
                    "category_id": "1",
                    "recommendation": "Hollywood Sign",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 3,
                    "category_id": "1",
                    "recommendation": "Topanga State Park",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 4,
                    "category_id": "1",
                    "recommendation": "Griffith Observatory",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 5,
                    "category_id": "1",
                    "recommendation": "Runyon Canyon Park",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 6,
                    "category_id": "1",
                    "recommendation": "Grand Park",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 7,
                    "category_id": "1",
                    "recommendation": "Venice Canals",
                    "category": "Outdoors",
                    "rating": "Good"
                    },
                    {
                    "id": 8,
                    "category_id": "1",
                    "recommendation": "Los Angeles Zoo",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "id": 9,
                    "category_id": "1",
                    "recommendation": "The Huntington Library, Art Collections, and Botanical",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "id": 10,
                    "category_id": "1",
                    "recommendation": "Angeles National Forest",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "id": 11,
                    "category_id": "1",
                    "recommendation": "Elysian Park",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "id": 12,
                    "category_id": "1",
                    "recommendation": "Santa Monica Mountains National Recreation Area",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "id": 13,
                    "category_id": "1",
                    "recommendation": "Huntington Desert Garden",
                    "category": "Outdoors",
                    "rating": "Okay"
                    },
                    {
                    "recommendation": "Chipotle",
                    "category_id": 1,
                    "rating": "Awesome",
                    "id": 14,
                    "category": "Outdoors"
                    },
                    {
                    "category_id": 1,
                    "recommendation": "Ski Resort",
                    "category": "Outdoors",
                    "rating": "Okay",
                    "id": 15
                    }
                ]
            }
        );
    });
});


