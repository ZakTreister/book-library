export interface Button {
    label: string;
    type?: string;
    onClick: (evt?: any) => void;
    styleClass: string;
}