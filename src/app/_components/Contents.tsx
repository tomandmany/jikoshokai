// app/_components/Contents.tsx

// ページのパスのコメント
"use client"

import Image from "next/image";
import { useLayoutEffect, useState, CSSProperties } from "react";

interface StarStyle extends CSSProperties {
    width: string;
    height: string;
    top: string;
    left: string;
    animationDelay: string;
}

export default function Contents() {
    const [stars, setStars] = useState<JSX.Element[]>([]);

    useLayoutEffect(() => {
        const scrollToBottom = () => {
            window.scrollTo(0, document.body.scrollHeight);
        };

        // 初回ロード時にスクロール
        scrollToBottom();

        // ページの高さを取得し、星を生成
        const generateStars = (numStars: number) => {
            const stars = [];
            const pageHeight = document.body.scrollHeight;

            for (let i = 0; i < numStars; i++) {
                const starSize = Math.random() * 3 + 1; // 星の大きさをランダムに設定
                const starStyle: StarStyle = {
                    width: `${starSize}px`,
                    height: `${starSize}px`,
                    top: `${Math.random() * pageHeight - 20}px`,
                    left: `${Math.random() * window.innerWidth}px`,
                    animationDelay: `${Math.random() * 2}s`,
                };
                stars.push(<div key={i} className="star" style={starStyle}></div>);
            }
            return stars;
        };

        setStars(generateStars(100)); // 100個の星を生成
    }, []);

    return (
        <>
            {stars}
            <div className="min-w-max ml-auto py-20 flex flex-col items-end text-5xl gap-96">
                <div>
                    
                </div>
                <div className="min-w-full gap-20 flex flex-col items-center">
                    <span>アイドル時代</span>
                    <div className="flex gap-16">
                        <Image
                            src={'/idle-01.jpg'}
                            alt="idle-01"
                            width={250}
                            height={250}
                        />
                        <Image
                            src={'/idle-02.jpg'}
                            alt="idle-02"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
                <div className="flex flex-col items-center gap-20">
                    <p className="flex flex-col gap-16">
                        <span>この頃から</span>
                        <span>人の上に立つ者の</span>
                        <span>兆候を見せ始める。</span>
                    </p>
                    <Image
                        src={'/sibling-01.jpg'}
                        alt="sibling-01"
                        width={550}
                        height={550}
                    />
                </div>
                <div className="flex">
                    <p className="flex flex-col justify-between">
                        <span>2002年5月23日、</span>
                        <span>岩手県釜石市で</span>
                        <span>「鈴木翔也」</span>
                        <span>として産まれる。</span>
                    </p>
                    <Image
                        src={'/baby.jpg'}
                        alt="baby"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
        </>
    )
}
