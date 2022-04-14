const calculateTemp = () => {

  const numberTemp = document.getElementById('temp').value;

  const tempSelected = document.getElementById('type');
  const valueTemp = type.options[tempSelected.selectedIndex].value;

  const celTofah = (cel) => {
  let fahrenheit = Math.round((cel*9/5)+32);
  return fahrenheit;
  }

  const fahTocel = (feh) => {
    let celsius = Math.round((feh-32)*5/9);
    return celsius;
    }

  let result;

  if(valueTemp =='cel'){
    result = celTofah(numberTemp);
    window.alert("Temperature= " +result +"\xB0F");
    //document.getElementById('result1').innerHTML= result+"&deg;f";
    // console.log(result+"&deg;f");
  } 
  else{
    result = fahTocel(numberTemp);
    // document.getElementById('result1').innerHTML= result+"&deg;c";
    // console.log(result+"&deg;c");
    window.alert("Tempersture= " +result +"\xB0C");
  }
  
}