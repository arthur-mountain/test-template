export const getRandomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const saveFile = ({
  buffer,
  fileName = new Date().toLocaleString(),
  extension = "csv"
}) => {
  const url = window.URL.createObjectURL(new Blob([buffer]));
  const link = document.createElement("a");
  link.href = url;
  link.setAttribute("download", `${fileName}.${extension}`);
  link.click();
};

export const getFileExtension = (filename = "") => {
  if (!filename) return "";
  const ext = (/[^./\\]*$/.exec(filename) || [""])[0];
  return ext.toLowerCase();
};