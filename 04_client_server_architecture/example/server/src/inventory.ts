
interface Item {
    id: string;
    name: string;
    quantity: number;
}

class Inventory {
    private items: Item[] = [];

    getAllItems(): Item[] {
        return this.items;
    }

    addItem(itemData: { name: string; quantity: number }): Item {
        const newItem = {
            id: (this.items.length + 1).toString(),
            name: itemData.name,
            quantity: itemData.quantity,
        };
        this.items.push(newItem);
        return newItem;
    }

    deleteItem(id: string): boolean {
        const index = this.items.findIndex(item => item.id === id);
        if (index !== -1) {
            this.items.splice(index, 1);
            return true;
        }
        return false;
    }
}

const inventory = new Inventory();
export default inventory;
