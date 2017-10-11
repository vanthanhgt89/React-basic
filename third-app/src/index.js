import React from 'react';
import ReactDOM from 'react-dom';
import SideNav from "./containers/sidenav"
import Detail from "./containers/detail"

class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      listBook: [
  {name: 'Books-1', title: 'CSS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in risus eros. Aliquam turpis justo, cursus tristique risus eget, congue congue urna. Sed efficitur malesuada odio, in dapibus erat tincidunt sed. Sed finibus convallis nibh in pharetra. Vivamus turpis arcu, ornare vestibulum venenatis et, sollicitudin et lacus. Quisque sagittis rhoncus sem. Ut ultricies est a lorem elementum, sed tempus leo consectetur. Duis nec scelerisque odio. Pellentesque finibus enim id tristique dapibus.'},
  {name: 'Books-2', title: 'HTML', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in risus eros. Aliquam turpis justo, cursus tristique risus eget, congue congue urna. Sed efficitur malesuada odio, in dapibus erat tincidunt sed. Sed finibus convallis nibh in pharetra. Vivamus turpis arcu, ornare vestibulum venenatis et, sollicitudin et lacus. Quisque sagittis rhoncus sem. Ut ultricies est a lorem elementum, sed tempus leo consectetur. Duis nec scelerisque odio. Pellentesque finibus enim id tristique dapibus.'},
  {name: 'Books-3', title: 'JQUERY', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in risus eros. Aliquam turpis justo, cursus tristique risus eget, congue congue urna. Sed efficitur malesuada odio, in dapibus erat tincidunt sed. Sed finibus convallis nibh in pharetra. Vivamus turpis arcu, ornare vestibulum venenatis et, sollicitudin et lacus. Quisque sagittis rhoncus sem. Ut ultricies est a lorem elementum, sed tempus leo consectetur. Duis nec scelerisque odio. Pellentesque finibus enim id tristique dapibus.'},
  {name: 'Books-4', title: 'POSTGRES', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in risus eros. Aliquam turpis justo, cursus tristique risus eget, congue congue urna. Sed efficitur malesuada odio, in dapibus erat tincidunt sed. Sed finibus convallis nibh in pharetra. Vivamus turpis arcu, ornare vestibulum venenatis et, sollicitudin et lacus. Quisque sagittis rhoncus sem. Ut ultricies est a lorem elementum, sed tempus leo consectetur. Duis nec scelerisque odio. Pellentesque finibus enim id tristique dapibus.'},
  {name: 'Books-5', title: 'GRARP QL', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in risus eros. Aliquam turpis justo, cursus tristique risus eget, congue congue urna. Sed efficitur malesuada odio, in dapibus erat tincidunt sed. Sed finibus convallis nibh in pharetra. Vivamus turpis arcu, ornare vestibulum venenatis et, sollicitudin et lacus. Quisque sagittis rhoncus sem. Ut ultricies est a lorem elementum, sed tempus leo consectetur. Duis nec scelerisque odio. Pellentesque finibus enim id tristique dapibus.'},
  {name: 'Books-6', title: 'REACT JS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in risus eros. Aliquam turpis justo, cursus tristique risus eget, congue congue urna. Sed efficitur malesuada odio, in dapibus erat tincidunt sed. Sed finibus convallis nibh in pharetra. Vivamus turpis arcu, ornare vestibulum venenatis et, sollicitudin et lacus. Quisque sagittis rhoncus sem. Ut ultricies est a lorem elementum, sed tempus leo consectetur. Duis nec scelerisque odio. Pellentesque finibus enim id tristique dapibus.'},
  {name: 'Books-7', title: 'VUE JS', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras in risus eros. Aliquam turpis justo, cursus tristique risus eget, congue congue urna. Sed efficitur malesuada odio, in dapibus erat tincidunt sed. Sed finibus convallis nibh in pharetra. Vivamus turpis arcu, ornare vestibulum venenatis et, sollicitudin et lacus. Quisque sagittis rhoncus sem. Ut ultricies est a lorem elementum, sed tempus leo consectetur. Duis nec scelerisque odio. Pellentesque finibus enim id tristique dapibus.'},
],
      detail: ''
    }
    
  }

  handleChangeBook(index){
    let data = this.state.listBook[index]
    this.setState({detail: data})
  }


  render(){
    // console.log(this.state.listBook[0]);
    return(
      <div>
      <SideNav 
      onChangeBook = {this.handleChangeBook.bind(this)}
      listItem={this.state.listBook}/>
      <Detail bookDetail={this.state.detail}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
