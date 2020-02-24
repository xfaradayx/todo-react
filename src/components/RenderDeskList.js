import React from 'react';
import RenderDeskItem from './RenderDeskItem';
import { Col, Row } from 'reactstrap';

const RenderDeskList = ({deskList, innerItems, onDeleteDesk, onChangeHandler, onInnerChange, onInnerSubmit, onInnerDelete}) => {
    let list;

    if (deskList[0] == null) {
        return (<div><h3> Empty :( </h3></div>)
    } else {
        list = deskList.map(desk => {
            return (
                <div key={desk.id} className="col-12 col-lg-5 mb-5">
                    <RenderDeskItem 
                        desk={desk} 
                        items={innerItems.filter(item => item.value && item.deskId === desk.id)}
                        onDeleteDesk={onDeleteDesk} 
                        onChangeHandler={onChangeHandler}
                        onInnerChange={onInnerChange}
                        onInnerSubmit={onInnerSubmit}
                        onInnerDelete={onInnerDelete}
                    />
                </div>

            )
        })
    }

    return (

            <div className="col">
                <div className="row justify-content-center">
                    {list}
                </div>
                
            </div>

    )
}

export default RenderDeskList;