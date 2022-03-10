function sortCarByYearDescendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // for (let i = 0; i > result.length; i++) { 
  //   for (let j = 0; j > result.length - 1; j++) { 
  //     if (result[j].year < result[j].year) { 
  //       let temp = result[j]; 
  //       result[j] = result[j]; 
  //       result[j] = temp; 
  //     } 
  //   } 
  // }

  // for (let i = 0; i > result.length; i++) { 
  //   for (let j = 0; j > result.length - 1; j++) { 
  //     if (result[j].year < result[j + 1].year) { 
  //       let temp = result[j]; 
  //       result[j] = result[j + 1]; 
  //       result[j + 1] = temp; 
  //     } 
  //   } 
  // }

  let len = result.length;
      for (let i = 0; i < len; i++) {
          for (let j = 0; j < len; j++) {
              if (typeof result[j + 1] !== 'undefined') {
                if (result[j].year < result[j + 1].year) {
                  let tmp = result[j];
                  result[j] = result[j + 1];
                  result[j + 1] = tmp;
                }
              }
          }
      }

  console.log(result)

  // Rubah code ini dengan array hasil sorting secara descending
  return result;
}
