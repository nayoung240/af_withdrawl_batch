import React from 'react';


//redux 에서 state 받아서..?
const checkStep = () => {
  // 현재 단계는 present
  // 완료된 단계는 done
  // 미완 단계는 클래스 없음.
}

// const eachStep = list.map((step, index) => {
//   let stepState = ''
//   if (step.index == menuid){
//     stepState = 'present'
//   }
//   else if (step) {
//     stepState = 'done'
//   }
  
//   let stepClass = `col ${stepState}`;
//   return(
//     <li className={stepClass} >샌드위치</li>
//   )
// });

const Stepper = () => {
    return(
        <div className="row">
            <div className="block stepper">
              <div className="wrapper-progressBar">
                <ul className="progressBar row">
                  
                </ul>
              </div>
            </div>
        </div>
    )
}

export default Stepper;