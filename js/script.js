function uncompletedNotes(notes) {
  
  // Metodo 1
  // const undone = [];
  // let i = 0;
  
  // while(notes[i]){
    
  //   let x = 0;
  //   let state = true;

  //   while (notes[i].todos[x]) {
      
  //     if(!notes[i].todos[x].done){
  //       state =  false
  //     } 

  //     x++;
  //   }

  //   if(!state) {
  //     undone.push(notes[i]);
  //   }

  //   i++;
  // }
 
  // Metodo 2
  let undone = notes.filter(item1 => item1.todos.some(item2 => item2.done === false) === true);


  return undone;
}

const notes = [
  {
    id: 1,
    description: 'Workout program',
    todos: [
      {
        id: 1,
        name: 'Push ups - 10 x 3',
        done: false
      },
      {
        id: 2,
        name: 'Abdominals - 20 x 3',
        done: true
      },
      {
        id: 3,
        name: 'Tapis Roulant - 15min',
        done: true
      }
    ]
  },
  {
    id: 2,
    description: 'Front-end Roadmap',
    todos: [
      {
        id: 1,
        name: 'Learn HTML',
        done: true
      },
      {
        id: 2,
        name: 'Learn CSS',
        done: true
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: true
      }
    ]
  }
]

const notesInProgress = uncompletedNotes(notes);
// console.log('All notes: ', notes);
console.log('Notes In Progress: ', notesInProgress);