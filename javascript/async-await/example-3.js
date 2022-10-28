const fetchData = async () => {
  return 'Hello!';
};

const result = fetchData();
console.log(result);

result.then((value) => {
  console.log(value);
});

(async () => {
  console.log(await fetchData());
})();
