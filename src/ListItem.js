import React from "react";
import "./ListItem.scss";

const ListItem = (props) => {
  const items = props.items;
  const ListItems = items.map((items) => {
    return (
      <div className="list" key="item.key">
        <p>{items.text}</p>
      </div>
    );
  });
  return <div>{ListItems}</div>;
};

export default ListItem;
