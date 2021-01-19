import './App.css';
import { Component } from 'react';
import Article from './Components/Article'


class App extends Component {

  state = {
    article: [
      {
        title: "Coding 13",
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex, officiis.",
        autor: "P" 
      },
      {
        title: "Coding 14",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, hic!",
        autor: "Q"
      },
      {
        title: "Coding 15",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, hic!",
        autor: "A"
      },
      {
        title: "Coding 16",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, hic!",
        autor: "L"
      }
    ]
  };

  render(){
    return (
      <div className="App">
        {this.state.article.map((info) => {
          return <Article nom={info.title} texte={info.text} auteur={info.autor}/>
        })}
      </div>
    );
  };
};


export default App;
