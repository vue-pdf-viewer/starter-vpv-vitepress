---
outline: 'deep'
---

# VPV for mobile screen size example

<script setup lang="ts">
  import { useData } from 'vitepress'
  import { VPdfViewer } from '@vue-pdf-viewer/viewer'

  const { isDark } = useData()
</script>

<div class="pdf-viewer-wrapper">
  <ClientOnly>
    <VPdfViewer
      src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
      v-model:dark-mode="isDark" 
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
