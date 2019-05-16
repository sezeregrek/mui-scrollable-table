import { withStyles } from "@material-ui/styles";
import TableRow from "@material-ui/core/TableRow";

export const CustomTableRow = withStyles({
  root: {
    width: "100%",
    display: "table!important",
    tableLayout: "fixed"
  }
})(TableRow);
