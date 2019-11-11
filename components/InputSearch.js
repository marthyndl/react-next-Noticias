import React, { Component} from "react";
import Link from 'next/link';
import { SearchContainer, SearchInput } 
      from '../styledComponents/GeneralStyled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


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
        <SearchContainer>
            <SearchInput type="text" value={this.state.value} onChange={this.handleChange} />
            <Link href="/search/[searchtext]" as={`/search/${this.state.value}`}>
                <a><FontAwesomeIcon icon={faSearch} color="black" size="lg"/></a>
            </Link>
        </SearchContainer>
      );
    }
}

export default InputSearch;