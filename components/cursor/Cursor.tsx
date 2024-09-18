import CursorSVG from '@/public/assets/CursorSVG'
import React from 'react'

type PORPS = {
    color: string,
    x: number,
    y: number,
    message: string
}

function Cursor({ color, x, y, message }: PORPS) {
    return (
        <div className='pointer-events-none absolute top-0 left-0' style={{ transform: `translateX(${x}px) translateY(${y}px)` }}>
            <CursorSVG color={color} />

            {message && (<div className='absolute rounded-2xl left-2 top-3 px-2 py-5' style={{ backgroundColor: color }}>
                <p className='whitespace-nowrap text-sm leading-relaxed'>{message}</p>
            </div>)}


        </div >
    )
}

export default Cursor