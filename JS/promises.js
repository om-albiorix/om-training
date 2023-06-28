let promises = new Promise(function (resolve, reject) {
    setTimeout(function () { resolve("sdcfsdf") }, 2000)
})
promises.then(function (value) {
    console.log(value);
})