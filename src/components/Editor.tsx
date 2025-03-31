'use client'

import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Heading from '@tiptap/extension-heading'
import BulletList from '@tiptap/extension-bullet-list'
import ListItem from '@tiptap/extension-list-item'

import { useEffect } from 'react'

export default function Editor({
  content,
  onChange,
}: {
  content: string
  onChange: (html: string) => void
}) {
  const editor = useEditor({
    extensions: [StarterKit, Bold, Italic, Heading, BulletList, ListItem],
    content,
    editorProps: {
      attributes: {
        class:
          'min-h-[150px] p-3 border rounded outline-none bg-neutral-100 text-black border-neutral-300',
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML())
    },
  })

  useEffect(() => {
    if (editor && content && editor.getHTML() !== content) {
      editor.commands.setContent(content)
    }
  }, [editor])

  if (!editor) return null

  return (
    <div className="space-y-2">
      {/* Toolbar */}
      <div className="flex gap-2 flex-wrap bg-neutral-200 p-2 rounded text-sm">
        {[
          { label: 'Gras', action: () => editor.chain().focus().toggleBold().run(), isActive: editor.isActive('bold') },
          { label: 'Italique', action: () => editor.chain().focus().toggleItalic().run(), isActive: editor.isActive('italic') },
          { label: 'H1', action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(), isActive: editor.isActive('heading', { level: 1 }) },
          { label: 'H2', action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(), isActive: editor.isActive('heading', { level: 2 }) },
          { label: 'Liste', action: () => editor.chain().focus().toggleBulletList().run(), isActive: editor.isActive('bulletList') },
        ].map((btn) => (
          <button
            key={btn.label}
            type="button"
            onClick={btn.action}
            className={`px-3 py-1 rounded font-medium transition ${
              btn.isActive
                ? 'bg-blue-600 text-white'
                : 'bg-white text-black border border-neutral-300 hover:bg-neutral-100'
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>

      <EditorContent editor={editor} />
    </div>
  )
}
