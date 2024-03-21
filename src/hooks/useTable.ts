import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  TableOptions,
} from "@tanstack/react-table";

function useTable(options: Partial<TableOptions<any>>) {
  return useReactTable({
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    debugTable: true,
    ...options,
    data: options.data || data,
    defaultColumn: {
      ...options?.defaultColumn,
    },
  } as TableOptions<any>);
}

export default useTable;

const data: any[] = [];
