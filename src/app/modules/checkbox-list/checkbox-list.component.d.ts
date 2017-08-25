interface CheckBoxList {
    checkboxes: Array<CheckBox>;
}

interface CheckBox {
    checked: boolean;
    disabled?: boolean;
    id: string;
    label: string;
    name: string;
    value: string;
}