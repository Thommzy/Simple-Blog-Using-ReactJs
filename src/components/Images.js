import React, { Component } from 'react';
class images extends Component {
    render() {
        return (
            <div>
                <img className="img-responsive" src={require("../images/blog_1.jpg")} alt="Front_page"/>
            </div>
        );
    }
}
export default (images);