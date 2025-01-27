module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "plugins": ["react"],
  "env": {
    es6: true,
    node: true,
    browser: true
  },
  "rules": {
    ////////// Possible Errors //////////

    "comma-dangle": [2, "always-multiline"], // disallow trailing commas in object literals
    "no-cond-assign": 2, // disallow assignment in conditional expressions
    "no-console": 0, // disallow use of console (off by default in the node environment)
    "no-constant-condition": 2, // disallow use of constant expressions in conditions
    "no-control-regex": 2, // disallow control characters in regular expressions
    "no-debugger": 2, // disallow use of debugger
    "no-dupe-args": 2, // disallow duplicate arguments in functions
    "no-dupe-keys": 2, // disallow duplicate keys when creating object literals
    "no-duplicate-case": 2, // disallow a duplicate case label
    "no-empty-character-class": 2, // disallow the use of empty character classes in regular expressions
    "no-empty": [2, { "allowEmptyCatch": true }], // disallow empty statements
    "no-ex-assign": 2, // disallow assigning to the exception in a catch block
    "no-extra-boolean-cast": 2, // disallow double-negation boolean casts in a boolean context
    "no-extra-parens": 0, // disallow unnecessary parentheses (off by default)
    "no-extra-semi": 2, // disallow unnecessary semicolons
    "no-func-assign": 2, // disallow overwriting functions written as function declarations
    "no-inner-declarations": 2, // disallow function or variable declarations in nested blocks
    "no-invalid-regexp": 2, // disallow invalid regular expression strings in the RegExp constructor
    "no-irregular-whitespace": 2, // disallow irregular whitespace outside of strings and comments
    "no-negated-in-lhs": 2, // disallow negation of the left operand of an in expression
    "no-obj-calls": 2, // disallow the use of object properties of the global object (Math and JSON) as functions
    "no-regex-spaces": 2, // disallow multiple spaces in a regular expression literal
    "no-sparse-arrays": 2, // disallow sparse arrays
    "no-unreachable": 2, // disallow unreachable statements after a return, throw, continue, or break statement
    "use-isnan": 2, // disallow comparisons with the value NaN
    "valid-jsdoc": 2, // Ensure JSDoc comments are valid (off by default)
    "valid-typeof": 2, // Ensure that the results of typeof are compared against a valid string
    "no-unexpected-multiline": 2, // Avoid code that looks like two expressions but is actually one (off by default)

    ////////// Best Practices //////////

    "accessor-pairs": 2, // enforces getter/setter pairs in objects (off by default)
    "block-scoped-var": 2, // treat var statements as if they were block scoped (off by default)
    "complexity": 0, // specify the maximum cyclomatic complexity allowed in a program (off by default)
    "consistent-return": 0, // require return statements to either always or never specify values
    "curly": [2, "multi-line"], // specify curly brace conventions for all control statements
    "default-case": 2, // require default case in switch statements (off by default)
    "dot-notation": 2, // encourages use of dot notation whenever possible
    "dot-location": [2, "property"], // enforces consistent newlines before or after dots (off by default)
    "eqeqeq": 2, // require the use of === and !==
    "guard-for-in": 2, // make sure for-in loops have an if statement (off by default)
    "no-alert": 2, // disallow the use of alert, confirm, and prompt
    "no-caller": 2, // disallow use of arguments.caller or arguments.callee
    "no-div-regex": 2, // disallow division operators explicitly at beginning of regular expression (off by default)
    "no-else-return": 2, // disallow else after a return in an if (off by default)
    "no-eq-null": 2, // disallow comparisons to null without a type-checking operator (off by default)
    "no-eval": 2, // disallow use of eval()
    "no-extend-native": 2, // disallow adding to native types
    "no-extra-bind": 2, // disallow unnecessary function binding
    "no-fallthrough": 2, // disallow fallthrough of case statements
    "no-floating-decimal": 2, // disallow the use of leading or trailing decimal points in numeric literals (off by default)
    "no-implied-eval": 2, // disallow use of eval()-like methods
    "no-iterator": 2, // disallow usage of __iterator__ property
    "no-labels": 2, // disallow use of labeled statements
    "no-lone-blocks": 2, // disallow unnecessary nested blocks
    "no-loop-func": 2, // disallow creation of functions within loops
    "no-multi-spaces": [
      2,
      {
        "exceptions": {
          "Property": true,
          "VariableDeclarator": true,
          "ImportDeclaration": true
        }
      }
    ], // disallow use of multiple spaces
    "no-multi-str": 2, // disallow use of multiline strings
    "no-native-reassign": 2, // disallow reassignments of native objects
    "no-new-func": 2, // disallow use of new operator for Function object
    "no-new-wrappers": 2, // disallows creating new instances of String, Number, and Boolean
    "no-new": 2, // disallow use of new operator when not part of the assignment or comparison
    "no-octal-escape": 2, // disallow use of octal escape sequences in string literals, such as var foo = "Copyright \251";
    "no-octal": 2, // disallow use of octal literals
    "no-param-reassign": 0, // disallow reassignment of function parameters (off by default)
    "no-process-env": 0, // disallow use of process.env (off by default)
    "no-proto": 2, // disallow usage of __proto__ property
    "no-redeclare": 2, // disallow declaring the same variable more then once
    "no-return-assign": 2, // disallow use of assignment in return statement
    "no-script-url": 2, // disallow use of javascript: urls
    "no-self-compare": 2, // disallow comparisons where both sides are exactly the same (off by default)
    "no-sequences": 2, // disallow use of comma operator
    "no-throw-literal": 2, // restrict what can be thrown as an exception (off by default)
    "no-unused-expressions": 2, // disallow usage of expressions in statement position
    "no-void": 2, // disallow use of void operator (off by default)
    "no-warning-comments": 0, // disallow usage of configurable warning terms in comments, e.g. TODO or FIXME (off by default)
    "no-with": 2, // disallow use of the with statement
    "radix": 2, // require use of the second argument for parseInt() (off by default)
    "vars-on-top": 0, // requires to declare all vars on top of their containing scope (off by default)
    "wrap-iife": 2, // require immediate function invocation to be wrapped in parentheses (off by default)
    "yoda": 2, // require or disallow Yoda conditions
    "no-unneeded-ternary": 2, // Disallow conditional expressions that can be expressed with simpler constructs

    ////////// Strict Mode //////////

    "strict": [2, "safe"], // controls location of Use Strict Directives

    ////////// Variables //////////

    "no-catch-shadow": 2, // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
    "no-delete-var": 2, // disallow deletion of variables
    "no-label-var": 2, // disallow labels that share a name with a variable
    "no-shadow": 0, // disallow declaration of variables already declared in the outer scope
    "no-shadow-restricted-names": 2, // disallow shadowing of names such as arguments
    "no-undef": 2, // disallow use of undeclared variables unless mentioned in a /*global */ block
    "no-undef-init": 2, // disallow use of undefined when initializing variables
    "no-undefined": 1, // disallow use of undefined variable (off by default)
    "no-unused-vars": 2, // disallow declaration of variables that are not used in the code
    "no-use-before-define": 0, // disallow use of variables before they are defined

    ////////// Node.js //////////

    "handle-callback-err": 1, // enforces error handling in callbacks (off by default) (on by default in the node environment)
    "no-mixed-requires": 2, // disallow mixing regular variable and require declarations (off by default) (on by default in the node environment)
    "no-new-require": 2, // disallow use of new operator with the require function (off by default) (on by default in the node environment)
    "no-path-concat": 0, // disallow string concatenation with __dirname and __filename (off by default) (on by default in the node environment)
    "no-process-exit": 0, // disallow process.exit() (on by default in the node environment)
    "no-restricted-modules": 2, // restrict usage of specified node modules (off by default)
    "no-sync": 0, // disallow use of synchronous methods (off by default)
    "callback-return": 2,

    ////////// Stylistic Issues //////////

    "array-bracket-spacing": 2, // enforce spacing inside array brackets (off by default)
    "brace-style": 2, // enforce one true brace style (off by default)
    "camelcase": 0, // require camel case names
    "comma-spacing": 2, // enforce spacing before and after comma
    "comma-style": 2, // enforce one true comma style (off by default)
    "computed-property-spacing": 2, // require or disallow padding inside computed properties (off by default)
    "consistent-this": 2, // enforces consistent naming when capturing the current execution context (off by default)
    "eol-last": 0, // enforce newline at the end of file, with no multiple empty lines
    "func-names": 0, // require function expressions to have a name (off by default)
    "func-style": 2, // enforces use of function declarations or expressions (off by default)
    "indent": [2, 2], // this option sets a specific tab width for your code (off by default)
    "key-spacing": 2, // enforces spacing between keys and values in object literal properties
    "lines-around-comment": 2, // enforces empty lines around comments (off by default)
    "linebreak-style": 2, // disallow mixed 'LF' and 'CRLF' as linebreaks (off by default)
    "max-nested-callbacks": [1, 4], // specify the maximum depth callbacks can be nested (off by default)
    "new-cap": 0, // require a capital letter for constructors
    "new-parens": 2, // disallow the omission of parentheses when invoking a constructor with no arguments
    "newline-after-var": 0, // allow/disallow an empty newline after var statement (off by default)
    "no-array-constructor": 2, // disallow use of the Array constructor
    "no-continue": 0, // disallow use of the continue statement (off by default)
    "no-inline-comments": 0, // disallow comments inline after code (off by default)
    "no-lonely-if": 1, // disallow if as the only statement in an else block (off by default)
    "no-mixed-spaces-and-tabs": 2, // disallow mixed spaces and tabs for indentation
    "no-multiple-empty-lines": 2, // disallow multiple empty lines (off by default)
    "no-nested-ternary": 2, // disallow nested ternary expressions (off by default)
    "no-new-object": 2, // disallow use of the Object constructor
    "no-spaced-func": 2, // disallow space between function identifier and application
    "no-ternary": 0, // disallow the use of ternary operators (off by default)
    "no-trailing-spaces": 2, // disallow trailing whitespace at the end of lines
    "no-underscore-dangle": 0, // disallow dangling underscores in identifiers
    "one-var": [2, "never"], // allow just one var statement per function (off by default)
    "operator-assignment": 2, // require assignment operator shorthand where possible or prohibit it entirely (off by default)
    "operator-linebreak": 2, // enforce operators to be placed before or after line breaks (off by default)
    "padded-blocks": 0, // enforce padding within blocks (off by default)
    "quote-props": 0, // require quotes around object literal property names (off by default)
    "quotes": [2, "single"], // specify whether double or single quotes should be used
    "semi-spacing": 2, // enforce spacing before and after semicolons
    "semi": 2, // require or disallow use of semicolons instead of ASI
    "sort-vars": 2, // sort variables within the same declaration block (off by default)
    "keyword-spacing": 2, // require a space after certain keywords (off by default)
    "space-before-blocks": [
      2,
      { "functions": "always", "keywords": "always", "classes": "always" }
    ], // require or disallow space before blocks (off by default)
    "space-before-function-paren": [2, "never"], // require or disallow space before function opening parenthesis (off by default)
    "space-in-parens": 2, // require or disallow spaces inside parentheses (off by default)
    "space-infix-ops": 2, // require spaces around operators
    "space-unary-ops": 2, // require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
    "spaced-comment": 2, // require or disallow a space immediately following the // or /* in a comment (off by default)
    "wrap-regex": 0, // require regex literals to be wrapped in parentheses (off by default)
    "object-curly-spacing": [2, "always"],
    "template-curly-spacing": 2,

    ////////// ECMAScript 6 //////////

    "constructor-super": 2, // verify super() callings in constructors (off by default)
    "generator-star-spacing": 2, // enforce the spacing around the * in generator functions (off by default)
    "no-this-before-super": 2, // disallow to use this/super before super() calling in constructors (off by default)
    "no-var": 2, // require let or const instead of var (off by default)
    "object-shorthand": [2, "methods"], // require method and property shorthand syntax for object literals (off by default)
    "prefer-const": 2, // suggest using of const declaration for variables that are never modified after declared (off by default)
    "arrow-body-style": 0,
    "arrow-parens": [2, "always"],
    "arrow-spacing": 2,
    "no-useless-computed-key": 2,
    "no-new-symbol": 2,
    "prefer-arrow-callback": 2,
    "yield-star-spacing": 2,

    ////////// Legacy //////////

    "max-depth": 0, // specify the maximum depth that blocks can be nested (off by default)
    "max-len": [0, { "code": 150, "ignoreUrls": true }], // specify the maximum length of a line in your program (off by default)
    "max-params": [1, 6], // limits the number of parameters that can be used in the function declaration. (off by default)
    "max-statements": 0, // specify the maximum number of statement allowed in a function (off by default)
    "no-bitwise": 1, // disallow use of bitwise operators (off by default)
    "no-plusplus": 0, // disallow use of unary operators, ++ and -- (off by default)

    // react plugin - options
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error"
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "settings": {
    "react": {
      "createClass": "createReactClass", // Regex for Component Factory to use,
                                         // default to "createReactClass"
      "pragma": "React",  // Pragma to use, default to "React"
      "version": "detect", // React version. "detect" automatically picks the version you have installed.
                           // You can also use `16.0`, `16.3`, etc, if you want to override the detected value.
                           // default to latest and warns if missing
                           // It will default to "detect" in the future
      "flowVersion": "0.53" // Flow version
    },
    "propWrapperFunctions": [
        // The names of any function used to wrap propTypes, e.g. `forbidExtraProps`. If this isn't set, any propTypes wrapped in a function will be skipped.
        "forbidExtraProps",
        {"property": "freeze", "object": "Object"},
        {"property": "myFavoriteWrapper"}
    ],
    "linkComponents": [
      // Components used as alternatives to <a> for linking, eg. <Link to={ url } />
      "Hyperlink",
      {"name": "Link", "linkAttribute": "to"}
    ]
  }
};
