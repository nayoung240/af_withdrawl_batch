import React, {Component} from 'react';

const pagenation = (props) => {
    return (
        <div className="pagenation">
            <div className="prev">
                <a href={props.prev} ><strong>이전</strong></a>
            </div>
            <div className="next">
                <a href={props.next} ><strong>다음</strong></a>
            </div>
        </div>
    )
}

export default pagenation;