export const loadImg = (imgUrl) => {
  const img = new Image();
  img.src = imgUrl;
  return new Promise((resolve, reject) => {
    if (img.complete) {
      resolve(img);
    } else {
      img.addEventListener("load", () => {
        resolve(img);
      }, { once: true });
      img.addEventListener("error", reject, { once: true });
    }
  })
}

export const loadImgs = imgUrls => {
  return Promise.all(imgUrls.map(imgUrl => loadImg(imgUrl)));
}

export const downloadImage = (
  imgUrl,
  filename = new Date().toLocaleString(),
  extension = "image/jpeg",
) => {
  const img = new Image();
  img.setAttribute('crossOrigin', 'anonymous');
  img.src = imgUrl;
  img.addEventListener("load", () => {
    // draw image
    const canvas = document.createElement('canvas');
    canvas.setAttribute("width", img.width);
    canvas.setAttribute("height", img.height);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    // create link and download
    const link = document.createElement('a');
    link.setAttribute('download', filename);
    link.setAttribute('href', canvas.toDataURL(extension));
    link.click();
  }, { once: true });
}