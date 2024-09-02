"use client";
import { Swap } from "@/constants/data";
import { ColumnDef, CellContext  } from "@tanstack/react-table";

const pairAccessor = (context: CellContext<Swap, unknown>) => {
  const rowData = context.row.original as Swap;
  return `${rowData.baseTokenSymbol}/${rowData.quotoTokenSymbol} ${rowData.baseCurrencyName}`;
};

export const columns: ColumnDef<Swap>[] = [
  {
    accessorKey: "rank",
    header: "#",
  },
  {
    cell: pairAccessor,
    header: "Pair",
  },
  {
    accessorKey: "priceUsd",
    header: "Price USD",
  },
  {
    accessorKey: "quotePrice1h",
    header: "1H",
  },
  {
    accessorKey: "quoteChange24h",
    header: "24H",
  },
  {
    accessorKey: "txns24h",
    header: "TXNS",
  },
  {
    accessorKey: "volumeUsd24h",
    header: "Volume",
  },
  {
    accessorKey: "liquidity", 
    header: "Liquidity",
  },
  {
    accessorKey: "fdv",
    header: "FDV",
  },
];
