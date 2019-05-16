import React, { useEffect } from "react";
import { withStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";
import { CustomTableRow } from "./TableRow";
import TableHead from "@material-ui/core/TableHead";
import TablePaginationActions from "./TablePaginationActions";

const ScrollableTable = ({
  hasPagination = false,
  rows,
  renderRow,
  renderTableHead,
  horizontalScroll = false,
  verticalScroll = false,
  width = "100%",
  height,
  classes,
  ...props
}) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  useEffect(() => {
    setPage(0);
  }, []);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value));
  };

  return (
    <Paper square className={classes.root} elevation={2}>
      <div className={classes.tableWrapper}>
        <div className={classes.horizontalScroll}>
          <Table className={classes.table}>
            <TableHead className={classes.tableHead}>
              {renderTableHead()}
            </TableHead>
            <TableBody className={classes.tableBody}>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(renderRow)}
            </TableBody>
            {hasPagination && (
              <TableFooter>
                <CustomTableRow style={{ height: 64 }}>
                  <TablePagination
                    rowsPerPageOptions={[10, 25, 50]}
                    colSpan={3}
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                      native: true
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                    classes={{
                      root: classes.pagination,
                      toolbar: classes.toolbar
                    }}
                  />
                </CustomTableRow>
              </TableFooter>
            )}
          </Table>
        </div>
      </div>
    </Paper>
  );
};

const styles = () => ({
  root: {
    width: "100%",
    padding: "5px 20px",
    height: props => (props.verticalScroll ? props.height : "auto")
  },
  table: {
    display: "flex",
    flexFlow: "column",
    height: " 100%",
    width: "100%",
    minWidth: 100,
    "&:last-child": {
      border: "none"
    }
  },
  pagination: {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    "&:last-child": {
      border: "none"
    }
  },
  toolbar: {
    padding: 0
  },
  tableWrapper: {
    width: "100%",
    height: "100%",
    overflowX: props => (props.horizontalScroll ? "auto" : "hidden")
  },
  tableHead: {
    flex: "0 0 auto",
    width: "100%",
    display: "table",
    tableLayout: "fixed"
  },
  tableBody: {
    flex: "1 1 auto",
    display: "block",
    overflowY: props => (props.verticalScroll ? "auto" : "hidden"),
    width: "100%"
  },
  horizontalScroll: {
    width: props => (props.horizontalScroll ? props.width : "100%"),
    height: "100%"
  }
});

export default withStyles(styles)(ScrollableTable);
