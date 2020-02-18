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

class RenderDeskItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            todoItem: null
        }
    
        this.innerSubmitHandler = this.innerSubmitHandler.bind(this);
        this.onChangeHandler = props.onChangeHandler.bind(this);
    }

    innerSubmitHandler(e) {
        e.preventDefault();

        this.setState(state => ({
            items: [...state.items, this.state.todoItem],
            todoItem: null
        }));
    }


    render() {
        let {desk, onDeleteDesk} = this.props;
        return (
            <Card>
                <CardHeader>
                    <Row>
                        <Col md={5}>
                            <b>{desk.name}</b>  
                        </Col>
                        <Col>
                            <Form onSubmit={this.innerSubmitHandler}>
                                <ButtonGroup className="w-100">
                                    <Input name="todoname" onChange={(e) => this.onChangeHandler(e, "todoItem")} />
                                    <Button>Add</Button>
                                </ButtonGroup>
                            </Form>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <InnerItemList items={this.state.items} />
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
}

export default RenderDeskItem;
