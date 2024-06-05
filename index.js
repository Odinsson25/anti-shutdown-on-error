process.on("unhandledRejection", (reason, promise) => {
    console.log("Unhandled Rejection Error");
    console.log(reason, promise)
});

process.on("uncaughtException", (err, origin) => {
    console.log("Uncaught Exeception Error");
    console.log(err, origin);
});
