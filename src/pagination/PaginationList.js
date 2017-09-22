import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classSet from 'classnames';
import PageButton from './PageButton.js';
import SizePerPageDropDown from './SizePerPageDropDown';
import Const from '../Const';
import Util from '../util';

class PaginationList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: this.props.open
    };
  }

  componentWillReceiveProps() {
    const { keepSizePerPageState } = this.props;
    if (!keepSizePerPageState) {
      this.setState(() => { return { open: false }; });
    }
  }

  changePage = page => {
    const {
      pageStartIndex,
      prePage,
      currPage,
      nextPage,
      lastPage,
      firstPage,
      sizePerPage,
      keepSizePerPageState
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

    if (keepSizePerPageState) { this.setState(() => { return { open: false }; }); }

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
    }

    this.setState(() => { return { open: false }; });
  }

  toggleDropDown = () => {
    this.setState(() => {
      return {
        open: !this.state.open
      };
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
      paginationPanel,
      hidePageListOnlyOnePage
    } = this.props;
    this.totalPages = Math.ceil(dataSize / sizePerPage);
    this.lastPage = this.props.pageStartIndex + this.totalPages - 1;
    const pageBtns = this.makePage(Util.isFunction(paginationPanel));
    const dropdown = this.makeDropDown();

    const offset = Math.abs(Const.PAGE_START_INDEX - pageStartIndex);
    let start = ((currPage - pageStartIndex) * sizePerPage);
    start = dataSize === 0 ? 0 : start + 1;
    let to = Math.min((sizePerPage * (currPage + offset) - 1), dataSize);
    if (to >= dataSize) to--;
    let total = paginationShowsTotal ? <span>
      Showing rows { start } to&nbsp;{ to + 1 } of&nbsp;{ dataSize }
    </span> : null;

    if (Util.isFunction(paginationShowsTotal)) {
      total = paginationShowsTotal(start, to + 1, dataSize);
    }

    const content = paginationPanel && paginationPanel({
      currPage,
      sizePerPage,
      sizePerPageList,
      pageStartIndex,
      totalPages: this.totalPages,
      changePage: this.changePage,
      toggleDropDown: this.toggleDropDown,
      changeSizePerPage: this.changeSizePerPage,
      components: {
        totalText: total,
        sizePerPageDropdown: dropdown,
        pageList: pageBtns
      }
    });

    const hidePageList = hidePageListOnlyOnePage && this.totalPages === 1 ? 'none' : 'block';
    return (
      <div className='row' style={ { marginTop: 15 } }>
        {
          content ||
            [ (
              <div key='paging-left' className='col-md-6 col-xs-6 col-sm-6 col-lg-6'>
                { total }{ sizePerPageList.length > 1 ? dropdown : null }
              </div>
              ), (
              <div key='paging-right' style={ { display: hidePageList } }
                className='col-md-6 col-xs-6 col-sm-6 col-lg-6'>
                { pageBtns }
              </div>
            ) ]
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
        currSizePerPage: String(sizePerPage),
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
          <li key={ pageText } role='presentation' className='dropdown-item'>
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
        let title = page + '';

        if (page === this.props.nextPage) {
          title = this.props.nextPageTitle;
        } else if (page === this.props.prePage) {
          title = this.props.prePageTitle;
        } else if (page === this.props.firstPage) {
          title = this.props.firstPageTitle;
        } else if (page === this.props.lastPage) {
          title = this.props.lastPageTitle;
        }

        return (
          <PageButton key={ page }
            title={ title }
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

    if (endPage <= this.lastPage && pages.length > 1) {
      pages.push(this.props.nextPage);
    }
    if (endPage !== this.lastPage && this.props.withFirstAndLast) {
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
  paginationPanel: PropTypes.func,
  prePageTitle: PropTypes.string,
  nextPageTitle: PropTypes.string,
  firstPageTitle: PropTypes.string,
  lastPageTitle: PropTypes.string,
  hidePageListOnlyOnePage: PropTypes.bool,
  keepSizePerPageState: PropTypes.bool
};

PaginationList.defaultProps = {
  sizePerPage: Const.SIZE_PER_PAGE,
  pageStartIndex: Const.PAGE_START_INDEX
};

export default PaginationList;
