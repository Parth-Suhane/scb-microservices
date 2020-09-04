
function doTeach() {
  console.log("trainer is teaching..");

  function assignments() {
      console.log('Trainer assigned assignments');
  }

  function exam() {
      console.log('Trainer triggered exam');
  }

  function study() {
      console.log('Trainer given what to study');
  }
  return {assignments,exam,study};
}


let {assignments,exam,study}=doTeach();
assignments();
exam();
study();







