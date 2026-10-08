<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { SidebarContext } from "./context.svelte";

  type Props = HTMLAttributes<HTMLElement>;

  const props: Props = $props();

  const ctx = SidebarContext.get();
</script>

<div {...props} {...ctx.props} data-slot="sidebar-item">
  {@render props.children?.()}
</div>

<style>
  [data-slot="sidebar-item"] {
    flex-shrink: 0;
    text-wrap: nowrap;
    height: var(--shrink-size);
    width: var(--expand-size);
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: start;

    &[data-expand="false"] {
      width: var(--shrink-size);
    }
  }
</style>
