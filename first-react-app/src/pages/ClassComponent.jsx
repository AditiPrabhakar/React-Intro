import React from 'react';
import BaseHoc from '../hoc/BaseHoc';

class ClassComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            name: "Star",
            age: 5
        }
    }
    render(){
        return (
            <>
            <p>Class Components</p>
            </>
        );
    }
}

export default BaseHoc(ClassComponent);