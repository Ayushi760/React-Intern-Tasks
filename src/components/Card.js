import React from 'react'
import "../styles/card.css";
import likes from '../assets/likeIcon.svg';
import dislike from '../assets/dislikeIcon.svg';
import views from '../assets/views.svg';
import ShowTags from './ShowTags';
const Card = ({ data }) => {
    return (
        <>
            {data.posts.map((item, index) => (
                <div class="card" key={item?.id}>
                    <div>UserId: {item?.userId}</div>
                    <div class="info">
                        <p class="title">{item?.title}</p>
                        <p>{item?.body}</p>
                        <ShowTags tags={item?.tags} />
                        {item?.userId == 123 &&
                            <div class="editDelete">
                                <button class="edit">Edit</button>
                                <button class="delete">Delete</button>
                            </div>}
                    </div>
                    <div class="footer">
                        <div>
                            <img src={likes} />
                            <p>{item?.reactions?.likes}</p>
                        </div>
                        <div>
                            <img src={dislike} />
                            <p>{item?.reactions?.dislikes}</p>
                        </div>
                        <div>
                            <img src={views} />
                            <p>{item?.views}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Card