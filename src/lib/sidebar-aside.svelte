<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { SidebarContext } from "./context.svelte";

  type Props = HTMLAttributes<HTMLElement>;
  const props: Props = $props();

  const ctx = SidebarContext.get();
</script>

<aside {...ctx.props} inert={!ctx.open} data-slot="sidebar-aside">
  <div {...props} {...ctx.props} data-slot="sidebar-aside-wrapper">
    {@render props.children?.()}
  </div>
</aside>
