'use client'
import { motion } from 'motion/react'

export default function Message({ content, isUser, isStreaming }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`flex ${isUser ? 'justify-end text-grey-800' : 'justify-start'}`}
        >
            <div 
                className={`max-w-[75%] rounded-[12px] p-[8px] ${
                    isUser ? 'bg-grey-200' : 'bg-grey-0'
                }`}
            >
                {content}
                {!isUser && isStreaming && <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                >
                    ▋
                </motion.span>}
            </div>
        </motion.div>
    )
}
