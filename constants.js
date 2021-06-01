const apiEndpoints = {
  getNews: (count, offset) =>
    `https://api.smallcase.com/news/getNews?count=${count}&offset=${offset}`,
};

export {apiEndpoints};
