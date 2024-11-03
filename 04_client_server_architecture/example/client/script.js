
async function getItems() {
    const response = await fetch('http://localhost:3000/api/items');
    const items = await response.json();
    const itemList = document.getElementById('item-list');
    itemList.innerHTML = ''; // Clear the list

    items.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `ID: ${item.id}, Name: ${item.name}, Quantity: ${item.quantity}`;
        itemList.appendChild(listItem);
    });
}

async function addItem() {
    const name = document.getElementById('item-name').value;
    const quantity = document.getElementById('item-quantity').value;

    const response = await fetch('http://localhost:3000/api/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, quantity: parseInt(quantity) })
    });

    if (response.ok) {
        getItems(); // Refresh the list
    }
}
