import "./SkillBox.css"
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SkillCard from "./SkillCard.js"
import Typography from '@mui/material/Typography';

const frontend = [
    {
      id: 'React',
      name: 'React',
    },
    {
      id: 'Html',
      name: 'Html',
    }
]

const backend = [
    {
      id: 'Django',
      name: 'Django',
    },
]

const database = [
    {
      id: 'MySQL',
      name: 'MySQL',
    },
]

const others = [
    {
      id: 'Figma',
      name: 'Figma',
    },
]

export default function SkillBox(props) {
    let data;

    switch (props.title) {
        case "Front-end":
            data = frontend;
            break;
        case "Back-end":
            data = backend;
            break;
        case "Database":
            data = database;
            break;
        default:
            data = others;
    }

    const [cards, updateCards] = useState(data);
  
    function handleOnDragEnd(result) {
      if (!result.destination) return;
  
      const items = Array.from(cards);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination.index, 0, reorderedItem);
  
      updateCards(items);
    }
    
    return (
        <div className="BoxSet">
            <Typography variant="h">
                {props.title}
            </Typography>
            <hr  style={{ width:'80%' ,color: '#000000',height: .5}}/>
            <DragDropContext onDragEnd={handleOnDragEnd}>
                <Droppable droppableId="cards">
                {(provided) => (
                    <ul className="cards" {...provided.droppableProps} ref={provided.innerRef}>
                    {cards.map(({id,name}, index) => {
                    return (
                        <Draggable key={id} draggableId={id} index={index}>
                        {(provided) => (
                            <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>  
                                <SkillCard name={name}/>
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