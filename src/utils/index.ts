// conver file to base64
export  const encodeToBase64 = async (file: File) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      resolve(reader.result )
    };
    reader.onerror = reject;
  });
}
// download images
export const handleOnDownloadFile = (imageUrls:string) => {
  const element = document.createElement("a");
  const imageUrl = imageUrls;

  fetch(imageUrl)
    .then((response) => response.blob())
    .then((blob) => {
      element.href = URL.createObjectURL(blob);
      element.download = "image.jpg";
      element.click();
    })
    .catch((error) => {
      console.error("Error fetching the image:", error);
    });
}