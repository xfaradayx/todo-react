import React from 'react';
import { Card, CardHeader, CardBody, Button, Col, CardText, CardTitle } from 'reactstrap';

class RenderDeskItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: null,
        }

    }

    render() {
        let {desk, onDeleteDesk} = this.props;
        return (
            <Card>
                <CardHeader className="bg-secondary">
                    {desk.name}  
                </CardHeader>
                <CardBody>
                    {/* <RenderItemList /> */}
                    <div className="row justify-content-around mb-3">
                    <Card className=" col-lg-5">
                        <CardBody>
                            <CardText>
                            item#1
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card className=" col-lg-5">
                        <CardBody>
                            <CardText>
                            item#2
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card className=" col-lg-5">
                        <CardBody>
                            <CardText>
                                item#3
                            </CardText>
                        </CardBody>
                    </Card>
                    </div>
                    <Col md={{size: 3, offset: 9}}>
                        <Button 
                            color="danger"
                            onClick={()=>onDeleteDesk(desk.id)}>
                                Delete desk
                        </Button>
                    </Col>
                </CardBody>
            </Card>
        )
    }
}

const RenderInner = (props) => {
    return (
            <div style={{
                width: "100%",
                border: "1px solid black",
                height: "100%",
                marginBottom: '20px'
            }} {...props}>
                <h3>Need to do</h3>
            </div>
    )
}

export default RenderDeskItem;
