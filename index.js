let basicData = {
  count: 10,
  min: 1,
  max: 10,
  divideNumber: 5,
}

function exampleOne(count, min, max) {
  let exampleArr = [];
  for(let i = 0; i < basicData.count; i++) {
    let float = (Math.random() * 9) + 1;
    let rand = Number(float.toFixed(2));
    if((rand >= basicData.min && rand <= basicData.max)) {
      exampleArr[i] = rand;
      // console.log(exampleArr[i]);
    }
  }
  return exampleArr;
}

// console.log(exampleOne(basicData.count, basicData.min, basicData.max));

let one = exampleOne(basicData.count, basicData.min, basicData.max);
console.log(one)


function exampleTwo(array, divideNumber) {
  let exampleObject = {
    a: [],
    b: [],
  }
  if(Number.isInteger(divideNumber)) {
    for(let i = 0; i < array.length; i++) {
      if(array[i] < divideNumber) {
        exampleObject.a.push(array[i]);
      } else {
        exampleObject.b.push(array[i]);
      }
    }
    return exampleObject;
  } else {
    return "1번째 파라미터가 정수가 아닙니다."
  }
}

let two = exampleTwo(one, basicData.divideNumber)
console.log(two);


function exampleThree(array) {
  let value = 0;
  for(let i = 0; i < array.length; i++) {
    value = value + array[i];
  }
  return value;
}

let three = exampleThree(one);
console.log(three);

function exampleFour(object) {
  let value = true;
  if(typeof(object) === "object") {
    for(key in object) {
      if(Array.isArray(object[key])) {
        for(let i = 0; i < object[key].length; i++) {
          if(typeof(object[key][i]) !== 'number') {
            value = false;
          }
        }
      }
    }
  }
  return value;
}

let four = exampleFour(two);
console.log(four);

function exampleFive(objectOne, objectTwo) {
  let value;
  let sumA = 0;
  let sumB = 0;

  for(key in objectOne) {
    sumA = sumA + objectOne[key];
  }


  for(key in objectTwo) {
    for(let i = 0; i < objectTwo[key].length; i++) {
      sumB = sumB + objectTwo[key][i];
    }
  }
  console.log(sumA);
  console.log(sumB);

  value = sumA + sumB;
  return value;
}

let five = exampleFive(basicData, two);
console.log(five);