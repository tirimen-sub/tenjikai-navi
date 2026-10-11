import Link from "next/link";

export const metadata = { title: "購入をキャンセルしました | 展示会ナビ" };

export default function Cancel() {
  return (
    <main className="flex flex-1 items-center justify-center px-5 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-2xl font-black">購入をキャンセルしました</h1>
        <p className="mt-4 leading-relaxed text-stone-600">お支払いは行われていません。</p>
        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-stone-900 px-8 py-3 text-sm font-bold text-white"
        >
          トップへ戻る
        </Link>
      </div>
    </main>
  );
}
