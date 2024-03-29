//1 Log Content
export const log = (content) => console.log(content);

//2 proper Case
export const properCase = (string) =>
  `${string[0].toUpperCase()}${string.slice(1).toLowerCase()}`;

//3 query Selector with Optional Scope
export const select = (selector, scope) =>
  (scope || document).querySelector(selector);

export const selectAll = (selector, scope) =>
  (scope || document).querySelectorAll(selector);

//4 create an element with an optional css class
export const create = (tag, className) => {
  const el = document.createElement(tag);
  if (className) el.classList.add(className);
  return el;
};

//5 create a textNode
export const createTxt = (text) => document.createTextNode(text);

//6 create a line
export const line = (line, no) => log(line.repeat(no));

//6 URL Validator
const is_url = (str) => {
  let regexp =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
  if (regexp.test(str)) {
    return true;
  } else {
    return false;
  }
};

export { is_url };
