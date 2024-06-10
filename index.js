process.on("unhandledRejection", (reason, promise) => {
    console.log("Unhandled Rejection Error");
    console.log(reason, promise)
}); // Handles Unhandled Rejection Errors

process.on("uncaughtException", (err, origin) => {
    console.log("Uncaught Exeception Error");
    console.log(err, origin);
}); // Handles Uncaught Excpetion Errors
