// app/_components/Rocket.tsx

// ページのパスのコメント
'use client'

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Rocket() {
    const [isMoving, setIsMoving] = useState(false);
    const [isFlying, setIsFlying] = useState(false);
    const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

    useEffect(() => {
        // Audioオブジェクトを作成し、stateに保存
        const newAudio = new Audio('/chronostasis.mp3');
        newAudio.loop = true; // ループ再生を有効にする
        setAudio(newAudio);
    }, []);

    const handleClick = () => {
        setIsMoving(true);

        if (audio) {
            audio.play(); // BGMを再生
        }

        const scrollInterval = setInterval(() => {
            window.scrollBy(0, -1); // 画面を少しずつ上にスクロール
            if (window.scrollY === 0) {
                clearInterval(scrollInterval);
                setIsFlying(true); // 最後にロケットが飛ぶ
            }
        }, 16); // 60 FPS (1000ms / 60 ≈ 16ms)
    };

    return (
        <div
            className={`flex items-center cursor-pointer fixed left-20 bottom-5 ${isFlying ? 'animate-fly' : ''}`}
            onClick={handleClick}
            style={isFlying ? { transition: 'transform 2s linear', transform: 'translateY(-200vh)' } : {}}
        >
            <Image
                src={'/rocket.png'}
                alt="rocket"
                width={150}
                height={150}
                className="-rotate-45"
            />
            {
                !isMoving && (
                    <p>
                        ←クリックしたらスタート
                        <br />
                        🚨音量注意！
                    </p>
                )
            }
        </div>
    );
}
