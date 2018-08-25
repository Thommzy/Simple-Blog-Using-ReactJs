import React, {Component} from 'react';
import Post from './Post'

class PostPane extends Component {

    render() {



        return <div>{
            {props.posts.map(function (post, idx) {

                    <Post/>

            })}
        }
        </div>

    }
}

export default (PostPane);