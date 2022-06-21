import react from 'react';
import './App.css';


class App extends react.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {items: '' , itemsList: []};
  }

  handleChange(e) {
    this.setState({items: e.target.value});
  }
  handleClick(Index) {
    if(Index===-1){
    this.setState({itemsList: [...this.state.itemsList, this.state.items]});
    document.getElementsByClassName("input").innerText=' ';
    }else{
      console.log("deleted");
      this.setState({itemsList: this.state.itemsList.filter((Element, key) => key!==Index )});
        }
      }
      


   render (){
     return (
    <div className="body">
      <div className="center">
        <div className='title'> TODO List </div>

        <div className='input'>
        <input className="input_feild" type='text' placeholder='Add TODOs items' onChange={this.handleChange}/>
        <button className='button' onClick={() => this.handleClick(-1)}> + </button>
        </div>
        
          {this.state.itemsList.map((subItems,Index) => {
            return (
              <div className='work' key={Index}>
                <i className="bi bi-backspace-reverse-fill" onClick={() => this.handleClick(Index)}> {subItems} </i> 
              </div>
            )
          })}
  
      </div>
    </div>
  );
}
}

export default App;
