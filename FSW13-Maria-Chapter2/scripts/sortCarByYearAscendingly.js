function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Clone array untuk menghindari side-effect
  // Apa itu side effect?
  const result = [...cars];

  // Tulis code-mu disini
  // for (let i = 0; i < cars.length - 2; i++) {
  //   // for swapping
  //   for (j = i + 1; j <= cars.length; j++) {
  //     if (cars[j].year > cars[i].year) {
  //       // [data[i], data[j] - [data[j], data[i]]
        
  //       tmp = cars[j].year;
  //       cars[j].year = result[j];
  //       cars[i].year = tmp;
  //     }
  //   }
  // }

  //Code 2

  for (let i = 0; i < result.length; i++) { 
    for (let j = 0; j < result.length - 1; j++) { 
      if (result[j].year > result[j + 1].year) { 
        let temp = result[j]; 
        result[j] = result[j + 1]; 
        result[j + 1] = temp; 
      } 
    } 
  }

  console.log(result)

  // Rubah code ini dengan array hasil sorting secara ascending
  return result;
}
