---
outline: false
aside: false
---

# VPV for Large screen size example

<script setup lang="ts">
  import { useData, defineClientComponent } from 'vitepress'
  import { ref, watch, onBeforeMount } from 'vue'
  import { useLicense } from '@vue-pdf-viewer/viewer'

  const vpvRef = ref<InstanceType<typeof VPdfViewer> | null>(null)
  // Refer to https://vitepress.dev/guide/ssr-compat#defineclientcomponent
  const VPdfViewer = defineClientComponent(() => {
    return import('@vue-pdf-viewer/viewer').then(async (mod) => {
      return mod.VPdfViewer
    })
  }, [{ ref: vpvRef }], 
    // callback after the component is loaded, can be async
    () => {
      console.log('VPdfViewer loaded')
      
    }
  )

  const { isDark } = useData()

  onBeforeMount(() => {
    useLicense({ licenseKey: 'your-license-key' })
  })
  
  watch(vpvRef, (newVal) => {
		console.log("These are VPV instance properties", Object.keys(newVal));
	}, { deep: true });
</script>

<div class="pdf-viewer-wrapper">
  <VPdfViewer
    ref="vpvRef"
    src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
    :dark-mode="isDark"
    @update:dark-mode="isDark = $event"
  />
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
