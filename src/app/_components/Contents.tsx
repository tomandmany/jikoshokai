// app/_components/Contents.tsx

// ページのパスのコメント
"use client"

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
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
            <div className="max-w-[800px] ml-auto py-20 flex flex-col items-end text-5xl gap-96 [&>div]:min-w-full [&>div]:flex">
                <div className="gap-16 flex flex-col items-center">
                    <span>これまでもこれからも好きなもの</span>
                    <div className="flex flex-wrap gap-24 text-3xl">
                        <div className="relative flex justify-center items-center group">
                            <Image
                                src="/sheenaringo.JPG"
                                alt="sheenaringo"
                                width={200}
                                height={200}
                                className="transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-30"
                            />
                            <span className="absolute -bottom-16 whitespace-nowrap">椎名林檎</span>
                            <Link
                                href="https://youtu.be/Xge2F56vwP4?si=kTwJgtj8Z4C8VJAM" className="absolute text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out transform translate-y-[20px] group-hover:translate-y-0 hover:underline cursor-pointer flex gap-2"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <span>動画を観る</span>
                                <ExternalLink />
                            </Link>
                        </div>
                        <div className="relative flex justify-center items-center group">
                            <Image
                                src="/katojunichi.JPG"
                                alt="katojunichi"
                                width={200}
                                height={200}
                                className="transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-30"
                            />
                            <span className="absolute -bottom-16 whitespace-nowrap">加藤純一</span>
                            <Link
                                href="https://www.youtube.com/live/MxFo2UYSWnY?si=juFYJQlSt02LVupM" className="absolute text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out transform translate-y-[20px] group-hover:translate-y-0 hover:underline cursor-pointer flex gap-2"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <span>動画を観る</span>
                                <ExternalLink />
                            </Link>
                        </div>
                        <div className="relative flex justify-center items-center group">
                            <Image
                                src="/futonchan.JPG"
                                alt="futonchan"
                                width={200}
                                height={200}
                                className="transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-30"
                            />
                            <span className="absolute -bottom-16 whitespace-nowrap">布団ちゃん</span>
                            <Link
                                href="https://youtu.be/laUQMJRNWHI?si=Pq-Uez-B69_t0crm" className="absolute text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out transform translate-y-[20px] group-hover:translate-y-0 hover:underline cursor-pointer flex gap-2"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <span>動画を観る</span>
                                <ExternalLink />
                            </Link>
                        </div>
                        <div className="relative flex justify-center items-center group">
                            <Image
                                src="/itabashihouse.JPG"
                                alt="itabashihouse"
                                width={200}
                                height={200}
                                className="transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-30"
                            />
                            <span className="absolute -bottom-16 whitespace-nowrap">板橋ハウス</span>
                            <Link
                                href="https://youtu.be/16QuiGaD6-M?si=Q5TZJRdRLUqOEte8" className="absolute text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out transform translate-y-[20px] group-hover:translate-y-0 hover:underline cursor-pointer flex gap-2"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <span>動画を観る</span>
                                <ExternalLink />
                            </Link>
                        </div>
                        <div className="relative flex flex-col justify-center items-center group">
                            <Image
                                src="/makaronienpitsu.JPG"
                                alt="makaronienpitsu"
                                width={200}
                                height={200}
                                className="transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-30"
                            />
                            <span className="absolute -bottom-14 whitespace-nowrap">マカロニえんぴつ</span>
                            <Link
                                href="https://youtu.be/PHJLD5f0TU4?si=qxQ0J8H9FVnLsWoV" className="absolute text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out transform translate-y-[20px] group-hover:translate-y-0 hover:underline cursor-pointer flex gap-2"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <span>動画を観る</span>
                                <ExternalLink />
                            </Link>
                        </div>
                        <div className="relative flex flex-col justify-center items-center group">
                            <Image
                                src="/cclemon.JPG"
                                alt="cclemon"
                                width={200}
                                height={200}
                                className="transition duration-500 ease-in-out transform group-hover:scale-105 group-hover:opacity-30"
                            />
                            <span className="absolute -bottom-10">CCレモン</span>
                            <Link
                                href="https://www.suntory.co.jp/softdrink/cclemon/" className="absolute text-white text-lg font-bold opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out transform translate-y-[20px] group-hover:translate-y-0 hover:underline cursor-pointer flex gap-2"
                                target="_blank"
                                rel="noreferrer noopener"
                            >
                                <span>サイトを観る</span>
                                <ExternalLink />
                            </Link>
                        </div>
                    </div>
                </div>
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
                        <div className="absolute -top-[150px] right-[125px]">
                            <Image
                                src={'/elementary-03.JPG'}
                                alt="elementary-03"
                                width={500}
                                height={250}
                                className="-rotate-90"
                            />
                        </div>
                        <div className="absolute -bottom-[100px] -right-[80px]">
                            <Image
                                src={'/elementary-05.JPG'}
                                alt="elementary-05"
                                width={380}
                                height={250}
                            />
                        </div>
                    </div>
                </div>
                <div className="items-center flex-col max-w-full gap-20">
                    <span>保育園</span>
                    <div className="flex gap-10 mr-auto">
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
                <div className="flex gap-32">
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
                        <div className="flex flex-col gap-16">
                            <span>野球部（小・中）、</span>
                            <span>eスポーツ部（高）</span>
                        </div>
                    </h1>
                    <h1 className="flex">
                        <span>高校：</span>
                        <span className="flex flex-col items-end gap-10">
                            <span>秋田高等専門学校</span>
                            <span>↓</span>
                            <span>N高等学校</span>
                        </span>
                    </h1>
                    <h1>最寄り：笹塚駅</h1>
                    <h1>誕生日：2002年5月23日</h1>
                    <h1 className="flex gap-8">
                        <span>学部学科：</span>
                        <span className="flex flex-col gap-10">
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
