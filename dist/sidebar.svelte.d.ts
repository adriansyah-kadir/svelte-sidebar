import type { HTMLAttributes } from "svelte/elements";
import { type SidebarMode, type SidebarPlacement } from "./context.svelte";
type Props = HTMLAttributes<HTMLDivElement> & {
    open?: boolean;
    expand?: boolean;
    mode?: SidebarMode;
    placement?: SidebarPlacement;
    shrinkSize?: string;
    expandSize?: string;
};
declare const Sidebar: import("svelte").Component<Props, {}, "open" | "expand">;
type Sidebar = ReturnType<typeof Sidebar>;
export default Sidebar;
