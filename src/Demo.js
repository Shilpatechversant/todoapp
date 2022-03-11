import React, { Component } from "react";

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      textContent: ""
    };
  }

  textchange = (e) => {
    this.setState({ textContent: e.target.value });
  };

  additem = () => {
    let currentitem = this.state.textContent;
    let precontent = this.state.items;
    precontent.push(currentitem);

    this.setState({
      items: precontent
    });
  };
  deleteitem = (i) => {
    let currentitems = this.state.items;
    currentitems.splice(i, 1);

    this.setState({
      items: currentitems
    });
  };

  render() {
    var lis = this.state.items.map((itm, k) => (
      <li>
        {itm}
        <button
          onClick={() => {
            this.deleteitem(k);
          }}
        >
          Delete
        </button>
      </li>
    ));

    return (
      <div>
        <input type="text" onChange={this.textchange} />
        <button onClick={this.additem} className="btn-success">
          Add Me
        </button>
        <ul>{lis}</ul>
      </div>
    );
  }
}

export default Demo;
