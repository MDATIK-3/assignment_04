import { useEffect, useState } from 'react';
import { fetchModels } from '../utils/fetchModels';
import { toast } from 'react-toastify';

const ModelSelection = ({ model, onModelChange, url }) => {
    const [models, setModels] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadModels = async () => {
            if (!url) return;
            setLoading(true);
            setError(null);
            try {
                const fetchedModels = await fetchModels(url);
                setModels(fetchedModels);
            } catch (err) {
                setError('Failed to load models. Using default model options.');
                toast.error(error);
            } finally {
                setLoading(false);
            }
        };

        loadModels();
    }, [url]);

    const handleModelChange = (value) => {
        console.log('Model selected:', value);
        onModelChange(value);
    };

    return (
        <div>
            <label htmlFor="model" className="block text-sm font-medium text-zinc-700 mb-1">
                Model
            </label>
            <select
                id="model"
                value={model || ''}
                onChange={(e) => handleModelChange(e.target.value)}
                disabled={loading}
                className="w-full px-3 py-2 bg-zinc-900 border border-zinc-700/70 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
            >
                {loading ? (
                    <option value="">Loading models...</option>
                ) : error ? (
                    <option value="">Error loading models</option>
                ) : (
                    <>
                        <option disabled>Select a model</option>
                        {models.map((m, index) => (
                            <option
                                className="bg-zinc-900"
                                key={`${m.value}-${index}`}
                                value={m.value}
                            >
                                {m.name}
                            </option>
                        ))}
                    </>
                )}
            </select>
            {error && (
                <p className="text-red-500 text-xs mt-1">{error}</p>
            )}
        </div>
    );
};

export default ModelSelection;