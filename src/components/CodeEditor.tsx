import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  code: string;
  onChange: (value: string | undefined) => void;
}

export function CodeEditor({ code, onChange }: CodeEditorProps) {
  return (
    <div className="w-full h-full border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden shadow-sm bg-zinc-950">
      <Editor
        height="100%"
        defaultLanguage="html"
        value={code}
        onChange={onChange}
        theme="vs-dark"
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: "on",
          roundedSelection: false,
          scrollBeyondLastLine: false,
          readOnly: false,
          cursorStyle: "line",
          automaticLayout: true,
          padding: { top: 16 },
          fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
        }}
      />
    </div>
  );
}
