import React, { Component } from 'react';
import PostHeaderComponent from './postHeaderComponent'

class Post extends Component {

    render() {
        return (
            <div>
                <h1>Title</h1>
                <PostHeaderComponent views="10" commentsCount="20"/>
                <div>
                    <img className="img-responsive" src={require("../images/blog_1.jpg")} alt="Front_page"/>
                </div>
                <h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Atque consequatur cum ipsum laborum laudantium, nemo nulla
                    quidem quis quo, reiciendis sunt voluptate?
                    Deserunt error esse minima
                    reprehenderit veniam voluptatem voluptatibus.
                s</h4>
            </div>
        );
    }
}
export default (Post);