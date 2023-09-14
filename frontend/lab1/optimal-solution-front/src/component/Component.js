import React from 'react';
import AlternativeTable from '../alternative_table/AlternativeTable';
import BoundChart from '../chart/BoundChart';
import AlternativeList from '../alternative_list/AlternativeList';

import "./Component.css"

const Component = ({heading, table, optimalSet}) => {
    return (
        <div className='table'>
            <div className='content'>
                <h2>{heading}</h2>
                <div className='container'>
                    <div className='alternative-table'> 
                        <AlternativeTable alternatives={table}/>
                    </div>
                    <BoundChart points={table} optimalPoints={optimalSet}/>
                </div>
                <h3>Result</h3>
                <div className='alternative-list'>
                    <AlternativeList list={optimalSet}/>
                </div> 
            </div>
        </div>
    );
}

export default Component;