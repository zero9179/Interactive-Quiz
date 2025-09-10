// export const questionData = [
//   // 🔹 JavaScript Questions (10)
//   {
//     question:
//       "Which keyword is used to declare a variable that cannot be reassigned?",
//     options: ["var", "let", "const", "static"],
//     answer: "const",
//     topic: "javascript",
//   },
//   {
//     question: "What will `typeof null` return in JavaScript?",
//     options: ["null", "undefined", "object", "boolean"],
//     answer: "object",
//     topic: "javascript",
//   },
//   {
//     question: "Which of the following is NOT a JavaScript data type?",
//     options: ["Number", "Boolean", "Float", "String"],
//     answer: "Float",
//     topic: "javascript",
//   },
//   {
//     question:
//       "What is the default value of a variable that is declared but not initialized?",
//     options: ["0", "null", "undefined", "false"],
//     answer: "undefined",
//     topic: "javascript",
//   },
//   {
//     question: "Which method converts JSON string into a JavaScript object?",
//     options: [
//       "JSON.parse()",
//       "JSON.stringify()",
//       "toObject()",
//       "Object.parse()",
//     ],
//     answer: "JSON.parse()",
//     topic: "javascript",
//   },
//   {
//     question: "What does `NaN` stand for in JavaScript?",
//     options: ["Not a Null", "Not a Number", "Null and None", "Negative Number"],
//     answer: "Not a Number",
//     topic: "javascript",
//   },
//   {
//     question: "Which loop is guaranteed to run at least once?",
//     options: ["for", "for...in", "while", "do...while"],
//     answer: "do...while",
//     topic: "javascript",
//   },
//   {
//     question:
//       "Which of the following is used to define a function in JavaScript?",
//     options: ["def", "function", "func", "fn"],
//     answer: "function",
//     topic: "javascript",
//   },
//   {
//     question: "Which operator is used for strict equality in JavaScript?",
//     options: ["=", "==", "===", "!=="],
//     answer: "===",
//     topic: "javascript",
//   },
//   {
//     question: "What is the output of `Boolean('')`?",
//     options: ["true", "false", "null", "undefined"],
//     answer: "false",
//     topic: "javascript",
//   },

//   // 🔹 React Questions (10)
//   {
//     question: "What does JSX stand for?",
//     options: [
//       "Java Syntax Extension",
//       "JavaScript XML",
//       "JSON XML",
//       "JavaScript Extension",
//     ],
//     answer: "JavaScript XML",
//     topic: "react",
//   },
//   {
//     question:
//       "Which hook is used for managing state in a functional component?",
//     options: ["useEffect", "useState", "useRef", "useReducer"],
//     answer: "useState",
//     topic: "react",
//   },
//   {
//     question: "What is the purpose of `useEffect` in React?",
//     options: [
//       "To create state",
//       "To perform side effects",
//       "To update DOM manually",
//       "To style components",
//     ],
//     answer: "To perform side effects",
//     topic: "react",
//   },
//   {
//     question: "Which of the following is used for navigation in React?",
//     options: ["React Router", "Redux", "Context API", "MobX"],
//     answer: "React Router",
//     topic: "react",
//   },
//   {
//     question: "In React, props are ____?",
//     options: ["Mutable", "Immutable", "Optional", "Temporary"],
//     answer: "Immutable",
//     topic: "react",
//   },
//   {
//     question:
//       "What is the correct way to pass data from parent to child in React?",
//     options: ["Hooks", "Props", "State", "Context"],
//     answer: "Props",
//     topic: "react",
//   },
//   {
//     question: "Which of the following manages global state in React?",
//     options: ["useState", "Props", "Context API", "Component"],
//     answer: "Context API",
//     topic: "react",
//   },
//   {
//     question: "What is the default port for React development server?",
//     options: ["3000", "5000", "8000", "8080"],
//     answer: "3000",
//     topic: "react",
//   },
//   {
//     question: "Which file usually contains the root component in a React app?",
//     options: ["App.js", "index.html", "main.css", "package.json"],
//     answer: "App.js",
//     topic: "react",
//   },
//   {
//     question: "What function is used to create components in React?",
//     options: ["create()", "render()", "function or class", "component()"],
//     answer: "function or class",
//     topic: "react",
//   },

