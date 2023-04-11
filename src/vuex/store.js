import { createStore } from "vuex";
import commonActions from "./actions/actions";
import apiRequests from "./actions/api-requests";
import getters from "./getters/getters";
import mutations from "./mutations/mutations";

const actions = {...commonActions, ...apiRequests }

let store = createStore({
    state: {
        products: [],
        cart: [],
    },
    mutations,
    actions,
    getters,
})

export default store;