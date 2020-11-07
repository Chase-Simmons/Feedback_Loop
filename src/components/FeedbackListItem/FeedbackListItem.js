import React from 'react';
import './FeedbackListItem.css';

function FeedbackListItem(props) {
  return (
    <tr>
      <td>{props.item.id}</td>
      <td>{props.item.feeling}</td>
      <td>{props.item.understanding}</td>
      <td>{props.item.support}</td>
      <td>{props.item.comments}</td>
      <td>{props.item.date}</td>
    </tr>
  );
}

export default FeedbackListItem;
