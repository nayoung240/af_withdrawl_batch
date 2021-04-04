import React, {Component} from 'react';

const pagenation = (props) => {
    return (
        <div className="pagenation">
            <div className="prev">
                <strong>이전</strong>
            </div>
            <div className="next">
                <strong>다음</strong>
            </div>
        </div>
    )
}

export default pagenation;