import React, { useState } from "react";
import Button from '@mui/material/Button'
// import DeleteIcon from '@mui/icons-material/Delete';
import { Delete } from "@mui/icons-material";
import { IconButton } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useImmer } from 'use-immer'

let nextId = 3
const initialList = [
  { id: 0, title: 'Big Bellies', seen: false },
  { id: 1, title: 'Lunar Landscape', seen: false },
  { id: 2, title: 'Terracotta Army', seen: true },
];
export default function Test() {
  const [myList, setMyList] = useState(initialList);
  const [yourList, setYourList] = useState(
    initialList
  );
  
  
    function handleToggleMyList(artworkId, nextSeen) {
      setMyList(myList.map(artwork => {
        if(artwork.id === artworkId) {

          return {...artwork, seen: nextSeen}
        }else {
          return artwork
        }
      }))
    }
  
  
    function handleToggleYourList(artworkId, nextSeen) {
      setYourList(yourList.map(artwork => {
        if(artwork.id === artworkId) {

          return {...artwork, seen: nextSeen}
        }else {
          return artwork
        }
      }))
    }







    return (
      <>

      <h1>Art Bucket List</h1>
      <h2>My list of art to see: </h2>
      <ItemList onToggle={handleToggleMyList} artworks={myList}/>
      <h2>Your list of art to see:</h2>
      <ItemList  onToggle={handleToggleYourList} artworks={yourList}/>
      </>
    );
  
}

function ItemList({artworks, onToggle}) {

  return (
    <ul>
    
    {artworks.map((item) => {
      return  <li key={item.id}>
          <label>

            <input type="checkbox" checked={item.seen} onChange={e => {
              onToggle(item.id, e.target.checked)
            }}/>
            {item.title}
          </label>

        </li>
      })

    }
    
    </ul>
  )
}
