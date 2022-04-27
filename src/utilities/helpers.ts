export const random = (min: number, max: number, int = false) => {
  return int
    ? Math.floor(Math.random() * (max - min) + min)
    : Math.random() * (max - min) + min;
};

export const createImage = (string, size = 100, color = "green") => {
  console.log("TCL: createImage -> size", size);
  console.log("TCL: createImage -> string", string);
  let drawing = document.createElement("canvas");
  const lineHeight = size * 1.1;

  drawing.width = "150";
  drawing.height = "60";

  let ctx = drawing.getContext("2d");

  ctx.font = `${size}pt/${lineHeight}pt Venus`;
  ctx.textAlign = "center";
  ctx.fillText(string, 75, 50); // numbers are x and y. y measures from the bottom
  const measure = ctx.measureText(string);

  let newDrawing = document.createElement("canvas");
  newDrawing.width = Math.floor(measure.width);
  newDrawing.height = lineHeight + 4;

  // Create main image
  let newCtx = newDrawing.getContext("2d");
  // newCtx.rect(0, 0, newDrawing.width, newDrawing.height)
  // newCtx.fillStyle = 'orange'
  // newCtx.fill()

  newCtx.fillStyle = color;
  newCtx.font = `${size}pt/${lineHeight}pt -apple-systems`;
  newCtx.textAlign = "center";
  newCtx.fillText(string, newDrawing.width / 2, lineHeight - lineHeight * 0.01);
  const finalImage = newDrawing.toDataURL("image/png");

  // create hover image
  newCtx.clearRect(0, 0, newDrawing.width, newDrawing.height);
  newCtx.fillStyle = "transparent";
  newCtx.strokeStyle = color;
  newCtx.lineWidth = 3;
  newCtx.strokeText(
    string,
    newDrawing.width / 2,
    lineHeight - lineHeight * 0.01
  );
  const hoverImage = newDrawing.toDataURL("image/png");

  return {
    image: finalImage,
    hoverImage: hoverImage,
    dimension: { measure, height: lineHeight }
  };
};
