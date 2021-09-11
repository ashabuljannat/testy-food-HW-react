import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';
import plate1Photo from './assets/img/plate1.png';
import plate2Photo from './assets/img/plate2.png';
import plate3Photo from './assets/img/plate3.png';



const finalRecipe = [
  {
    id: 'mooncake',
    h3: 'Barbecue salad',
    img: plate1Photo,
    span1:'Delicious dish',
    span2:'$22.00'
  },
  {
    id: 'quinn',
    h3: 'Salad with fish',
    img: plate2Photo,
    span1:'Delicious dish',
    span2:'$9.00'
  },
  {
    id: 'jhon',
    h3: 'Spinach salad',
    img: plate3Photo,
    span1:'Delicious dish',
    span2:'$12.50'
  }
]


function Drug() {
  const [recipe, updateRecipe] = useState(finalRecipe);

  function handleOnDragEnd(result) {
    if (!result.destination) return;

    const items = Array.from(recipe);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateRecipe(items);
  }

  

  return (
    <div>   
         <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="recipe" direction='horizontal'>
            {(provided) => (
                 <section class="menu section bd-container" id="menu">
                 <span class="section-subtitle">Special</span>
                 <h2 class="section-title">Menu of the week</h2>
              <ul className="menuUl" {...provided.droppableProps} ref={provided.innerRef}>
                {recipe.map(({id, img, h3, span1, span2}, index) => { 
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                      <div class="menu__container bd-grid">
                       <div class="menu__content">
                        <li className="menuLi" ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                        <img src={img} alt=""  className="menu__img"/>
                         
                         <h3 class="menu__name">{h3}</h3>
                         <span class="menu__detail">{span1}</span>
                         <span class="menu__price">{span2}</span>                      
                         <a href="#" class="button menu__button"><i class='bx bx-cart-alt'></i></a>
                        </li>
                        </div>
                        </div>
                      )}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
              </section>
            )}
          </Droppable>
        </DragDropContext>

    </div>
  );
}

export default Drug;
