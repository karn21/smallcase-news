const apiEndpoints = {
  getNews: (count, offset) =>
    `https://api.smallcase.com/news/getNews?count=${count}&offset=${offset}`,
};

export const newsItemLimit = 20;

export {apiEndpoints};
