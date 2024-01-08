
function kiratsAsyncFunction() {
  let p = new Promise(function(resolve) {
    // do some async logic here
    resolve("-----hi there!-----")
  });
  return p;
}

async function main() {
  const value = await kiratsAsyncFunction();
  console.log(value);
}

main();
// ther ewas no need to do main().then(function(){...});
//asyn await  is just another method (bettwer method of writing async functions)
