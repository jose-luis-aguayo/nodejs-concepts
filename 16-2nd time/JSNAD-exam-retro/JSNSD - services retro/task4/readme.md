Merge service
te dan 2 PUERTOS
llamemoslos `queso` & `pollo` son puertos que son generados de manera dincamia


const { queso , pollo} =  process.env.PORT;

1 llamada a queuso con su respectivo puerto

http:/localhost:quesoPuerto/rutaPadre

la rutaPadre -> es la ruta a la se esta accediendo  principalmente 
ejemplo: http://localohost:3000 ruta padre
http://localohost:3000/megustacomer --> desencadena -> http:/localhost:quesoPuerto/megustacomer y  http:/localhost:polloPuerto/megustacomer

Pero la ruta queso te regresa una llave que es con la que accedes como params a pollopuerto
localhost:polloPuerto/megustacomer/llaveRegresadaDeQueso

al final regresar un boejto de la sieuginet forma
obj {
    id: el idIngreasdo
    tipo_de_queso: nombre_del_queso que proviene de la respeuesta del host queso ej: quesobadon,
    pieza_de_pollo:  el nmbre de la pieza de pollo que te regreso el response del host pollo
}


Ahora manejar:
excepciones si alguno de los dos servidores, te responde con un 404, tu debes propagar este 404
si te daun 405, propagas lo que sea que te de
lo debes propagar hacia el host padre

si uno de los dos servicios esta fuera de servicio (no levantado), automaticamente responde con un 500


