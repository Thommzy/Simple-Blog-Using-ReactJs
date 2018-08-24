import React, { Component } from 'react';
class images extends Component {
    render() {
        return (
            <div>
                <h1>image</h1>
                <img className="img-responsive" src={"./images/blog_1.jpg"} alt="image_1"/>
            </div>
        );
    }
}
export default (images);