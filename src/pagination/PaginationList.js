import React, { Component, PropTypes } from 'react';
import PageButton from './PageButton.js';
import Const from '../Const';

class PaginationList extends Component {

  changePage = page => {
    const {
      pageStartIndex,
      prePage,
      currPage,
      nextPage,
      lastPage,
      firstPage,
      sizePerPage
    } = this.props;

    if (page === prePage) {
      page = (currPage - 1) < pageStartIndex ? pageStartIndex : currPage - 1;
    } else if (page === nextPage) {
      page = (currPage + 1) > this.lastPage ? this.lastPage : currPage + 1;
    } else if (page === lastPage) {
      page = this.lastPage;
    } else if (page === firstPage) {
      page = pageStartIndex;
    } else {
      page = parseInt(page, 10);
    }

    if (page !== currPage) {
      this.props.changePage(page, sizePerPage);
    }
  }

  changeSizePerPage = e => {
    e.preventDefault();

    const selectSize = parseInt(e.currentTarget.text, 10);
    let { currPage } = this.props;
    if (selectSize !== this.props.sizePerPage) {
      this.totalPages = Math.ceil(this.props.dataSize / selectSize);
      this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
      if (currPage > this.lastPage) currPage = this.lastPage;
      this.props.changePage(currPage, selectSize);
      if (this.props.onSizePerPageList) {
        this.props.onSizePerPageList(selectSize);
      }
    }
  }

  render() {
    const {
      currPage,
      dataSize,
      sizePerPage,
      sizePerPageList,
      paginationShowsTotal,
      pageStartIndex,
      hideSizePerPage
    } = this.props;

    this.totalPages = Math.ceil(dataSize / sizePerPage);
    this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
    const pageBtns = this.makePage();
    const pageListStyle = {
      float: 'right',
      // override the margin-top defined in .pagination class in bootstrap.
      marginTop: '0px'
    };

    const sizePerPageOptions = sizePerPageList.map((_sizePerPage) => {
      return (
        <li key={ _sizePerPage } role='presentation'>
          <a role='menuitem'
            tabIndex='-1' href='#'
            onClick={ this.changeSizePerPage }>{ _sizePerPage }</a>
        </li>
      );
    });

    const offset = Math.abs(Const.PAGE_START_INDEX - pageStartIndex);
    const start = ((currPage - pageStartIndex) * sizePerPage);
    const to = Math.min((sizePerPage * (currPage + offset) - 1), dataSize);
    let total = paginationShowsTotal ? <span>
      Showing rows { start } to&nbsp;{ to } of&nbsp;{ dataSize }
    </span> : null;

    if (typeof paginationShowsTotal === 'function') {
      total = paginationShowsTotal(start, to, dataSize);
    }

    const dropDownStyle = {
      visibility: hideSizePerPage ? 'hidden' : 'visible'
    };

    return (
      <div className='row' style={ { marginTop: 15 } }>
        {
          sizePerPageList.length > 1
          ? <div>
              <div className='col-md-6'>
                { total }{ ' ' }
                <span className='dropdown' style={ dropDownStyle }>
                  <button className='btn btn-default dropdown-toggle'
                    type='button' id='pageDropDown' data-toggle='dropdown'
                    aria-expanded='true'>
                    { sizePerPage }
                    <span>
                      { ' ' }
                      <span className='caret'/>
                    </span>
                  </button>
                  <ul className='dropdown-menu' role='menu' aria-labelledby='pageDropDown'>
                    { sizePerPageOptions }
                  </ul>
                </span>
              </div>
              <div className='col-md-6'>
                <ul className='pagination' style={ pageListStyle }>
                  { pageBtns }
                </ul>
              </div>
            </div>
          : <div>
              <div className='col-md-6'>
                { total }
              </div>
              <div className='col-md-6'>
                <ul className='pagination' style={ pageListStyle }>
                  { pageBtns }
                </ul>
              </div>
            </div>
        }
      </div>
    );
  }

  makePage() {
    const pages = this.getPages();
    return pages.map(function(page) {
      const isActive = page === this.props.currPage;
      let disabled = false;
      let hidden = false;
      if (this.props.currPage === this.props.pageStartIndex &&
        (page === this.props.firstPage || page === this.props.prePage)) {
        disabled = true;
        hidden = true;
      }
      if (this.props.currPage === this.lastPage &&
        (page === this.props.nextPage || page === this.props.lastPage)) {
        disabled = true;
        hidden = true;
      }
      return (
        <PageButton key={ page }
          changePage={ this.changePage }
          active={ isActive }
          disable={ disabled }
          hidden={ hidden }>
          { page }
        </PageButton>
      );
    }, this);
  }

  getPages() {
    let pages;
    let endPage = this.totalPages;
    if (endPage <= 0) return [];
    let startPage = Math.max(
      this.props.currPage - Math.floor(this.props.paginationSize / 2),
      this.props.pageStartIndex
    );
    endPage = startPage + this.props.paginationSize - 1;

    if (endPage > this.lastPage) {
      endPage = this.lastPage;
      startPage = endPage - this.props.paginationSize + 1;
    }

    if (startPage !== this.props.pageStartIndex && this.totalPages > this.props.paginationSize) {
      pages = [ this.props.firstPage, this.props.prePage ];
    } else if (this.totalPages > 1) {
      pages = [ this.props.prePage ];
    } else {
      pages = [];
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i >= this.props.pageStartIndex) pages.push(i);
    }

    if (endPage < this.lastPage) {
      pages.push(this.props.nextPage);
      pages.push(this.props.lastPage);
    } else if (endPage === this.lastPage && this.props.currPage !== this.lastPage) {
      pages.push(this.props.nextPage);
    }

    return pages;
  }
}
PaginationList.propTypes = {
  currPage: PropTypes.number,
  sizePerPage: PropTypes.number,
  dataSize: PropTypes.number,
  changePage: PropTypes.func,
  sizePerPageList: PropTypes.array,
  paginationShowsTotal: PropTypes.oneOfType([ PropTypes.bool, PropTypes.func ]),
  paginationSize: PropTypes.number,
  remote: PropTypes.bool,
  onSizePerPageList: PropTypes.func,
  prePage: PropTypes.string,
  pageStartIndex: PropTypes.number,
  hideSizePerPage: PropTypes.bool
};

PaginationList.defaultProps = {
  sizePerPage: Const.SIZE_PER_PAGE,
  pageStartIndex: Const.PAGE_START_INDEX
};

export default PaginationList;
