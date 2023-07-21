var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce(function(accumulator, desk) {

    if(desk.type === 'sitting')
    {++accumulator.sitting}
    if(desk.type === 'standing')
    {++accumulator.standing}
    return accumulator
      
  }, { sitting: 0, standing: 0 });


  console.log(deskTypes)