'use client';

import { useEffect, useRef } from 'react';

export function WaveHero() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let width = window.innerWidth;
        let height = window.innerHeight;

        // Configuration - Brighter Colors & Thicker Lines
        const waves = [
            { amplitude: 100, frequency: 0.002, speed: 0.01, color: '#8b5cf6', yOffset: 100 }, // Violet-500 (was deep purple)
            { amplitude: 150, frequency: 0.003, speed: 0.015, color: '#60a5fa', yOffset: 50 }, // Blue-400 (was blue-500)
            { amplitude: 80, frequency: 0.004, speed: 0.008, color: '#f472b6', yOffset: 150 }, // Pink-400 (was pink-700)
            { amplitude: 120, frequency: 0.001, speed: 0.005, color: '#34d399', yOffset: 0 }, // Emerald-400 (was emerald-500)
        ];

        const resize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
        };

        const drawWave = (time: number, wave: typeof waves[0]) => {
            ctx.beginPath();
            ctx.lineWidth = 4; // Thicker lines for visibility (was 2)

            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, `${wave.color}00`); // Transparent
            gradient.addColorStop(0.5, wave.color);
            gradient.addColorStop(1, `${wave.color}00`); // Transparent

            ctx.strokeStyle = gradient;

            const baseY = height / 2 + wave.yOffset;

            for (let x = 0; x < width; x += 5) {
                const y = baseY + Math.sin(x * wave.frequency + time * wave.speed) * wave.amplitude + Math.sin(x * wave.frequency * 0.5 + time * wave.speed * 0.5) * (wave.amplitude / 2);
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }

            ctx.stroke();
        };

        let time = 0;
        const animate = () => {
            time += 0.5;
            ctx.clearRect(0, 0, width, height);

            // Optional: Draw multiple lines per wave for "string" effect
            waves.forEach(wave => {
                // Main wave - Higher opacity
                ctx.globalAlpha = 0.8; // Increased from 0.5
                drawWave(time, wave);

                // Echo wave
                ctx.globalAlpha = 0.4; // Increased from 0.2
                drawWave(time - 50, { ...wave, amplitude: wave.amplitude * 0.8 });
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        // Initialize
        resize();
        window.addEventListener('resize', resize);
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none" // Removed opacity-60 constraint
        />
    );
}
