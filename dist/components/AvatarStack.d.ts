import React from "react";
export interface AvatarStackUser {
    id: string;
    name: string;
    avatar?: string;
}
export interface AvatarStackProps {
    users: AvatarStackUser[];
    maxVisible?: number;
    size?: "sm" | "md" | "lg";
    className?: string;
}
export declare const AvatarStack: React.FC<AvatarStackProps>;
