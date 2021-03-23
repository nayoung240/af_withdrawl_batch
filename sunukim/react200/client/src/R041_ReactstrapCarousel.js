import React, { Component } from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src : "https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
        , altText : ' 슬라이드1 이미지 대체문구'
        , caption : ' 슬라이드1 설명'
        , header : ' 슬라이드1 제목'
    },
    {
        src : "https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
        , altText : ' 슬라이드2 이미지 대체문구'
        , caption : ' 슬라이드2 설명'
        , header : ' 슬라이드2 제목'
    },
    {
        src : "https://newsimg.hankookilbo.com/cms/articlerelease/2019/04/29/201904291390027161_3.jpg"
        , altText : ' 슬라이드3 이미지 대체문구'
        , caption : ' 슬라이드3 설명'
        , header : ' 슬라이드3 제목'
    }
];

class R041_ReactstrapCarousel extends Component {
    render() {
        return (
            <UncontrolledCarousel items={items} />
        )
    }
}

export default R041_ReactstrapCarousel;
