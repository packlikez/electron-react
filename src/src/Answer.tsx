import React from 'react';
import {useParams} from 'react-router-dom';

const Answers = () => {
    const params: { text: string } = useParams()
    return (
        <div>
            {params.text}
        </div>
    );
};

export default Answers;
