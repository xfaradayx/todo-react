import React from 'react';
import { Card, CardBody, CardText } from 'reactstrap'

const InnerItemList = ({items}) => {
    let list; 

    if (items[0] == null) {
        return (
            <div className="row justify-content-around mb-3">
                Empty %(
            </div>
        )
    } else {
        list = items.map(item => {
            return (
                <Card className="col-lg-5" key={item.id}>
                    <RenderItem item={item} />
                </Card>
            )
        }) 
    }

    return (
        <div className="row justify-content-around mb-3">
            {list}
        </div>
    )
}

const RenderItem = ({item}) => {
    return (
        <CardBody>
            <CardText>
                {item.name}
            </CardText>
        </CardBody>
    )
}

export default InnerItemList;