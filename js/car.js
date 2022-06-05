import productos from './arreglo_productos.js'


function crearTabla() {

    let htmlProducts = ''



    htmlProducts = '<div class="row">'
    htmlProducts += '<div class="col s12 m6 l6 center">'
    htmlProducts+= '<h4>Carrito</h4>'
    htmlProducts += '<table class=""'
    htmlProducts += '<thead>'
    htmlProducts += '<tr>'
    htmlProducts += '<th>Image</th>'
    htmlProducts += '<th>Name</th>'
    htmlProducts += '<th>Price</th>'
    htmlProducts += '<th>Quantity</th>'
    htmlProducts += '<th>total</th>'
    htmlProducts += '</tr>'
    htmlProducts += '<tbody>'

    for (let i = 0; i < productos.length; i++) {
        htmlProducts += '<tr>'
        htmlProducts += '<td>'
        htmlProducts += '<img src="'
        htmlProducts += productos[i].image
        htmlProducts += '" class="img-carrito"'
        htmlProducts += '</td>'
        htmlProducts += '<td>'
        htmlProducts += productos[i].name
        htmlProducts += '</td>'
        htmlProducts += '<td>'
        htmlProducts += productos[i].price
        htmlProducts += '</td>'
        htmlProducts += '<td>'
        htmlProducts += productos[i].quantity
        htmlProducts += '</td>'
        htmlProducts += '<td>'
        htmlProducts += productos[i].price * productos[i].quantity
        htmlProducts += '</td>'
        htmlProducts += '</tr>'
    }

    htmlProducts += '</tbody>'
    htmlProducts += '</table>'
    htmlProducts += '</div>'
    htmlProducts += '</div>'

    document.getElementById('carrito').innerHTML = htmlProducts

}


crearTabla()






console.log(lista_productos)