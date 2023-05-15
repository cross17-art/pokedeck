const urls = ['url1', 'url2', 'url3'];

function fakeFetch(url, params = '-') {
  // этот вывод в консоль покажет порядок вызовов с их входящими параметрами
  console.log(`fakeFetch to: ${url} with params: ${params}`);
  return new Promise(resolve => {
    setTimeout(() => resolve(`${url} is DONE`), 1000);
  })
};

async function asyncGeneratorWay(callback) {
	async function* generateSymbols(){
        let results;
        for(let url of urls){
            results = yield await fakeFetch(url,results);
        }
        
    }
    let generateS = generateSymbols()
    let result;
    while(!result || !result.done){
        result = await generateS.next(result && result.value)
    }
    callback(result.value)

}


const GeneratorWay = (callback) => {
    urls.reduce(
        (acc, url)=>{
            return acc.then((res) => fakeFetch(url,res))
        }, 
        Promise.resolve())
    .then(result => callback(result));  
}

GeneratorWay(result => console.log(`result: ${result}`))
