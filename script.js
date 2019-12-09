//selecting elements
const container = document.querySelector(".container");
const inputExp = document.querySelector(".inputExp");
const sortBtn = document.querySelector(".sortBtn");
const compMsg = document.querySelector(".compMsg");
const compResult = document.querySelector(".compResult");
const currrentArray = document.querySelector(".currrentArray");

//start visualization when sort btn is clicked
sortBtn.addEventListener("click", () => {
  const rawString = inputExp.value;
  const arrToBeSorted = rawString.split(",").map(Number);
  visualize(arrToBeSorted);
});

//visualization function
let visualize = async data => {
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++) {
      compMsg.innerHTML = `Comparing data[${i}] and data[${j}]`;
      await wait(5000);
      if (data[i] > data[j]) {
        let temp = data[i];
        data[i] = data[j];
        data[j] = temp;
        compResult.innerHTML=`Since data[${i}] > data[${j}]. Swapping them!`;
        currrentArray.innerHTML = `Current Array: [${data.join(",")}]`
        wait(5000);
      }
      else{
        compResult.innerHTML=`Since data[${i}] < data[${j}]. Letting them as it is!`;
        currrentArray.innerHTML = `Current Array: [${data.join(",")}]`
        wait(5000);
      }
    }
  }
  container.innerHTML += `<div class="btn btn-warning d-block mx-auto m-3">Final Sorted: [${data.join(
    ","
  )}]</div>`;
};

//function to make code wait synchronously
let wait = ms => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(ms);
    }, ms);
  });
};
