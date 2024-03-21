import {
  Cell,
  Header,
  HeaderGroup,
  Row,
  Table,
  flexRender,
} from "@tanstack/react-table";
import clsx from "clsx";
import EmptyContent from "./EmptyContent";
import ErrorContent from "./ErrorContent";
import LoadingIndicator from "./LoadingIndicator";
import TablePagination from "./Pagination";
import "./Standard.css";
import { ReactNode } from "react";

function StandardTable(props: StandardTableProps) {
  return props.renderRoot?.(props.instance, props);
}

StandardTable.defaultProps = {
  variant: "relative",
  header: true,
  footer: false,
  pagination: true,
  flexRender,
  renderRoot,
  renderTable,
  renderHeader,
  renderHeaderRow,
  renderHeaderCell,
  renderBody,
  renderBodyRow,
  renderBodyCell,
  renderFooter,
  renderFooterRow,
  renderFooterCell,
  renderPagination,
  renderLoading,
  renderError,
  renderEmpty,
};

export default StandardTable;

function renderRoot(
  instance: any,
  props: {
    Root?: any;
    RootProps?: any;
    classes?: any;
    loading?: any;
    renderLoading?: any;
    error?: any;
    renderError?: any;
    empty?: any;
    renderEmpty?: any;
    renderTable?: any;
    pagination?: any;
    renderPagination?: any;
  }
) {
  const {
    classes,
    loading,
    renderLoading,
    error,
    renderError,
    empty = !instance.getPaginationRowModel().rows?.length,
    renderEmpty,
    renderTable,
    pagination,
    renderPagination,
  } = props;

  // const isDefault = props.variant === "default";
  // const isAbsolute = props.variant === "absolute";
  // const isRelative = props.variant === "relative";
  const Root = props.Root || "div";

  return (
    <Root
      {...{
        ...props.RootProps,
        className: clsx(
          "StandardTable",
          props.RootProps?.className,
          classes?.root
        ),
      }}
    >
      {renderTable?.(instance, props)}
      {loading
        ? renderLoading?.(instance, props)
        : error
        ? renderError?.(instance, props)
        : empty
        ? renderEmpty?.(instance, props)
        : null}
      {pagination && renderPagination?.(instance, props)}
    </Root>
  );
}

/**
 * @type {StandardTableProps['renderTable']}
 */
function renderTable(
  instance: any,
  props: {
    variant?: any;
    Table?: any;
    TableProps?: any;
    classes?: any;
    header?: any;
    footer?: any;
    loading?: any;
    error?: any;
    empty?: any;
    renderHeader?: any;
    renderBody?: any;
    renderFooter?: any;
  }
) {
  const {
    classes,
    header,
    footer,
    loading,
    error,
    empty = !instance.getPaginationRowModel().rows?.length,
    renderHeader,
    renderBody,
    renderFooter,
  } = props;

  const isDefault = props.variant === "default";
  const Table = props.Table || (isDefault ? "table" : "div");

  const TableProps = props.TableProps?.(instance, props);

  return (
    <Table
      {...{
        ...TableProps,
        className: clsx(
          "StandardTable__table",
          TableProps?.className,
          classes?.table
        ),
        style: {
          width: instance.getTotalSize(),
          ...TableProps?.style,
        },
      }}
    >
      {TableProps?.children || (
        <>
          {header && renderHeader?.(instance, props)}
          {!(loading || error || empty) && (
            <>
              {renderBody?.(instance, props)}
              {footer && renderFooter?.(instance, props)}
            </>
          )}
        </>
      )}
    </Table>
  );
}

/**
 * @type {StandardTableProps['renderHeader']}
 */
