import { box, Context } from "svelte-utils";
export class SidebarContext extends Context {
    #open;
    get open() { return this.#open.current; }
    set open(value) { this.#open.current = value; }
    #expand;
    get expand() { return this.#expand.current; }
    set expand(value) { this.#expand.current = value; }
    mode;
    placement;
    get axis() {
        return this.placement === "left"
            || this.placement === "right"
            ? "x"
            : "y";
    }
    hasBackdrop = $state(false);
    constructor(opts = {}) {
        super();
        this.mode = $derived.by(opts.mode ?? (() => "sidebar"));
        this.placement = $derived.by(opts.placement ?? (() => "left"));
        this.#open = opts.open ?? box(this.mode === "sidebar");
        this.#expand = opts.expand ?? box(true);
    }
    toggleOpen = () => {
        this.open = !this.open;
    };
    toggleExpand = () => {
        this.expand = !this.expand;
    };
    get props() {
        return {
            "data-open": this.open,
            "data-expand": this.expand,
            "data-mode": this.mode,
            "data-axis": this.axis,
            "data-placement": this.placement,
        };
    }
}
