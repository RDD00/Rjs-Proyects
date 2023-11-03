const products = [
    {id: '1', name: 'Producto 1', category: 'pantalones', price: 1000, stock: 10, description: 'Cargo Thor Negro.', imageUrl: 'https://acdn.mitiendanube.com/stores/001/484/136/products/341-c5214ffc9d3e9820c416486777108141-640-0.jpg'},
    {id: '2', name: 'Producto 2', category: 'pantalones', price: 2000, stock: 7, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '3', name: 'Producto 3', category: 'zapatillas', price: 3000, stock: 5, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
    {id: '4', name: 'Producto 4', category: 'zapatillas', price: 4000, stock: 9, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.', imageUrl: 'https://cdn.palbincdn.com/users/31244/images/GORRA-BASICA-JUNIOR-CUSTOMIZASHOPBF10B-COLOR-ROSA-1611838353.jpg'},
]

export const mFetch = () =>{
    return new Promise ((res, rej) =>{
        setTimeout(()=>{
            res(products)
        }, 1000)
    })
}

export const mFetchId = (id) =>{
    return new Promise ((res, rej) =>{
        setTimeout(()=>{
            res(products.find(product => product.id === id))
        }, 1000)
    })
}