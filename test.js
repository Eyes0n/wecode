//1부터 50의 자연수 중 짝수를 구하는 함수

function searchEven(start, end) {
    const evenArr = [];
    for(let i=start; i<=end; i++){
      if(i % 2 === 0){
        evenArr.push(i)
      }
    }
  
  return evenArr
}
