class Posts extends React.Component
{
    componentDidMount()
    {
        this.props.load_posts();
    }
    render()
    {
        let posts = [];

        if(this.props.posts)
        {
            posts = this.props.posts.map(
                post => <Post user={post.user} title={post.title} content={post.content} key={post.id} />
            );
        }

        return (
            <div>
                {posts}
            </div>
        );
    }
};