import React from 'react';
import FeedBackCard from './FeedBackCard';

const FeedBack = ({feedbackData}) => {

    console.log(feedbackData);

    return (
        <div>
            {
                feedbackData.map(feedback=> <FeedBackCard feedback={feedback}></FeedBackCard>)
            }
        </div>
    );
};

export default FeedBack;