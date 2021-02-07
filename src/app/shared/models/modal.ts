import { Type } from "@angular/core";
import { ModalService } from "../components/modal/modal.service";

export interface ModalConfig<T = any> {
    title?: string;
    component: Type<IModalBodyComponet>;
    properties: T;
}

export interface ConfirmConfig {
    confirm: string;
}

export interface IModalBodyComponet<T = any> {
    setProps: (props: T) => void;
}