import { withStyles } from "@material-ui/styles";
import { default as TableCellBase } from "@material-ui/core/TableCell";

export const TableHeadCell = withStyles({
  head: {
    width: props => props.width,
    fontSize: 12,
    padding: 10
  }
})(TableCellBase);

export const BorderlessHeadCell = withStyles({
  head: {
    borderBottom: "none"
  }
})(TableHeadCell);

export const TableCell = withStyles({
  root: {
    fontSize: 12,
    padding: 10,
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
    overflow: "hidden",
    maxWidth: 0
  }
})(TableCellBase);

export const BorderlessCell = withStyles({
  root: {
    borderBottom: "none"
  }
})(TableCell);
