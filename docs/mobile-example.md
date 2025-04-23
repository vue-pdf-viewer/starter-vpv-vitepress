---
outline: "deep"
---

# VPV for mobile screen size example

<script setup lang="ts">
  import { ref } from 'vue'
  import { useData, defineClientComponent } from 'vitepress'
  import PdfViewerLicense from './components/PdfViewerLicense.vue'
  
  const clientCompRef = ref()
  const VPdfViewer = defineClientComponent(
    () => {
      return import('@vue-pdf-viewer/viewer').then(({ VPdfViewer }) => VPdfViewer)
    }, [{ ref: clientCompRef }], () => console.log('DONE')
  )
  const { isDark } = useData()
</script>
<PdfViewerLicense>
  <div class="pdf-viewer-wrapper">
    <p v-if="!clientCompRef">VPV is loading</p>
    <VPdfViewer
      src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
      v-model:dark-mode="isDark" 
    />
  </div>
</PdfViewerLicense>

<style scoped>
  .pdf-viewer-wrapper {
    width: 100%;
    height: 700px;
    margin: 20px auto;
  }
</style>

## More

Check out the [documentation](https://docs.vue-pdf-viewer.dev).
