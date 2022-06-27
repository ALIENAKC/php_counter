class NewPost extends React.Component
{
    constructor(props)
    {
        super(props);

        this.send = this.send.bind(this);
    }
    send()
    {
        let user = this.user_html.value;
        let title = this.title_html.value;
        let content = this.content_html.value;
/*
        console.log(user);
        console.log(title);
        console.log(content);
*/
        this.props.send(user, title, content);
    }
    render()
    {
        return (
            <div>
                <input type="text" ref={(elem)=>this.user_html=elem} /> <br />
                <input type="text" ref={(elem)=>this.title_html=elem} /> <br />
                <textarea ref={(elem)=>this.content_html=elem}></textarea> <br />
                <input type="button" onClick={this.send} />
            </div>
        );
    }
};