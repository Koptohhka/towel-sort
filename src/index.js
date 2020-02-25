
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (Array.isArray(matrix) && matrix.length !== 0) {
    let bubleSortToHight = (sortingArr) => {
      for (let i = 1; i < sortingArr.length; i++) {
          for (let j = 0; j < sortingArr.length; j++) {
              if (sortingArr[j] < sortingArr[i]) {
                let swap = sortingArr[j];
                sortingArr[j] = sortingArr[i];
                sortingArr[i] = swap;
              } 
            
        }
        
    
    }
    }
  
    let bubleSortToLow = (sortingArr) => {
      for (let i = 1; i < sortingArr.length; i++) {
  
        if (typeof sortingArr[i] === 'number') {
        for (let j = 0; j < sortingArr.length; j++) {
          if (sortingArr[j] > sortingArr[i]) {
            let swap = sortingArr[j];
            sortingArr[j] = sortingArr[i];
            sortingArr[i] = swap;
          } 
      }
      } else {
        console.log(sortingArr[i]);
      }
    }
    }
  
    bubleSortToLow(matrix[0]);

    let finalArr = [];

    for (let l = 1; l < matrix.length; l += 2) {
   
      bubleSortToHight(matrix[l]);
    }
  
    matrix.forEach( (it) => {
      
      for (let i = 0; i < it.length; i++) {
        finalArr.push(it[i]);
      }
  
    });
  
    return finalArr;
  } else {
    return [];
  } 

}
