import { useState } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(5);

  return (
    <>
      <span>{counter}</span>
      <button onClick={() => {
        setCounter(counter => counter + 5);
        setCounter(counter => counter + 5);
        alert(counter);
        setCounter(counter => counter + 5);
        setCounter(counter => counter + 5);
      }}>Increment</button>
    </>
  )
}
import { useRef } from 'react';

export default function Counter() {
  let countRef = useRef(0);

  function handleIncrement() {
    countRef.current = countRef.current + 1;
  }

  return 
  <>
    <span>Count: {countRef.current}</span>
    <button onClick={handleIncrement}>
      Click me
    </button>
  </>
}




function User(name, age) {
    this.name = name;
    this.age = age;

    this.getProfile = function() {
        return function() {
            console.log("I'm " + this.name + ", " + this.age + " yrs old");
        };
    }
}

var user = new User('John', 25);
var profile = user.getProfile();
profile();




function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);




//https://dummyjson.com/products





//Given a string s, find the length of the longest substring without duplicate characters.
s = "abcabcbb"
bbbbb


// var y = 1;
// if (function f(){}) {
//     y += typeof f;
// }
// console.log(y);