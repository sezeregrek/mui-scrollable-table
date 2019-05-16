import React from "react";
import { withStyles } from "@material-ui/styles";
import {
  ScrollableTable,
  TableCell,
  TableHeadCell,
  CustomTableRow
} from "./components";

const rows = [...Array(100)].reduce(
  (acc, val, i) => [
    ...acc,
    {
      id: i,
      ...[...Array(10)].reduce(
        (row, v, j) => ({ ...row, ["Column " + j]: j + ", " + i }),
        {}
      )
    }
  ],
  []
);

const renderTableHead = () => (
  <CustomTableRow>
    {Object.keys(rows[0]).map(key => (
      <TableHeadCell key={key}>{key.toUpperCase()}</TableHeadCell>
    ))}
  </CustomTableRow>
);

const renderThreatRows = row => (
  <CustomTableRow key={row.id}>
    {Object.keys(rows[0]).map((key, i) => (
      <TableCell key={key + i}>{row[key]}</TableCell>
    ))}
  </CustomTableRow>
);

const Demo = ({ classes }) => {
  return (
    <div className={classes.root}>
      {rows.length && (
        <ScrollableTable
          rows={rows}
          hasPagination={true}
          hasPaper={true}
          renderTableHead={renderTableHead}
          renderRow={renderThreatRows}
          horizontalScroll={true}
          verticalScroll={true}
          width="150%"
          height={600}
        />
      )}
    </div>
  );
};

export default withStyles({
  root: {
    flexGrow: 1,
    display: "flex"
  }
})(Demo);
