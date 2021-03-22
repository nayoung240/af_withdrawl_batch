import React, { Component } from 'react';
import {Badge, Button} from 'reactstrap';

class R035_ReactstrapBadges extends Component {
    render() {
        return (
            <div>
                <h1>Product Name 
                    <Badge color="secondary">hit</Badge>
                </h1>
                <Button color="light" outline>
                    Accessor <Badge color="dark">4</Badge>
                </Button>
                <Badge color="danger" pill>pill</Badge>
                <Badge href="https://www.naver.com" color="light">Golink</Badge>
            </div>
        )
    }
}

export default R035_ReactstrapBadges;