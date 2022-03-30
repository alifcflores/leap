// year divisible by 100 && divisible by 400 == true
// year divisible by 100 == false
// year divisible by 4 == true

export const isLeap = (year) => {
  const division4 = year / 4 ;
  const division100 = year / 100;
  const division400 = year / 400;
  
  if (Number.isInteger(division100) && Number.isInteger(division400)){return true}
  else if (Number.isInteger(division100)){return false}
  else if (Number.isInteger(division4)){return true} 
  else {return false}
};
