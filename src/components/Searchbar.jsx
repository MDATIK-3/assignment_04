import { useState } from 'react';
import SearchIcon from "../assets/SearchIcon"
import SendHorizontalIcon from "../assets/SendHorizontalIcon"

const PromptInput = ({ onSubmit, isLoading }) => {
    const [prompt, setPrompt] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (prompt.trim() && !isLoading) {
            onSubmit(prompt.trim());
        }
    };

    const handleKey = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="relative mb-8 rounded-full overflow-hidden border border-zinc-700 bg-zinc-900/10 backdrop-blur-sm"
        >
            <div className="flex items-center">
                <div className="pl-5 pr-2">
                    <SearchIcon />
                </div>
                <input
                    type="text"
                    placeholder="Create with Prompts"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    onKeyDown={handleKey}
                    disabled={isLoading}
                    className="outline-none w-full py-4 px-2 bg-transparent text-white placeholder-zinc-400 text-lg"
                />
                <button
                    type="submit"
                    disabled={isLoading || !prompt.trim()}
                    className={`p-4 mr-1 rounded-full transition-colors bg-zinc-800 ${isLoading || !prompt.trim()
                        ? 'text-zinc-500 cursor-not-allowed'
                        : 'hover:bg-zinc-700 text-white'
                        }`}
                >
                    <SendHorizontalIcon />
                </button>
            </div>
        </form>
    );
};

export default PromptInput;