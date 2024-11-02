
# Microservices Architecture Example

This is a basic example of a microservices architecture implemented in TypeScript with Express. The example includes two independent services (`Service 1` and `Service 2`) and an API Gateway that routes requests to these services.

## Project Structure

```
microservices-example/
├── service1/               # First independent service
│   ├── src/app.ts          # Express server for Service 1
│   ├── package.json        # Project dependencies
│   └── tsconfig.json       # TypeScript configuration
├── service2/               # Second independent service
│   ├── src/app.ts          # Express server for Service 2
│   ├── package.json        # Project dependencies
│   └── tsconfig.json       # TypeScript configuration
└── gateway/                # API Gateway for routing
    ├── src/app.ts          # Express server for Gateway
    ├── package.json        # Project dependencies
    └── tsconfig.json       # TypeScript configuration
```

## Running the Example

1. **Install Dependencies**

   In each directory (`service1`, `service2`, and `gateway`), run:
   ```bash
   npm install
   ```

2. **Start Each Service**

   Start each service in its respective directory:
   ```bash
   # In service1/
   npm start

   # In service2/
   npm start

   # In gateway/
   npm start
   ```

3. **Access the Services through the Gateway**

   - **Service 1**: Access at `http://localhost:3000/service1`
   - **Service 2**: Access at `http://localhost:3000/service2`

## Example Features

- **Independent Services**: Each service (`Service 1` and `Service 2`) runs independently and can be scaled separately.
- **API Gateway**: Routes client requests to the appropriate service, acting as a single entry point.
- **Service Communication**: The gateway communicates with the services, demonstrating how microservices interact via an intermediary.

This example demonstrates key microservices principles, including independent deployability, API Gateway, and service-to-service communication.