//   // 🔹 HTML Questions (10)
//   {
//     question: "What does HTML stand for?",
//     options: [
//       "Hyper Trainer Markup Language",
//       "HyperText Markup Language",
//       "Hyper Transfer Markup Language",
//       "HighText Machine Language",
//     ],
//     answer: "HyperText Markup Language",
//     topic: "html",
//   },
//   {
//     question: "Which HTML tag is used to create a hyperlink?",
//     options: ["<link>", "<a>", "<href>", "<url>"],
//     answer: "<a>",
//     topic: "html",
//   },
//   {
//     question: "Which attribute is used to display an image in HTML?",
//     options: ["src", "href", "alt", "link"],
//     answer: "src",
//     topic: "html",
//   },
//   {
//     question: "Which HTML tag is used to define the largest heading?",
//     options: ["<h6>", "<h1>", "<heading>", "<head>"],
//     answer: "<h1>",
//     topic: "html",
//   },
//   {
//     question: "What is the correct HTML element for inserting a line break?",
//     options: ["<break>", "<br>", "<lb>", "<newline>"],
//     answer: "<br>",
//     topic: "html",
//   },
//   {
//     question: "Which HTML element is used to display a numbered list?",
//     options: ["<ul>", "<ol>", "<li>", "<dl>"],
//     answer: "<ol>",
//     topic: "html",
//   },
//   {
//     question: "Which attribute specifies an alternate text for an image?",
//     options: ["title", "alt", "src", "description"],
//     answer: "alt",
//     topic: "html",
//   },
//   {
//     question: "Which HTML element is used to define a table row?",
//     options: ["<th>", "<td>", "<tr>", "<row>"],
//     answer: "<tr>",
//     topic: "html",
//   },
//   {
//     question: "Which HTML tag is used to embed a video?",
//     options: ["<media>", "<movie>", "<video>", "<embed>"],
//     answer: "<video>",
//     topic: "html",
//   },
//   {
//     question: "Which tag is used for a dropdown list?",
//     options: ["<input>", "<select>", "<option>", "<list>"],
//     answer: "<select>",
//     topic: "html",
//   },

//   // 🔹 CSS Questions (10)
//   {
//     question: "What does CSS stand for?",
//     options: [
//       "Cascading Style Sheets",
//       "Colorful Style Sheets",
//       "Creative Style Syntax",
//       "Computer Styled Sheets",
//     ],
//     answer: "Cascading Style Sheets",
//     topic: "css",
//   },
//   {
//     question: "Which property is used to change the text color in CSS?",
//     options: ["font-color", "text-color", "color", "background-color"],
//     answer: "color",
//     topic: "css",
//   },
//   {
//     question: "Which CSS property controls the text size?",
//     options: ["text-style", "font-size", "font-style", "text-size"],
//     answer: "font-size",
//     topic: "css",
//   },
//   {
//     question: "How do you make text bold in CSS?",
//     options: [
//       "font-weight: bold;",
//       "text-style: bold;",
//       "font: bold;",
//       "style: bold;",
//     ],
//     answer: "font-weight: bold;",
//     topic: "css",
//   },
//   {
//     question: "Which CSS property is used to change the background color?",
//     options: ["color", "background-color", "bgcolor", "back-color"],
//     answer: "background-color",
//     topic: "css",
//   },
//   {
//     question: "Which property is used to make text italic in CSS?",
//     options: ["font-weight", "text-decoration", "font-style", "style"],
//     answer: "font-style",
//     topic: "css",
//   },
//   {
//     question: "Which CSS property controls the spacing between letters?",
//     options: ["line-height", "letter-spacing", "word-spacing", "text-spacing"],
//     answer: "letter-spacing",
//     topic: "css",
//   },
//   {
//     question: "Which CSS property controls the order of flex items?",
//     options: ["align", "justify", "order", "index"],
//     answer: "order",
//     topic: "css",
//   },
//   {
//     question: "What does `position: absolute;` do?",
//     options: [
//       "Positions relative to parent",
//       "Positions relative to document",
//       "Positions relative to nearest positioned ancestor",
//       "Positions randomly",
//     ],
//     answer: "Positions relative to nearest positioned ancestor",
//     topic: "css",
//   },
//   {
//     question: "Which unit in CSS is relative to the root element?",
//     options: ["em", "rem", "%", "px"],
//     answer: "rem",
//     topic: "css",
//   },
// ];

