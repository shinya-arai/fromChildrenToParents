import React from 'react';

const ContentItem = ({content, onItemSelect}) => {
  return (
    <div 
      onClick={() => onItemSelect(content)}
      style={{pointer: "cursor"}}
    >
      {content.title}
    </div>
  );
};

export default ContentItem;