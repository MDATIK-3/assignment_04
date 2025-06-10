import { useState } from 'react';
import Searchbar from '../components/Searchbar';
import TextAdvancedSettings from '../components/TextAdvancedSettings';
import TextOutput from '../components/TextOutput';
import { generateText } from '../utils/TextAPI';
import { generateRandomSeed } from '../utils/imageUtils';
import { toast } from 'react-toastify';

const GenerateText = () => {
  const [prompt, setPrompt] = useState('');
  const [model, setModel] = useState('openai');
  const [generatedText, setGeneratedText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePromptSubmit = async (newPrompt) => {
    setIsLoading(true);
    setError(null);
    setPrompt(newPrompt);
    
    try {
      toast.info('Generating text... This may take a moment.');
      
      const params = {
        prompt: newPrompt,
        model,
        seed: generateRandomSeed(),
      };

      const text = await generateText(params);
      setGeneratedText(text);
      toast.success('Text generated successfully!');
    } catch (err) {
      console.error('Error generating text:', err);
      const errorMessage = err.message || 'Failed to generate text. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold mb-8">Generate AI Text <span className="text-2xl">📝</span></h2>
      
      <Searchbar onSubmit={handlePromptSubmit} isLoading={isLoading} />
      
      <TextAdvancedSettings
        model={model}
        onModelChange={setModel}
      />
      
      <div>
        <h3 className="text-zinc-200 mb-4 font-bold text-lg">Result</h3>
        <TextOutput 
          generatedText={generatedText}
          isLoading={isLoading}
          error={error}
          prompt={prompt}
        />
      </div>
    </div>
  );
};

export default GenerateText;