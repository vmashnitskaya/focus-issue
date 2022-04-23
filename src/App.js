import { useState } from 'react';
import './App.css';
import { Details } from './components/Details';
import { List } from './components/List';

function App() {
  const [listItems] = useState(
    Array(4)
      .fill('')
      .map((_, index) => ({ id: index + 1, title: `Item ${index + 1}` }))
  );
  const [currentListItem, setCurrentListItem] = useState();

  const onDetailsClose = () => {
    setCurrentListItem(undefined);
  };

  return (
    <div className="app">
      {currentListItem ? (
        <Details currentListItem={currentListItem} onClose={onDetailsClose} />
      ) : (
        <List listItems={listItems} onListItemSelect={setCurrentListItem} />
      )}
    </div>
  );
}

export default App;