function renderHeader(
  instance: { getHeaderGroups: () => any[] },
  props: {
    variant: string;
    Header: string;
    HeaderProps: (arg0: any, arg1: any) => any;
    classes: {
      header:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
    renderHeaderRow: (arg0: any, arg1: any, arg2: any) => any;
  }
) {
  const isDefault = props.variant === "default";
  // const isAbsolute = props.variant === "absolute";
  // const isRelative = props.variant === "relative";
  const Header = props.Header || (isDefault ? "thead" : "div");
  const HeaderProps = props.HeaderProps?.(instance, props);

  return (
    <Header
      {...{
        ...HeaderProps,
        className: clsx(
          "StandardTable__table__header",
          HeaderProps?.className,
          props.classes?.header
        ),
      }}
    >
      {HeaderProps?.children ||
        instance
          .getHeaderGroups()
          .map((headerRow) =>
            props.renderHeaderRow(headerRow, instance, props)
          )}
    </Header>
  );
}

/**
 * @type {StandardTableProps['renderHeaderRow']}
 */
function renderHeaderRow(
  headerRow: { id: any; headers: any[] },
  instance: any,
  props: {
    variant: string;
    HeaderRow: string;
    HeaderRowProps: (arg0: any, arg1: any, arg2: any) => any;
    classes: {
      headerRow:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
    renderHeaderCell: (arg0: any, arg1: any, arg2: any) => any;
  }
) {
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const HeaderRow = props.HeaderRow || (isDefault ? "tr" : "div");
  const HeaderRowProps = props.HeaderRowProps?.(headerRow, instance, props);

  return (
    <HeaderRow
      {...{
        key: headerRow.id,
        ...HeaderRowProps,
        className: clsx(
          "StandardTable__table__header__row",
          props.classes?.headerRow,
          HeaderRowProps?.className,
          isRelative && "StandardTable__table__header__row--relative",
          isAbsolute && "StandardTable__table__header__row--absolute"
        ),
      }}
    >
      {HeaderRowProps?.children ||
        headerRow.headers.map((headerCell: any) =>
          props.renderHeaderCell(headerCell, instance, props)
        )}
    </HeaderRow>
  );
}

/**
 * @type {StandardTableProps['renderHeaderCell']}
 */
function renderHeaderCell(
  headerCell: {
    id: any;
    colSpan: any;
    getSize: () => any;
    getStart: () => any;
    isPlaceholder: any;
    column: { columnDef: { header: any }; getIsResizing: () => any };
    getContext: () => any;
    getResizeHandler: () => any;
  },
  instance: {
    options: { columnResizeMode: string };
    getState: () => {
      (): any;
      new (): any;
      columnSizingInfo: { (): any; new (): any; deltaOffset: any };
    };
  },
  props: {
    variant: string;
    HeaderCell: any;
    HeaderCellProps: (arg0: any, arg1: any, arg2: any) => any;
    classes: {
      headerCell:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
    flexRender: (arg0: any, arg1: any) => any;
  }
) {
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const HeaderCell = props.HeaderCell || isDefault ? "th" : "div";
  const HeaderCellProps = props.HeaderCellProps?.(headerCell, instance, props);

  return (
    <HeaderCell
      {...{
        key: headerCell.id,
        colSpan: headerCell.colSpan,
        ...HeaderCellProps,
        className: clsx(
          "StandardTable__table__header__row__cell",
          props.classes?.headerCell,
          HeaderCellProps?.className,
          isRelative && "StandardTable__table__header__row__cell--relative",
          isAbsolute && "StandardTable__table__header__row__cell--absolute"
        ),
        style: {
          width: headerCell.getSize(),
          ...(isAbsolute ? { left: headerCell.getStart() } : {}),
          ...HeaderCellProps?.style,
        },
      }}
    >
      {HeaderCellProps?.children || (
        <>
          {headerCell.isPlaceholder
            ? null
            : props.flexRender(
                headerCell.column.columnDef.header,
                headerCell.getContext()
              )}
          <div
            {...{
              onMouseDown: headerCell.getResizeHandler(),
              onTouchStart: headerCell.getResizeHandler(),
              className: `StandardTable__resizer ${
                headerCell.column.getIsResizing()
                  ? "StandardTable__resizing"
                  : ""
              }`,
              style: {
                transform:
                  instance.options.columnResizeMode === "onEnd" &&
                  headerCell.column.getIsResizing()
                    ? `translateX(${
                        instance.getState().columnSizingInfo.deltaOffset
                      }px)`
                    : "",
              },
            }}
          />
        </>
      )}
    </HeaderCell>
  );
}

/**
 * @type {StandardTableProps['renderBody']}
 */
function renderBody(
  instance: {
    getPaginationRowModel: () => { (): any; new (): any; rows: any[] };
  },
  props: {
    variant: string;
    Body: string;
    BodyProps: (arg0: any, arg1: any) => any;
    classes: {
      body:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
    renderBodyRow: (arg0: any, arg1: any, arg2: any) => any;
  }
) {
  const isDefault = props.variant === "default";
  // const isAbsolute = props.variant === "absolute";
  // const isRelative = props.variant === "relative";
  const Body = props.Body || (isDefault ? "tbody" : "div");
  const BodyProps = props.BodyProps?.(instance, props);

  return (
    <Body
      {...{
        ...BodyProps,
        className: clsx(
          "StandardTable__table__body",
          BodyProps?.className,
          props.classes?.body
        ),
      }}
    >
      {BodyProps?.children ||
        instance
          .getPaginationRowModel()
          .rows.map((bodyRow: any) =>
            props.renderBodyRow(bodyRow, instance, props)
          )}
    </Body>
  );
}

/**
 * @type {StandardTableProps['renderBodyRow']}
 */
function renderBodyRow(
  bodyRow: { id: any; getVisibleCells: () => any[] },
  instance: any,
  props: {
    variant: string;
    BodyRow: string;
    BodyRowProps: (arg0: any, arg1: any, arg2: any) => any;
    classes: {
      row:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
    renderBodyCell: (arg0: any, arg1: any, arg2: any) => any;
  }
) {
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const Row = props.BodyRow || (props.variant === "default" ? "tr" : "div");
  const BodyRowProps = props.BodyRowProps?.(bodyRow, instance, props);

  return (
    <Row
      {...{
        key: bodyRow.id,
        ...BodyRowProps,
        className: clsx(
          "StandardTable__table__body__row",
          BodyRowProps?.className,
          props.classes?.row,
          isRelative && "StandardTable__table__body__row--relative",
          isAbsolute && "StandardTable__table__body__row--absolute"
        ),
      }}
    >
      {BodyRowProps?.children ||
        bodyRow
          .getVisibleCells()
          .map((bodyCell: any) =>
            props.renderBodyCell(bodyCell, instance, props)
          )}
    </Row>
  );
}

/**
 * @type {StandardTableProps['renderBodyCell']}
 */
function renderBodyCell(
  bodyCell: {
    id: any;
    column: {
      getSize: () => any;
      getStart: () => any;
      columnDef: { cell: any };
    };
    getContext: () => any;
  },
  instance: any,
  props: {
    variant: string;
    BodyCell: string;
    BodyCellProps: (arg0: any, arg1: any, arg2: any) => any;
    classes: {
      cell:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
    flexRender: (arg0: any, arg1: any) => any;
  }
) {
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const Cell = props.BodyCell || (props.variant === "default" ? "td" : "div");
  const BodyCellProps = props.BodyCellProps?.(bodyCell, instance, props);

  return (
    <Cell
      {...{
        key: bodyCell.id,
        ...BodyCellProps,
        style: {
          width: bodyCell.column.getSize(),
          ...(isAbsolute ? { left: bodyCell.column.getStart() } : {}),
          ...BodyCellProps?.style,
        },
        className: clsx(
          "StandardTable__table__body__row__cell",
          BodyCellProps?.className,
          props.classes?.cell,
          isRelative && "StandardTable__table__body__row__cell--relative",
          isAbsolute && "StandardTable__table__body__row__cell--absolute"
        ),
      }}
    >
      {BodyCellProps?.children ||
        props.flexRender(bodyCell.column.columnDef.cell, bodyCell.getContext())}
    </Cell>
  );
}

/**
 * @type {StandardTableProps['renderFooter']}
 */
function renderFooter(
  instance: { getFooterGroups: () => any[] },
  props: {
    variant: string;
    Footer: string;
    FooterProps: (arg0: any, arg1: any) => any;
    classes: {
      footer:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
    renderFooterRow: (arg0: any, arg1: any, arg2: any) => any;
  }
) {
  const isDefault = props.variant === "default";
  // const isAbsolute = props.variant === "absolute";
  // const isRelative = props.variant === "relative";
  const Footer = props.Footer || (isDefault ? "tfoot" : "div");
  const FooterProps = props.FooterProps?.(instance, props);

  return (
    <Footer
      {...{
        ...FooterProps,
        className: clsx(
          "StandardTable__table__footer",
          FooterProps?.className,
          props.classes?.footer
        ),
      }}
    >
      {FooterProps?.children ||
        instance
          .getFooterGroups()
          .map((footerRow: any) =>
            props.renderFooterRow(footerRow, instance, props)
          )}
    </Footer>
  );
}

/**
 * @type {StandardTableProps['renderFooterRow']}
 */
function renderFooterRow(
  footerRow: { id: any; headers: any[] },
  instance: any,
  props: {
    variant: string;
    FooterRow: string;
    FooterRowProps: (arg0: any, arg1: any, arg2: any) => any;
    classes: {
      footerRow:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
    renderFooterCell: (arg0: any, arg1: any, arg2: any) => any;
  }
) {
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const FooterRow = props.FooterRow || (isDefault ? "tfoot" : "div");
  const FooterRowProps = props.FooterRowProps?.(footerRow, instance, props);

  return (
    <FooterRow
      {...{
        key: footerRow.id,
        ...FooterRowProps,
        className: clsx(
          "StandardTable__table__footer__row",
          FooterRowProps?.className,
          props.classes?.footerRow,
          isRelative && "StandardTable__table__footer__row--relative",
          isAbsolute && "StandardTable__table__footer__row--absolute"
        ),
      }}
    >
      {FooterRowProps?.children ||
        footerRow.headers.map((footerCell: any) =>
          props.renderFooterCell(footerCell, instance, props)
        )}
    </FooterRow>
  );
}

/**
 * @type {StandardTableProps['renderFooterCell']}
 */
function renderFooterCell(
  footerCell: {
    id: any;
    colSpan: any;
    getSize: () => any;
    getStart: () => any;
    isPlaceholder: any;
    column: { columnDef: { footer: any } };
    getContext: () => any;
  },
  instance: any,
  props: {
    variant: string;
    FooterCell: string;
    FooterCellProps: (arg0: any, arg1: any, arg2: any) => any;
    classes: {
      footerCell:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
    flexRender: (arg0: any, arg1: any) => any;
  }
) {
  const isDefault = props.variant === "default";
  const isAbsolute = props.variant === "absolute";
  const isRelative = props.variant === "relative";
  const FooterCell = props.FooterCell || (isDefault ? "th" : "div");
  const FooterCellProps = props.FooterCellProps?.(footerCell, instance, props);

  return (
    <FooterCell
      {...{
        key: footerCell.id,
        colSpan: footerCell.colSpan,
        ...FooterCellProps,
        className: clsx(
          "StandardTable__table__footer__row__cell",
          ...FooterCellProps?.className,
          props.classes?.footerCell,
          isRelative && "StandardTable__table__footer__row__cell--relative",
          isAbsolute && "StandardTable__table__footer__row__cell--absolute"
        ),
        style: {
          width: footerCell.getSize(),
          ...(isAbsolute ? { left: footerCell.getStart() } : {}),
          ...FooterCellProps?.style,
        },
      }}
    >
      {FooterCellProps?.children || (
        <>
          {footerCell.isPlaceholder
            ? null
            : props.flexRender(
                footerCell.column.columnDef.footer,
                footerCell.getContext()
              )}
        </>
      )}
    </FooterCell>
  );
}

/**
 * @type {StandardTableProps['renderPagination']}
 */
function renderPagination(
  instance: any,
  props: {
    Pagination: string;
    PaginationProps: (arg0: any, arg1: any) => any;
    classes: {
      pagination:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
  }
) {
  const Pagination = props.Pagination || "div";
  const PaginationProps = props.PaginationProps?.(instance, props);

  return (
    <Pagination
      {...{
        ...PaginationProps,
        className: clsx(
          "StandardTable__pagination",
          PaginationProps?.className,
          props.classes?.pagination
        ),
      }}
    >
      {PaginationProps?.children || <TablePagination instance={instance} />}
    </Pagination>
  );
}

/**
 * @type {StandardTableProps['renderLoading']}
 */
function renderLoading(
  instance: any,
  props: {
    Loading: string;
    LoadingProps: (arg0: any, arg1: any) => any;
    classes: {
      loading:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
  }
) {
  const Loading = props.Loading || "div";
  const LoadingProps = props.LoadingProps?.(instance, props);

  return (
    <Loading
      {...{
        ...LoadingProps,
        className: clsx(
          "StandardTable__loading",
          LoadingProps?.className,
          props.classes?.loading
        ),
      }}
    >
      {LoadingProps?.children || <LoadingIndicator />}
    </Loading>
  );
}

/**
 * @type {StandardTableProps['renderError']}
 */
function renderError(
  instance: any,
  props: {
    Error: string;
    ErrorProps: (arg0: any, arg1: any) => any;
    classes: {
      error:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
    onRetry: any;
  }
) {
  const Error = props.Error || "div";
  const ErrorProps = props.ErrorProps?.(instance, props);

  return (
    <Error
      {...{
        ...ErrorProps,
        className: clsx(
          "StandardTable__error",
          ErrorProps?.className,
          props.classes?.error
        ),
      }}
    >
      {ErrorProps?.children || <ErrorContent onRetry={props.onRetry} />}
    </Error>
  );
}

/**
 * @type {StandardTableProps['renderEmpty']}
 */
function renderEmpty(
  instance: any,
  props: {
    Empty: string;
    EmptyProps: (arg0: any, arg1: any) => any;
    classes: {
      empty:
        | string
        | number
        | boolean
        | clsx.ClassArray
        | clsx.ClassDictionary
        | null
        | undefined;
    };
    onRefetch: any;
  }
) {
  const Empty = props.Empty || "div";
  const EmptyProps = props.EmptyProps?.(instance, props);

  return (
    <Empty
      {...{
        ...EmptyProps,
        className: clsx(
          "StandardTable__empty",
          EmptyProps?.className,
          props.classes?.empty
        ),
      }}
    >
      {EmptyProps?.children || <EmptyContent onRefetch={props.onRefetch} />}
    </Empty>
  );
}

export type StandardTableProps = {
  type?: "standard";
  variant?: "default" | "absolute" | "relative";
  instance: Table<any>;
  classes?: {
    [P in
      | "root"
      | "table"
      | "header"
      | "headerRow"
      | "headerCell"
      | "body"
      | "footer"]: string;
  };
  flexRender?: Function;
  onRetry?: Function;
  onRefetch?: Function;
  Root?: any;
  RootProps?: (instance: Table<any>, props: StandardTableProps) => any;
  renderRoot?: (instance: Table<any>, props: StandardTableProps) => any;
  Table?: any;
  TableProps?: (instance: Table<any>, props: StandardTableProps) => any;
  renderTable?: (instance: Table<any>, props: StandardTableProps) => ReactNode;
  header?: boolean;
  Header?: any;
  HeaderProps?: (instance: Table<any>, props: StandardTableProps) => any;
  renderHeader?: (instance: Table<any>, props: StandardTableProps) => ReactNode;
  HeaderRow?: any;
  HeaderRowProps?: (
    headerRow: HeaderGroup<any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => any;
  renderHeaderRow?: (
    headerRow: HeaderGroup<any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => ReactNode;
  HeaderCell?: any;
  HeaderCellProps?: (
    headerCell: Header<any, any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => any;
  renderHeaderCell?: (
    headerCell: Header<any, any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => ReactNode;
  Body?: any;
  BodyProps?: (instance: Table<any>, props: StandardTableProps) => any;
  renderBody?: (instance: Table<any>, props: StandardTableProps) => ReactNode;
  BodyRow?: any;
  BodyRowProps?: (
    bodyRow: Row<any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => any;
  renderBodyRow?: (
    bodyRow: Row<any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => ReactNode;
  BodyCell?: any;
  BodyCellProps?: (
    bodyCell: Cell<any, any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => any;
  renderBodyCell?: (
    bodyCell: Cell<any, any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => ReactNode;
  footer?: boolean;
  Footer?: any;
  FooterProps?: (instance: Table<any>, props: StandardTableProps) => any;
  renderFooter?: (instance: Table<any>, props: StandardTableProps) => ReactNode;
  FooterRow?: any;
  FooterRowProps?: (
    footerRow: HeaderGroup<any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => any;
  renderFooterRow?: (
    footerRow: HeaderGroup<any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => ReactNode;
  FooterCell?: any;
  FooterCellProps?: (
    footerCell: Header<any, any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => any;
  renderFooterCell?: (
    footerCell: Header<any, any>,
    instance: Table<any>,
    props: StandardTableProps
  ) => ReactNode;
  pagination?: boolean;
  Pagination?: any;
  PaginationProps?: (instance: Table<any>, props: StandardTableProps) => any;
  renderPagination?: (
    instance: Table<any>,
    props: StandardTableProps
  ) => ReactNode;
  loading?: boolean;
  Loading?: any;
  LoadingProps?: (instance: Table<any>, props: StandardTableProps) => any;
  renderLoading?: (
    instance: Table<any>,
    props: StandardTableProps
  ) => ReactNode;
  error?: boolean;
  Error?: any;
  ErrorProps?: (instance: Table<any>, props: StandardTableProps) => any;
  renderError?: (instance: Table<any>, props: StandardTableProps) => ReactNode;
  empty?: boolean;
  Empty?: any;
  EmptyProps?: (instance: Table<any>, props: StandardTableProps) => any;
  renderEmpty?: (instance: Table<any>, props: StandardTableProps) => ReactNode;
};
