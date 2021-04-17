import React from 'react';


//redux 에서 state 받아서..?
const checkStep = () => {
  // 현재 단계는 present
  // 완료된 단계는 done
  // 미완 단계는 클래스 없음.
}

const Stepper = () => {
    return(
        <div className="row">
            <div className="block stepper">
              <div className="wrapper-progressBar">
                <ul className="progressBar row">
                  <li className="col done">샌드위치</li>
                  <li className="col done">빵 길이</li>
                  <li className="col done">빵</li>
                  <li className="col done">토스팅</li>
                  <li className="col present">치즈</li>
                  <li className="col ">야채</li>
                  <li className="col ">소스</li>
                  <li className="col ">추가 선택</li>
                </ul>
              </div>
            </div>
        </div>
    )
}

export default Stepper;