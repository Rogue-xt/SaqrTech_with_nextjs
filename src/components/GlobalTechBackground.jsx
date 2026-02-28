"use client";
import { useEffect, useRef } from "react";

export default function GlobalTechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const gridSize = 60;
    const nodes = [];
    const lines = [];

    // Generate grid nodes
    for (let x = 0; x < width; x += gridSize) {
      for (let y = 0; y < height; y += gridSize) {
        nodes.push({ x, y, pulse: Math.random() * 100 });
      }
    }

    // Generate moving lines
    for (let i = 0; i < 20; i++) {
      lines.push({
        x: Math.random() * width,
        y: Math.random() * height,
        length: 200 + Math.random() * 200,
        speed: 0.5 + Math.random(),
        direction: Math.random() > 0.5 ? "horizontal" : "vertical",
      });
    }

    function drawGrid() {
      ctx.strokeStyle = "rgba(255,255,255,0.05)";
      ctx.lineWidth = 1;

      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
    }

    function drawNodes() {
      nodes.forEach((node) => {
        node.pulse += 0.02;
        const alpha = 0.2 + Math.sin(node.pulse) * 0.1;

        ctx.beginPath();
        ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${alpha})`;
        ctx.fill();
      });
    }

    function drawLines() {
      lines.forEach((line) => {
        ctx.beginPath();
        ctx.strokeStyle = "rgba(255,255,255,0.2)";
        ctx.lineWidth = 2;

        if (line.direction === "horizontal") {
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(line.x + line.length, line.y);
          line.x += line.speed;
          if (line.x > width) line.x = -line.length;
        } else {
          ctx.moveTo(line.x, line.y);
          ctx.lineTo(line.x, line.y + line.length);
          line.y += line.speed;
          if (line.y > height) line.y = -line.length;
        }

        ctx.stroke();
      });
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      drawGrid();
      drawNodes();
      drawLines();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[1]"
    />
  );
}
