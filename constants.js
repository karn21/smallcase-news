const apiEndpoints = {
  getNews: (count = 20, offset = 0) =>
    `https://api.smallcase.com/news/getNews?count=${count}&offset=${offset}`,
};

export {apiEndpoints};
