import React from 'react';
import RenderDeskItem from './RenderDeskItem';
import { Col } from 'reactstrap';

const RenderDeskList = ({deskList, innerItems, onDeleteDesk, onChangeHandler, onInnerChange, onInnerSubmit}) => {
    let list;

    return deskList[0] == null ? (<div><h3> Empty :( </h3></div>) :
       (
            list = deskList.map(desk => {
                return (
                    <Col md={{size:8, offset:0}} key={desk.id} className="mb-5">
                        <RenderDeskItem 
                            desk={desk} 
                            items={innerItems.filter(item => item.value && item.deskId === desk.id)}
                            onDeleteDesk={onDeleteDesk} 
                            onChangeHandler={onChangeHandler}
                            onInnerChange={onInnerChange}
                            onInnerSubmit={onInnerSubmit}
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