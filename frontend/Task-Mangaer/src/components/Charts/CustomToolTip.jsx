import React from 'react'

const CustomToolTip = ({active,payload}) => {
    if(active && payload && payload.length){
        return(
            <div className='bg-white shadow-md rounded-lg p-2 border border-gray-300'>
                <p className='test-xs font-semibold text-orange-800 mc-1'>{payload[0].name}</p>
                <p className='test-sm text-gray-600'>
                    Count: <span className='text-sm font-medium text-gray-900'>{payload[0].value}</span>
                </p>
            </div>
        );
    }
  return null;
}

export default CustomToolTip