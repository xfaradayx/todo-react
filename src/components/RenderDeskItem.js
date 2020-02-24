import React from 'react';
import InnerItemList from './InnerItemList';
import { Card, 
        CardHeader, 
        CardBody, 
        Button, 
        Col, 
        Row, 
        Input, 
        ButtonGroup, 
        Form
} from 'reactstrap';

const RenderDeskItem = props => {
    let {desk, items, onDeleteDesk, onInnerChange, onInnerSubmit} = props;
    return (
        <Card>
            <CardHeader>
                <Row>
                    <Col md={5}>
                        <b>{desk.name}</b>  
                    </Col>
                    <Col>
                        <Form onSubmit={e => onInnerSubmit(e, desk.id)}>
                            <ButtonGroup className="w-100">
                                <Input 
                                    name="todoname" 
                                    onChange={(e) => onInnerChange(e, desk.id)}
                                    value={desk.innerItem}
                                />
                                <Button>Add</Button>
                            </ButtonGroup>
                        </Form>
                    </Col>
                </Row>
            </CardHeader>
            <CardBody>
                <InnerItemList items={items}/>
                <Col xs={{size:12}}>
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


export default RenderDeskItem;
