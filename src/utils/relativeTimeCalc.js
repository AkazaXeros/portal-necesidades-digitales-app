const relativeTimeCalc = (createdAt) => {
  const currentTimeStamp = new Date().getTime();
  const milisecsDiff = new Date(createdAt).getTimezoneOffset() * 60000;
  const entryEpochTime = new Date(createdAt).getTime() + milisecsDiff;

  const relativeTimeValue = Math.floor(
    (currentTimeStamp - entryEpochTime) / 1000
  );

  return relativeTimeValue;
};

export default relativeTimeCalc;
