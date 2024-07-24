---
outline: false
aside: false
---

# VPV for Large screen size example

<script setup lang="ts">
  import { useData } from 'vitepress'
  import { VPdfViewer } from '@vue-pdf-viewer/viewer'

  const { isDark } = useData()
</script>

<div class="pdf-viewer-wrapper">
  <ClientOnly>
    <VPdfViewer
      src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
      :dark-mode="isDark"
      @update:dark-mode="isDark = $event"
    />
  </ClientOnly>
</div>

<style scoped>
  .pdf-viewer-wrapper {
    width: 100%;
    height: 700px;
    margin: 20px auto;
  }
</style>

## More

Check out the [documentation](https://docs.vue-pdf-viewer.dev).
