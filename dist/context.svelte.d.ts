import { Context, type Box, type Getter } from "svelte-utils";
export type SidebarMode = "overlay" | "sidebar";
export type SidebarPlacement = "top" | "bottom" | "left" | "right";
export type SidebarOpts = {
    open?: Box<boolean>;
    expand?: Box<boolean>;
    mode?: Getter<SidebarMode>;
    placement?: Getter<SidebarPlacement>;
};
export declare class SidebarContext extends Context {
    #private;
    get open(): boolean;
    set open(value: boolean);
    get expand(): boolean;
    set expand(value: boolean);
    readonly mode: SidebarMode;
    readonly placement: SidebarPlacement;
    get axis(): "x" | "y";
    hasBackdrop: boolean;
    constructor(opts?: SidebarOpts);
    toggleOpen: () => void;
    toggleExpand: () => void;
    get props(): {
        "data-open": boolean;
        "data-expand": boolean;
        "data-mode": SidebarMode;
        "data-axis": string;
        "data-placement": SidebarPlacement;
    };
}
