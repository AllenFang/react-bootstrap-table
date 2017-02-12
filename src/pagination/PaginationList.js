import React, { Component, PropTypes } from 'react';
import classSet from 'classnames';
import PageButton from './PageButton.js';
import SizePerPageDropDown from './SizePerPageDropDown';
import Const from '../Const';

class PaginationList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }

  componentWillReceiveProps() {
    this.setState({ open: false });
  }

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

  changeSizePerPage = pageNum => {
    const selectSize = typeof pageNum === 'string' ? parseInt(pageNum, 10) : pageNum;
    let { currPage } = this.props;
    if (selectSize !== this.props.sizePerPage) {
      this.totalPages = Math.ceil(this.props.dataSize / selectSize);
      this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
      if (currPage > this.lastPage) currPage = this.lastPage;
      this.props.changePage(currPage, selectSize);
      if (this.props.onSizePerPageList) {
        this.props.onSizePerPageList(selectSize);
      }
    } else {
      this.setState({ open: false });
    }
  }

  toggleDropDown = () => {
    this.setState({
      open: !this.state.open
    });
  }

  render() {
    const {
      currPage,
      dataSize,
      sizePerPage,
      sizePerPageList,
      paginationShowsTotal,
      pageStartIndex,
      paginationPanel
    } = this.props;
    this.totalPages = Math.ceil(dataSize / sizePerPage);
    this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
    const pageBtns = this.makePage(typeof paginationPanel === 'function');
    const dropdown = this.makeDropDown();

    const offset = Math.abs(Const.PAGE_START_INDEX - pageStartIndex);
    let start = ((currPage - pageStartIndex) * sizePerPage);
    start = dataSize === 0 ? 0 : start + 1;
    let to = Math.min((sizePerPage * (currPage + offset) - 1), dataSize);
    if (to >= dataSize) to--;
    let total = paginationShowsTotal ? <span>
      Showing rows { start } to&nbsp;{ to + 1 } of&nbsp;{ dataSize }
    </span> : null;

    if (typeof paginationShowsTotal === 'function') {
      total = paginationShowsTotal(start, to + 1, dataSize);
    }

    const content = paginationPanel && paginationPanel({
      currPage,
      sizePerPage,
      sizePerPageList,
      pageStartIndex,
      changePage: this.changePage,
      toggleDropDown: this.toggleDropDown,
      changeSizePerPage: this.changeSizePerPage,
      components: {
        totalText: total,
        sizePerPageDropdown: dropdown,
        pageList: pageBtns
      }
    });

    return (
      <div className='row' style={ { marginTop: 15 } }>
        {
          content ||
          <div>
            <div className='col-md-6 col-xs-6 col-sm-6 col-lg-6'>
              { total }{ sizePerPageList.length > 1 ? dropdown : null }
            </div>
            <div className='col-md-6 col-xs-6 col-sm-6 col-lg-6'>
              { pageBtns }
            </div>
          </div>
        }
      </div>
    );
  }

  makeDropDown() {
    let dropdown;
    let dropdownProps;
    let sizePerPageText = '';
    const {
      sizePerPageDropDown,
      hideSizePerPage,
      sizePerPage,
      sizePerPageList
    } = this.props;
    if (sizePerPageDropDown) {
      dropdown = sizePerPageDropDown({
        open: this.state.open,
        hideSizePerPage,
        currSizePerPage: sizePerPage,
        sizePerPageList,
        toggleDropDown: this.toggleDropDown,
        changeSizePerPage: this.changeSizePerPage
      });
      if (dropdown.type.name === SizePerPageDropDown.name) {
        dropdownProps = dropdown.props;
      } else {
        return dropdown;
      }
    }

    if (dropdownProps || !dropdown) {
      const sizePerPageOptions = sizePerPageList.map((_sizePerPage) => {
        const pageText = _sizePerPage.text || _sizePerPage;
        const pageNum = _sizePerPage.value || _sizePerPage;
        if (sizePerPage === pageNum) sizePerPageText = pageText;
        return (
          <li key={ pageText } role='presentation'>
            <a role='menuitem'
              tabIndex='-1' href='#'
              data-page={ pageNum }
              onClick={ e => {
                e.preventDefault();
                this.changeSizePerPage(pageNum);
              } }>{ pageText }</a>
          </li>
        );
      });
      dropdown = (
        <SizePerPageDropDown
          open={ this.state.open }
          hidden={ hideSizePerPage }
          currSizePerPage={ String(sizePerPageText) }
          options={ sizePerPageOptions }
          onClick={ this.toggleDropDown }
          { ...dropdownProps }/>
      );
    }
    return dropdown;
  }

  makePage(isCustomPagingPanel = false) {
    const pages = this.getPages();
    const isStart = (page, { currPage, pageStartIndex, firstPage, prePage }) =>
      (currPage === pageStartIndex && (page === firstPage || page === prePage));
    const isEnd = (page, { currPage, nextPage, lastPage }) =>
      (currPage === this.lastPage && (page === nextPage || page === lastPage ));
    const pageBtns = pages
      .filter(function(page) {
        if (this.props.alwaysShowAllBtns) {
          return true;
        }
        return (isStart(page, this.props) || isEnd(page, this.props)) ?
          false :
          true;
      }, this)
      .map(function(page) {
        const isActive = page === this.props.currPage;
        const isDisabled = (isStart(page, this.props) || isEnd(page, this.props)) ?
          true :
          false;
        return (
          <PageButton key={ page }
            changePage={ this.changePage }
            active={ isActive }
            disable={ isDisabled }>
            { page }
          </PageButton>
        );
      }, this);
    const classname = classSet(
      isCustomPagingPanel ? null : 'react-bootstrap-table-page-btns-ul',
      'pagination'
    );
    return (
        <ul className={ classname }>
          { pageBtns }
        </ul>
      );
  }

  getLastPage() {
    return this.lastPage;
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

    if (startPage !== this.props.pageStartIndex
      && this.totalPages > this.props.paginationSize
      && this.props.withFirstAndLast) {
      pages = [ this.props.firstPage, this.props.prePage ];
    } else if (this.totalPages > 1 || this.props.alwaysShowAllBtns) {
      pages = [ this.props.prePage ];
    } else {
      pages = [];
    }

    for (let i = startPage; i <= endPage; i++) {
      if (i >= this.props.pageStartIndex) pages.push(i);
    }

    if (endPage <= this.lastPage) {
      pages.push(this.props.nextPage);
    }
    if (endPage !== this.totalPages && this.props.withFirstAndLast) {
      pages.push(this.props.lastPage);
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
  onSizePerPageList: PropTypes.func,
  prePage: PropTypes.string,
  pageStartIndex: PropTypes.number,
  hideSizePerPage: PropTypes.bool,
  alwaysShowAllBtns: PropTypes.bool,
  withFirstAndLast: PropTypes.bool,
  sizePerPageDropDown: PropTypes.func,
  paginationPanel: PropTypes.func
};

PaginationList.defaultProps = {
  sizePerPage: Const.SIZE_PER_PAGE,
  pageStartIndex: Const.PAGE_START_INDEX
};

export default PaginationList;
