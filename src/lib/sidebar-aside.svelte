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

<style>
  div {
    display: flex;
    flex: 1 1 auto;

    &[data-orientation="vertical"] {
      flex-direction: column;
      max-width: fit-content;
      &[data-expand="false"] {
        max-width: var(--shrink-size);
        min-width: var(--shrink-size);
      }
    }
    &[data-orientation="horizontal"] {
      flex-direction: row;
      max-height: fit-content;
      &[data-expand="false"] {
        max-height: var(--shrink-size);
        min-height: var(--shrink-size);
      }
    }
  }

  aside {
    flex-shrink: 0;
    display: flex;
    overflow: hidden;

    &[data-placement="left"] {
      flex-direction: column;
      align-items: end;
    }

    &[data-placement="right"] {
      flex-direction: column;
      align-items: start;
    }

    &[data-placement="top"] {
      flex-direction: row;
      align-items: end;
    }

    &[data-placement="bottom"] {
      flex-direction: row;
      align-items: start;
    }

    &[data-open="false"] {
      &[data-orientation="vertical"] {
        width: 0;
      }

      &[data-orientation="horizontal"] {
        height: 0;
      }
    }
  }
</style>
