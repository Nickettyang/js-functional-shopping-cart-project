document.addEventListener('DOMContentLoaded', function() {
    // Handle quantity changes
    const increaseButtons = document.querySelectorAll('.increase');
    const decreaseButtons = document.querySelectorAll('.decrease');

    // Function to update quantity and total price
    function updateQuantity(button, increment) {
        const cardBody = button.closest('.card-body');
        const quantitySpan = cardBody.querySelector('.quantity');
        const unitPriceSpan = cardBody.querySelector('.unit-price');
        let quantity = parseInt(quantitySpan.textContent, 10);
        const unitPrice = parseFloat(unitPriceSpan.textContent.replace('$', '').trim());
        const totalSpan = document.querySelector('.total');

        if (increment) {
            quantity += 1;
        } else {
            if (quantity > 0) {
                quantity -= 1;
            }
        }

        quantitySpan.textContent = quantity;
        updateTotalPrice();
    }

    // Function to update the total price
    function updateTotalPrice() {
        const quantities = document.querySelectorAll('.quantity');
        const totalSpan = document.querySelector('.total');

        let totalPrice = 0;
        quantities.forEach(quantityElem => {
            const cardBody = quantityElem.closest('.card-body');
            const unitPriceSpan = cardBody.querySelector('.unit-price');
            const quantity = parseInt(quantityElem.textContent, 10);
            const unitPrice = parseFloat(unitPriceSpan.textContent.replace('$', '').trim());
            totalPrice += quantity * unitPrice;
        });

        totalSpan.textContent = `${totalPrice.toFixed(2)} $`;
    }

    // Attach event listeners
    increaseButtons.forEach(button => {
        button.addEventListener('click', () => updateQuantity(button, true));
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', () => updateQuantity(button, false));
    });

    // Handle "like" button toggle
    const likeButtons = document.querySelectorAll('.like');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked'); // Toggle "liked" class
            // Toggle the heart icon between solid and regular
            if (button.classList.contains('liked')) {
                button.classList.remove('fa-heart');
                button.classList.add('fa-heart-solid');
            } else {
                button.classList.remove('fa-heart-solid');
                button.classList.add('fa-heart');
            }
        });
    });
});


