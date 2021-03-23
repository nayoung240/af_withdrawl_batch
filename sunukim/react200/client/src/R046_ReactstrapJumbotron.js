import React, { Component } from 'react';
import { Jumbotron, Button } from 'reactstrap';

class R046_ReactstrapJumbotron extends Component {
    render() {
        return(
            <>
             <Jumbotron style={{backgroundColor: "#D38C7C"}}>
                 <h1 className="display-4">REACT 200</h1>
                 <p className="h4">Magna aliquip dolore deserunt duis eu ullamco occaecat laboris dolore laborum occaecat.</p>
                 <hr className="my-2" />
                 <p>Id eiusmod dolore fugiat commodo pariatur deserunt magna laborum esse.</p>
                 <p className="lead">
                     <Button color="danger">Go Detail</Button>
                 </p>
             </Jumbotron>
            </>
        )
    }
}

export default R046_ReactstrapJumbotron;