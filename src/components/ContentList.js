import React from 'react';
import ContentItem from './ContentItem';

const ContentList = ({contents, onItemSelect}) => {
  const contentList = contents.map((content, i) => {
    return (
      <div key={i}>
        <ContentItem 
          content={content}
          onItemSelect={onItemSelect}
        />
      </div>
    );
  });

  return (
    <div>
      {contentList}
    </div>
  );
};

export default ContentList;