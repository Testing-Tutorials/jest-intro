/* This function will replace my real fetchData */

const fetchData = () => {
  return Promise.resolve({ title: "delectus aut autem" });
};

exports.fetchData = fetchData;
