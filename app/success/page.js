import Link from "next/link";

export const metadata = { title: "ご購入ありがとうございました | 展示会ナビ" };

export default function Success() {
  return (
    <main className="flex flex-1 items-center justify-center px-5 py-20">
      <div className="max-w-md text-center">
        <p className="text-5xl">🎉</p>
        <h1 className="mt-6 text-2xl font-black">ありがとうございました</h1>
        <p className="mt-4 leading-relaxed text-stone-600">
          展示会ナビへのお申し込みが完了しました。
        </p>
        <Link href="/" className="mt-10 inline-block text-sm font-medium text-orange-600 underline">
          トップへ戻る
        </Link>
      </div>
    </main>
  );
}
