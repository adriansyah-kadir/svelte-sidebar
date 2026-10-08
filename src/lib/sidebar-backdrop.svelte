<script lang="ts">
  import type { HTMLAttributes } from "svelte/elements";
  import { SidebarContext } from "./context.svelte";

  const { children, onclick, ...props }: HTMLAttributes<HTMLDivElement> =
    $props();
  const ctx = SidebarContext.get();
  const active = $derived(ctx.mode === "overlay" && ctx.open);
</script>

<svelte:window
  onkeydown={(e) => active && e.key === "Escape" && (ctx.open = false)}
/>

{#if active}
  <div
    {...props}
    {...ctx.props}
    onclick={(e) => {
      onclick?.(e);
      ctx.open = false;
    }}
    data-slot="sidebar-backdrop"
  >
    {@render children?.()}
  </div>
{/if}

<style>
  div {
    position: absolute;
    inset: 0;
    background: var(--backdrop, rgb(0 0 0 / 0.4));
  }
</style>
