// This get method with replace the one from axios
// So the reall fetchData will run
// ( if jest.mock("./http"); in util.test.js is commented out)
// but then this get method

const get = (url) => {
  return Promise.resolve({
    data: { title: "delectus aut autem" },
  });
};

exports.get = get;
