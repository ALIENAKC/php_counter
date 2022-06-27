class Post extends React.Component
{
    render()
    {
        return (
            <div className="post">
                <div className="user">{this.props.user}</div>
                <div className="title">{this.props.title}</div>
                <div className="content">{this.props.content}</div>
            </div>
        );
    }
};