import React from 'react';

const FlagDetails = ({onCardClicked}) => {
    console.log(onCardClicked)
    return (
        <div>
            {onCardClicked.name}
        </div>
    )
}
export default FlagDetails;