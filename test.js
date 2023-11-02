const arr = ["1", "2", "3", "", "4", "", "5"];

const resArr = arr.filter((item) => item !== "");
console.log("resArr", resArr);
