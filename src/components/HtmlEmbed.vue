<script setup>
import { computed } from 'vue'
import { getHtmlFile } from '../utils/posts'

const props = defineProps({
  file: { type: String, required: true },
})

const htmlContent = computed(() => getHtmlFile(props.file))
const lineCount = computed(() =>
  htmlContent.value ? htmlContent.value.split('\n').length : 0
)
</script>

<template>
  <div class="html-embed">
    <!-- 头部信息条 -->
    <div class="embed-header">
      <span class="embed-title">📄 {{ file }}</span>
      <span class="embed-meta">{{ lineCount }} 行 · 可交互预览</span>
    </div>

    <!-- 实时预览：用 iframe srcdoc 渲染整份 html -->
    <div class="embed-preview">
      <iframe
        v-if="htmlContent"
        :srcdoc="htmlContent"
        sandbox="allow-scripts allow-same-origin allow-modals"
        class="preview-frame"
        loading="lazy"
      ></iframe>
      <p v-else class="not-found">找不到文件：{{ file }}<br />请把它放到 <code>src/needed_file_code_picture_video/</code></p>
    </div>

    <!-- 源代码展示框：最多 10 行高度，超出用滚动条查看 -->
    <details class="embed-source">
      <summary>查看源代码（{{ lineCount }} 行）</summary>
      <pre class="code-box"><code>{{ htmlContent }}</code></pre>
    </details>
  </div>
</template>

<style scoped>
.html-embed {
  margin: 24px 0;
  border: 1px solid #e3e8ee;
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 14px rgba(60, 80, 100, 0.06);
}

.embed-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 14px;
  background: #f4f7fa;
  border-bottom: 1px solid #e3e8ee;
  font-size: 13px;
}
.embed-title {
  font-weight: 600;
  color: #2d3047;
}
.embed-meta {
  color: #9aa3b5;
  font-size: 12px;
}

/* 预览区固定高度，里面 html 自适应 */
.embed-preview {
  height: 480px;
  background: #f8f9fa;
}
.preview-frame {
  width: 100%;
  height: 100%;
  border: none;
  display: block;
  background: #fff;
}
.not-found {
  margin: 0;
  padding: 24px;
  color: #b0413e;
  font-size: 14px;
  text-align: center;
}
.not-found code {
  background: #fdecec;
  padding: 2px 6px;
  border-radius: 4px;
}

/* 源代码框 */
.embed-source {
  border-top: 1px solid #e3e8ee;
}
.embed-source summary {
  padding: 10px 14px;
  font-size: 13px;
  color: #5a6473;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;
}
.embed-source summary:hover {
  background: #f4f7fa;
}
/* 关键：限 10 行高度，超出滚动 */
.code-box {
  margin: 0;
  padding: 14px 16px;
  max-height: calc(10 * 1.6em + 28px); /* 10 行 × 行高 + padding */
  overflow: auto;                       /* 小滑轮查看剩余代码 */
  background: #1e2430;
  color: #e8eaed;
  font-family: ui-monospace, Consolas, 'Courier New', monospace;
  font-size: 12.5px;
  line-height: 1.6;
  white-space: pre;
  tab-size: 2;
}
.code-box code {
  font-family: inherit;
}
</style>
