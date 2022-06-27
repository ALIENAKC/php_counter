let default_state = {
    posts: []
};

function posts_reducer(state=default_state, action)
{
    if(action.type === "LOAD_POSTS")
    {
        state = {posts: action.posts};
    }
    return state;
}