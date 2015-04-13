import React from 'react';
import PageButton from './PageButton.js'
import Const from '../Const';

class PaginationList extends React.Component{

  constructor(props) {
		super(props);
    this.sizePerList = Const.SIZE_PER_LIST;
    this.totalPages = Math.ceil(this.props.dataSize/this.props.sizePerPage);
		this.state = {currentPage: 1};
	}

  changePage(page){
    if(page != this.state.currentPage){
      this.setState({currentPage: page});
      this.props.changePage(page);
    }
  }

  render(){
    var pageBtns = this.makePage();

    return (
      <ul className="pagination">
        {pageBtns}
      </ul>
    )
  }

  makePage(){
    var pages = this.getPages();
    return pages.map(function(page){
      var isActive = page == this.state.currentPage?true:false;

      return(
        <PageButton changePage={this.changePage.bind(this)} active={isActive}>{page}</PageButton>
      )
    }, this);
    return
  }

  getPages(){
    var startPage = 1, endPage = this.totalPages;

    startPage = Math.max(this.state.currentPage - Math.floor(this.sizePerList/2), 1);
    endPage   = startPage + this.sizePerList - 1;

    if (endPage > this.totalPages) {
      endPage   = this.totalPages;
      startPage = endPage - this.sizePerList + 1;
    }
    var pages = [];
    for(var i=startPage;i<=endPage;i++){
      if(i>0)pages.push(i);
    }
    return pages;
  }
}
PaginationList.propTypes = {
  sizePerPage: React.PropTypes.int,
  dataSize: React.PropTypes.int,
  changePage: React.PropTypes.func
};

PaginationList.defaultProps = {
  sizePerPage: Const.SIZE_PER_PAGE
}
export default PaginationList;
