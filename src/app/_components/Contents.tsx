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
            <div className="max-w-[600px] ml-auto py-20 flex flex-col items-end text-5xl gap-96 [&>div]:min-w-full [&>div]:flex">
                <div className="gap-16 flex flex-col items-center">
                    <span>高校（暗黒時代）</span>
                    <div>
                        <Image
                            src={'/highschool.JPG'}
                            alt="highschool"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
                <div className="gap-16 flex flex-col items-center">
                    <span>中学校（思春期の目）</span>
                    <div className="flex gap-16">
                        <Image
                            src={'/shishunki-01.JPG'}
                            alt="shishunki-01"
                            width={250}
                            height={250}
                        />
                        <Image
                            src={'/shishunki-02.JPG'}
                            alt="shishunki-02"
                            width={250}
                            height={250}
                        />
                    </div>
                    <div>
                        <Image
                            src={'/shishunki-03.JPG'}
                            alt="shishunki-03"
                            width={600}
                            height={600}
                        />
                    </div>
                </div>
                <div className="justify-center flex-col overflow-hidden max-w-full gap-20">
                    <span className="text-center w-fit">小学校<br />（黄金期）</span>
                    <div className="relative">
                        <div>
                            <Image
                                src={'/elementary-02.JPG'}
                                alt="elementary-02"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="flex">
                            <Image
                                src={'/elementary-01.JPG'}
                                alt="elementary-01"
                                width={250}
                                height={250}
                            />
                            <Image
                                src={'/elementary-04.JPG'}
                                alt="elementary-04"
                                width={250}
                                height={250}
                            />
                        </div>
                        <div className="absolute -top-[150px] -right-[74px]">
                            <Image
                                src={'/elementary-03.JPG'}
                                alt="elementary-03"
                                width={500}
                                height={250}
                                className="-rotate-90"
                            />
                        </div>
                    </div>
                </div>
                <div className="items-center flex-col overflow-hidden max-w-full gap-20">
                    <span>保育園</span>
                    <div className="flex gap-10 overflow-x-auto">
                        <Image
                            src={'/nursery-01.JPG'}
                            alt="nursery-01"
                            width={250}
                            height={250}
                        />
                        <Image
                            src={'/nursery-02.JPG'}
                            alt="nursery-02"
                            width={250}
                            height={250}
                        />
                        <Image
                            src={'/nursery-03.JPG'}
                            alt="nursery-03"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
                <div className="gap-20 flex flex-col items-center">
                    <span>アイドル時代</span>
                    <div className="flex gap-16">
                        <Image
                            src={'/idle-01.JPG'}
                            alt="idle-01"
                            width={250}
                            height={250}
                        />
                        <Image
                            src={'/idle-02.JPG'}
                            alt="idle-02"
                            width={250}
                            height={250}
                        />
                    </div>
                </div>
                <div className="flex-col items-center gap-20">
                    <p className="flex flex-col gap-16">
                        <span>この頃から</span>
                        <span>人の上に立つ者の</span>
                        <span>兆候を見せ始める。</span>
                    </p>
                    <Image
                        src={'/sibling-01.JPG'}
                        alt="sibling-01"
                        width={550}
                        height={550}
                    />
                </div>
                <div>
                    <p className="flex flex-col justify-between">
                        <span>2002年5月23日、</span>
                        <span>岩手県釜石市で</span>
                        <span>「鈴木翔也」</span>
                        <span>として産まれる。</span>
                    </p>
                    <Image
                        src={'/baby.JPG'}
                        alt="baby"
                        width={200}
                        height={200}
                    />
                </div>
                <div className="flex-col items-end whitespace-nowrap gap-32">
                    <h1 className="flex">
                        <span>やってた部活：</span>
                        <span>野球部（小・中）、<br />eスポーツ部（高）</span>
                    </h1>
                    <h1 className="flex">
                        <span>高校：</span>
                        <span className="flex flex-col items-end">
                            <span>秋田高等専門学校</span>
                            <span>↓</span>
                            <span>N高等学校</span>
                        </span>
                    </h1>
                    <h1>最寄り：笹塚駅</h1>
                    <h1>誕生日：2002年5月23日</h1>
                    <h1 className="flex gap-8">
                        <span>学部学科：</span>
                        <span className="flex flex-col">
                            <span>文学部文学科</span>
                            <span>英米文学専攻</span>
                        </span>
                    </h1>
                    <h1>名前：鈴木翔也</h1>
                </div>
            </div>
        </>
    )
}
