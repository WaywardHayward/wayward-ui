import React from "react";
export interface Tab {
    id: string;
    label: string;
    icon?: React.ReactNode;
    badge?: number | string;
}
