import React, { Component, PropTypes } from 'react';
import PageButton from './PageButton.js';
import Const from '../Const';

class PaginationList extends Component {

  changePage = page => {
    const { prePage, currPage, nextPage, lastPage, firstPage, sizePerPage } = this.props;
    if (page === prePage) {
      page = currPage - 1 < 1 ? 1 : currPage - 1;
    } else if (page === nextPage) {
      page = currPage + 1 > this.totalPages ? this.totalPages : currPage + 1;
    } else if (page === lastPage) {
      page = this.totalPages;
    } else if (page === firstPage) {
      page = 1;
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
      if (currPage > this.totalPages) currPage = this.totalPages;

      this.props.changePage(currPage, selectSize);
      if (this.props.onSizePerPageList) {
        this.props.onSizePerPageList(selectSize);
      }
    }
  }

  render() {
    const { currPage, dataSize, sizePerPage, sizePerPageList, paginationShowsTotal } = this.props;
    this.totalPages = Math.ceil(dataSize / sizePerPage);
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
    const total = paginationShowsTotal ? <span>
      Showing rows { (currPage - 1) * sizePerPage + 1 } to&nbsp;
      { Math.min(currPage * sizePerPage, dataSize) } of&nbsp;
      { dataSize }
    </span> : null;

    return (
      <div className='row' style={ { marginTop: 15 } }>
        {
          sizePerPageList.length > 1
          ? <div>
              <div className='col-md-6'>
                { total }{ ' ' }
                <span className='dropdown'>
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
      if (this.props.currPage === 1 &&
        (page === this.props.firstPage || page === this.props.prePage)) {
        disabled = true;
        hidden = true;
      }
      if (this.props.currPage === this.totalPages &&
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
    let startPage = 1;
    let endPage = this.totalPages;

    startPage = Math.max(this.props.currPage - Math.floor(this.props.paginationSize / 2), 1);
    endPage = startPage + this.props.paginationSize - 1;

    if (endPage > this.totalPages) {
      endPage = this.totalPages;
      startPage = endPage - this.props.paginationSize + 1;
    }

    if (startPage !== 1 && this.totalPages > this.props.paginationSize) {
      pages = [ this.props.firstPage, this.props.prePage ];
    } else if (this.totalPages > 1) {
      pages = [ this.props.prePage ];
    } else {
      pages = [];
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i > 0) pages.push(i);
    }

    if (endPage !== this.totalPages) {
      pages.push(this.props.nextPage);
      pages.push(this.props.lastPage);
    } else if (this.totalPages > 1) {
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
  paginationShowsTotal: PropTypes.bool,
  paginationSize: PropTypes.number,
  remote: PropTypes.bool,
  onSizePerPageList: PropTypes.func,
  prePage: PropTypes.string
};

PaginationList.defaultProps = {
  sizePerPage: Const.SIZE_PER_PAGE
};

export default PaginationList;
