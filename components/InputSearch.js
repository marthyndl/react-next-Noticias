import React, { Component} from "react";
import Link from 'next/link';
import Router from 'next/router';
import { deleteSpecialCharacters } from '../utils/StringUtils';
import { SearchContainer, SearchItem, StyledButtonSearch } 
      from '../styledComponents/GeneralStyled.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';


class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {valueInputSearch: ''};
    if(props.searchtext) {
      this.state = {valueInputSearch: props.searchtext.trim()};
    }  
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({valueInputSearch: deleteSpecialCharacters(event.target.value)});
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
          <SearchItem type="text" placeholder="Buscar Palabra..." 
            value={this.state.valueInputSearch} 
            onChange={this.handleChange}
            onKeyPress = {this.handleKeyPress}
          />
          <Link scroll={false} href="/search/[searchtext]" as={`/search/${this.state.valueInputSearch.trim()}`}>
              <StyledButtonSearch disabled={!this.state.valueInputSearch.trim()} >
                <FontAwesomeIcon icon={faSearch} color="black" size="lg"/>
              </StyledButtonSearch>
          </Link>
      </SearchContainer>
    );
  }

}

InputSearch.propTypes = {
  valueInputSearch: PropTypes.string,
}

export default InputSearch;