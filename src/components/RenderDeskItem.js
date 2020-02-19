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
            todoItem: '',
            items: []
        };
    
        this.onInnerSubmitHandler = this.onInnerSubmitHandler.bind(this);
        this.onChangeHandler = props.onChangeHandler.bind(this);
        this.innerItemDeleteHandler = this.innerItemDeleteHandler.bind(this);
    }

    onInnerSubmitHandler(e) {
        e.preventDefault();

        if (this.state.todoItem) {
            this.setState(state => ({
                items: [...state.items, state.todoItem],
                todoItem: ''
            }))
        }
    }

    innerItemDeleteHandler(itemId) {
        this.setState(state => ({
            items: [...state.items.filter(item => item.id !== itemId)]
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
                            <Form onSubmit={this.onInnerSubmitHandler}>
                                <ButtonGroup className="w-100">
                                    <Input 
                                        name="todoname" 
                                        onChange={(e) => this.onChangeHandler(e, "todoItem")}
                                        value={this.state.todoItem && this.state.todoItem.name} />
                                    <Button>Add</Button>
                                </ButtonGroup>
                            </Form>
                        </Col>
                    </Row>
                </CardHeader>
                <CardBody>
                    <InnerItemList items={this.state.items} onItemDelete={this.innerItemDeleteHandler}/>
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
