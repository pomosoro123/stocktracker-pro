// Simplified Inventory Manager App
class InventoryManager {
  constructor() {
    this.items = JSON.parse(localStorage.getItem('inventory') || '[]');
    this.init();
  }

  init() {
    this.render();
    this.bindEvents();
  }

  bindEvents() {
    document.getElementById('addItemForm').addEventListener('submit', (e) => {
      e.preventDefault();
      this.addItem();
    });
  }

  addItem() {
    const name = document.getElementById('itemName').value;
    const quantity = parseInt(document.getElementById('itemQuantity').value);
    const price = parseFloat(document.getElementById('itemPrice').value);

    if (name && quantity && price) {
      const item = {
        id: Date.now(),
        name,
        quantity,
        price,
        total: quantity * price
      };

      this.items.push(item);
      this.saveItems();
      this.render();
      this.clearForm();
    }
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id);
    this.saveItems();
    this.render();
  }

  saveItems() {
    localStorage.setItem('inventory', JSON.stringify(this.items));
  }

  clearForm() {
    document.getElementById('addItemForm').reset();
  }

  render() {
    const app = document.getElementById('app');
    app.innerHTML = `
      <div class="container">
        <div class="header">
          <h1>📦 Inventory Manager</h1>
          <p>Manage your inventory with ease</p>
        </div>

        <div class="card">
          <h2>Add New Item</h2>
          <form id="addItemForm">
            <div class="form-group">
              <label for="itemName">Item Name</label>
              <input type="text" id="itemName" required>
            </div>
            <div class="form-group">
              <label for="itemQuantity">Quantity</label>
              <input type="number" id="itemQuantity" min="1" required>
            </div>
            <div class="form-group">
              <label for="itemPrice">Price ($)</label>
              <input type="number" id="itemPrice" step="0.01" min="0" required>
            </div>
            <button type="submit" class="btn">Add Item</button>
          </form>
        </div>

        <div class="card">
          <h2>Inventory Items (${this.items.length})</h2>
          ${this.items.length === 0 ? 
            '<p>No items in inventory. Add some items to get started!</p>' : 
            this.renderTable()
          }
        </div>

        <div class="card">
          <h3>Total Value: $${this.getTotalValue().toFixed(2)}</h3>
        </div>
      </div>
    `;

    this.bindEvents();
  }

  renderTable() {
    return `
      <table class="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          ${this.items.map(item => `
            <tr>
              <td>${item.name}</td>
              <td>${item.quantity}</td>
              <td>$${item.price.toFixed(2)}</td>
              <td>$${item.total.toFixed(2)}</td>
              <td>
                <button class="btn" onclick="app.removeItem(${item.id})" style="background: #e53e3e;">Remove</button>
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
  }

  getTotalValue() {
    return this.items.reduce((sum, item) => sum + item.total, 0);
  }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  window.app = new InventoryManager();
});
