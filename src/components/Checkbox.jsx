import React from 'react';

const Checkbox = () => {
    return (
        <div className='wrapper'>
            <label htmlFor="item1">
                <input type="checkbox" id='item1' name='item1'/>
                <span>
                    item1
                </span>
            </label>
        </div>
    );
};

export default Checkbox;