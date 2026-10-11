import Stripe from "stripe";

export async function POST(request) {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    return new Response("STRIPE_SECRET_KEY が設定されていません。", { status: 500 });
  }
  if (secretKey.startsWith("sk_live_")) {
    return new Response("本番用キー（sk_live_）は使えません。テスト用キー（sk_test_）を設定してください。", {
      status: 500,
    });
  }

  const stripe = new Stripe(secretKey);
  // 戻り先は、アクセスされたドメインから組み立てる（手元でも公開先でも動くように）
  const origin = new URL(request.url).origin;

  const session = await stripe.checkout.sessions.create({
    mode: "subscription",
    line_items: [
      {
        price_data: {
          currency: "jpy",
          product_data: { name: "展示会ナビ 月額プラン" },
          unit_amount: 800,
          recurring: { interval: "month" },
        },
        quantity: 1,
      },
    ],
    success_url: `${origin}/success`,
    cancel_url: `${origin}/cancel`,
  });

  return Response.redirect(session.url, 303);
}
