import React, { Component } from 'react';
import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button
} from 'reactstrap';

class R040_ReactstrapCard extends Component {
    render(){
        return(
            <div>
                <Card>
                    <CardImg top height="200px" src="https://lh3.googleusercontent.com/proxy/xGfYl2CQBsCUjHJ6rTN2augaYoQQrt5UGNbm_8VVKug6Kcb_mbap1HumA1vlBZmoLhjoQoSKMB4W9f6q-qM_XBy2S-N3nguSwOts6-C_dqekOpTTxgVQqVBXJIXyYd-CEWvaOlBzt2hljCd3yhKd8BTQ-fVAL6_Pe3eKqeGiShQz8fC8U-UTg7NLhVRR_0BKEB94ELXZTwwknCGJufS_ZnErKyZ9pYYZm_qNrUajLPTPlkCwUoZrRwHplN4vT3zeEwlc0ckfhE5zJj5wrXYkmc8O7lERXN8nlHMQDhh6aNzSk9gtT0AQVfUm8g6Kzg" alt="Card image"/>
                    <CardBody>
                        <CardTitle>
                            Card 제목
                        </CardTitle>
                        <CardSubtitle>
                            Card 부제목
                        </CardSubtitle>
                        <CardText>
                            Card 내용
                            wefwefwefffffffffffw
                        </CardText>
                        <Button>
                            버튼
                        </Button>
                    </CardBody>
                </Card>
            </div>
        )
    }
}

export default R040_ReactstrapCard;