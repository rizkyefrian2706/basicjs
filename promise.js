//basic promise js
async function a() {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('1')
      resolve(true)
      console.log("2");
    }, 5000);
  })
}

a();