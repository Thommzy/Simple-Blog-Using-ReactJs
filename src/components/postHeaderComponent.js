import React, { Component } from 'react';

class PostHeaderComponent extends Component {

    render() {
        return (
            <div className="post-header">
                <div><a className="btn btn-primary">travel</a> <a>Aug 06, 2018</a></div>
                <div><a>{this.props.views} views</a> <a>{this.props.commentsCount} Comments</a>  <a>SHARE </a></div>
            </div>
        );
    }

    loadComments(){
        //return "Some calculations"
    }

    formatDate(){

    }



}

export default PostHeaderComponent;


//          <PostHeaderComponent views="20" commentsCount="50"/>