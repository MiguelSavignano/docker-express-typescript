module.exports.getMockResponse = (value, { req = {} } = {}) => {
  if (isJsonFile(value)) {
    return require(value);
  } else if (typeof value === "function") {
    return value(req);
  } else {
    return value;
  }
};

module.exports.resolveHttpMethodAndUrlPath = (path = "") => {
  const [firstWord, urlPath] = path.split(" ");
  const httpMethods = ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"];
  if (httpMethods.includes(firstWord)) {
    return [firstWord.toLocaleLowerCase(), urlPath];
  } else {
    return ["get", path];
  }
};

const isJsonFile = value => {
  return typeof value === "string" && /\.json$/.test(value);
};
