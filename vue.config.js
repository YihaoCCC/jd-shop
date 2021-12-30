module.exports={
    devServer:{
        port:8080,
        proxy:{
            // 线上服务器地址
            // '/api':{
            //     target:'http://192.168.43.149:8080',
            //     changeOrigin:true,
            //     pathRewrite:{
            //         '/api':''
            //     }
            // },
            // 本机地址
            '/api':{
                target:'http://localhost:8080',
                changeOrigin:true,
                pathRewrite:{
                    '/api':''
                }
            }
        },
        hot:true,
 
    },
     productionSourceMap:false,//将线上部署的项目的包中的源码map隐藏
     chainWebpack:(config)=>{
         config.plugins.delete('prefetch')
     }
 
 }