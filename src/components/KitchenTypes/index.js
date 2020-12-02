import React, { useState, useEffect } from 'react';

import { Tag } from 'antd';
import fetchData from '../../utils/fetchData';
import { useFilterContext } from '../../context';

const { CheckableTag } = Tag;

function KitchenTypes() {
  const [tags, setTags] = useState([]);
  const { selectedTags, setSelectedTags } = useFilterContext();

  const handleChange = (tag, checked) => {
    const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
    setSelectedTags(nextSelectedTags);
  }

  useEffect(() => {
    fetchData('/data/kitchenTypes.json')
      .then(data => {
        setTags(data);
        setSelectedTags(data.map(item => item.abbr));
      })
  }, []);

  return (
    <div className="kitchen-types-container">
      {tags.map(tag => (
        <CheckableTag
          key={tag.abbr}
          checked={selectedTags.includes(tag.abbr)}
          onChange={checked => handleChange(tag.abbr, checked)}
        >
          {tag.name}
        </CheckableTag>
      ))}
    </div>
  )
}

export default KitchenTypes
