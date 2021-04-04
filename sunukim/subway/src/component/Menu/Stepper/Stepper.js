import React from 'react';

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