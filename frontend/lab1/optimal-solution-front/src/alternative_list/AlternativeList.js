import React from 'react';

const AlternativeList = ({ list }) => {
    const optimalGroups = list.reduce((groups, alternative) => {
      const key = "" + alternative.q1 + alternative.q2;
      if (!groups[key]) {
        groups[key] = [];
      }
      groups[key].push(alternative);
      return groups;
    }, {});
  
    const combinedString = Object.keys(optimalGroups).map(key => (
      optimalGroups[key].map((alternative, index) => (
        `${alternative.label}(${alternative.q1}${alternative.q2})${index !== optimalGroups[key].length - 1 ? ' = ' : ''}`
      )).join('')
    )).join(', ');
  
    return (
      <div>
        {combinedString}
      </div>
    );
  }
  
  export default AlternativeList;





