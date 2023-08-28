document.addEventListener("DOMContentLoaded", function () {
    const productButtons = document.querySelectorAll(".add-to-cart");
    const cartItemCount = document.getElementById("cart-item-count");
    const cartTotal = document.getElementById("cart-total");
    const cartItemsList = document.getElementById("cart-items");

    let cart = [];
    let total = 0;

    productButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productName = button.getAttribute("data-nombre");
            const productPrice = parseFloat(button.getAttribute("data-precio"));
            agregarAlCarrito(productName, productPrice);
            button.classList.add("selected"); // Añadir una clase para indicar que el producto está seleccionado
        });
    });

    function agregarAlCarrito(nombre, precio) {
        cart.push({ nombre, precio });
        total += precio;
        actualizarCarrito();
    }

    function actualizarCarrito() {
        cartItemCount.textContent = cart.length;
        cartTotal.textContent = total.toFixed(2);

        cartItemsList.innerHTML = "";
        for (const item of cart) {
            const li = document.createElement("li");
            li.textContent = `${item.nombre} - $${item.precio.toFixed(2)}`;
            cartItemsList.appendChild(li);
        }
    }

    // Agregar evento de clic al botón de pagar
    const checkoutButton = document.getElementById("checkout-button");
    checkoutButton.addEventListener("click", () => {
        // Crear un objeto con la información de los productos seleccionados
        const productsToPay = {
            products: cart.map(item => ({ nombre: item.nombre, precio: item.precio })),
            total: total.toFixed(2)
        };

        // Convertir el objeto a formato JSON
        const productsJSON = JSON.stringify(productsToPay);

        // Guardar los productos seleccionados en el almacenamiento local
        localStorage.setItem("productsToPay", productsJSON);

        // Redirigir a la página de confirmación y pago
        window.location.href = "confirmar-pago.html";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // ... (Código para agregar productos al carrito y otras funciones)

    // Agregar evento de clic al botón de cambiar a modo normal
    const normalModeButton = document.getElementById("normal-mode");
    normalModeButton.addEventListener("click", () => {
        // Remover clase para modo nocturno
        document.body.classList.remove("dark-mode");
    });

    // Agregar evento de clic al botón de cambiar a modo nocturno
    const darkModeButton = document.getElementById("dark-mode");
    darkModeButton.addEventListener("click", () => {
        // Agregar clase para modo nocturno
        document.body.classList.add("dark-mode");
    });
});
const submitButton = document.getElementById('submit-comment');
submitButton.addEventListener('click', () => {
    const username = document.getElementById('username').value;
    const userComment = document.getElementById('user-comment').value;
    
    const commentElement = document.createElement('div');
    commentElement.innerHTML = `<strong>${username}:</strong> ${userComment}`;
    
    document.getElementById('comments-list').appendChild(commentElement);
    
    // Limpiar el formulario
    document.getElementById('username').value = '';
    document.getElementById('user-comment').value = '';
});
// boton submit en sobre nosotros
