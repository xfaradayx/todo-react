import React from 'react';

class RenderDeskItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            items: null,
        }

    }

    render() {
        let {name} = this.props;

        return (
            <div>desk: {name}</div>
        )
    }
}

        
const RenderDeskList = ({deskList}) => {
    let list;

    if (deskList[0] == null) {
        return (<div><h3> Empty :( </h3></div>)
    } else {
        list = deskList.map(desk => {
            return (
                <div className="col-9" key={desk.id}>
                    <RenderDeskItem name={desk.name}/>
                </div>
            )
        })
    }

    return (
        <div className="col-12">
            {list}
        </div>
    )
}




export default RenderDeskList;
