let store = Redux.createStore(
    posts_reducer,
    Redux.applyMiddleware(ReduxThunk.default)
);

ReactDOM.render(
    <ReactRedux.Provider store={store}>
        <div>
            <PostsContainer />
            <NewPost />
        </div>
    </ReactRedux.Provider>,
    document.querySelector("#root")
);