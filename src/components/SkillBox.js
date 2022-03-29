import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import "./SkillBox.css"
import SkillCard from "./SkillCard.js"

const cardDatas = [
    {
      id: 'gary',
      name: 'Gary Goodspeed',
    },
    {
      id: 'cato',
      name: 'Little Cato',

    }
]

export default function SkillBox() {

    const [cards, updateCards] = useState(cardDatas);
  
    function handleOnDragEnd(result) {
      if (!result.destination) return;
  
      const items = Array.from(cards);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateCards(items);
    }
    
    return (
        <div className="BoxSet">
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="cards">
                {(provided) => (
                    <ul className="cards" {...provided.droppableProps} ref={provided.innerRef}>
                    {cards.map(({id}, index) => {
                    return (
                        <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>  
                                <SkillCard/>
                            </div>
                        )}
                        </Draggable>
                    );
                    })}
                    {provided.placeholder}
                    </ul>
                )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}