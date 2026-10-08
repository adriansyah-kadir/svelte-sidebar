<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { SidebarContext } from "./context.svelte";

  type Props = HTMLAttributes<HTMLElement>;
  const props: Props = $props();

  const ctx = SidebarContext.get();
</script>

<main
  {...props}
  {...ctx.props}
  inert={ctx.mode === "overlay" && ctx.open && ctx.hasBackdrop}
  data-slot="sidebar-main"
>
  {@render props.children?.()}
</main>

<style>
  main {
    flex-grow: 1;
    overflow: auto;
  }
</style>
