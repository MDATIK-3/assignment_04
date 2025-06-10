import { useState } from 'react';
import { aspectRatioPresets } from '../utils/imageUtils';
import { Text_To_ImageModel } from '../utils/BASE_URL';
import ModelSelection from './ModelSelection';

const ImageAdvancedSettings = ({
    width,
    height,
    model,
    seed,
    onWidthChange,
    onHeightChange,
    onModelChange,
    onAspectRatioChange,
}) => {
    const [activePreset, setActivePreset] = useState('1:1');

    const handleAspectRatioClick = (preset) => {
        setActivePreset(preset.name);
        onAspectRatioChange(preset);
    };

    return (
        <div className="border border-zinc-700/70 mb-6 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Advanced Settings</h4>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <ModelSelection
                    model={model}
                    onModelChange={onModelChange}
                    url={Text_To_ImageModel}
                />

                <div>
                    <label htmlFor="seed" className="block text-sm font-medium text-zinc-700 mb-1">
                        Seed (for reproducible results)
                    </label>
                    <input
                        type="text"
                        id="seed"
                        value={seed}
                        disabled
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                        placeholder="Random"
                    />
                </div>

                <div>
                    <label htmlFor="width" className="block text-sm font-medium text-zinc-700 mb-1">
                        Width
                    </label>
                    <input
                        type="number"
                        id="width"
                        value={width}
                        min={256}
                        max={2048}
                        onChange={(e) => onWidthChange(parseInt(e.target.value))}
                        className="w-full bg-zinc-900/10 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                </div>

                <div>
                    <label htmlFor="height" className="block text-sm font-medium text-zinc-700 mb-1">
                        Height
                    </label>
                    <input
                        type="number"
                        id="height"
                        value={height}
                        min={256}
                        max={2048}
                        onChange={(e) => onHeightChange(parseInt(e.target.value))}
                        className="w-full bg-zinc-900/40 px-3 py-2 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                    />
                </div>

                <div className="col-span-1 md:col-span-2">
                    <label className="block text-sm font-medium text-zinc-700 mb-1">
                        Aspect Ratio Presets
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {aspectRatioPresets.map((preset) => (
                            <button
                                key={preset.name}
                                onClick={() => handleAspectRatioClick(preset)}
                                className={`aspect-ratio-button px-3 py-2 text-xs rounded transition-colors ${activePreset === preset.name
                                    ? 'bg-indigo-900/60 text-white'
                                    : 'bg-zinc-900/40 text-zinc-300 hover:bg-zinc-800'
                                    }`}
                            >
                                {preset.name}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageAdvancedSettings;