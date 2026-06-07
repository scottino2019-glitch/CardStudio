export interface Template {
  id: string;
  name: string;
  description: string;
  code: string;
  thumbnail?: string;
}

export const templates: Template[] = [
  {
    id: "language-card",
    name: "Language Flashcard",
    description: "La card mostrata nell'esempio, perfetta per lo studio delle lingue.",
    code: `<div class="p-8 flex items-center justify-center min-h-full">
  <div class="relative w-[320px] h-[560px] rounded-3xl bg-[#ff8f95] p-4 overflow-hidden shadow-2xl">
    <div class="absolute top-20 -left-5 w-40 h-40 rounded-3xl bg-[#8fd5ff] [background-image:linear-gradient(#ffffff55_1px,transparent_1px),linear-gradient(90deg,#ffffff55_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="absolute bottom-10 -right-5 w-40 h-40 rounded-3xl bg-[#ffd57a] [background-image:linear-gradient(#ffffff55_1px,transparent_1px),linear-gradient(90deg,#ffffff55_1px,transparent_1px)] [background-size:16px_16px]"></div>
    <div class="relative w-full h-full bg-white rounded-2xl shadow-lg px-6 pt-6 pb-8 flex flex-col items-center justify-between">
      <div class="w-full flex items-center justify-between text-xs font-medium text-gray-700">
        <span>3/100</span>
        <div class="flex items-center gap-3">
          <div class="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 shadow-sm text-[10px] font-semibold text-gray-700">10"</div>
          <div class="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 shadow-sm text-[10px] font-semibold text-gray-700">10"</div>
        </div>
      </div>
      <div class="relative flex flex-col items-center justify-center gap-3">
        <span class="text-4xl font-semibold text-gray-900 italic">가족</span>
      </div>
      <div class="w-full flex items-center justify-between text-xs text-gray-500">
        <span class="text-[11px]">Tocca per ascoltare</span>
        <div class="flex gap-2">
          <div class="px-3 py-1.5 rounded-full bg-[#ff8f95] text-[11px] font-semibold text-white shadow-md cursor-pointer">Indietro</div>
          <div class="px-3 py-1.5 rounded-full bg-[#ffbd4a] text-[11px] font-semibold text-gray-900 shadow-md cursor-pointer">Avanti</div>
        </div>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "folder-card",
    name: "File Folder",
    description: "Una card a forma di cartella in stile Neubrutalist.",
    code: `<div class="p-12 flex items-center justify-center min-h-full">
  <div class="relative w-80">
    <!-- Folder Tab -->
    <div class="w-24 h-8 bg-amber-400 border-x-4 border-t-4 border-black rounded-t-lg ml-2"></div>
    <!-- Folder Body -->
    <div class="w-full h-56 bg-amber-300 border-4 border-black rounded-b-xl rounded-tr-xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6">
      <div class="flex flex-col h-full justify-between italic">
        <div>
          <div class="text-xs font-black uppercase tracking-tighter mb-1">Project_Alpha_2026</div>
          <div class="h-1 bg-black w-12 mb-4"></div>
          <div class="text-3xl font-black text-black leading-tight">DOCUMENTI<br/>RISERVATI</div>
        </div>
        <div class="flex items-center justify-between">
          <div class="w-10 h-10 rounded-full border-2 border-black flex items-center justify-center bg-white">
            <span class="text-lg">📂</span>
          </div>
          <div class="text-[10px] font-bold uppercase">v.1.0.4</div>
        </div>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "audio-mixer",
    name: "Studio Mixer",
    description: "Interfaccia mixer audio professionale dark.",
    code: `<div class="p-8 flex items-center justify-center min-h-full bg-zinc-950">
  <div class="w-72 bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-2xl">
    <div class="flex items-center justify-between mb-8">
      <div class="text-[10px] font-bold text-zinc-500 uppercase tracking-[0.2em]">Master Out</div>
      <div class="flex gap-1">
        <div class="w-1 h-3 bg-green-500 rounded-full"></div>
        <div class="w-1 h-3 bg-green-500 rounded-full"></div>
        <div class="w-1 h-3 bg-yellow-500 rounded-full"></div>
        <div class="w-1 h-3 bg-zinc-700 rounded-full"></div>
      </div>
    </div>
    
    <div class="space-y-8">
      <!-- Faders -->
      <div class="flex justify-between items-end h-40 px-4">
        <div class="flex flex-col items-center gap-2">
          <div class="w-1 h-32 bg-zinc-800 rounded-full relative">
            <div class="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-6 h-10 bg-zinc-100 rounded border border-zinc-400 shadow-lg cursor-pointer flex items-center justify-center">
              <div class="w-4 h-[1px] bg-zinc-300"></div>
            </div>
          </div>
          <span class="text-[8px] font-bold text-zinc-600">CH 1</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="w-1 h-32 bg-zinc-800 rounded-full relative">
            <div class="absolute bottom-1/2 left-1/2 -translate-x-1/2 w-6 h-10 bg-indigo-500 rounded shadow-lg cursor-pointer flex items-center justify-center">
              <div class="w-4 h-[2px] bg-white/30"></div>
            </div>
          </div>
          <span class="text-[8px] font-bold text-zinc-400">VOX</span>
        </div>
        <div class="flex flex-col items-center gap-2">
          <div class="w-1 h-32 bg-zinc-800 rounded-full relative">
            <div class="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-10 bg-zinc-100 rounded border border-zinc-400 shadow-lg cursor-pointer flex items-center justify-center">
              <div class="w-4 h-[1px] bg-zinc-300"></div>
            </div>
          </div>
          <span class="text-[8px] font-bold text-zinc-600">FX</span>
        </div>
      </div>
      
      <!-- Knobs -->
      <div class="grid grid-cols-3 gap-4 pt-4 border-t border-zinc-800">
        <div class="flex flex-col items-center gap-1.5">
          <div class="w-8 h-8 rounded-full border-2 border-zinc-700 bg-zinc-800 relative shadow-inner">
            <div class="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-zinc-500 rounded-full"></div>
          </div>
          <div class="text-[6px] text-zinc-500 font-bold uppercase">Gain</div>
        </div>
        <div class="flex flex-col items-center gap-1.5">
          <div class="w-8 h-8 rounded-full border-2 border-indigo-500 bg-zinc-800 relative shadow-inner">
            <div class="absolute top-1 left-2 w-1 h-2 bg-indigo-400 rounded-full -rotate-45"></div>
          </div>
          <div class="text-[6px] text-zinc-500 font-bold uppercase">Comp</div>
        </div>
        <div class="flex flex-col items-center gap-1.5">
          <div class="w-8 h-8 rounded-full border-2 border-zinc-700 bg-zinc-800 relative shadow-inner">
            <div class="absolute top-1 left-1/2 -translate-x-1/2 w-1 h-2 bg-zinc-500 rounded-full"></div>
          </div>
          <div class="text-[6px] text-zinc-500 font-bold uppercase">Rev</div>
        </div>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "cute-kitten",
    name: "Cuddly Kitten",
    description: "Card adorabile con un vero micetto.",
    code: `<div class="p-8 flex items-center justify-center min-h-full bg-rose-50">
  <div class="w-72 bg-white rounded-[2.5rem] border-4 border-rose-100 shadow-xl overflow-hidden p-6">
    <div class="aspect-square bg-zinc-100 rounded-3xl mb-6 relative overflow-hidden ring-4 ring-rose-50 italic">
      <img src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover hover:scale-110 transition-transform duration-700" alt="Kitten"/>
      <div class="absolute bottom-3 left-3 bg-white/80 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-rose-500 shadow-sm uppercase tracking-wider">Miao! 🐾</div>
    </div>
    <div class="text-center">
      <h3 class="text-xl font-black text-rose-900 mb-1">Mochi il Micetto</h3>
      <p class="text-xs text-rose-400 font-medium mb-6">Cerco grattini e croccantini.</p>
      
      <div class="flex gap-2">
        <button class="flex-1 h-12 bg-rose-400 rounded-2xl text-white font-bold text-sm shadow-lg shadow-rose-200 hover:bg-rose-500 transition-colors">Adottami</button>
        <button class="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-rose-400 border-2 border-rose-100 hover:bg-rose-50 transition-colors shadow-sm">❤️</button>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "cat-shape-custom",
    name: "Cat Shape Card",
    description: "Una card a forma di gatto, realizzata con CSS e Tailwind.",
    code: `<div class="p-8 flex items-center justify-center min-h-full bg-orange-50/50">
  <div class="relative w-80 h-96 flex flex-col items-center justify-center">
    <!-- Ears -->
    <div class="absolute top-4 left-14 w-20 h-20 bg-orange-400 rotate-[-15deg] rounded-tl-[2.5rem] border-[6px] border-black"></div>
    <div class="absolute top-4 right-14 w-20 h-20 bg-orange-400 rotate-[15deg] rounded-tr-[2.5rem] border-[6px] border-black"></div>
    
    <!-- Head -->
    <div class="relative w-72 h-64 bg-orange-400 border-[6px] border-black rounded-[5rem] shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col items-center justify-center overflow-hidden">
      <!-- Face -->
      <div class="flex gap-16 mb-6">
        <div class="w-5 h-5 bg-black rounded-full animate-pulse"></div>
        <div class="w-5 h-5 bg-black rounded-full animate-pulse"></div>
      </div>
      <!-- Nose & Mouth -->
      <div class="relative flex flex-col items-center">
        <div class="w-6 h-4 bg-pink-400 rounded-full mb-1"></div>
        <div class="flex gap-0.5">
          <div class="w-4 h-4 border-b-4 border-r-4 border-black rounded-full"></div>
          <div class="w-4 h-4 border-b-4 border-l-4 border-black rounded-full"></div>
        </div>
      </div>
      <!-- Whiskers -->
      <div class="absolute left-6 top-1/2 -translate-y-1/2 space-y-3">
        <div class="w-12 h-1 bg-black/20 rotate-[10deg]"></div>
        <div class="w-14 h-1 bg-black/20"></div>
        <div class="w-12 h-1 bg-black/20 -rotate-[10deg]"></div>
      </div>
      <div class="absolute right-6 top-1/2 -translate-y-1/2 space-y-3">
        <div class="w-12 h-1 bg-black/20 -rotate-[10deg]"></div>
        <div class="w-14 h-1 bg-black/20"></div>
        <div class="w-12 h-1 bg-black/20 rotate-[10deg]"></div>
      </div>
      
      <!-- Content Overlay -->
      <div class="absolute bottom-6 bg-white px-6 py-2.5 rounded-3xl border-4 border-black text-xs font-black uppercase tracking-widest shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
        MIAO STUDIO 🐾
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "gameboy-card",
    name: "Retro Gamer",
    description: "Card in stile console portatile classica.",
    code: `<div class="p-8 flex items-center justify-center min-h-full bg-zinc-200">
  <div class="w-72 bg-[#9ca3af] border-[6px] border-black rounded-[2rem] p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] flex flex-col gap-6 font-mono">
    <!-- Screen -->
    <div class="w-full bg-[#8b938b] border-4 border-black rounded-lg p-4 aspect-[5/4] flex flex-col items-center justify-center relative overflow-hidden">
       <div class="absolute top-2 left-2 w-1.5 h-1.5 bg-red-600 rounded-full animate-pulse shadow-[0_0_8px_rgba(220,38,38,0.8)]"></div>
       <div class="text-xl font-black text-zinc-900/40 uppercase tracking-widest rotate-[-2deg]">DOT MATRIX</div>
       <div class="text-3xl font-black text-black tracking-tighter mt-2">LEVEL 99</div>
    </div>
    
    <!-- Controls -->
    <div class="flex justify-between items-start mt-4">
      <!-- D-Pad -->
      <div class="relative w-16 h-16 bg-black/10 rounded-full flex items-center justify-center">
        <div class="w-12 h-4 bg-black rounded shrink-0 absolute"></div>
        <div class="h-12 w-4 bg-black rounded shrink-0 absolute"></div>
      </div>
      
      <!-- Buttons -->
      <div class="flex gap-3 rotate-[-20deg]">
        <div class="w-10 h-10 bg-[#7c2d12] rounded-full border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white font-black">A</div>
        <div class="w-10 h-10 bg-[#7c2d12] rounded-full border-4 border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] flex items-center justify-center text-white font-black">B</div>
      </div>
    </div>
    
    <!-- Bottom info -->
    <div class="flex justify-center gap-4 mt-2">
      <div class="w-8 h-2 bg-black/20 rounded-full rotate-[-45deg]"></div>
      <div class="w-8 h-2 bg-black/20 rounded-full rotate-[-45deg]"></div>
    </div>
  </div>
</div>`
  },
  {
    id: "polaroid-memory",
    name: "Polaroid Shot",
    description: "Una foto istantanea con dedica.",
    code: `<div class="p-8 flex items-center justify-center min-h-full bg-zinc-100/50">
  <div class="bg-white p-4 pb-12 shadow-2xl rotate-[-2deg] hover:rotate-0 transition-transform duration-500 cursor-pointer">
    <div class="w-64 aspect-square bg-zinc-200 overflow-hidden mb-6 relative">
      <img src="https://images.unsplash.com/photo-1518173946687-a4c8a9ba332f?auto=format&fit=crop&q=80&w=600" class="w-full h-full object-cover grayscale-[30%]" alt="Nature"/>
      <div class="absolute inset-0 bg-orange-500/10 mix-blend-overlay"></div>
    </div>
    <div class="font-serif text-2xl text-zinc-800 text-center italic">
      Ricordi d'estate ✨
    </div>
  </div>
</div>`
  },
  {
    id: "love-letter",
    name: "Love Letter",
    description: "Un messaggio dolce in una busta.",
    code: `<div class="p-8 flex items-center justify-center min-h-full bg-rose-50">
  <div class="relative w-80 h-56 bg-white border-2 border-rose-100 rounded-lg shadow-xl flex flex-col items-center justify-center p-8 overflow-hidden hover:scale-105 transition-transform">
    <div class="absolute top-0 inset-x-0 h-1 bg-rose-400"></div>
    <!-- Heart Icon -->
    <div class="text-4xl mb-4 animate-bounce">💌</div>
    <div class="text-center">
      <p class="font-serif text-lg text-rose-900 leading-tight">Ho qualcosa di speciale da dirti...</p>
      <p class="text-[10px] text-rose-300 uppercase tracking-widest font-black mt-4">Apri per leggere</p>
    </div>
    <!-- Stamp -->
    <div class="absolute bottom-4 right-4 w-10 h-10 border-2 border-rose-200 rounded-md flex items-center justify-center text-xs text-rose-200 font-bold rotate-12">
      LOVE
    </div>
  </div>
</div>`
  },
  {
    id: "gradient-social",
    name: "Gradient Social",
    description: "Card colorata ideale per Instagram o Twitter.",
    code: `<div class="p-8 flex items-center justify-center min-h-full bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
  <div class="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl w-full max-w-sm">
    <div class="flex items-center gap-4 mb-8">
      <div class="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-lg transform -rotate-6">
        <svg class="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div>
        <div class="text-white font-bold text-lg">Card Studio</div>
        <div class="text-white/60 text-xs">@cardstudio_ai</div>
      </div>
    </div>
    
    <div class="text-2xl font-semibold text-white leading-relaxed mb-6 italic">
      Crea contenuti incredibili in pochi secondi direttamente nel browser. 🚀
    </div>
    
    <div class="flex items-center justify-between text-white/40 text-xs uppercase tracking-widest font-bold pt-6 border-t border-white/10">
      <span>13 Maggio 2026</span>
      <span>Live Preview</span>
    </div>
  </div>
</div>`
  },
  {
    id: "dev-snippet",
    name: "Code Snippet",
    description: "Snippet di codice con stile editor.",
    code: `<div class="p-8 bg-zinc-950 flex items-center justify-center min-h-full">
  <div class="w-full max-w-lg bg-[#1e1e1e] rounded-xl border border-zinc-800 shadow-2xl overflow-hidden font-mono">
    <div class="flex items-center gap-2 px-4 py-3 bg-[#2d2d2d] border-b border-zinc-800">
      <div class="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
      <div class="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
      <div class="w-3 h-3 rounded-full bg-[#27c93f]"></div>
      <div class="ml-4 text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Preview.tsx</div>
    </div>
    <div class="p-6 text-xs sm:text-sm leading-relaxed">
      <div class="flex gap-4">
        <div class="text-zinc-600 text-right select-none w-4">
          1<br/>2<br/>3<br/>4
        </div>
        <div class="text-zinc-300">
          <span class="text-purple-400">export function</span> <span class="text-yellow-200 italic">Preview</span>() {<br/>
          &nbsp;&nbsp;<span class="text-purple-400">return</span> (<br/>
          &nbsp;&nbsp;&nbsp;&nbsp;<span class="text-blue-300">&lt;div</span> <span class="text-green-300">className</span>=<span class="text-orange-300">"studio"</span><span class="text-blue-300">&gt;</span><br/>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Live Engine<br/>
          &nbsp;&nbsp;);<br/>
          }
        </div>
      </div>
    </div>
  </div>
</div>`
  },
  {
    id: "brutalist-event",
    name: "Brutalist Card",
    description: "Stile grafico audace e contrastato.",
    code: `<div class="p-8 flex items-center justify-center min-h-full">
  <div class="w-80 bg-yellow-400 border-[6px] border-black p-6 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
    <div class="text-5xl font-black uppercase leading-none mb-8">BRUTAL<br/>DESIGN</div>
    <div class="bg-black text-white px-3 py-1 text-xs font-bold uppercase inline-block mb-4">Limited Edition</div>
    <p class="text-xs font-bold leading-tight uppercase italic mb-8">Il design che urla. Semplice, crudo, onesto.</p>
    <div class="flex justify-between items-end border-t-4 border-black pt-4">
       <span class="text-xs font-black">2026</span>
       <span class="text-3xl font-black">01</span>
    </div>
  </div>
</div>`
  },
  {
    id: "glass-product",
    name: "Glass Product",
    description: "Card prodotto con effetto vetro.",
    code: `<div class="p-8 flex items-center justify-center min-h-full bg-[url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800')] bg-cover bg-center">
  <div class="bg-white/20 backdrop-blur-2xl border border-white/30 rounded-[2.5rem] p-8 shadow-2xl w-full max-w-sm">
    <div class="aspect-square rounded-3xl bg-black/5 mb-6 flex items-center justify-center relative group overflow-hidden">
      <div class="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
         <span class="text-5xl">🎧</span>
      </div>
      <div class="absolute top-4 right-4 bg-indigo-500 text-white text-[8px] font-bold px-3 py-1 rounded-full uppercase tracking-widest shadow-lg">New Gen</div>
    </div>
    <h3 class="text-2xl font-bold text-white mb-2">Sonic Studio</h3>
    <p class="text-white/80 text-xs leading-relaxed mb-8">Audio spaziale ad alta fedeltà con cancellazione attiva del rumore.</p>
    <div class="flex items-center justify-between">
      <span class="text-2xl font-black text-white">$249</span>
      <button class="bg-white text-zinc-900 h-10 px-6 rounded-xl font-bold text-xs hover:bg-zinc-100 transition-colors">Buy</button>
    </div>
  </div>
</div>`
  },
  {
    id: "design-palette",
    name: "Color Palette",
    description: "Card tavolozza colori per designer.",
    code: `<div class="p-8 flex items-center justify-center min-h-full bg-zinc-50">
  <div class="w-80 bg-white border border-zinc-200 rounded-3xl shadow-2xl p-6 font-mono">
    <div class="flex items-center gap-3 mb-8">
      <div class="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-white italic">P</div>
      <div>
        <div class="text-xs font-bold text-zinc-900 italic">TAVOLOZZA_04</div>
        <div class="text-[8px] text-zinc-400 italic uppercase">Summer Gradient</div>
      </div>
    </div>
    
    <div class="space-y-2 mb-8">
      <div class="group relative flex items-center h-12 bg-[#FF6B6B] rounded-xl px-4 cursor-pointer hover:scale-[1.02] transition-transform">
        <span class="text-[10px] text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">#FF6B6B</span>
      </div>
      <div class="group relative flex items-center h-12 bg-[#FFD93D] rounded-xl px-4 cursor-pointer hover:scale-[1.02] transition-transform">
         <span class="text-[10px] text-zinc-800 font-bold opacity-0 group-hover:opacity-100 transition-opacity">#FFD93D</span>
      </div>
      <div class="group relative flex items-center h-12 bg-[#6BCB77] rounded-xl px-4 cursor-pointer hover:scale-[1.02] transition-transform">
         <span class="text-[10px] text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">#6BCB77</span>
      </div>
      <div class="group relative flex items-center h-12 bg-[#4D96FF] rounded-xl px-4 cursor-pointer hover:scale-[1.02] transition-transform">
         <span class="text-[10px] text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity">#4D96FF</span>
      </div>
    </div>
    
    <div class="flex justify-between items-center text-[8px] text-zinc-400 font-bold uppercase border-t border-zinc-100 pt-4">
      <span>RGB / HEX</span>
      <span>V.2.0</span>
    </div>
  </div>
</div>`
  },
  {
    id: "minimal-quote",
    name: "Minimal Quote",
    description: "Una citazione elegante e pulita.",
    code: `<div class="p-8 flex items-center justify-center min-h-full bg-zinc-50">
  <div class="max-w-md w-full">
    <div class="text-6xl text-zinc-300 font-serif mb-4 leading-none select-none">“</div>
    <div class="text-3xl font-medium tracking-tight text-zinc-900 leading-tight">
      Il design non è come sembra o come appare. Il design è come funziona.
    </div>
    <div class="mt-8 flex items-center gap-3">
      <div class="w-10 h-0.5 bg-zinc-300"></div>
      <div class="text-sm font-semibold tracking-wider uppercase text-zinc-500">Steve Jobs</div>
    </div>
  </div>
</div>`
  }, 
  {
    id: "quaderno",
    name: "Quaderno con anelli",
    descritption: "Un quaderno con anelli superiori",
    code: `<div class="relative rounded-[28px] border border-neutral-300 bg-white p-6 pt-12 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <!-- header quaderno -->
      <div class="absolute inset-x-0 top-0 h-8 rounded-t-[28px] bg-[#dbeafe]"></div>

      <!-- anelli -->
      <div class="absolute left-10 top-0 h-6 w-4 -translate-y-1/2 rounded-full border-[3px] border-neutral-500 bg-neutral-100"></div>
      <div class="absolute left-24 top-0 h-6 w-4 -translate-y-1/2 rounded-full border-[3px] border-neutral-500 bg-neutral-100"></div>
      <div class="absolute left-38 top-0 h-6 w-4 -translate-y-1/2 rounded-full border-[3px] border-neutral-500 bg-neutral-100"></div>
      <div class="absolute left-52 top-0 h-6 w-4 -translate-y-1/2 rounded-full border-[3px] border-neutral-500 bg-neutral-100"></div>

      <div class="relative z-10">
        <span class="mb-3 inline-block rounded-full bg-sky-100 px-3 py-1 text-xs font-semibold text-sky-700">
          Raccolta link
        </span>

        <h2 class="mb-4 text-xl font-bold text-neutral-800">
          Quaderno ad anelli
        </h2>

        <div class="space-y-3">
          <a href="#" class="block rounded-xl bg-neutral-50 px-4 py-3 text-neutral-700 ring-1 ring-neutral-200 transition hover:-translate-y-0.5 hover:bg-sky-50 hover:text-neutral-900 hover:ring-sky-200">
            Portfolio
          </a>
          <a href="#" class="block rounded-xl bg-neutral-50 px-4 py-3 text-neutral-700 ring-1 ring-neutral-200 transition hover:-translate-y-0.5 hover:bg-sky-50 hover:text-neutral-900 hover:ring-sky-200">
            Figma file
          </a>
          <a href="#" class="block rounded-xl bg-neutral-50 px-4 py-3 text-neutral-700 ring-1 ring-neutral-200 transition hover:-translate-y-0.5 hover:bg-sky-50 hover:text-neutral-900 hover:ring-sky-200">
            Risorse studio
          </a>
        </div>
      </div>
    </div>`
      },
   {
    id: "agenda",
    name: "Agenda",
    descritption: "Un foglio di agenda",
    code:  `<div class="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

    <!-- CARD 1: Block notes con i buchi -->
    <div class="relative rounded-[28px] border border-neutral-300 bg-[#fffdf7] p-6 pl-10 shadow-[0_10px_30px_rgba(0,0,0,0.08)]">
      <!-- fascia sinistra -->
      <div class="absolute inset-y-0 left-0 w-8 rounded-l-[28px] bg-[#f3efe3]"></div>

      <!-- buchi -->
      <div class="absolute left-2 top-8 h-3.5 w-3.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
      <div class="absolute left-2 top-20 h-3.5 w-3.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
      <div class="absolute left-2 top-32 h-3.5 w-3.5 rounded-full border border-neutral-300 bg-neutral-100"></div>
      <div class="absolute left-2 top-44 h-3.5 w-3.5 rounded-full border border-neutral-300 bg-neutral-100"></div>

      <div class="relative z-10">
        <span class="mb-3 inline-block rounded-full bg-amber-200 px-3 py-1 text-xs font-semibold text-neutral-700">
          Link utili
        </span>

        <h2 class="mb-4 text-xl font-bold text-neutral-800">
          Block notes con fori
        </h2>

        <div class="space-y-3">
          <a href="#" class="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 transition hover:-translate-y-0.5 hover:bg-amber-50 hover:text-neutral-900 hover:shadow-sm">
            Dashboard progetto
          </a>
          <a href="#" class="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 transition hover:-translate-y-0.5 hover:bg-amber-50 hover:text-neutral-900 hover:shadow-sm">
            Documentazione
          </a>
          <a href="#" class="block rounded-xl border border-neutral-200 bg-white px-4 py-3 text-neutral-700 transition hover:-translate-y-0.5 hover:bg-amber-50 hover:text-neutral-900 hover:shadow-sm">
            Repository GitHub
          </a>
        </div>
      </div>
    </div>` 
   }
];

