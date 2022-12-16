/* eslint-disable no-unused-vars */

const stringifyObject = require('../../projects/assets/stringifyObject');

const document = {
  childNodes: [
    {
      nodeName: 'html',
      childNodes: [
        {
          nodeName: 'head',
          childNodes: [
            {
              nodeName: 'script',
              innerText: "console.log('hi');",
            },
          ],
        },
        {
          nodeName: 'body',
          childNodes: [
            {
              nodeName: 'ul',
              childNodes: [
                {
                  nodeName: 'li',
                  childNodes: [
                    {
                      nodeName: 'b',
                      innerText: 'Home',
                    },
                  ],
                },
                {
                  nodeName: 'li',
                  innerText: 'Blog',
                },
                {
                  nodeName: 'li',
                  innerText: 'About',
                },
              ],
            },
            {
              nodeName: 'div',
              childNodes: [
                {
                  nodeName: 'h1',
                  innerText: 'My Blog',
                },
                {
                  nodeName: 'p',
                  innerText: 'Welcome to my blog!',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

const simpleDocument = {
  childNodes: [
    {
      nodeName: 'html',
      childNodes: [
        {
          nodeName: 'head',
          childNodes: [
            {
              nodeName: 'script',
              innerText: "console.log('Hello!');",
            },
          ],
        },
        {
          nodeName: 'body',
          innerText: 'Hello world!',
        },
      ],
    },
  ],
};

/**
 * Tech with Nader
 * Exercises: Recursion - Javascript In Depth
 * https://youtu.be/JeR_oHRtNGY?t=3194
 */

const callStackMap = new Map();
let counter = 0;

function constructDOM(obj) {
  counter += 1;
  callStackMap.set(obj, counter);
  console.log('');
  console.log(`New stack #${callStackMap.get(obj)}`);
  console.log(`obj at stack #${callStackMap.get(obj)} =`, stringifyObject(obj));

  // Base case
  if (obj.innerText) {
    return `<${obj.nodeName}>${obj.innerText}</${obj.nodeName}>`;
  }

  // Recursive case
  // let innerHTML = '';
  // for (let index = 0; index < obj.childNodes.length; index += 1) {
  //   const element = obj.childNodes[index];
  //   innerHTML += constructDOM(element);
  // }

  // Recursive case
  let innerHTML = '';

  if (obj.nodeName) {
    innerHTML = `<${obj.nodeName}>`;
  }

  console.log(`Start tag at stack #${callStackMap.get(obj)} = "${innerHTML}"`);

  innerHTML += obj.childNodes.map((node) => constructDOM(node)).join('');

  if (obj.nodeName) {
    innerHTML += `</${obj.nodeName}>`;
  }

  console.log(
    `End tag with innerHTML at stack #${callStackMap.get(obj)} = "${innerHTML}"`
  );
  // console.log(`Stack #${callStackMap.get(obj)} return value = "${innerHTML}"`);
  console.log('');

  return innerHTML;
}

// console.log(
//   constructDOM({ nodeName: 'script', innerText: "console.log('Hello!');" })
// );

// console.log(
//   constructDOM({
//     nodeName: 'html',
//     childNodes: [{ nodeName: 'body', innerText: 'Hello world!' }],
//   })
// );

// console.log(stringifyObject(simpleDocument));
console.log(constructDOM(simpleDocument));

/*
<html>
  <head>
    <script>
      console.log('Hello!');
    </script>
  </head>
  <body>
    Hello world!
  </body>
</html>
*/

// console.log(constructDOM(document));

/*
<html>
  <head>
    <script>
      console.log('hi');
    </script>
  </head>
  <body>
    <ul>
      <li><b>Home</b></li>
      <li>Blog</li>
      <li>About</li>
    </ul>
    <div>
      <h1>My Blog</h1>
      <p>Welcome to my blog!</p>
    </div>
  </body>
</html>
 */
