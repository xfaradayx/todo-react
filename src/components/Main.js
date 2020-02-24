import React from 'react';
import RenderDeskList from './RenderDeskList';
import { Form, FormGroup, Input, Col, Button, Label } from 'reactstrap';

class Main extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            deskItem: '',
            deskList: []
        }
        // this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
        this.onDeleteDeskHandler = this.onDeleteDeskHandler.bind(this);
        this.onInnerItemChangeHandler = this.onInnerItemChangeHandler.bind(this);
    } 

    onChangeHandler(e, stateItem) {
        let item = {};

        item.name = e.target.value;
        item.id = `${(+new Date).toString(16)}`;

        this.setState({
            [stateItem]: item
        });
    }

    onSubmitHandler(e) {
        e.preventDefault();

        if (this.state.deskItem) {
            this.setState(state => ({
                deskList: [...state.deskList, state.deskItem],
                deskItem: '',
            }))
        }   
    }

    onDeleteDeskHandler(deskId) {

        this.setState(state => ({
            deskList: [...state.deskList.filter(desk => desk.id !== deskId)]
        }));
    }

    onInnerItemChangeHandler(e, deskId) {
        e.preventDefault();

        let filteredDesk = this.state.deskList.filter(desk => desk.id === deskId)[0];
        let filteredList = this.state.deskList.filter(desk => desk.id !== deskId);
        let itemValue = e.target.value;

        this.setState(state => ({
            deskList: [...filteredList, {...filteredDesk, innerItem: itemValue}].sort((a,b) => a.id > b.id ? '1' : '-1')
        }));
    }

    render() {
        return (
           <div className="container">
                <div className="row row-content justify-content-center">
                   <div className="col-7 mt-5">
                        <Form onSubmit={this.onSubmitHandler}>
                            <FormGroup row>
                                    <Label for="deskname" md="4"><b>Enter the desk name</b></Label>
                                    <Col>
                                        <Input 
                                            name="deskname" 
                                            onChange={(e) => this.onChangeHandler(e, "deskItem")} 
                                            value={(this.state.deskItem && this.state.deskItem.name)  || ''} 
                                        />
                                    </Col>
                            </FormGroup>
                            <div className="row justify-content-center">
                                <Button color="primary">
                                    Create desk
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center mt-5 mb-5">
                    <div><h2>Your desks</h2></div>
                </div>
                <div className="row justify-content-center">
                    <RenderDeskList 
                        deskList={this.state.deskList} 
                        onDeleteDesk={this.onDeleteDeskHandler} 
                        onChangeHandler={this.onChangeHandler}
                        onInnerChange={this.onInnerItemChangeHandler}
                    />
                </div>

           </div>
        )
    }
}

export default Main;

