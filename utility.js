export const formatTimestamp = timestamp => {
  return new Date(timestamp).toLocaleString();
};

export const getDate = timestamp => {
  return new Date(timestamp).toDateString();
};

export const getTime = timestamp => {
  return new Date(timestamp).toLocaleTimeString();
};
