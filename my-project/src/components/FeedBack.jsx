import React from 'react';
import FeedBackCard from './FeedBackCard';

const FeedBack = ({feedbackData}) => {

    console.log(feedbackData);

    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 md:gridcol2 gap-3 w-[80%] mx-auto max-w-[1200px] mt-8'>
            {
                feedbackData.slice(0,4).map(feedback=> <FeedBackCard feedback={feedback}></FeedBackCard>)
            }
        </div>
    );
};

export default FeedBack;