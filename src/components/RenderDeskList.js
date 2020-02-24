import React from 'react';
import RenderDeskItem from './RenderDeskItem';
import { Col } from 'reactstrap';

const RenderDeskList = ({deskList, onDeleteDesk, onChangeHandler, onInnerChange}) => {
    let list;

    return deskList[0] == null ? (<div><h3> Empty :( </h3></div>) :
       (
            list = deskList.map(desk => {
                return (
                    <Col md={{size:8, offset:0}} key={desk.id} className="mb-5">
                        <RenderDeskItem 
                            desk={desk} 
                            onDeleteDesk={onDeleteDesk} 
                            onChangeHandler={onChangeHandler}
                            onInnerChange={onInnerChange}
                        />
                    </Col>
                )
            })
       )

    return (
        <div className="col-12">
            {list}
        </div>
    )
}

export default RenderDeskList;