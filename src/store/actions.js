import * as types from './types'

export default {
	pageContentHide : ({commit}) => {
		commit(types.PAGE_CONTENT_HIDE);
	},
	pageContentShow : ({commit}) => {
		commit(types.PAGE_CONTENT_SHOW);
	},
	pageNumberReset : ({commit}) => {
		commit(types.PAGE_NUMBER_RESET);
	},
	pageNumberAdd : ({commit}) => {
		commit(types.PAGE_NUMBER_ADD);
	},
	pageNumberSub : ({commit}) => {
		commit(types.PAGE_NUMBER_SUB);
	},
	pageNumberLast: ({commit},pageTottleNum) => {
		commit(types.PAGE_NUMBER_LAST,pageTottleNum);
	},
	pageNumberchange :  ({commit},curPageNum) => {
		commit(types.PAGE_NUMBER_CHANGE,curPageNum);
	}
}