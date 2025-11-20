import { useState } from "react";
import { AbcPreview } from "./components/AbcPreview";

function App() {
  const [abc, setAbc] = useState(`X:1
T:タイトル
M:4/4
K:C
C D E F | G A B c |`);

  return (
    <div className="h-screen flex bg-slate-950">
      {/* 左側: エディタ */}
      <div className="w-1/2 border-r border-slate-700 flex flex-col p-4" style={{ backgroundColor: '#161616' }}>
        <textarea
          className="w-full h-full resize-none px-4 py-4 text-sm font-mono leading-relaxed text-slate-100 outline-none rounded-lg border border-slate-600 focus:border-slate-500 transition-colors"
          style={{ backgroundColor: '#1a1a1a' }}
          value={abc}
          onChange={(e) => setAbc(e.target.value)}
          spellCheck={false}
          placeholder="ABC記法を入力..."
        />
      </div>

      {/* 右側: プレビュー */}
      <div className="w-1/2 overflow-auto p-6" style={{ backgroundColor: '#161616' }}>
        <AbcPreview abc={abc} />
      </div>
    </div>
  );
}

export default App;
