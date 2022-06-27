function load_posts_thunk(dispatch)
{
    fetch("http://127.0.0.1:8888/posts/load_posts.php")
        .then(data => data.json())
        .then(data => {
            console.log(data);
            dispatch({type: "LOAD_POSTS", posts: data});
        });
}