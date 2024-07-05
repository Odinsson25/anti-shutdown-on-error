// Listen for unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
    console.log(`Unhandled Rejection Error:\nReason: ${reason}\nPromise: ${promise}`);
});

// Listen for uncaught exceptions
process.on("uncaughtException", (err, origin) => {
    console.log(`Uncaught Exception Error:\nError: ${err}\nOrigin: ${origin}`);
});