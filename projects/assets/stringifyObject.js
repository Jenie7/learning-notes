module.exports = function stringifyObject(obj) {
  return JSON.stringify(
    obj,
    (key, value) => {
      if (value === undefined) {
        return '___undefined';
      }

      if (typeof value === 'function') {
        return `[Function: ${key}]`;
      }

      return value;
    },
    '  '
  )
    .replace(/"([^"]+)":/g, '$1:')
    .replace(/"___undefined"/g, 'undefined')
    .replace(/"\[Function: ([^\]]+)\]"/g, '[Function: $1]');
};
