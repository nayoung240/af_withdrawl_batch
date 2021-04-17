import React from 'react';

const Buttons = () => {
    return(
        <div className="center_align next_btn_div">
            <button className="prev_btn btn">
                <h4>이전</h4>
            </button>
            <button className="next_btn btn" data-toggle="tooltip" data-placement="top" title="메뉴를 선택해주세요!">
                <h4>다음</h4>
            </button>
            <button className="next_btn btn on">
                <h4>다음</h4>
            </button>
        </div>
    )
}

export default Buttons;