export const questionData = [
  // 🔹 JavaScript Questions (10)
  {
    question: "Which method is used to remove the last element from an array?",
    options: ["shift()", "pop()", "splice()", "remove()"],
    answer: "pop()",
    topic: "javascript",
  },
  {
    question: "What is the output of `2 + '2'` in JavaScript?",
    options: ["4", "22", "NaN", "Error"],
    answer: "22",
    topic: "javascript",
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: ["//", "<!-- -->", "#", "/* */"],
    answer: "//",
    topic: "javascript",
  },
  {
    question: "Which method is used to add elements at the beginning of an array?",
    options: ["push()", "unshift()", "concat()", "prepend()"],
    answer: "unshift()",
    topic: "javascript",
  },
  {
    question: "Which keyword is used to declare a block-scoped variable?",
    options: ["var", "let", "define", "const"],
    answer: "let",
    topic: "javascript",
  },
  {
    question: "What is the result of `typeof NaN`?",
    options: ["NaN", "undefined", "number", "object"],
    answer: "number",
    topic: "javascript",
  },
  {
    question: "Which method is used to join array elements into a string?",
    options: ["concat()", "join()", "toString()", "stringify()"],
    answer: "join()",
    topic: "javascript",
  },
  {
    question: "Which operator is used to spread elements in arrays/objects?",
    options: ["...", "++", "**", "=>"],
    answer: "...",
    topic: "javascript",
  },
  {
    question: "What does `===` check in JavaScript?",
    options: ["Only value", "Only type", "Value and type", "None"],
    answer: "Value and type",
    topic: "javascript",
  },
  {
    question: "Which object is the top-level in the browser environment?",
    options: ["document", "window", "navigator", "screen"],
    answer: "window",
    topic: "javascript",
  },

  // 🔹 React Questions (10)
  {
    question: "What is the virtual DOM in React?",
    options: [
      "A copy of the real DOM in memory",
      "The actual DOM tree",
      "A server-side DOM",
      "A database model",
    ],
    answer: "A copy of the real DOM in memory",
    topic: "react",
  },
  {
    question: "What is the main purpose of React?",
    options: [
      "Database handling",
      "UI building",
      "File system access",
      "Server routing",
    ],
    answer: "UI building",
    topic: "react",
  },
  {
    question: "Which hook is used to reference DOM elements?",
    options: ["useRef", "useMemo", "useEffect", "useContext"],
    answer: "useRef",
    topic: "react",
  },
  {
    question: "What does `ReactDOM.render()` do?",
    options: [
      "Renders HTML directly",
      "Mounts React components into the DOM",
      "Creates CSS styles",
      "Runs backend scripts",
    ],
    answer: "Mounts React components into the DOM",
    topic: "react",
  },
  {
    question: "Which lifecycle method is replaced by `useEffect`?",
    options: [
      "componentDidMount / componentDidUpdate",
      "render",
      "constructor",
      "componentWillUnmount only",
    ],
    answer: "componentDidMount / componentDidUpdate",
    topic: "react",
  },
  {
    question: "What is the correct way to update state based on the previous value?",
    options: [
      "setState(value)",
      "setState(prev => prev + 1)",
      "state++",
      "this.state = value",
    ],
    answer: "setState(prev => prev + 1)",
    topic: "react",
  },
  {
    question: "Which package is commonly used for state management in React?",
    options: ["Lodash", "Redux", "Axios", "Jest"],
    answer: "Redux",
    topic: "react",
  },
  {
    question: "React components must return ____?",
    options: ["A string", "A number", "JSX", "Nothing"],
    answer: "JSX",
    topic: "react",
  },
  {
    question: "Which method is used to create context in React?",
    options: ["React.create()", "React.createContext()", "useContext()", "createState()"],
    answer: "React.createContext()",
    topic: "react",
  },
  {
    question: "What is React Fiber?",
    options: [
      "A new rendering engine",
      "A CSS framework",
      "A testing library",
      "A database tool",
    ],
    answer: "A new rendering engine",
    topic: "react",
  },

  // 🔹 HTML Questions (10)
  {
    question: "Which tag is used for inserting a horizontal line?",
    options: ["<line>", "<hr>", "<br>", "<border>"],
    answer: "<hr>",
    topic: "html",
  },
  {
    question: "Which attribute is used to open a link in a new tab?",
    options: ["target='_blank'", "newtab", "href='_blank'", "open='new'"],
    answer: "target='_blank'",
    topic: "html",
  },
  {
    question: "Which HTML element is used for the largest section of content?",
    options: ["<header>", "<main>", "<section>", "<div>"],
    answer: "<main>",
    topic: "html",
  },
  {
    question: "What is the correct HTML element for playing audio?",
    options: ["<sound>", "<audio>", "<media>", "<music>"],
    answer: "<audio>",
    topic: "html",
  },
  {
    question: "Which HTML element defines emphasized text?",
    options: ["<i>", "<em>", "<b>", "<strong>"],
    answer: "<em>",
    topic: "html",
  },
  {
    question: "Which attribute is required in the <img> tag?",
    options: ["href", "src", "alt", "title"],
    answer: "src",
    topic: "html",
  },
  {
    question: "Which tag is used to define a list item?",
    options: ["<ol>", "<li>", "<ul>", "<item>"],
    answer: "<li>",
    topic: "html",
  },
  {
    question: "Which element is used for metadata inside HTML?",
    options: ["<meta>", "<data>", "<info>", "<head>"],
    answer: "<meta>",
    topic: "html",
  },
  {
    question: "Which HTML element is used to display a progress bar?",
    options: ["<progress>", "<bar>", "<meter>", "<loading>"],
    answer: "<progress>",
    topic: "html",
  },
  {
    question: "What is the correct HTML element for a checkbox?",
    options: ["<check>", "<input type='check'>", "<input type='checkbox'>", "<checkbox>"],
    answer: "<input type='checkbox'>",
    topic: "html",
  },

  // 🔹 CSS Questions (10)
  {
    question: "Which property sets the space between lines of text?",
    options: ["letter-spacing", "line-height", "text-indent", "margin"],
    answer: "line-height",
    topic: "css",
  },
  {
    question: "Which property is used to change the font?",
    options: ["font-style", "font-family", "text-font", "font-type"],
    answer: "font-family",
    topic: "css",
  },
  {
    question: "Which CSS property makes an element hidden but still takes space?",
    options: ["display: none;", "visibility: hidden;", "opacity: 0;", "hidden: true;"],
    answer: "visibility: hidden;",
    topic: "css",
  },
  {
    question: "Which CSS layout uses rows and columns for design?",
    options: ["Flexbox", "Grid", "Float", "Position"],
    answer: "Grid",
    topic: "css",
  },
  {
    question: "Which CSS property controls the stacking order of elements?",
    options: ["position", "z-index", "order", "stack"],
    answer: "z-index",
    topic: "css",
  },
  {
    question: "Which property sets the speed of a CSS transition?",
    options: ["transition-delay", "transition-duration", "animation-speed", "time"],
    answer: "transition-duration",
    topic: "css",
  },
  {
    question: "Which CSS function is used to apply shadows to text?",
    options: ["text-shadow", "box-shadow", "shadow-text", "font-shadow"],
    answer: "text-shadow",
    topic: "css",
  },
  {
    question: "Which unit in CSS is relative to the parent element?",
    options: ["em", "rem", "px", "%"],
    answer: "em",
    topic: "css",
  },
  {
    question: "Which property is used to control element overflow?",
    options: ["display", "overflow", "clip", "scroll"],
    answer: "overflow",
    topic: "css",
  },
  {
    question: "Which CSS property is used for rounded corners?",
    options: ["border-style", "corner", "border-radius", "round"],
    answer: "border-radius",
    topic: "css",
  },
];
