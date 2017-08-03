import getters from './getters'
import * as types from './types'

const state = {
	content : true
}

const mutations = {
	[types.PAGE_CONTENT_HIDE](state){
		state.content = false;
	},
	[types.PAGE_CONTENT_SHOW](state){
		state.content = true;
	}
}

export default {
	state,
	mutations,
	getters
}