var proOne = new Promise((resolve,reject) => {
    reject(1)
})1
proOne.then(() => {},console.log).catch( alert)