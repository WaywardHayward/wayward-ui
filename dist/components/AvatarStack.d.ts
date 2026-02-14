import React from "react";
import { AvatarStackUser } from '../types/AvatarStackUser';
export interface AvatarStackProps {
    users: AvatarStackUser[];
    maxVisible?: number;
    size?: "sm" | "md" | "lg";
    className?: string;
}
export declare const AvatarStack: React.FC<AvatarStackProps>;
