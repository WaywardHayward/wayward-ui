import React from "react";
export interface SkeletonProps {
    variant?: "card" | "list" | "profile" | "custom";
    count?: number;
    className?: string;
}
export declare const Skeleton: React.FC<SkeletonProps>;
