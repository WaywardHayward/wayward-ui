import { TableProps } from "./types";
/**
 * Table wrapper component with consistent styling
 *
 * Usage:
 * ```tsx
 * <Table variant="glass">
 *   <TableHeader>
 *     <TableRow>
 *       <TableHeaderCell>Name</TableHeaderCell>
 *       <TableHeaderCell>Value</TableHeaderCell>
 *     </TableRow>
 *   </TableHeader>
 *   <TableBody>
 *     <TableRow>
 *       <TableCell>Item</TableCell>
 *       <TableCell>100</TableCell>
 *     </TableRow>
 *   </TableBody>
 * </Table>
 * ```
 */
export declare function Table({ children, className, variant: _variant }: TableProps): import("react/jsx-runtime").JSX.Element;
