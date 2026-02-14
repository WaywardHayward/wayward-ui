export interface OptionsMenuItem {
  label: string;
  onClick: () => void;
  variant?: "default" | "danger";
}
