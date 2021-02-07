import { ValidatorFn } from "@angular/forms";

export interface InputMetaData<T = any> {
    field: keyof T;
    label: string;
    required: boolean;
    dataType: DataType;
    validation?: ValidatorFn[];
    errorMessages?: any;
}

export enum DataType {
    Text = 'text',
    Date = 'date'
}

export interface ModalFormConfig<T = any> {
    item?: T;
    formMetaData: InputMetaData<T>[];
}