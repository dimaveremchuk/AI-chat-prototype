'use client'

import { useState } from 'react'
import Navigation from './components/Navigation'
import MainContent from './components/MainContent'
import ChatPanel from './components/ChatPanel'

const PREDEFINED_ITEMS = [
    { id: 1, title: "Sucessful signup with valid data", count: 7 },
    { id: 2, title: "Sign up attempt with wrong email (without '@')", count: 8 },
    { id: 3, title: "Sign up attempt with correct email and wrong password", count: 12 },
    { id: 4, title: "Sign up attempt with wrong email (without username)", count: 12 },
]

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [isChatExpanded, setIsChatExpanded] = useState(false)
  const [items, setItems] = useState([])
  const [showEmptyState, setShowEmptyState] = useState(true)
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    setShowEmptyState(false)
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 2000))

    for (let i = 0; i < PREDEFINED_ITEMS.length; i++) {
      setItems(prev => [...prev, PREDEFINED_ITEMS[i]])
      if (i < PREDEFINED_ITEMS.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000))
      }
    }
    setIsLoading(false)
  }

  return (
    <div className='h-screen'>
      <Navigation onChatToggle={() => setIsChatOpen(!isChatOpen)} />
      <ChatPanel
        isOpen={isChatOpen}
        isExpanded={isChatExpanded}
        onClose={() => {
          setIsChatOpen(false)
          setIsChatExpanded(false)
        }}
        onToggleExpand={() => setIsChatExpanded(!isChatExpanded)}
        onSubmit={handleSubmit}
      />
      <MainContent 
        isShifted={isChatOpen}
        isExpanded={isChatExpanded}
        items={items}
        showEmptyState={showEmptyState}
        isLoading={isLoading}
      />
    </div>
  )
}