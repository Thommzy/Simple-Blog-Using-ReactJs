import React, {Component} from 'react';
import PostPane from './components/PostPane';
import './App.css';

class App extends Component {


    constructor() {
        super();

        this.state = {
            posts : []
        }

    }

    componentDidMount() {
        this.getPost();
    }

    getPost() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                // this.posts = json

                this.setState({posts: json});

                // for (let i = 0; i < this.posts.length; i++) {
                //
                // }
            })
    }

    render() {
        return (
            <div className="App">
                <div className="container-fluid">

                    <PostPane posts={this.posts}/>

                </div>
            </div>
        );
    }
}

export default App;
