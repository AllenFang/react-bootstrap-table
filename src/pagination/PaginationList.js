import React from 'react';
import PageButton from './PageButton.js'
import Const from '../Const';

class PaginationList extends React.Component{

  constructor(props) {
		super(props);
    this.sizePerList = Const.SIZE_PER_LIST;
    this.totalPages = Math.ceil(this.props.dataSize/this.props.sizePerPage);
		this.state = {
      currentPage: 1,
      sizePerPage: this.props.sizePerPage
    };
	}

  changePage(page){
    if(page == Const.PRE_PAGE){
      page = this.state.currentPage-1 < 1?1:this.state.currentPage-1;
    }else if(page == Const.NEXT_PAGE){
      page = this.state.currentPage+1 > this.totalPages?this.totalPages:this.state.currentPage+1;
    }else if(page == Const.LAST_PAGE){
      page = this.totalPages;
    }else if(page == Const.FIRST_PAGE){
      page = 1;
    }else{
      page = parseInt(page);
    }

    if(page != this.state.currentPage){
      this.setState({currentPage: page});
      this.props.changePage(page, this.state.sizePerPage);
    }
  }

  changeSizePerPage(e){
    e.preventDefault();
    var selectSize = parseInt(e.currentTarget.text);
    if(selectSize != this.state.sizePerPage){
      this.totalPages = Math.ceil(this.props.dataSize/selectSize);
      if(this.state.currentPage > this.totalPages)
        this.state.currentPage = this.totalPages;
      this.setState({
        sizePerPage: selectSize,
        currentPage: this.state.currentPage
      });
      this.props.changePage(this.state.currentPage, selectSize);
    }
  }

  render(){
    var pageBtns = this.makePage();
    var pageListStyle = {
      marginTop: "0px"  //override the margin-top defined in .pagination class in bootstrap.
    }
    return (
      <div className="row">
        <div className="col-md-1">
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="pageDropDown" data-toggle="dropdown" aria-expanded="true">
              {this.state.sizePerPage}
              <span className="caret"></span>
            </button>
            <ul className="dropdown-menu" role="menu" aria-labelledby="pageDropDown">
              <li role="presentation"><a role="menuitem" tabindex="-1" href="#" onClick={this.changeSizePerPage.bind(this)}>10</a></li>
              <li role="presentation"><a role="menuitem" tabindex="-1" href="#" onClick={this.changeSizePerPage.bind(this)}>25</a></li>
              <li role="presentation"><a role="menuitem" tabindex="-1" href="#" onClick={this.changeSizePerPage.bind(this)}>30</a></li>
              <li role="presentation"><a role="menuitem" tabindex="-1" href="#" onClick={this.changeSizePerPage.bind(this)}>50</a></li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="pagination" style={pageListStyle}>
            {pageBtns}
          </ul>
        </div>
      </div>
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
  }

  getPages(){
    var startPage = 1, endPage = this.totalPages;

    startPage = Math.max(this.state.currentPage - Math.floor(this.sizePerList/2), 1);
    endPage   = startPage + this.sizePerList - 1;

    if (endPage > this.totalPages) {
      endPage   = this.totalPages;
      startPage = endPage - this.sizePerList + 1;
    }
    var pages = [Const.FIRST_PAGE, Const.PRE_PAGE];
    for(var i=startPage;i<=endPage;i++){
      if(i>0)pages.push(i);
    }
    pages.push(Const.NEXT_PAGE);
    pages.push(Const.LAST_PAGE);
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
