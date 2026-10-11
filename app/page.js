const features = [
  {
    title: "展示会情報をまとめてチェック",
    body: "デザイン・クラフト・アート・ギフト系など、全国の展示会の日程・会場・出展募集をひとつにまとめてお届けします。",
  },
  {
    title: "出展クリエイターがわかる",
    body: "気になる展示会に、どんなクリエイターやブランドが出るのか。作風やSNSのリンクと一緒に整理します。",
  },
  {
    title: "見逃さないお知らせ",
    body: "出展の締切や開催日が近づくと、お知らせ。情報集めにかけていた時間を、本業に使えます。",
  },
];

const targets = [
  "仕入れ先や取引先を探しているバイヤー・店舗の方",
  "出展先を探しているクリエイター・作家の方",
  "コラボ相手を探している企業・ブランドの方",
];

function BuyButton() {
  return (
    <form action="/api/checkout" method="POST">
      <button
        type="submit"
        className="w-full sm:w-auto rounded-full bg-orange-600 px-10 py-4 text-lg font-bold text-white shadow-lg shadow-orange-600/30 transition hover:bg-orange-700 active:scale-[0.98]"
      >
        月額800円で購入する
      </button>
    </form>
  );
}

export default function Home() {
  return (
    <main className="flex-1">
      <header className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
        <span className="text-lg font-black tracking-tight">
          展示会<span className="text-orange-600">ナビ</span>
        </span>
        <span className="text-sm text-stone-500">月額800円</span>
      </header>

      <section className="mx-auto max-w-5xl px-5 pt-10 pb-16 sm:pt-16">
        <p className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-medium text-orange-700">
          展示会 × クリエイター情報サービス
        </p>
        <h1 className="text-3xl font-black leading-tight sm:text-5xl">
          展示会とクリエイターの情報、
          <br className="hidden sm:block" />
          もう探し回らなくていい。
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
          あちこちのサイトやSNSに散らばっている展示会情報と、出展クリエイターの情報を、まとめて整理してお届けします。
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <BuyButton />
          <span className="text-sm text-stone-500">いつでも解約できます</span>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto grid max-w-5xl gap-6 px-5 sm:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-stone-200 p-6">
              <h2 className="text-lg font-bold">{f.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <h2 className="text-2xl font-black">こんな方におすすめ</h2>
        <ul className="mt-6 space-y-3">
          {targets.map((t) => (
            <li key={t} className="flex gap-3 text-stone-700">
              <span className="font-bold text-orange-600">✓</span>
              {t}
            </li>
          ))}
        </ul>
      </section>

      <section className="px-5 pb-20">
        <div className="mx-auto max-w-xl rounded-3xl bg-stone-900 p-8 text-center text-white sm:p-12">
          <p className="text-sm text-stone-400">料金</p>
          <p className="mt-2 text-5xl font-black">
            800<span className="text-2xl">円</span>
            <span className="text-base font-normal text-stone-400"> / 月（税込）</span>
          </p>
          <p className="mt-4 text-sm text-stone-300">展示会情報・クリエイター情報がすべて見放題</p>
          <div className="mt-8">
            <BuyButton />
          </div>
        </div>
      </section>

      <footer className="border-t border-stone-200 py-8 text-center text-xs text-stone-400">
        © 展示会ナビ
      </footer>
    </main>
  );
}
