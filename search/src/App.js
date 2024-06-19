
import './App.css';
import { Dropdown } from 'react-bootstrap';
import searchData from './data.json'
import { useState } from 'react';

function App() {
  const [searchResult, setSearchResult] = useState([])
  const [selectedList, setSelectedList] = useState([])
  let params = new URLSearchParams(window.location.search);

  const handleChange = (e) => {
    const userInput = e.target.value?.toLowerCase();
    const filteredList = searchData.filter((item) => {
      return item.name.toLowerCase().includes(userInput) || item.email.includes(userInput)
    })
    setSearchResult(filteredList)
  }

  const removeItem = (name) => {
    setSelectedList((prev) => prev.filter((item) => item.name !== name))
  }


  return (
    <div className="App">
      {selectedList?.length > 0 && selectedList.map((item) =>
        <div key={item?.name} onClick={() => removeItem(item?.name)}>
          {item?.name}
        </div>
      )
      }
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          <input onChange={handleChange} />
        </Dropdown.Toggle>


        {searchResult?.length > 0 &&
          <Dropdown.Menu>
            {searchResult.map((item) =>
              <Dropdown.Item key={item?.name} onClick={() => {
                setSelectedList((prev) => [...prev, item])
                params.append('name', encodeURI(item?.name))
              }} >{item?.name}</Dropdown.Item>
            )}
          </Dropdown.Menu>
        }
      </Dropdown>



    </div>
  );
}

export default App;
