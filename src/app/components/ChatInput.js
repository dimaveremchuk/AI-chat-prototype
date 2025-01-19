'use client'
import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import ClipIcon from '../icons/clip.svg'
import SendIcon from '../icons/send.svg'

export default function ChatInput({ isExpanded, onSubmit }) {
    const [message, setMessage] = useState('')
    const textareaRef = useRef(null)

    useEffect(() => {
        textareaRef.current?.focus()
    }, [])

    useEffect(() => {
        textareaRef.current?.focus()
    }, [isExpanded])

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!message.trim()) return
        onSubmit(message)
        setMessage('')
        // Reset textarea height
        if (textareaRef.current) {
            textareaRef.current.style.height = 'auto'
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            if (message.trim()) {
                onSubmit(message)
                setMessage('')
                if (textareaRef.current) {
                    textareaRef.current.style.height = 'auto'
                }
            }
        }
    }

    return (
        <motion.form 
            onSubmit={handleSubmit}
            className="absolute bottom-0 left-0 right-0 flex justify-center"
            animate={{
                paddingBottom: isExpanded ? '32px' : '8px',
                paddingLeft: '8px',
                paddingRight: '8px',
            }}
            transition={{
                type: 'spring',
                bounce: 0.1,
                duration: 0.3
            }}
        >
            <motion.div 
                className="relative flex flex-col items-center bg-grey-200 border border-grey-400 rounded-[12px] px-[16px] pt-[16px] pb-[8px] w-full"
                animate={{
                    maxWidth: isExpanded ? '640px' : '100%'
                }}
                transition={{
                    type: 'spring',
                    bounce: 0.1,
                    duration: 0.3
                }}
            >
                <div className='pb-[8px] w-full'>
                    <textarea
                        ref={textareaRef}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onInput={(e) => {
                            e.target.style.height = 'auto'
                            e.target.style.height = e.target.scrollHeight + 'px'
                        }}
                        placeholder="Ask anything..."
                        className="w-full bg-transparent border-none outline-none text-grey-900 placeholder-grey-700 resize-none caret-green max-h-[40vh] overflow-y-auto"
                        style={{ height: 'auto' }}
                    />
                </div>

                <div className='w-full flex items-center'>
                    <button 
                        type="button"
                        className="p-2 hover:bg-grey-400 rounded-[4px] -ml-[8px] group"
                    >
                        <ClipIcon className="[&>path]:fill-grey-800 [&>path]:group-hover:fill-grey-900" />
                    </button>
                    
                    <button 
                        type="submit"
                        className="p-2 ml-auto"
                        disabled={!message.trim()}
                    >
                        <SendIcon 
                            className={`transition-colors ${
                                message.trim() 
                                    ? '[&>circle]:fill-green [&>circle]:stroke-green [&>path]:fill-grey-0' 
                                    : '[&>circle]:stroke-grey-700 [&>path]:fill-grey-700'
                            }`}
                        />
                    </button>
                </div>
            </motion.div>
        </motion.form>
    )
}
