import axios from "axios";

export default {
    // GET_PRODUCTS_FROM_API({ commit }) {
    //     return axios('http://localhost:3000/products', {
    //         method: "GET"
    //     })
    //         .then((products) => {
    //             commit('SET_PRODUCTS_TO_STATE', products.data)
    //             return products;
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //             return error;
    //         })
    // },
    GET_PRODUCTS_FROM_API({ commit }) {
        return axios('http://localhost:3000/products', {
            method: 'GET'
        })
            .then((products) => {
                // добавляем количество к объекту
                products.data.map((item) => {
                    item.quantity = 1;
                });
                commit('SET_PRODUCTS_TO_STATE', products.data)
                return products;
            })
            .catch((error) => {
                console.log(error);
                return error;
            })
    }
}