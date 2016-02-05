import React from 'react';
import PageButton from './PageButton.js';
import Const from '../Const';

class PaginationList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      currentPage: this.props.currPage,
      sizePerPage: this.props.sizePerPage
    };
  }

  changePage(page) {
    if (page == this.props.prePage) {
      page = this.state.currentPage - 1 < 1 ? 1 : this.state.currentPage - 1;
    } else if (page == this.props.nextPage) {
      page = this.state.currentPage + 1 > this.totalPages ? this.totalPages : this.state.currentPage + 1;
    } else if (page == this.props.lastPage) {
      page = this.totalPages;
    } else if (page == this.props.firstPage) {
      page = 1;
    } else {
      page = parseInt(page);
    }

    if (page != this.state.currentPage) {
      this.setState({currentPage: page});
      this.props.changePage(page, this.state.sizePerPage);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.remote) {
      if (nextProps.currPage || nextProps.sizePerPage) {
        this.setState({
          currentPage: nextProps.currPage,
          sizePerPage: nextProps.sizePerPage,
        });
      }
    }
  }


  changeSizePerPage(e) {
    e.preventDefault();

    var selectSize = parseInt(e.currentTarget.text);
    if (selectSize != this.state.sizePerPage) {
      this.totalPages = Math.ceil(this.props.dataSize / selectSize);
      if (this.state.currentPage > this.totalPages)
        this.state.currentPage = this.totalPages;

      this.setState({
        sizePerPage: selectSize,
        currentPage: this.state.currentPage
      });
      this.props.changePage(this.state.currentPage, selectSize);
      if(this.props.onSizePerPageList){
        this.props.onSizePerPageList(selectSize);
      }
    }
  }

  render() {
    this.totalPages = Math.ceil(this.props.dataSize / this.state.sizePerPage);
    var pageBtns = this.makePage();
    var pageListStyle = {
      float: "right",
      marginTop: "0px"  //override the margin-top defined in .pagination class in bootstrap.
    }

    var sizePerPageList = this.props.sizePerPageList.map((sizePerPage) => {
      return (
        <li key={sizePerPage} role="presentation">
          <a role="menuitem" tabIndex="-1" href="#" onClick={this.changeSizePerPage.bind(this)}>{sizePerPage}</a>
        </li>
      );
    });

    return (
      <div className="row" style={{ marginTop: 15 }}>
        <div className="col-md-6">
        {
          this.props.sizePerPageList.length > 1 ?
          <div className="dropdown">
            <button className="btn btn-default dropdown-toggle" type="button" id="pageDropDown" data-toggle="dropdown"
                    aria-expanded="true">
              {this.state.sizePerPage}
              <span>
                {" "}
                <span className="caret"/>
              </span>
            </button>
            <ul className="dropdown-menu" role="menu" aria-labelledby="pageDropDown">
              {sizePerPageList}
            </ul>
          </div>
          : ""
        }
        </div>
        <div className="col-md-6">
          <ul className="pagination" style={pageListStyle}>
            {pageBtns}
          </ul>
        </div>
      </div>
    )
  }

  makePage() {
    var pages = this.getPages();
    return pages.map(function (page) {
      var isActive = page === this.state.currentPage;
      var disabled = false;
      var hidden = false;
      if(this.state.currentPage == 1 &&
        (page === this.props.firstPage || page === this.props.prePage)){
          disabled = true;
          hidden = true;
      }
      if(this.state.currentPage == this.totalPages &&
        (page === this.props.nextPage || page === this.props.lastPage)){
          disabled = true;
          hidden = true;
      }
      return (
        <PageButton changePage={this.changePage.bind(this)} active={isActive} disable={disabled} hidden={hidden} key={page}>{page}</PageButton>
      )
    }, this);
  }

  getPages() {
    var startPage = 1, endPage = this.totalPages;

    startPage = Math.max(this.state.currentPage - Math.floor(this.props.paginationSize / 2), 1);
    endPage = startPage + this.props.paginationSize - 1;

    if (endPage > this.totalPages) {
      endPage = this.totalPages;
      startPage = endPage - this.props.paginationSize + 1;
    }
    var pages;
    if(startPage != 1 && this.totalPages > this.props.paginationSize) {
      pages = [this.props.firstPage, this.props.prePage];
    } else if (this.totalPages > 1) {
      pages = [this.props.prePage];
    }
    else {
      pages = []
    }
    for (var i = startPage; i <= endPage; i++) {
      if (i > 0)pages.push(i);
    }
    if (endPage != this.totalPages) {
      pages.push(this.props.nextPage);
      pages.push(this.props.lastPage);
    } else if (this.totalPages > 1){
      pages.push(this.props.nextPage);
    }
    return pages;
  }

  getCurrentPage() {
    return this.state.currentPage;
  }

  getSizePerPage() {
    return this.state.sizePerPage;
  }
}
PaginationList.propTypes = {
  currPage: React.PropTypes.number,
  sizePerPage: React.PropTypes.number,
  dataSize: React.PropTypes.number,
  changePage: React.PropTypes.func,
  sizePerPageList: React.PropTypes.array,
  paginationSize: React.PropTypes.number,
  remote: React.PropTypes.bool,
  onSizePerPageList: React.PropTypes.func,
  prePage: React.PropTypes.string
};

PaginationList.defaultProps = {
  sizePerPage: Const.SIZE_PER_PAGE
};

export default PaginationList;
