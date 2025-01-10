// Función para realizar la búsqueda
function searchProducts() {
    const query = document.getElementById('searchInput').value; // Obtener el valor del input
    const productList = document.getElementById('productList'); // Referencia al contenedor de productos

    if (query.trim() === '') {
        productList.innerHTML = ''; // Limpiar la lista si el input está vacío
        return;
    }

    // Realizar una solicitud fetch al backend
    fetch(`/search_products/?q=${encodeURIComponent(query)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al obtener los productos');
            }
            return response.json();
        })
        .then(data => {
            productList.innerHTML = ''; // Limpiar la lista antes de renderizar nuevos datos
            const products = data.products;

            if (products.length === 0) {
                productList.innerHTML = '<li>No se encontraron productos</li>';
                return;
            }

            // Renderizar los productos obtenidos
            products.forEach(product => {
                const listItem = document.createElement('li');
                listItem.textContent = `Nombre: ${product.name}, Precio: ${product.price}`;
                productList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error:', error);
            productList.innerHTML = '<li>Error al cargar productos</li>';
        });
}
