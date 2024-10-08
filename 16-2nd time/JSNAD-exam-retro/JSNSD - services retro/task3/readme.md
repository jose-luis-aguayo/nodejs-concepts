contneido estatico, si no existe el archivo
repsonde 404
otraruta apartir GET de 404 debe ser 405


al final:  [[[[[ si tu creas un nuevo archio tiene que verse reflejado sin que reinicie el servidor ]]]]


depende la ruta es el contneido estatico que va a servir.


http://localhost:3000/ = /  == index.html
http://localhost:3000/queso =  /queso  == queso.html
http://localhost:3000/mangomongo = /mangomongo == 404 not found
POST,PUST,DELETE http://localhost:3000/ == 405 methodnotAllowed or 400 badRequest 



