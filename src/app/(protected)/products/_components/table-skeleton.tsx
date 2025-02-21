'use client';

import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"

export const TableSkeleton = () => {
    return (
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-gray-100">
                  <Skeleton className="w-[100px] h-[20px] bg-gray-200" />
                </TableHead>
                <TableHead className="bg-gray-100">
                  <Skeleton className="w-[50px] h-[20px] bg-gray-200" />
                </TableHead>
                <TableHead className="bg-gray-100">
                  <Skeleton className="w-[40px] h-[20px] bg-gray-200" />
                </TableHead>
                <TableHead className="bg-gray-100">
                  <Skeleton className="w-[70px] h-[20px] bg-gray-200" />
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {Array(5).fill(0).map((item: number, index: number) => {
                console.log(item);
                return (<TableRow key={`products_${index}`}>
                    <TableCell>
                        <Skeleton className="w-[400px] h-[20px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="w-[50px] h-[20px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="w-[100px] h-[100px]" />
                    </TableCell>
                    <TableCell>
                        <Skeleton className="w-[100px] h-[20px]" />
                    </TableCell>
                  </TableRow>)
              })}
            </TableBody>
          </Table>
        </div>
      )
}