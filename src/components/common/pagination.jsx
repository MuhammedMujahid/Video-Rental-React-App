import React, { Component } from "react";
import _ from "lodash";

const Pagination = props => {
  const { pageSize, pageCount } = props;
  const pagesCount = pageCount / pageSize;

  const pages = _.range(1, pagesCount + 1);
  return (
    <nave>
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link">1</a>
        </li>
      </ul>
    </nave>
  );
};

export default Pagination;
