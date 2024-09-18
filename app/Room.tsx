"use client";

import { ReactNode } from "react";
import {
    LiveblocksProvider,
    RoomProvider,
    ClientSideSuspense,
} from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
    return (
        <LiveblocksProvider publicApiKey={"pk_dev_f6WBGvE6RlFcOvXquKLMBrqchIY-XUsoTi1NWXrtdYW9F_W7Lq6tOUouLwTUFnSX"}>
            <RoomProvider id="my-room">
                <ClientSideSuspense fallback={<div>Loading…</div>}>
                    {children}
                </ClientSideSuspense>
            </RoomProvider>
        </LiveblocksProvider>
    );
}