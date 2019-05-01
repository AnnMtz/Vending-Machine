var vendingMachine = {
    'column': 4,
    'row': 6,
    'stock': [
        {
            'id': 1,
            'price': 15,
            'existencia': 10, 
            'name':'lay',
            'column': 1,
            'row': 1,
            'img': 'url(img/Lays.jpg)'    
        },
        {
            'id': 2,
            'price': 18,
            'existencia': 11,
            'name': 'adobada',
            'column': 2,
            'row': 1,
            'img': 'url(img/adobada.jpg)'
        },
        {
            'id': 3,
            'price': 16,
            'existencia': 10,
            'name': 'sabritas',
            'column': 3,
            'row': 1,
            'img': 'url(img/crujiente.jpg)'
        },
        {
            'id': 4,
            'price': 15,
            'existencia': 10, 
            'name':'lay',
            'column': 1,
            'row': 1,
            'img': 'url(img/Lays.jpg)'
        },
        {
            'id': 5,
            'price': 18,
            'existencia': 10,
            'name': 'adobada',
            'column': 2,
            'row': 1,
            'img': 'url(img/adobada.jpg)'
        },
        {
            'id': 6,
            'price': 16,
            'existencia': 10,
            'name': 'sabritas',
            'column': 3,
            'row': 1,
            'img': 'url(img/crujiente.jpg)'
        },
        {
            'id': 7,
            'price': 15,
            'existencia': 10, 
            'name':'lay',
            'column': 1,
            'row': 1,
            'img': 'url(img/Lays.jpg)'
        },
        {
            'id': 8,
            'price': 15,
            'existencia': 10, 
            'name':'lay',
            'column': 1,
            'row': 1,
            'img': 'url(img/Lays.jpg)'
        }
    ]
}

 function Existence(existencia) {
     this.existencia = existencia
     this.getExistencia = function() {
         return 'Productos totales en existencia: ' + this.existencia
     }
 }
//  console.log(Existence());
 
vendingMachine.stock.forEach(function(element) {
    var existencia_obj = new Existence(element.existencia)
    // console.log(element.existencia);
    console.log(existencia_obj.getExistencia());
})
var existence = document.querySelector('#ex-1')
existence.value = vendingMachine.stock[0]['existencia']
var existence1 = document.querySelector('#ex-2')
existence1.value = vendingMachine.stock[1]['existencia']
var existence2 = document.querySelector('#ex-3')
existence2.value = vendingMachine.stock[2]['existencia']
var existence3 = document.querySelector('#ex-4')
existence3.value = vendingMachine.stock[3]['existencia']
var existence4 = document.querySelector('#ex-5')
existence4.value = vendingMachine.stock[4]['existencia']
var existence5 = document.querySelector('#ex-6')
existence5.value = vendingMachine.stock[5]['existencia']
var existence6 = document.querySelector('#ex-7')
existence6.value = vendingMachine.stock[6]['existencia']
var existence7 = document.querySelector('#ex-8')
existence7.value = vendingMachine.stock[7]['existencia']

// console.log(existence);
// var existence = document.querySelectorAll('.ex-1')
// console.log(existence.value = vendingMachine.stock[0]['existencia'])

function comprar(id, price, existencia) {

    var products = vendingMachine['stock'];
    var items = products.find(function(element) {
        return element.id === parseInt(id)
    }) 

    if (items.existencia === 0) {
        console.log('No hay producto disponible');
        // var existence = document.getElementById('cont-existencias')
        // existence.value = items.existencia
        // var existence = document.querySelectorAll('.ex-1')
        // existence.value = items.existencia
        // console.log(existencia_obj.getExistencia());
        return false
    }
    if (price < items.price) {
        console.log('Fondos insuficientes');
        return false
    } else if (price >= items.price) {
        console.log('Tu cambio es ' + (price - items.price));
        var cambio = document.getElementById('cambio')
         cambio.value = price - items.price
    }  
    items.existencia--
    // existence.value = items.existencia
    // existence.value = items.existencia
    return items
}

function realizarCompra() {
    var itemId = document.getElementById('mostrar').value 
    var dinero = document.getElementById('ingresar').value
    var compraRealizada = comprar(itemId,dinero)
    console.log(compraRealizada);
    return compraRealizada
}

// function mostrarExistencia(existencia) {
//     var existence = document.getElementById('ex-1').value
//     var existenciaFinal = comprar(itemId,existencia)
//     console.log(existenciaFinal);
//     return existenciaFinal 
// }




