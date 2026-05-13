import { Template } from "@/src/templates";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TemplateGalleryProps {
  templates: Template[];
  onSelect: (template: Template) => void;
  selectedId?: string;
}

export function TemplateGallery({ templates, onSelect, selectedId }: TemplateGalleryProps) {
  return (
    <ScrollArea className="h-full">
      <div className="grid grid-cols-1 gap-4 p-4 pb-8">
        {templates.map((template) => (
          <Card
            key={template.id}
            className={`cursor-pointer transition-all hover:ring-2 hover:ring-indigo-500/50 ${
              selectedId === template.id ? "ring-2 ring-indigo-500" : ""
            }`}
            onClick={() => onSelect(template)}
          >
            <CardHeader className="p-4">
              <CardTitle className="text-sm font-bold">{template.name}</CardTitle>
              <CardDescription className="text-xs line-clamp-1">
                {template.description}
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </ScrollArea>
  );
}
