import { ReactNode } from "react";

export interface TableProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant
   * - "default": Light mode friendly, subtle borders
   * - "glass": Dark premium glass effect
   * - "minimal": No background, just structure
   */
  variant?: "default" | "glass" | "minimal";
}

export interface TableHeaderProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant (should match parent Table)
   */
  variant?: "default" | "glass" | "minimal";
}

export interface TableBodyProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant (should match parent Table)
   */
  variant?: "default" | "glass" | "minimal";
}

export interface TableRowProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant (should match parent Table)
   */
  variant?: "default" | "glass" | "minimal";
  /**
   * Enable hover effect
   */
  hoverable?: boolean;
  /**
   * Click handler for interactive rows
   */
  onClick?: () => void;
}

export interface TableCellProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant (should match parent Table)
   */
  variant?: "default" | "glass" | "minimal";
  /**
   * Prevent text wrapping
   */
  noWrap?: boolean;
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right";
}

export interface TableHeaderCellProps {
  children: ReactNode;
  className?: string;
  /**
   * Styling variant (should match parent Table)
   */
  variant?: "default" | "glass" | "minimal";
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right";
}
