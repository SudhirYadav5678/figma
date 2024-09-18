"use client"

import Live from "@/components/Live";
import { Room } from "./Room";
import { useEffect, useRef } from "react";
import fabric from 'fabric'
import { handleCanvasMouseDown, handleResize, initializeFabric } from "@/lib/canvas";
export default function Page() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const fabricRef = useRef<fabric.Canvas | null>(null);
  const isDrawing = useRef(false)
  const shapeRef = useRef<fabric.Object | null>(null)
  const selectedShapeRef = useRef<string | null>("reactangle")

  useEffect(() => {
    const canvas = initializeFabric({ canvasRef, fabricRef });
    canvas.on("mouse:down", (options) => {
      handleCanvasMouseDown({
        canvas,
        options,
        isDrawing,
        shapeRef,
        selectedShapeRef
      })
    })
    window.addEventListener("resize", () => {
      handleResize({ fabricRef })
    })
  })
  return (
    <>
      <Live canvasRef={canvasRef} />
    </>
  );
}