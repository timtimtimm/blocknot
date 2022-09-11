import { createSlice } from "@reduxjs/toolkit";


const contentSlice = createSlice({
    name: 'content',

    initialState: {
        content: [],
        editContent: { id: '', text: '' },
        isEditContent: false,
    },

    reducers: {
        addContent(state, action) {
            state.content.push({
                id: new Date().toISOString(),
                name: action.payload.name,
                text: action.payload.text,
                searchStatus: false
            })
        },

        onEditContent(state, action) {
            for (let elem of state.content) {
                if (elem.id === action.payload) {
                    state.editContent.id = elem.id;
                    state.editContent.text = elem.text;
                }
            }
            state.isEditContent = true;
        },

        removeContent(state, action) {
            state.content = state.content.filter(elem => elem.id != action.payload)
        },

        editContent(state, action) {
            for (let elem of state.content) {
                if (elem.id === action.payload.id) {
                    elem.text = action.payload.text;
                }
            }
            state.isEditContent = false;
        },

        searchContent(state, action) {
            if (action.payload === '') {
                for (let elem of state.content) {
                    elem.searchStatus = false;
                }
            } else {
                for (let elem of state.content) {
                    elem.searchStatus = false;
                    if (elem.text.includes(action.payload)) {
                        elem.searchStatus = true;
                    }
                }
            }
        }
    },
});

export const { addContent, removeContent, editContent, searchContent, onEditContent } = contentSlice.actions;

export default contentSlice.reducer;