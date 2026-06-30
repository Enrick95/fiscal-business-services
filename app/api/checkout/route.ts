import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

export async function POST(req: Request) {
  try {
    const { plan } = await req.json();

    let priceId = "";

    switch (plan) {
      case "standard":
        priceId = process.env.STRIPE_STANDARD_PRICE_ID!;
        break;

      case "premium":
        priceId = process.env.STRIPE_PREMIUM_PRICE_ID!;
        break;

      default:
        return NextResponse.json(
          { error: "Offre invalide." },
          { status: 400 }
        );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],

      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/merci`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/#tarifs`,
    });

    return NextResponse.json({
      url: session.url,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Une erreur est survenue." },
      { status: 500 }
    );
  }
}