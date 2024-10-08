
2.- http proxy basic
retorne lo que retorne otra pagina

//validar que la url pasada sea una url y si no es url responder con 400, status 400, respuesta 400
.fastify-http-proxy -- fastify
get('/',(req,res)=>{
    const {url} = req.query;
    try{
        new URL(url)
    }catch{
        next(badRequest) --express
        res.badRequest() --fastify
    }
    res.from('URL')
})