import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './Drug.css';

const finalSpaceCharacters = [
  {
    id: 'gary',
    name: 'Gary Goodspeed',
    thumb: '/images/gary.png'
  },
  {
    id: 'cato',
    name: 'Little Cato',
    thumb: '/images/cato.png'
  },
  {
    id: 'kvn',
    name: 'KVN',
    thumb: '/images/kvn.png'
  },
  {
    id: 'mooncake',
    name: 'Mooncake',
    thumb: '/images/mooncake.png'
  } 
]


function App() {
  const [characters, updateCharacters] = useState(finalSpaceCharacters);
  
  function handleOnDragEnd(result) {
    if (!result.destination) return;
    
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    updateCharacters(items);
  }
  
  const [color, setColor] = useState();
  const bgColor=['dark', 'primary', 'danger', 'warning', 'info','light', 'success', 'secondary'];
  
  const cngColor=()=>{   
    setColor(bgColor[Math.floor(Math.random()*bgColor.length)])    
  }

  return (
    <div>
         <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction="horizontal">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
            
                {characters.map(({id, name, thumb}, index) => {
                  
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p> { name } </p>
                          <p> name </p>
                        </li>
                      )}
                    </Draggable>
                  );
                })}               
              </ul>
            )}
          </Droppable>
        </DragDropContext>
         <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="characters" direction="horizontal">
            {(provided) => (
              <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                {characters.map(({id, name, thumb}, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <li ref={provided.innerRef}
                         {...provided.draggableProps}
                         {...provided.dragHandleProps}  
                         id='list'
                         className={`bg-${color}`}                       
                         >
                          <div className="characters-thumb">
                            <img src={thumb} alt={`${name} Thumb`} />
                          </div>
                          <p> { name } </p>
                       
                          <button id="colorBtn" class="btn btn-primary btn-sm ml-3" onClick={cngColor}>color</button>
                        </li>
                      )}
                    </Draggable>
                  );
                })}               
              </ul>
            )}
          </Droppable>
        </DragDropContext>
        </div>
   
  );
}

export default App;