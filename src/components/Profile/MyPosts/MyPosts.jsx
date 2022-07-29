import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    let posts = [
        {id: 1, message: "Hi, how are you?", likesCount: 15},
        {id: 2, message: "It's my first post", likesCount: 20},
        {id: 3, message: "It's my second post", likesCount: 33}
    ]

    let postElements= posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>

            <button>Add post</button>
            <button>Remove</button>
            <div className={s.posts}>
                {postElements}

                {/*<Post message={posts[0].message} likesCount={posts[0].likesCount}/>*/}
                {/*<Post message={posts[1].message} likesCount={posts[1].likesCount}/>*/}
                {/*<Post message={posts[2].message} likesCount={posts[2].likesCount}/>*/}
            </div>
        </div>
    );
};

export default MyPosts;
