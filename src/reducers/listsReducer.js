import { CardActions } from "@material-ui/core";

const initialState = [
    {
        title: "Mr Smith",
        id: 0,
        cards: [
            {
                id: 0,
                text: "dummy card"
            },
            {
                id: 1,
                text: "test card 2"
            }
        ]
    },
    {
        title: "Mrs Smith",
        id: 1,
        cards: [
            {
                id: 0,
                text: "le card"
            },
            {
                id: 1,
                text: "get lunch"
            }
        ]
    },
    {
        title: "Jimmy",
        id: 2,
        cards: [
            {
                id: 0,
                text: "JIMMY"
            },
            {
                id: 1,
                text: "dummy thicc card"
            },
            {
                id: 2,
                text: "big jim"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default listsReducer;