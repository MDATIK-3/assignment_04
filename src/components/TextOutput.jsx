import { useState } from 'react';
import { Copy } from 'lucide-react';
import { toast } from 'react-toastify';

const TextOutput = ({ generatedText, isLoading, error}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(generatedText);
      setCopied(true);
      toast.success('Text copied to clipboard!');
    } catch (err) {
      toast.error('Failed to copy text');
    }
  };

  if (isLoading) {
    return (
      <div className="bg-zinc-900/30 border border-zinc-700/70 rounded-lg p-6">
        <div className="flex items-center justify-center h-32">
          <div className="loading-pulse text-zinc-400">Generating text...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-900/20 border border-red-800 text-red-200 p-6 rounded-lg">
        <h3 className="text-lg font-semibold mb-2">Error</h3>
        <p>{error}</p>
      </div>
    );
  }

  if (!generatedText) {
    return (
      <div className="text-center py-8 text-zinc-400">
        <p>Enter a prompt and click generate to create text</p>
      </div>
    );
  }

  return (
    <div className="bg-zinc-900/30 border border-zinc-700/70 rounded-lg overflow-hidden">
      <div className="flex items-center justify-between p-4 border-b border-zinc-700/70">
        <h3 className="font-medium text-zinc-200">Generated Text</h3>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 rounded-md transition-colors text-sm"
        >
          <Copy size={16} />
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
      <div className="p-6">
        <div className="bg-zinc-800/50 rounded-lg p-4 max-h-96 overflow-y-auto">
          <pre className="whitespace-pre-wrap text-zinc-100 font-mono text-sm leading-relaxed">
            {generatedText}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TextOutput;