const flatten = (data) => {
  const result = {};
  const isEmpty = (x) => Object.keys(x).length === 0;
  const recurse = (cur, prop) => {
    if (Object(cur) !== cur) {
      result[prop] = cur;
    } else if (Array.isArray(cur)) {
      const length = cur.length;
      for (let i = 0; i < length; i++) {
        recurse(cur[i], `${prop}[${i}]`);
      }
      if (length === 0) {
        result[prop] = [];
      }
    } else {
      if (!isEmpty(cur)) {
        Object.keys(cur).forEach((key) =>
          recurse(cur[key], prop ? `${prop}.${key}` : key)
        );
      } else {
        result[prop] = {};
      }
    }
  };
  recurse(data, "");
  return result;
};



const unflatten = (data) => {
  if (Object(data) !== data || Array.isArray(data)) {
    return data;
  }
  const regex = /\.?([^.\[\]]+)$|\[(\d+)\]$/;
  const props = Object.keys(data);
  let result, p;
  while ((p = props.shift())) {
    const match = regex.exec(p);
    let target;
    if (match.index) {
      const rest = p.slice(0, match.index);
      if (!(rest in data)) {
        data[rest] = match[2] ? [] : {};
        props.push(rest);
      }
      target = data[rest];
    } else {
      if (!result) {
        result = match[2] ? [] : {};
      }
      target = result;
    }
    target[match[2] || match[1]] = data[p];
  }
  return result;
};