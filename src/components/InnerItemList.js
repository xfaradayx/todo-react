import React from 'react';
import { Card, CardBody, CardText, CardTitle, Button } from 'reactstrap'

const InnerItemList = ({items, onItemDelete}) => {
    let list; 

    if (items[0] == null) {
        return (
            <div className="row justify-content-around mb-3">
                What do you need to do?
            </div>
        )
    } else {
        list = items.map(item => {
                return (
                    <Card className="col-lg-5 mb-2" key={item.id} onClick={() => onItemDelete(item.id)}>
                        <RenderItem item={item} />
                    </Card>
                )
        }) 
    }

    return (
        <div className="row justify-content-around mb-3 align-items-center">
            {list}
        </div>
    )
}

const RenderItem = ({item}) => {
    return (
        <CardBody color="warning">
            <CardTitle>
                <Button close color="danger"/>
            </CardTitle>
            <CardText>
                {item.name}
            </CardText>
        </CardBody>
    )
}

export default InnerItemList;