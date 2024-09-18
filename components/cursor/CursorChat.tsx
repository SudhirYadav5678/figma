import CursorSVG from '@/public/assets/CursorSVG'
import { CursorChatProps, CursorMode } from '@/types/type'
import { Divide } from 'lucide-react'
import React from 'react'

function CursorChat({ cursor, cursorState, setCursorState, updateMyPresence }: CursorChatProps) {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateMyPresence({ message: e.target.value })
        setCursorState({
            mode: CursorMode.Chat,
            previousMessage: null,
            message: e.target.value
        })
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            setCursorState({
                mode: CursorMode.Chat,
                previousMessage: cursorState.message,
                message: ""
            })
        } else if (e.key === 'Escape') {
            setCursorState({ mode: CursorMode.Hidden })
        }
    }
    return (
        <>
            <div className='absolute top-0 left-0 ' style={{ transform: `translateX(${cursor.x}px) translateY(${cursor.y}px)` }
            }>
                {cursorState.mode === CursorMode.Chat && (<>
                    <CursorSVG color='#000' />
                    <div className='absolute top-5 left-2 bg-blue-500 text-sm leading-relaxed px-2 py-4 text-white rounded-[20px]'>
                        {cursorState.previousMessage && (<div>{cursorState.previousMessage}</div>)}
                        <input className='z-10 border-none bg-transparent placeholder-blue-500 outline-none' autoFocus={true}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            placeholder={cursorState.previousMessage ? '' : "type message..."}
                            value={cursorState.message}
                            maxLength={50}
                        />
                    </div>

                </>)}
            </div >
        </>
    )
}

export default CursorChat