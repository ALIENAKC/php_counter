function mapStateToProps(state)
{
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch)
{
    return {
        load_posts: () => dispatch(load_posts_thunk)
    };
}

const PostsContainer = ReactRedux.connect(
    mapStateToProps,
    mapDispatchToProps
)(Posts);






