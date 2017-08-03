import * as types from './types'

export default {
	pageContentHide : ({commit}) => {
		commit(types.PAGE_CONTENT_HIDE);
	},
	pageContentShow : ({commit}) => {
		commit(types.PAGE_CONTENT_SHOW);
	}
}