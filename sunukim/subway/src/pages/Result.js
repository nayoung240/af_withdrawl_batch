import React, { useEffect } from 'react';
import Header from '../component/Menu/Header/Header'
import Buttons from '../component/Menu/Body/Buttons'
import { step_info } from '../data';
import {connect, useSelector, useDispatch } from 'react-redux'

const Result = ({match}) => {
    let current_recipe = {}
    useEffect(() => {
        if (window.localStorage.data) {
            current_recipe = JSON.parse(window.localStorage.data);
            // window.localStorage.removeItem('data');
        }
        return () => {
            window.localStorage.setItem('data', JSON.stringify(current_recipe));
        };
    }, []);

    // 저장하는 함수
    let data1 = step_info;
    
    const spreadResult = Object.entries(data1.results).map((step, index) => {
        console.log(step)
        const step_detail = step[1];
        let step_choice = current_recipe[step_detail.eng_name]
        return(<tr key={step_detail.idx}>
                    <th scope="row">{step_detail.idx}</th>
                    <td>{step_detail.name}</td>
                    <td>{step_choice}</td>
                </tr>)
    })

    return(
        <>
            <Header title = {data1.title}/>
            <div className="center_align font_content result_table">
                <table className="table">
                    <thead className="thead_yellow">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">단계</th>
                        <th scope="col">선택 결과</th>
                    </tr>
                    </thead>
                    <tbody>
                        {spreadResult}
                    </tbody>
                </table>
            </div>
            <Buttons/>
        </>
    )
}

export default Result;