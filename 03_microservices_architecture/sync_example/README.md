
# Synchronous Order-Inventory System

This project demonstrates synchronous communication in a microservices architecture using HTTP REST calls between two services: **Order Service** and **Inventory Service**.

## Project Structure

```
synchronous-order-inventory/
├── order-service/
│   ├── src/
│   │   ├── orderController.ts    # Handles order creation and stock check
│   │   └── app.ts                # Main application setup for Order Service
│   ├── package.json
│   └── tsconfig.json
├── inventory-service/
│   ├── src/
│   │   ├── inventoryController.ts # Handles stock checking
│   │   └── app.ts                 # Main application setup for Inventory Service
│   ├── package.json
│   └── tsconfig.json
```

## Running the Example

1. **Install Dependencies**

   In both `order-service` and `inventory-service` directories, run:
   ```bash
   npm install
   ```

2. **Start Each Service**

   - Start **Inventory Service** (PORT 3001)
     ```bash
     npm start
     ```

   - Start **Order Service** (PORT 3000)
     ```bash
     npm start
     ```

3. **Use the Synchronous API**

   - Create an order by making a POST request to `http://localhost:3000/order/createOrder` with a JSON payload:
     ```json
     {
       "productId": "product-1",
       "quantity": 10
     }
     ```
   - The Order Service will synchronously call the Inventory Service to check if the product is in stock before completing the order.

## Purpose

This project shows how synchronous communication (HTTP) can be used to verify inventory in real time before placing an order.
