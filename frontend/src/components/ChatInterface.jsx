import React, { useState } from 'react';
import { Send, Loader } from 'lucide-react';
import Input from './Input';
import Button from './Button';
import ConversationCard from './ConversationCard';
import { useForm, Controller, set } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import  { PromptSchema }  from '../schemas/PropmtSchema';
import ChatService from '../services/chatService';

const ChatInterface = () => {
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false); 
    const [error, setError] = useState(null);

    const {
        control,
        handleSubmit,
        formState: { errors},
        reset
    } = useForm({
        resolver: zodResolver(PromptSchema),
        defaultValues: {
            prompt: '',
        }
    });

    const onSubmit = async(data) => {
        setIsLoading(true); 
        setError(null);
        try {
            setMessages(prevMessages => [...prevMessages, { text: data.prompt, isUser: true,}]);
            const response = await ChatService.getResponse(data);   
            setMessages(prevMessages => [...prevMessages, { text: response.data, isUser: false }]);
            setIsLoading(false); 
            reset(); 
        } catch (error) {
            console.log(error);
            setError(error.response?.data?.message || 'An error occurred. Please try again later.');
            reset(); 
            setIsLoading(false); 
        }
    }
    return (
        <div className="flex flex-col h-full w-full bg-gray-50 px-4">
          
            <div className="flex flex-col flex-grow h-full relative">
                
                <div className="flex-grow overflow-y-auto px-6 mx-4">
                    <ConversationCard messages={messages} />
                    {isLoading && <div className="flex justify-center items-center"><Loader /></div>} 
                    {error && <div className="text-red-500 text-base mb-2">Error : {error}</div>}
                </div>

              
                <div className="border-t border-gray-200 bg-white p-4 w-full">
                    {errors?.prompt && (
                        <div className="text-red-500 text-sm mb-2">
                            {errors.prompt.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit(onSubmit)} className="max-w-8xl mx-auto flex gap-2 w-full px-4">
                        <Controller
                            name="prompt"
                            control={control}
                            render={({ field }) => (
                                <Input
                                    placeholder="Type your message..."
                                    className="flex-grow min-w-0"
                                    onChange={field.onChange}
                                    value={field.value}
                                />
                            )}
                        />
                        <Button type="submit" disabled={isLoading}> 
                            <Send className="w-5 h-5" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;