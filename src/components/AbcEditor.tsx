interface AbcEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const AbcEditor = ({ value, onChange }: AbcEditorProps) => {
  return (
    <div className="w-1/2 border-r border-slate-700 flex flex-col p-4" style={{ backgroundColor: '#161616' }}>
      <textarea
        className="w-full h-full resize-none px-4 py-4 text-sm font-mono leading-relaxed text-slate-100 outline-none rounded-lg border border-slate-600 focus:border-slate-500 transition-colors"
        style={{ backgroundColor: '#1a1a1a' }}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        spellCheck={false}
        placeholder="ABC記法を入力..."
      />
    </div>
  );
};
