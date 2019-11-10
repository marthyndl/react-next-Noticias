
import React, { Component, Fragment} from "react";
import Link from 'next/link';


class InputSearch extends Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    render() {
      return (
        <Fragment>
            <input type="search" value={this.state.value} onChange={this.handleChange} />
            <Link href="/search/[searchtext]" as={`/search/${this.state.value}`}>
                <a>Búsqueda</a>
            </Link>
        </Fragment>
      );
    }
}

export default InputSearch;