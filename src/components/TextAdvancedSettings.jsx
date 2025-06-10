import { Text_To_TextModel } from '../utils/BASE_URL'
import ModelSelection from './ModelSelection';

const TextAdvancedSettings = ({
    model,
    onModelChange,
}) => {
    return (
        <div className="border border-zinc-700/70 mb-6 rounded-lg p-4 backdrop-blur-sm bg-zinc-900/20">
            <div className="flex items-center justify-between mb-4">
                <h4 className="font-medium">Settings</h4>
            </div>

            <div className="grid grid-cols-1 gap-4">
                <ModelSelection
                    model={model}
                    onModelChange={onModelChange}
                    url={Text_To_TextModel}
                />
            </div>
        </div>
    );
};

export default TextAdvancedSettings;