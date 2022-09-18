function firstUncompletedNote(notes) {
  // Metodo 1 (rispetto a quello di prima ho aggiunto un break dopo aver pushato nell'array)
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
  //     break;
  //   }

  //   i++;
  // }
 
  // Metodo 2 (rispetto al precedente ho sostutuito il filter con il finder)
  let undone = notes.find(item1 => item1.todos.some(item2 => item2.done === false) === true);


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
        done: true
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
        done: false
      },
      {
        id: 3,
        name: 'Learn JavaScript',
        done: true
      },
      {
        id: 4,
        name: 'Learn Angular',
        done: false
      }
    ]
  },
  {
    id: 3,
    description: 'My Movies Library',
    todos: [
      {
        id: 1,
        name: 'La città incantata',
        done: true
      },
      {
        id: 2,
        name: 'Avatar',
        done: true
      },
      {
        id: 3,
        name: 'Titanic',
        done: false
      }
    ]
  }
]

const noteInProgress = firstUncompletedNote(notes);
console.log('All notes: ', notes);
console.log('First note in progress: ', noteInProgress);