import React, { Component } from 'react';
import { connect } from 'react-redux'; // to wire up the action creator
import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

class PostList extends Component {
    // called when the component is rendered, action creator is called
    componentDidMount() {
        // this.props.fetchPosts();
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map(post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                    <UserHeader userId={post.userId} />
                </div>
            );
        });
    };

    render() {
        return (
            <div className="ui relaxed divided list">
                {this.renderList()}
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return { posts: state.posts };
};

export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);