const getRandomColor = () => Math.floor(Math.random() * 256);

export const randomColorGenerator = () =>
  `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()}`;
