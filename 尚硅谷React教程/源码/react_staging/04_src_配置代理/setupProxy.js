// const proxy = require('http-proxy-middleware')

// module.exports = function(app){
// 	app.use(
// 		proxy('/api1',{ //遇见/api1前缀的请求，就会触发该代理配置
// 			target:'http://localhost:5000', //请求转发给谁
// 			changeOrigin:true,//控制服务器收到的请求头中Host的值
// 			pathRewrite:{'^/api1':''} //重写请求路径(必须)
// 		}),
// 		proxy('/api2',{
// 			target:'http://localhost:5001',
// 			changeOrigin:true,
// 			pathRewrite:{'^/api2':''}
// 		}),
// 	)
// }


const { createProxyMiddleware } = require("http-proxy-middleware")
module.exports = function (app) {
	app.use(
		createProxyMiddleware("/api1", {
			target: "http://localhost:5000", //配置转发目标地址(能返回数据的服务器地址)
			changeOrigin: true, //控制服务器接收到的请求头中host字段的值
			pathRewrite: { "^/api1": "" },
		}),
		createProxyMiddleware("/api2", {
			target: "http://localhost:5001", //配置转发目标地址(能返回数据的服务器地址)
			changeOrigin: true, //控制服务器接收到的请求头中host字段的值
			pathRewrite: { "^/api2": "" },
		})
	)
}