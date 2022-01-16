<template>
  <div>
    <EditorContent :content="content" :editor="editor" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Typography from '@tiptap/extension-typography'

export default {
  components: {
    EditorContent,
  },
  props: {
    content: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editor: null,
    }
  },
  mounted() {
    this.editor = new Editor({
      extensions: [StarterKit, Typography],
    })
  },
  beforeDestroy() {
    this.editor.destroy()
  },
}
</script>

<style>
.ProseMirror {
  border: 1px solid #ced4da;
}
.ProseMirror p {
  margin: 0.2em 0;
}
</style>
