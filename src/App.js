import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id:'ass', name: 'Max', age:28 },
      { id:'saa', name: 'Many', age:29 },
      { id:'ida', name: 'Marko', age:23 }
    ],
   otherState: 'some other value',
   showPersons: false
  }

 
  nameChangedHandler = (event, id) =>{
     const personIndex = this.state.persons.findIndex(p => {
       return p.id === id;
     });
     
     const person = {
      ...this.state.persons[personIndex]
     };

     person.name = event.target.value;

     const persons = [...this.state.persons];
     persons[personIndex] = person;
     this.setState({persons: persons})
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})

  }

  tooglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow});
      
  }

  render() {
    const style =  {
         backgroundColor: 'green',
         color: 'white',
         font: 'inherit',
         border: '1px solid blue',
         padding: '8px',
         cursor: 'pointer',
        
    };

    let persons = null;

    if(this.state.showPersons){
      persons = (
            
           <div>
             {this.state.persons.map((person, index) => {
               return <Person 
                 click ={() => this.deletePersonHandler(index)}
                 name={person.name} 
                 age={person.age} 
                 key={person.id}
                 changed={(event) => this.nameChangedHandler(event, person.id)}/>
             })}
           </div> 
      );
      style.backgroundColor = 'red';
       style[':hover']= {
        backgroundColor:'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }
    return (
      
      <div className="App">
       <h1>Cao Mladene kralju!</h1>
       <p className={classes.join(' ')}>This really works!</p>
        <button 
         style={style}
         onClick={this.tooglePersonsHandler}>Toogle Button</button>
     
         {persons}
      </div>
   
    );
    
    //return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Mladeneee'));

  }
}

export default App;
