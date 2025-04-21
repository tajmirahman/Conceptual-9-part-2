import React from 'react';

const FeedBackCard = ({ feedback }) => {

    const { name, review, userImg } = feedback

    return (
        <div className="card card-dash bg-base-100 border border-yellow-300">
            <div className="card-body">
                <div className='flex gap-3'>
                    <img className='w-10 h-10 rounded-full' src={userImg} alt="" />
                    <h2 className="card-title">{name}</h2>
                </div>
                <p>{review}</p>
                <div className="card-actions justify-end items-center">
                    <div className="rating">
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
                        <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
                    </div>

                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default FeedBackCard;