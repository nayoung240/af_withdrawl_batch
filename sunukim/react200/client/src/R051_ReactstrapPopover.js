import React, {Component} from 'react';
import { Button, UncontrolledPopover, PopoverHeader, PopoverBody } from 'reactstrap';

class R051_ReactstrapPopover extends Component {
    render() {
        return (
            <>
                <Button id="Popover_id" type="button">
                    Popover Button
                </Button>
                <UncontrolledPopover placement="right" target="Popover_id">
                    <PopoverHeader>
                        React 200
                    </PopoverHeader>
                    <PopoverBody>
                        Dolore consequat fugiat amet ullamco dolore.
                    </PopoverBody>
                </UncontrolledPopover>
            </>
        )
    }
}

export default R051_ReactstrapPopover;