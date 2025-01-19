'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'

import TestCasesIcon from '../icons/test-cases.svg'
import MagicWandIcon from '../icons/magic-wand.svg'
import CircleIcon from '../icons/circle.svg'
import ChevronIcon from '../icons/chevron.svg'

export default function MainContent({ isShifted, isExpanded, items, showEmptyState, isLoading }) {
    const [usePanelView, setUsePanelView] = useState(true)

    return (
        <motion.div 
            className='h-[calc(100vh-60px)] relative z-10'
            animate={{
                paddingTop: isShifted && usePanelView ? '8px' : '0px',
                paddingRight: isShifted && usePanelView ? '8px' : '0px',
                paddingBottom: isShifted && usePanelView ? '8px' : '0px',
                marginLeft: isShifted ? '400px' : '0px',
                x: isExpanded ? 'calc(100vw - 416px)' : '0px',
            }}
            transition={{
                type: 'spring',
                bounce: 0.2,
                duration: 0.3
            }}
        >
            <motion.div 
                className={`pt-[64px] h-full bg-grey-200 transition-[border,border-radius] duration-300 ${isShifted && usePanelView ? 'border border-grey-400 rounded-[12px]' : 'rounded-none'} flex justify-center overflow-hidden relative`}
                animate={{
                    borderColor: isLoading ? 'rgba(34, 197, 94, 0.3)' : '#25272F',
                    borderWidth: isShifted ? '1px' : '0px',
                    boxShadow: isLoading ? ['inset 0 0 0px 0px rgba(34, 197, 94, 0)', 'inset 0 0 100px 0px rgba(34, 197, 94, 0.5)', 'inset 0 0 0px 0px rgba(34, 197, 94, 0)'] : 'none'
                }}
                transition={{
                    boxShadow: {
                        duration: 1.5,
                        repeat: isLoading ? Infinity : 0,
                        ease: 'easeInOut'
                    }
                }}
            >
                <div className='w-[736px] flex flex-col self-start h-full'>
                    <div className="text-2xl">Test cases</div>
                    <div className='py-[24px]'>
                        <div className="h-px bg-grey-400" />
                    </div>
                    {showEmptyState ? (
                        <AnimatePresence>
                                <motion.div 
                                    className='max-w-[332px] flex flex-col gap-[4px] h-full justify-center self-center items-center pb-[96px]'
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <TestCasesIcon />
                                    <div>
                                        No test cases yet
                                    </div>
                                    <div className='text-grey-800 text-center'>
                                    Create test cases to run comprehensive regression tests for your product. Generate an initial test suite instantly with AI or build your cases manually.
                                    </div>
                                    <div className='pt-[16px] flex gap-[12px]'>
                                        <button className='flex gap-[4px] h-[28px] pl-[6px] pr-[12px] bg-green text-grey-0 items-center rounded-[6px] font-medium'>
                                            <MagicWandIcon className='[&>path]:fill-grey-0'/>
                                            Quick generate
                                        </button>
                                        <button className='h-[28px] px-[12px] bg-grey-300 border border-grey-500 rounded-[6px] hover:bg-grey-400'>
                                            Create manually
                                        </button>
                                    </div>
                                </motion.div>
                        </AnimatePresence>
                    ) : (
                        <div className="flex flex-col gap-[4px]">
                            <AnimatePresence>
                                {items.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ filter: 'blur(15px)', y: 8 }}
                                        animate={{ filter: 'blur(0px)', y: 0 }}
                                        className="flex items-center p-[12px] gap-[4px] hover:bg-grey-300 rounded-[6px] group"
                                    >
                                        <div className='flex items-center gap-[6px]'>
                                            <CircleIcon className='[&>circle]:stroke-grey-600'/>
                                            <div>{item.title}</div>
                                        </div>
                                        {item.count > 0 && (
                                            <div className='text-grey-700'>{item.count}</div>
                                        )}
                                        <ChevronIcon className='[&>path]:fill-grey-600'/>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>
                    )}
                </div>
                <div className='absolute bottom-[16px] right-[16px] flex items-center gap-[8px] text-grey-700'>
                    <span className='font-mono'>Use panel view</span>
                    <button
                        onClick={() => setUsePanelView(!usePanelView)}
                        className={`w-[32px] h-[20px] rounded-full relative transition-colors duration-200 ${usePanelView ? 'bg-green' : 'bg-grey-600'}`}
                    >
                        <div
                            className={`absolute top-[3px] w-[14px] h-[14px] rounded-full bg-grey-900 transition-transform duration-200 ${ usePanelView ? 'left-[14px]' : 'left-[3px]'}`}
                        />
                    </button>
                </div>
            </motion.div>
        </motion.div>
    )
}