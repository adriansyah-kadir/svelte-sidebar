import type { HTMLButtonAttributes } from "svelte/elements";
type Props = HTMLButtonAttributes & {
    action?: "open" | "expand";
    target?: boolean;
};
declare const SidebarToggle: import("svelte").Component<Props, {}, "">;
type SidebarToggle = ReturnType<typeof SidebarToggle>;
export default SidebarToggle;
