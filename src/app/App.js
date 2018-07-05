// import JssProvider from 'react-jss/lib/JssProvider'
// import { create } from 'jss'
// import { createGenerateClassName, jssPreset } from '@material-ui/core/styles'
// import React from 'react'
// import AppBar from './components/widgets/AppBar'
// import RenderProps from './components/widgets/Button'

// const styleNode = document.createComment("jss-insertion-point")
// document.head.insertBefore(styleNode, document.head.firstChild)

// const generateClassName = createGenerateClassName();
// const jss = create(jssPreset());
// // We define a custom insertion point that JSS will look for injecting the styles in the DOM.
// jss.options.insertionPoint = 'jss-insertion-point';

// function App() {
//   return (
//     <JssProvider jss={jss} generateClassName={generateClassName}>
//       <div>
//         <AppBar/>
//         <RenderProps/>
//       </div>
//     </JssProvider>
//   );
// }

// export default App;


import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { hits: null };
  }

  // onSearch = (e) => {
  //   e.preventDefault();

  //   const { value } = this.input;

  //   if (value === '') {
  //     return;
  //   }

  //   const cachedHits = localStorage.getItem(value);
  //   if (cachedHits) {
  //     this.setState({ hits: JSON.parse(cachedHits) });
  //     return;
  //   }

  //   fetch('https://hn.algolia.com/api/v1/search?query=' + value)
  //     .then(response => response.json())
  //     .then(result => this.onSetResult(result, value));
  // }

  // onSetResult = (result, key) => {
  //   localStorage.setItem(key, JSON.stringify(result.hits));
  //   this.setState({ hits: result.hits });
  // }

  render() {
    return (
      <div>
        <h1 id='firstOne'> Welcome to my first page</h1>
      </div>
      // <div>
      //   <h1>Local Storage</h1>
      //   <p>
      //     Some text
      //   </p>

      //   <form type="submit" onSubmit={this.onSearch}>
      //     <input type="text" ref={node => this.input = node} />
      //     <button type="button">Search</button>
      //   </form>

      //   {
      //     this.state.hits &&
      //     this.state.hits.map(item => <div key={item.objectID}>{item.title}</div>)
      //   }
      // </div>
    );
  }
}

export default App;