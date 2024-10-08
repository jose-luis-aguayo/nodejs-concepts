http restful get
con validaciones de parametros
body
responses


te dan un archivo 'comidachina.mjs' simula la base de datos
para que le puedas dar un

get
post
put
delete
OJO: te dice bien DO NOT MODIFY the 'comidachina.mjs', if you do so will be graded as 0 immeadiatly.

aqui depende que te pidan 
si te piden un get

si te da un id 
    validar que el id sea valido un numero vlaido,
    que el id sea un numero safe,
    Number.isSafeInteger()

si esun posrt
    validar la respuesta de un posrt con el body de la siguietne forma
    {
        data:{
            nombre:str,
            queso:int
        }
    }

la respuesta dara 200 si la rrespuesta del get
da la siguiente forma
{
    name:str,
    algo:int, etc
}


