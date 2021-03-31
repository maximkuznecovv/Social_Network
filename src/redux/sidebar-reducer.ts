import {ActionsType, SidebarType} from "./store";

const initialState: SidebarType = {
    friends: [
        {id: 1, name: "Max"},
        {id: 2, name: "Igor"},
        {id: 3, name: "Alex"},
    ]
}

export const sidebarReducer = (state: SidebarType = initialState, action: ActionsType) => {

    switch (action.type) {
        default:
            return state
    }

}