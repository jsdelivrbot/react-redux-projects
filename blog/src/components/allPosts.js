import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from "../actions";



class Index extends Component {

    renderPosts(){
        return (
            _.map(this.props.posts, post => {
                return(
                    <li className="list-group-item" key={post.id}><Link to="/posts/" >{post.title}</Link></li>
                )
            })
        )
    }

    componentDidMount(){
        this.props.fetchPosts();
    }

    render() {
        return (
            <div>
                <div className="text-xs-right">
                    <Link className="btn btn-primary" to="/posts/new">
                        Create New Post
                    </Link>
                </div>
                <h3>Posts</h3>
                <ul className="list-group">
                    {this.renderPosts()}
                </ul>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        posts: state.posts
    }
}

export default connect(mapStateToProps, { fetchPosts })(Index);

