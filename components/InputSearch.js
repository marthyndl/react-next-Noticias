import React, { Component} from "react";
import Link from 'next/link';
import Router from 'next/router';
import { deleteSpecialCharacters } from '../utils/StringUtils';
import { SearchContainer, SearchInput, StyledButtonSearch } 
      from '../styledComponents/GeneralStyled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    if(props.searchtext) {
      this.state = {value: props.searchtext.trim()};
    }  
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: deleteSpecialCharacters(event.target.value)});
  }

  handleKeyPress(event) {
    if(event.key === 'Enter') {
      if (event.target.value.trim() != "") {
        Router.push({
          pathname: `/search/${event.target.value.trim()}`,
        },`/search/${event.target.value.trim()}`)
      }
    }
  }

  render() {
    return (
      <SearchContainer>
          <SearchInput type="text" placeholder="Buscar Palabra..." 
            value={this.state.value} 
            onChange={this.handleChange}
            onKeyPress = {this.handleKeyPress}
          />
          <Link scroll={false} href="/search/[searchtext]" as={`/search/${this.state.value.trim()}`}>
              <StyledButtonSearch disabled={!this.state.value.trim()} >
                <FontAwesomeIcon icon={faSearch} color="black" size="lg"/>
              </StyledButtonSearch>
          </Link>
      </SearchContainer>
    );
  }

}

export default InputSearch;