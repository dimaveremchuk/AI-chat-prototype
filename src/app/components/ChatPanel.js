'use client'
import { useState } from 'react'
import { motion } from 'motion/react'
import ChatInput from './ChatInput'
import Message from './Message'

import CloseIcon from '../icons/close.svg'
import ExpandIcon from '../icons/expand.svg'
import ContractIcon from '../icons/contract.svg'

const THINKING_TEXT = "Generating..."
const FINAL_MESSAGE = "I've created 4 test cases for you. Please check them and let me know if you want to change anything."

export default function ChatPanel({ isOpen , isExpanded, onClose, onToggleExpand, onSubmit }) {
    const [messages, setMessages] = useState([])
    const [isTyping, setIsTyping] = useState(false)

    const handleSubmit = async (message) => {
        setIsTyping(true)
        setMessages(prev => [...prev, { content: message, isUser: true }])
        setMessages(prev => [...prev, { content: "", isUser: false}])

        for (let i = 0; i <= THINKING_TEXT.length; i++) {
            setMessages(prev => [
                ...prev.slice(0, -1),
                { content: THINKING_TEXT.slice(0, i), isUser: false }
            ])
            await new Promise(resolve => setTimeout(resolve, 50))
        }

        await onSubmit()

        for (let i = 0; i <= FINAL_MESSAGE.length; i++) {
            setMessages(prev => [
                ...prev.slice(0, -1),
                { content: FINAL_MESSAGE.slice(0, i), isUser: false }
            ])
            await new Promise(resolve => setTimeout(resolve, 20))
        }
        setIsTyping(false)
    }

    if (!isOpen) return null;

    return (
        <motion.div 
            className="fixed left-0 bottom-0 top-[60px] bg-grey-0 z-0"
            animate={{
                width: isExpanded ? 'calc(100vw - 8px)' : '400px'
            }}
            transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.3
            }}
        >
            <div className="flex justify-between p-[8px]">
                <button className='w-[24px] h-[24px] flex justify-center items-center' onClick={onClose}><CloseIcon className='[&>path]:fill-grey-800' /></button>
                <button className='w-[24px] h-[24px] flex justify-center items-center ml-2' onClick={onToggleExpand} >
                    {isExpanded ? <ContractIcon className='[&>path]:fill-grey-800' /> : <ExpandIcon className='[&>path]:fill-grey-800' />}
                </button>
            </div>

            <div className="flex flex-col h-[calc(100%-64px)] max-w-[640px] m-auto">
                <div className='flex-1 overflow-y-auto px-[16px] pb-[140px] flex flex-col gap-[8px] justify-end'>
                    {messages.map((message, index) => (
                        <Message
                            key={index}
                            content={message.content}
                            isUser={message.isUser}
                            isStreaming={!message.isUser && index === messages.length - 1 && isTyping}
                        />
                    ))}
                </div>
                <ChatInput 
                    isExpanded={isExpanded} 
                    onSubmit={handleSubmit} 
                />
            </div>
        </motion.div>
    )
}