import React, { Component } from "react";
// import { Images } from "../assets/images";
import _ from 'lodash'
import Loader from "../component/Loader.jsx";


export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: props.defaultSort,
      sortType: 'asc',
      defaultIcon: Images.sort_both
    }
  };

  handleSorting = (titleObject) => {
    this.setState({
      sort: titleObject.id
    }, () => {

      const { sort, sortType } = this.state;
      if (sort === titleObject.id) {
        if (sortType === 'asc') {
          this.setState({
            sortType: 'desc',
            defaultIcon: Images.sort_desc
          })
        } else {
          this.setState({
            sortType: 'asc',
            defaultIcon: Images.sort_asc
          })
        }
      } else {
        this.setState({
          sort: titleObject.id,
          sortType: 'asc',
          defaultIcon: Images.sort_both

        })
      }
    })

  }

  render() {

    const { dataTable, actions, addButtonOnClick, editButtonOnClick, updateButtonOnClick, deleteButtonOnClick, viewPopup, loader, updatePermission, deletePermission } = this.props;
    const { sort, sortType, defaultIcon } = this.state;
    let sortedDataTable = [];

    if (dataTable.data.length > 0) {
      if (sort == 'Date' || sort == 'Time') {
        sortedDataTable = _.sortBy(dataTable.data, function (dateObj) {
          return new Date(dateObj.createdAt);
        });
      } else {
        sortedDataTable = _.sortBy(dataTable.data, sort)
      }

      if (sortType === 'desc') {
        sortedDataTable.reverse()
      }
    }
    return (
      <div className="table-responsive fixHeight">
        {loader &&
          <Loader />
          ||
          (dataTable.titles.length > 0 || dataTable.data.length > 0) ?
          <table className="table apit table-hover  dataTable no-footer">
            <thead>
              <tr className="txt-blk">
                {dataTable.titles.map((titleObject, index) =>
                  <th className="sorting"
                    key={index}
                    onClick={() => titleObject.isSort ? this.handleSorting(titleObject) : ''}>
                    {titleObject.isSort &&
                      <img className="table_sorting"
                        src={sort === titleObject.id ? defaultIcon : Images.sort_both} />}
                    {titleObject.text}
                  </th>)}
                {actions && (actions.edit && updatePermission || actions.delete && deletePermission) && <th> Action </th>}
              </tr>
            </thead>
            <tbody className="txt-blk">
              {sortedDataTable.map((data, index) =>
                <tr key={index}>
                  {dataTable.titles.map((column, index) =>
                    <td key={index} onClick={() => viewPopup(data)}>{data[column.id]}</td>
                  )}
                  <td className="action-data">
                    {actions && <>
                      {actions.update &&
                        <a onClick={updateButtonOnClick}
                          className="mx-1">
                          <img className="refresh" src={Images.refresh} />
                        </a>}
                      {actions.edit && updatePermission &&
                        <a onClick={(e) => {
                          editButtonOnClick(data);
                          e.stopPropagation()
                        }}
                          className="mx-1">
                          <img className="edit" src={Images.edit} />
                        </a>}
                    </>
                    }
                    {actions && actions.add ? <a onClick={addButtonOnClick} className="mx-1"><img className="tagi" src={Images.tag} /></a> : null}
                    {actions && actions.delete && deletePermission ? <a onClick={(e) => { deleteButtonOnClick(data); e.stopPropagation() }} className="mx-1"><img className="dlt" src={Images.dlt} /></a> : null}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          : <p className="no-data">No Data Found</p>
        }
      </div>

    );
  }
}