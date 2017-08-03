import App from './App.vue'
import Index from './components/Index.vue'
import Catetory from './components/Catetory.vue'
import Article from './components/Article.vue'
export default [
	{
		'path' : '/index',
		component : Index,
		children: [
	        {
	          	path: 'catetory/:catetoryId',
	          	component: Catetory
	        },
	        {
	         	path: 'catetory/:catetoryId/article/:articleId',
	        	component: Article
	        }
	    ]
	},
	{ 
		path: '/',
	 	redirect : '/index'
	},
	{ 
		path: '',
	 	redirect : '/index'
	},
	{
		path:'*', 
		redirect :'/index'
	}
]