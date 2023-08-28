import axios from "axios";

// initial state
const state = {
	mainList: [],
	msg: ''
};

// getters are functions.
const getters = {};

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
	getList({commit}) {
		axios.get('https://api.openbrewerydb.org/v1/breweries').then(res => {
			commit('setMainList', res.data);
		})
	},
	pushAlert({commit}, msg) {
		commit('pushAlert', msg);
	}
};

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
	setMainList(state, data) {
		state.mainList = data;
	},
	pushAlert(state, msg) {
		state.msg = msg;
		alert(state.msg);
	}
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}