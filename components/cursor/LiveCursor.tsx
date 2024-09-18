import { LiveCursorProps } from '@/types/type'
import React from 'react'
import Cursor from './Cursor';
import { COLORS } from '@/constants';

function LiveCursor({ others }: LiveCursorProps) {
    return others.map(({ connectionId, presence }) => {
        if (!presence?.cursor) return null;
        return (
            <div><Cursor key={connectionId}
                color={COLORS[Number(connectionId) % COLORS.length]}
                x={presence.cursor.x}
                y={presence.cursor.y}
                message={presence.message}
            /></div>
        )
    })

}

export default LiveCursor