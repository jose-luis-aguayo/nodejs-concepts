// <!-- 1.- Secure con params
//recibes un query params con una llave 'bob' en este caso
//si te llega un ataque desde la ip = 69.420.314.20
//tienes que bloquearla

//esto esta en casi todos -> 'para respuestas PUT,POST,DELETE -> responder con un 405

///  
///  
///  ?bob=algo&bob=algo2
//{bob: ['algo','algo2']}

// fw.get('/',{
//     schema:{

//         querystring: {
//             required: ['bob'],
//             properties:{
//                 bob:{
//                     type:'string',
//                 }
//             }
//         },
//         body,
//         params,
//         response:{
//             200: {body:{'papas'}}
//         }

//     }
// },(req,res)=>{

//     const {bob} = req.query;
    
//     return bob.toString().toUpperCase()
// }) -->



`
    You will get and 'BOB' query params that 
    need to be transform as a uppercase.
`
