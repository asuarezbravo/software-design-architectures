
import amqp from 'amqplib';

async function consumeFromQueue() {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue('orderQueue', { durable: true });

    console.log("Waiting for messages in 'orderQueue'...");

    channel.consume('orderQueue', (msg) => {
        if (msg) {
            const order = JSON.parse(msg.content.toString());
            console.log('Received order:', order);

            // Process order (mocking inventory update)
            console.log(`Processing inventory for product ${order.productId}, quantity: ${order.quantity}`);
            channel.ack(msg);
        }
    });
}

consumeFromQueue().catch(console.error);
