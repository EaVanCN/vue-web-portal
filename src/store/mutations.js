import getters from './getters'
import * as types from './types'

const state = {
	content : true,
	pageNum : 1
}

const mutations = {
	[types.PAGE_CONTENT_HIDE](state){
		state.content = false;
	},
	[types.PAGE_CONTENT_SHOW](state){
		state.content = true;
	},
	[types.PAGE_NUMBER_RESET](state){
		state.pageNum = 1;
	},
	[types.PAGE_NUMBER_ADD](state){
		state.pageNum++;
	},
	[types.PAGE_NUMBER_SUB](state){
		state.pageNum--;
	},
	[types.PAGE_NUMBER_CHANGE](state,curPageNum){
		state.pageNum = curPageNum;
	},
	[types.PAGE_NUMBER_LAST](state,pageTottleNum){
		state.pageNum = pageTottleNum;
	}

}

export default {
	state,
	mutations,
	getters
}