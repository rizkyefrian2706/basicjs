
// file system mendapatkan image atau file 
const https = require("https");
const fs = require("fs"); 
const url = "https://sebhastian.com/img/default.png";

https.get(url, (res) => {
  const path = "downloaded-image.png";
  const writeStream = fs.createWriteStream(path);

  res.pipe(writeStream);

  writeStream.on("finish", () => {
    writeStream.close();
    console.log("Download Completed");
  });
});
