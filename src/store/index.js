import {createStore} from 'vuex'
import list from "./modules/list.js";

const store = createStore({ /* options */});

store.registerModule('list', list);

export default store;