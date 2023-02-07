module.exports = function check(str, bracketsConfig) {
  // your solution
  let objectConfig = Object.fromEntries(bracketsConfig);
  
  objectConfig = closeOpen(objectConfig);
    function closeOpen(object) {
      const res = {};
      Object.keys(object).forEach(function(value) {
        let key = object[value];
        res[key] = value;
      });
      return res;
    };
  
  
  let openBrackets = Object.values(objectConfig);

  let stack = [];
  
  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
  
    if (openBrackets.includes(currentChar))  {
      if (objectConfig[currentChar] === currentChar) {
        let topStackElement = stack[stack.length-1];
        objectConfig[currentChar] != topStackElement ?
          stack.push(currentChar) : stack.pop(); 
      } else {
        stack.push(currentChar);
      }
    } else {
      if (stack.length === 0) {
        return false;
      }
      
      let topStackElement = stack[stack.length-1];

      if (objectConfig[currentChar] === topStackElement) {
      stack.pop();
      } else {
        return false;
    }
    } 
  }
      


  return stack.length === 0;
};
