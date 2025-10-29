import { CapacitorSQLite, SQLiteConnection, SQLiteDBConnection } from '@capacitor-community/sqlite';
import { Capacitor } from '@capacitor/core';
import { Product, ProductFormData } from './types';

class DatabaseService {
  private sqlite: SQLiteConnection;
  private db: SQLiteDBConnection | null = null;
  private dbName = 'inventorydb';

  constructor() {
    this.sqlite = new SQLiteConnection(CapacitorSQLite);
  }

  async initialize(): Promise<void> {
    try {
      if (Capacitor.getPlatform() === 'web') {
        await this.initWebStore();
      }
      
      this.db = await this.sqlite.createConnection(
        this.dbName,
        false,
        'no-encryption',
        1,
        false
      );

      await this.db.open();
      await this.createTables();
    } catch (error) {
      console.error('Database initialization error:', error);
      throw error;
    }
  }

  private async initWebStore(): Promise<void> {
    await this.sqlite.initWebStore();
  }

  private async createTables(): Promise<void> {
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS products (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        sku TEXT UNIQUE NOT NULL,
        quantity INTEGER NOT NULL DEFAULT 0,
        price REAL NOT NULL DEFAULT 0,
        category TEXT NOT NULL,
        description TEXT,
        createdAt TEXT NOT NULL,
        updatedAt TEXT NOT NULL
      );
    `;

    await this.db?.execute(createTableQuery);
  }

  async getAllProducts(): Promise<Product[]> {
    const result = await this.db?.query('SELECT * FROM products ORDER BY updatedAt DESC');
    return result?.values || [];
  }

  async getProductById(id: number): Promise<Product | null> {
    const result = await this.db?.query('SELECT * FROM products WHERE id = ?', [id]);
    return result?.values?.[0] || null;
  }

  async addProduct(product: ProductFormData): Promise<number> {
    const now = new Date().toISOString();
    const query = `
      INSERT INTO products (name, sku, quantity, price, category, description, createdAt, updatedAt)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    
    const result = await this.db?.run(query, [
      product.name,
      product.sku,
      product.quantity,
      product.price,
      product.category,
      product.description,
      now,
      now
    ]);

    return result?.changes?.lastId || 0;
  }

  async updateProduct(id: number, product: ProductFormData): Promise<boolean> {
    const now = new Date().toISOString();
    const query = `
      UPDATE products 
      SET name = ?, sku = ?, quantity = ?, price = ?, category = ?, description = ?, updatedAt = ?
      WHERE id = ?
    `;
    
    const result = await this.db?.run(query, [
      product.name,
      product.sku,
      product.quantity,
      product.price,
      product.category,
      product.description,
      now,
      id
    ]);

    return (result?.changes?.changes || 0) > 0;
  }

  async deleteProduct(id: number): Promise<boolean> {
    const result = await this.db?.run('DELETE FROM products WHERE id = ?', [id]);
    return (result?.changes?.changes || 0) > 0;
  }

  async searchProducts(searchTerm: string): Promise<Product[]> {
    const query = `
      SELECT * FROM products 
      WHERE name LIKE ? OR sku LIKE ? OR category LIKE ?
      ORDER BY updatedAt DESC
    `;
    const term = `%${searchTerm}%`;
    const result = await this.db?.query(query, [term, term, term]);
    return result?.values || [];
  }
}

export const database = new DatabaseService();
