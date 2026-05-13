/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useRef, useEffect } from "react";
import { 
  Download, 
  Code2, 
  Layout, 
  Settings2, 
  Smartphone, 
  Monitor, 
  Zap,
  Plus,
  Trash2,
  Copy,
  ChevronRight,
  Eye,
  Type,
  Menu
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { toPng, toJpeg, toSvg } from "html-to-image";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle, 
  SheetTrigger 
} from "@/components/ui/sheet";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";

import { CodeEditor } from "./components/CodeEditor";
import { Preview } from "./components/Preview";
import { TemplateGallery } from "./components/TemplateGallery";
import { templates, Template } from "./templates";

export default function App() {
  const [code, setCode] = useState(templates[0].code);
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0]);
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");
  const [exportFormat, setExportFormat] = useState<"png" | "jpg" | "svg">("png");
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isEditorMaximized, setIsEditorMaximized] = useState(false);
  
  // Hidden ref for export
  const exportRef = useRef<HTMLDivElement>(null);

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template);
    setCode(template.code);
    toast.success(`Template "${template.name}" caricato`);
  };

  const handleExport = async () => {
    if (!exportRef.current) return;

    const id = toast.loading("Esportazione in corso...");
    
    try {
      let dataUrl: string;
      const fileName = `card-${Date.now()}.${exportFormat}`;

      // Configurazione per una migliore qualità
      const options = {
        pixelRatio: 2,
        backgroundColor: "transparent",
        skipFonts: false,
      };

      if (exportFormat === "png") {
        dataUrl = await toPng(exportRef.current, options);
      } else if (exportFormat === "jpg") {
        dataUrl = await toJpeg(exportRef.current, { ...options, quality: 0.95 });
      } else {
        dataUrl = await toSvg(exportRef.current, options);
      }

      const link = document.createElement("a");
      link.download = fileName;
      link.href = dataUrl;
      link.click();
      
      toast.dismiss(id);
      toast.success("Card esportata con successo!");
    } catch (err) {
      console.error(err);
      toast.dismiss(id);
      toast.error("Errore durante l'esportazione");
    }
  };

  return (
    <TooltipProvider>
      <div className="h-screen bg-[#fafafa] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 flex flex-col font-sans overflow-hidden">
        {/* Header */}
        <header className="h-16 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between px-4 md:px-6 bg-white dark:bg-zinc-900 sticky top-0 z-50">
          <div className="flex items-center gap-2 md:gap-3">
            <Sheet>
              <SheetTrigger render={<Button variant="ghost" size="icon" className="lg:hidden" />}>
                <Menu className="w-5 h-5" />
              </SheetTrigger>
              <SheetContent side="left" className="w-80 p-0">
                <div className="flex flex-col h-full bg-white dark:bg-zinc-900">
                  <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 text-left">
                    <SheetTitle className="text-sm font-bold flex items-center gap-2">
                       <Layout className="w-4 h-4 text-indigo-500" />
                       Template
                    </SheetTitle>
                    <SheetDescription className="text-xs">Seleziona uno stile predefinito.</SheetDescription>
                  </div>
                    <div className="flex-1 min-h-0 overflow-hidden">
                      <TemplateGallery 
                        templates={templates} 
                        onSelect={(t) => {
                          handleTemplateSelect(t);
                        }} 
                        selectedId={selectedTemplate?.id}
                      />
                    </div>
                </div>
              </SheetContent>
            </Sheet>

            <div className="w-8 h-8 md:w-10 md:h-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
              <Zap className="w-4 h-4 md:w-6 md:h-6 text-white" fill="currentColor" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-sm md:text-lg font-bold tracking-tight">CardStudio</h1>
              <p className="text-[10px] text-zinc-500 font-medium uppercase tracking-widest hidden md:block">Editor Professionale</p>
            </div>

            <Separator orientation="vertical" className="h-6 hidden lg:block" />

            <Button 
              variant="ghost" 
              size="icon" 
              className="hidden lg:flex h-9 w-9 text-zinc-500" 
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
            >
              <Layout className={`w-4 h-4 transition-transform ${isSidebarVisible ? "rotate-0" : "rotate-180"}`} />
            </Button>
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center bg-zinc-100 dark:bg-zinc-800 rounded-lg p-1">
              <Button 
                variant={viewMode === "desktop" ? "secondary" : "ghost"} 
                size="sm" 
                className="h-8 gap-2 px-2 lg:px-3"
                onClick={() => setViewMode("desktop")}
              >
                <Monitor className="w-4 h-4" />
                <span className="hidden lg:inline">Desktop</span>
              </Button>
              <Button 
                variant={viewMode === "mobile" ? "secondary" : "ghost"} 
                size="sm" 
                className="h-8 gap-2 px-2 lg:px-3"
                onClick={() => setViewMode("mobile")}
              >
                <Smartphone className="w-4 h-4" />
                <span className="hidden lg:inline">Mobile</span>
              </Button>
            </div>

            <Separator orientation="vertical" className="h-6 hidden sm:block" />

            <div className="flex items-center gap-1 md:gap-2">
              <Select value={exportFormat} onValueChange={(v: any) => setExportFormat(v)}>
                <SelectTrigger className="w-[60px] md:w-[80px] h-9">
                  <SelectValue placeholder="Format" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="png">PNG</SelectItem>
                  <SelectItem value="jpg">JPG</SelectItem>
                  <SelectItem value="svg">SVG</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={handleExport} size="sm" className="h-9 gap-1 md:gap-2 shadow-lg shadow-indigo-500/20 px-2 md:px-4">
                <Download className="w-4 h-4" />
                <span className="hidden xs:inline">Esporta</span>
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 flex overflow-hidden flex-col md:flex-row">
          {/* Sidebar Left: Templates (Visible only on LG) */}
          <aside className={`${isSidebarVisible ? "w-64" : "w-0 overflow-hidden border-none"} border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hidden lg:flex flex-col shrink-0 h-full transition-all duration-300`}>
            <div className="p-4 border-b border-zinc-100 dark:border-zinc-800 shrink-0">
              <span className="text-xs font-bold flex items-center gap-2 uppercase tracking-widest text-zinc-400">
                Template Gallery
              </span>
            </div>
            <div className="flex-1 min-h-0 overflow-hidden">
              <TemplateGallery 
                templates={templates} 
                onSelect={handleTemplateSelect} 
                selectedId={selectedTemplate?.id}
              />
            </div>
          </aside>

          {/* Editor Area */}
          <section className="flex-1 flex overflow-hidden relative bg-white dark:bg-zinc-950">
            {/* Tabs for mobile, Side-by-side for desktop/tablet */}
            <Tabs defaultValue="editor" className="flex-1 flex flex-col overflow-hidden">
              <div className="md:hidden h-12 border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 flex items-center justify-center shrink-0">
                <TabsList className="grid w-full max-w-[400px] grid-cols-2 h-9 p-1 bg-zinc-100 dark:bg-zinc-800">
                  <TabsTrigger value="editor" className="text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-700">Editor</TabsTrigger>
                  <TabsTrigger value="preview" className="text-xs font-bold data-[state=active]:bg-white dark:data-[state=active]:bg-zinc-700">Anteprima</TabsTrigger>
                </TabsList>
              </div>

                <div className="flex-1 flex overflow-hidden relative">
                  {/* Desktop Layout: Split Editor and Preview */}
                  <div className="hidden md:flex flex-1 overflow-hidden relative h-full w-full">
                    {/* Editor Console */}
                    <div className={`flex flex-col h-full bg-white dark:bg-zinc-950 border-r border-zinc-200 dark:border-zinc-800 transition-all duration-300 ${isEditorMaximized ? "w-full" : (isSidebarVisible ? "w-[45%] lg:w-[40%]" : "w-[55%] lg:w-[50%]")}`}>
                      <div className="h-10 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-4 bg-zinc-50/50 dark:bg-zinc-900 justify-between shrink-0">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                            <Code2 className="w-3.5 h-3.5" />
                            Sorgente
                          </div>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="h-6 px-2 text-[8px] font-bold uppercase tracking-widest flex items-center gap-1"
                            onClick={() => setIsEditorMaximized(!isEditorMaximized)}
                          >
                            {isEditorMaximized ? (
                              <><span>Contrai</span> <ChevronRight className="w-3 h-3 rotate-180" /></>
                            ) : (
                              <><span>Espandi</span> <ChevronRight className="w-3 h-3" /></>
                            )}
                          </Button>
                        </div>
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => {
                              navigator.clipboard.writeText(code);
                              toast.success("Codice copiato");
                            }}
                            className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 hover:text-zinc-800 transition-colors flex items-center gap-1"
                          >
                            <Copy className="w-3 h-3" />
                            Copia
                          </button>
                          <button 
                            onClick={() => setCode("")}
                            className="text-[10px] uppercase tracking-wider font-bold text-red-500 hover:text-red-700 transition-colors flex items-center gap-1"
                          >
                            <Trash2 className="w-3 h-3" />
                            Pulisci
                          </button>
                        </div>
                      </div>
                      <div className="flex-1 relative overflow-hidden">
                        <CodeEditor code={code} onChange={(v) => setCode(v || "")} />
                      </div>
                    </div>

                    {/* Preview Stage (Desktop) */}
                    {!isEditorMaximized && (
                      <div className="flex-1 bg-zinc-100 dark:bg-zinc-950 flex flex-col overflow-hidden">
                        <div className="h-10 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between w-full px-6 bg-zinc-50/30 dark:bg-zinc-900 shrink-0">
                          <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                            <Eye className="w-3.5 h-3.5" />
                            Live Preview
                          </div>
                          <div className="flex items-center gap-1 text-[10px] text-green-500 font-bold uppercase tracking-widest">
                            <div className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                            Live
                          </div>
                        </div>

                        <div className="flex-1 overflow-auto bg-zinc-100 dark:bg-zinc-950/50 p-4 md:p-8 flex justify-center items-center">
                          <div className={`transition-all duration-500 ease-in-out relative flex flex-col items-center ${viewMode === "mobile" ? "w-[320px] h-[560px] md:w-[375px] md:h-[667px]" : "w-full h-full max-w-5xl"}`}>
                            <div className={`w-full h-full bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl border border-zinc-200 dark:border-zinc-800 overflow-hidden relative group`}>
                              <Preview code={code} />
                              
                              {viewMode === "mobile" && (
                                <div className="absolute top-0 inset-x-0 h-4 md:h-6 bg-zinc-900 flex items-center justify-between px-4 md:px-6 pointer-events-none select-none z-10 font-sans">
                                  <span className="text-[8px] md:text-[10px] text-white font-medium">9:41</span>
                                  <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white/20"></div>
                                    <div className="w-4 h-1 md:h-1.5 bg-white/20 rounded-full"></div>
                                  </div>
                                </div>
                              )}
                            </div>
                            {viewMode === "desktop" && (
                              <div className="mt-4 text-center text-zinc-400 text-[10px] uppercase font-bold tracking-[0.2em] italic">
                                Preview Rendered at 60 FPS
                              </div>
                            )}
                          </div>
                        </div>
                        
                        <div className="p-3 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800 text-[10px] text-zinc-400 font-medium uppercase tracking-widest flex items-center justify-center gap-4 shrink-0">
                          <span className="flex items-center gap-1.5 italic"><Zap className="w-3 h-3 text-indigo-500" /> Tailwind v4 Engine</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Mobile Layout: Tabs */}
                  <div className="flex md:hidden flex-1 flex-col overflow-hidden">
                    <TabsContent value="editor" className="m-0 flex-1 flex flex-col h-full bg-white dark:bg-zinc-950">
                      <div className="h-10 border-b border-zinc-200 dark:border-zinc-800 flex items-center px-4 bg-zinc-50/50 dark:bg-zinc-900 justify-between shrink-0">
                        <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                          <Code2 className="w-3.5 h-3.5" />
                          Sorgente
                        </div>
                        <div className="flex items-center gap-3">
                          <button onClick={() => { navigator.clipboard.writeText(code); toast.success("Codice copiato"); }} className="text-[10px] font-bold text-zinc-500 flex items-center gap-1"><Copy className="w-3 h-3" /> Copia</button>
                          <button onClick={() => setCode("")} className="text-[10px] font-bold text-red-500 flex items-center gap-1"><Trash2 className="w-3 h-3" /> Pulisci</button>
                        </div>
                      </div>
                      <div className="flex-1 relative overflow-hidden">
                        <CodeEditor code={code} onChange={(v) => setCode(v || "")} />
                      </div>
                    </TabsContent>

                    <TabsContent value="preview" className="m-0 flex-1 bg-zinc-100 dark:bg-zinc-950 flex flex-col overflow-hidden">
                      <div className="flex-1 overflow-auto p-4 flex justify-center items-center h-full">
                        <div className="w-full h-full bg-white dark:bg-zinc-900 rounded-2xl shadow-xl overflow-hidden relative">
                           <Preview code={code} />
                        </div>
                      </div>
                    </TabsContent>
                  </div>
                </div>
            </Tabs>
          </section>
        </main>

        {/* Hidden Export Engine using Tailwind Play CDN or similar to ensure same styles */}
        {/* We inject the code here too for html-to-image */}
        <div style={{ position: "absolute", left: "-9999px", top: "-9999px" }}>
           <div 
             ref={exportRef} 
             className="relative"
             style={{ width: "fit-content", height: "fit-content", minWidth: "320px" }}
             dangerouslySetInnerHTML={{ __html: `
               <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
               <style>body { margin: 0; padding: 0; }</style>
               <div id="export-target">
                 ${code}
               </div>
             `}}
           />
        </div>

        <Toaster position="bottom-right" closeButton />
      </div>
    </TooltipProvider>
  );
}

