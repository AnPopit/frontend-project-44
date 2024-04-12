const getRandomNumber = (maxRange, minRange = 0) => {
  const randomNumber = Math.floor(Math.random() * (maxRange - minRange + 1)) + minRange;
  return randomNumber;
};

export default getRandomNumber;
