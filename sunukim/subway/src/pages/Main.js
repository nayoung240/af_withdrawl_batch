import React from 'react';
import { Link } from 'react-router-dom';

const Main = () => {
    return(
        <>
            <div className="title center_align rounded-circle font_title">
                <h1>My Subway SandWich</h1>
            </div>
            <div className="center_align font_content">
                <div>
                    <Link to="/menu/1">
                        <button className="sandwich_btn btn">
                            샌드위치 만들기    
                        </button>
                    </Link>
                </div>
                <div>
                    <button className="login btn">
                        로그인 / 로그아웃
                    </button>
                </div>
                <div>
                    <button className="login btn">
                        내 정보
                    </button>
                </div>
            </div>
        </>
    )
}

export default Main;