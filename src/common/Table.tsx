import StandardTable, { StandardTableProps } from "./StandardTable";
// import GridTable from "./GridTable";
// import TreeTable from "./TreeTable";

function Table(props: TableProps) {
  const { type, ...rest } = props;
  if (!props.instance) return null;

  // if (type === "grid") {
  //   return <GridTable {...rest} />;
  // }

  // if (type === "tree") {
  //   return <TreeTable {...rest} />;
  // }

  return <StandardTable {...rest} />;
}

/**
 * @type {TableProps}
 */
Table.defaultProps = {
  type: "standard",
};

export default Table;

export type TableProps = StandardTableProps;
