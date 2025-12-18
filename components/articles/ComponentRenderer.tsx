/**
 * Component Renderer for Articles
 * 
 * Renders different UI components based on metadata from article processing
 * Handles tables, checklists, flowcharts, templates, and structured lists
 */

'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Download, ExternalLink, ChevronRight, ChevronDown } from 'lucide-react';

export interface ComponentMetadata {
  type: 'table' | 'checklist' | 'flowchart' | 'template' | 'list';
  label: string;
  section: string;
  id: string;
  template_link?: string;
}

interface ComponentRendererProps {
  components: ComponentMetadata[];
  content: string;
  className?: string;
}

export default function ComponentRenderer({ components, content, className = '' }: ComponentRendererProps) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});

  // Parse content to extract component sections
  const parsedComponents = parseContentComponents(content, components);

  const toggleCheckItem = (componentId: string, itemIndex: number) => {
    const key = `${componentId}-${itemIndex}`;
    setCheckedItems(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const toggleSection = (componentId: string) => {
    setExpandedSections(prev => ({
      ...prev,
      [componentId]: !prev[componentId]
    }));
  };

  const downloadTemplate = async (templateLink: string, label: string) => {
    try {
      // In a real implementation, this would fetch the template
      const response = await fetch(templateLink);
      const content = await response.text();
      
      const blob = new Blob([content], { type: 'text/markdown' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${label.toLowerCase().replace(/\s+/g, '-')}.md`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to download template:', error);
    }
  };

  return (
    <div className={`component-renderer ${className}`}>
      {parsedComponents.map((component, index) => (
        <ComponentSection
          key={`${component.metadata.id}-${index}`}
          component={component}
          checkedItems={checkedItems}
          expandedSections={expandedSections}
          onToggleCheck={toggleCheckItem}
          onToggleSection={toggleSection}
          onDownloadTemplate={downloadTemplate}
        />
      ))}
    </div>
  );
}

interface ParsedComponent {
  metadata: ComponentMetadata;
  content: string;
  items?: string[];
}

interface ComponentSectionProps {
  component: ParsedComponent;
  checkedItems: Record<string, boolean>;
  expandedSections: Record<string, boolean>;
  onToggleCheck: (componentId: string, itemIndex: number) => void;
  onToggleSection: (componentId: string) => void;
  onDownloadTemplate: (templateLink: string, label: string) => void;
}

function ComponentSection({
  component,
  checkedItems,
  expandedSections,
  onToggleCheck,
  onToggleSection,
  onDownloadTemplate
}: ComponentSectionProps) {
  const { metadata, content, items = [] } = component;
  const isExpanded = expandedSections[metadata.id] ?? true;

  const renderComponentHeader = () => (
    <div className="component-header">
      <button
        onClick={() => onToggleSection(metadata.id)}
        className="component-toggle"
        aria-expanded={isExpanded}
      >
        {isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
        <span className="component-type-badge">{metadata.type}</span>
        <span className="component-label">{metadata.label}</span>
      </button>
      
      {metadata.template_link && (
        <button
          onClick={() => onDownloadTemplate(metadata.template_link!, metadata.label)}
          className="template-download-btn"
          title="Download template"
        >
          <Download size={16} />
        </button>
      )}
    </div>
  );

  const renderComponentContent = () => {
    if (!isExpanded) return null;

    switch (metadata.type) {
      case 'checklist':
        return renderChecklist();
      case 'table':
        return renderTable();
      case 'flowchart':
        return renderFlowchart();
      case 'template':
        return renderTemplate();
      case 'list':
        return renderStructuredList();
      default:
        return <div className="component-content">{content}</div>;
    }
  };

  const renderChecklist = () => (
    <div className="checklist-component">
      {items.map((item, index) => {
        const isChecked = checkedItems[`${metadata.id}-${index}`] || false;
        return (
          <div key={index} className="checklist-item">
            <button
              onClick={() => onToggleCheck(metadata.id, index)}
              className={`checklist-checkbox ${isChecked ? 'checked' : ''}`}
              aria-checked={isChecked}
            >
              {isChecked ? <CheckCircle size={20} /> : <Circle size={20} />}
            </button>
            <span className={`checklist-text ${isChecked ? 'completed' : ''}`}>
              {item}
            </span>
          </div>
        );
      })}
    </div>
  );

  const renderTable = () => (
    <div className="table-component">
      <div className="table-wrapper">
        <div dangerouslySetInnerHTML={{ __html: parseMarkdownTable(content) }} />
      </div>
    </div>
  );

  const renderFlowchart = () => (
    <div className="flowchart-component">
      {content.includes('```mermaid') ? (
        <div className="mermaid-diagram">
          <pre><code>{content}</code></pre>
          <p className="diagram-note">
            This diagram will be rendered by Mermaid.js in the browser
          </p>
        </div>
      ) : (
        <div className="process-steps">
          {items.map((step, index) => (
            <div key={index} className="process-step">
              <div className="step-number">{index + 1}</div>
              <div className="step-content">{step}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderTemplate = () => (
    <div className="template-component">
      <div className="template-content">
        <pre><code>{content}</code></pre>
      </div>
      <div className="template-actions">
        <button
          onClick={() => navigator.clipboard.writeText(content)}
          className="copy-template-btn"
        >
          Copy to Clipboard
        </button>
        {metadata.template_link && (
          <button
            onClick={() => onDownloadTemplate(metadata.template_link!, metadata.label)}
            className="download-template-btn"
          >
            <Download size={16} />
            Download Template
          </button>
        )}
      </div>
    </div>
  );

  const renderStructuredList = () => (
    <div className="structured-list-component">
      <div className="list-items">
        {items.map((item, index) => (
          <div key={index} className="list-item">
            <div className="list-marker">•</div>
            <div className="list-content">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className={`component-section component-${metadata.type}`} id={metadata.id}>
      {renderComponentHeader()}
      {renderComponentContent()}
    </div>
  );
}

/**
 * Parse content to extract component sections based on metadata
 */
function parseContentComponents(content: string, components: ComponentMetadata[]): ParsedComponent[] {
  const lines = content.split('\n');
  const parsedComponents: ParsedComponent[] = [];

  for (const metadata of components) {
    const componentMarker = `<!-- component:${metadata.type}:${metadata.id} -->`;
    const markerIndex = lines.findIndex(line => line.includes(componentMarker));
    
    if (markerIndex === -1) continue;

    // Extract content for this component
    const componentContent = extractComponentContent(lines, markerIndex, metadata.type);
    const items = extractComponentItems(componentContent, metadata.type);

    parsedComponents.push({
      metadata,
      content: componentContent,
      items
    });
  }

  return parsedComponents;
}

/**
 * Extract content for a specific component type
 */
function extractComponentContent(lines: string[], startIndex: number, type: string): string {
  const contentLines: string[] = [];
  let i = startIndex + 1;

  switch (type) {
    case 'table':
      // Extract table rows until we hit a non-table line
      while (i < lines.length && (lines[i].includes('|') || lines[i].trim() === '')) {
        if (lines[i].includes('|')) {
          contentLines.push(lines[i]);
        }
        i++;
      }
      break;

    case 'checklist':
      // Extract checkbox items
      while (i < lines.length) {
        const line = lines[i].trim();
        if (line.match(/^\s*[-*]\s*\[\s*[x\s]?\s*\]/i)) {
          contentLines.push(lines[i]);
        } else if (line.startsWith('#') || (line.length > 0 && !line.match(/^\s*[-*]\s/))) {
          break;
        }
        i++;
      }
      break;

    case 'flowchart':
      // Extract mermaid block or process steps
      if (lines[startIndex + 1]?.trim() === '```mermaid') {
        while (i < lines.length && !lines[i].includes('```')) {
          contentLines.push(lines[i]);
          i++;
        }
        if (i < lines.length) contentLines.push(lines[i]); // Include closing ```
      } else {
        // Extract step-by-step process
        while (i < lines.length) {
          const line = lines[i].trim();
          if (isStepByStepProcess(line)) {
            contentLines.push(lines[i]);
          } else if (line.startsWith('#')) {
            break;
          }
          i++;
        }
      }
      break;

    case 'template':
    case 'list':
      // Extract until next section or component
      while (i < lines.length) {
        const line = lines[i].trim();
        if (line.startsWith('#') || line.includes('<!-- component:')) {
          break;
        }
        contentLines.push(lines[i]);
        i++;
      }
      break;
  }

  return contentLines.join('\n');
}

/**
 * Extract individual items from component content
 */
function extractComponentItems(content: string, type: string): string[] {
  const lines = content.split('\n');
  const items: string[] = [];

  switch (type) {
    case 'checklist':
      for (const line of lines) {
        const match = line.match(/^\s*[-*]\s*\[\s*[x\s]?\s*\]\s*(.+)/i);
        if (match) {
          items.push(match[1].trim());
        }
      }
      break;

    case 'flowchart':
      for (const line of lines) {
        if (isStepByStepProcess(line.trim())) {
          items.push(line.trim());
        }
      }
      break;

    case 'list':
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.match(/^\s*[-*+]\s+/) || trimmed.match(/^\d+\.\s+/)) {
          items.push(trimmed.replace(/^\s*[-*+]\s+/, '').replace(/^\d+\.\s+/, ''));
        }
      }
      break;
  }

  return items;
}

/**
 * Check if line represents a step in a process
 */
function isStepByStepProcess(line: string): boolean {
  const stepPatterns = [
    /^step\s+\d+/i,
    /^\d+\.\s+/,
    /^phase\s+\d+/i,
    /^stage\s+\d+/i,
    /→|->|=>/,
    /^[\d]+\)\s+/
  ];
  
  return stepPatterns.some(pattern => pattern.test(line));
}

/**
 * Parse markdown table to HTML
 */
function parseMarkdownTable(content: string): string {
  const lines = content.split('\n').filter(line => line.includes('|'));
  if (lines.length < 2) return content;

  const headerRow = lines[0];
  const separatorRow = lines[1];
  const dataRows = lines.slice(2);

  const headers = headerRow.split('|').map(h => h.trim()).filter(h => h.length > 0);
  
  let html = '<table class="markdown-table"><thead><tr>';
  headers.forEach(header => {
    html += `<th>${header}</th>`;
  });
  html += '</tr></thead><tbody>';

  dataRows.forEach(row => {
    const cells = row.split('|').map(c => c.trim()).filter(c => c.length > 0);
    html += '<tr>';
    cells.forEach(cell => {
      html += `<td>${cell}</td>`;
    });
    html += '</tr>';
  });

  html += '</tbody></table>';
  return html;
}