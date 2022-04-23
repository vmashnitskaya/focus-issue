import './List.css';

export const List = ({ listItems, onListItemSelect }) => {
  const onKeyDown = (event, listItem) => {
    if (event.key === 'Enter') {
      onListItemSelect(listItem);
    }
  };

  const onClick = (listItem) => {
    onListItemSelect(listItem);
  };

  return (
    <ul>
      {listItems.map((item) => (
        <li
          key={item.id}
          onKeyDown={(e) => onKeyDown(e, item)}
          onClick={() => onClick(item)}
          tabIndex={0}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
};
