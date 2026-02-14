export interface RequestCardAction {
    label: string;
    onClick: () => void;
    variant: "approve" | "reject" | "cancel";
    disabled?: boolean;
}
