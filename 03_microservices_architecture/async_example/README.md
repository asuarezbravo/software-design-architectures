
# Asynchronous Order-Inventory System

This project demonstrates asynchronous communication in a microservices architecture using RabbitMQ to handle messages between two services: **Order Service** and **Inventory Service**.

## Project Structure

```
asynchronous-order-inventory/
├── order-service/
│   ├── src/
│   │   ├── orderController.ts    # Publishes order events to RabbitMQ
│   │   └── app.ts                # Main application setup for Order Service
│   ├── package.json
│   └── tsconfig.json
├── inventory-service/
│   ├── src/
│   │   └── orderConsumer.ts      # Consumes order events from RabbitMQ
│   ├── package.json
│   └── tsconfig.json
```

## Running the Example

1. **Install RabbitMQ**

   Ensure RabbitMQ is installed and running locally. You can start it with Docker if you have Docker installed:
   ```bash
   docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:3-management
   ```
   Access the RabbitMQ management interface at `http://localhost:15672` (default username/password: guest/guest).

2. **Install Dependencies**

   In both `order-service` and `inventory-service` directories, run:
   ```bash
   npm install
   ```

3. **Start Each Service**

   - Start **Inventory Service** (RabbitMQ consumer):
     ```bash
     npm start
     ```

   - Start **Order Service** (RabbitMQ producer):
     ```bash
     npm start
     ```

4. **Use the Asynchronous API**

   - Create an order by making a POST request to `http://localhost:3000/order/createOrder` with a JSON payload:
     ```json
     {
       "productId": "product-1",
       "quantity": 10
     }
     ```
   - The Order Service will create an order and publish it to RabbitMQ.
   - The Inventory Service listens for new orders on the `orderQueue`, processes them, and logs the inventory update.

## Purpose

This project illustrates asynchronous communication between services using RabbitMQ. It enables order creation without requiring immediate inventory verification, decoupling the services.
