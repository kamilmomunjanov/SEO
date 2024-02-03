// console.log('Start');
//
// // Макрозадача (выполнится после текущего стека вызовов)
// setTimeout(() => {
//     console.log('Inside setTimeout (Macrotask)');
// }, 0);
//
// // Микрозадача (выполнится перед следующим циклом событий)
// Promise.resolve().then(() => {
//     console.log('Inside Promise (Microtask)');
// });
//
// console.log('End');


// function run(number = 0) {
//     setTimeout(() => {
//         console.log(number)
//         run(number + 1)
//     })
// }
//
// run()
//
// const p = Promise.resolve()
//
// function runner(number = 0) {
//     p.then(() => {
//         console.log(number)
//         runner(number + 1)
//     })
// }
//
// runner()


// function run(number = 0) {
//     requestAnimationFrame(() => {
//         console.log(number)
//         run(number + 1)
//     })
//     requestAnimationFrame(() => {
//         console.log(number)
//         run(number + 1)
//     })
// }
//
// run()

// import React,{useCallback, useRef, useState} from "react";
//
// const Component = () => {
//     const [isUpdated, setIsUpdated] = useState(false)
//     const isUpdatedRef = useRef(false)
//
//     const forceUpdate = useCallback(() => {
//         isUpdatedRef.current = !isUpdatedRef.current
//         setIsUpdated(isUpdatedRef.current)
//     },[])
//
//     return (
//         <div>
//
//         </div>
//     )
// }


// function map(arr, mapper) {
//     return arr.reduce((acc, rec, i, originalArr) => {
//         acc.push(mapper(rec, i, originalArr))
//         return acc
//     }, [])
// }


// function filter(arr, mapper) {
//     return arr.reduce((acc, rec, i, originalArr) => {
//         const isAdded = mapper(rec, i, originalArr)
//         if (isAdded) {
//             acc.push(rec)
//         }
//         return acc
//     }, [])
// }
//
// const result = filter([1,2,3], (v) => v.toString())
// console.log(result)


function curry(partiallyBoundAdd) {
    return function curried(...args) {
        if (args.length >= partiallyBoundAdd.length) {
            return partiallyBoundAdd(...args);
        } else {
            return function (...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}

function add(a, b, c) {
    return a + b + c
}

const partiallyBoundAdd = add.bind(null, 1, 2, 3);
console.log(partiallyBoundAdd())

const curriedAdd = curry(add)



console.log(curriedAdd(1)(2)(3));
console.log(curriedAdd(1, 2)(3));
console.log(curriedAdd(1)(2, 3));
console.log(curriedAdd(1, 2, 3));

