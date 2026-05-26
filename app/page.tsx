export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          AI Negotiation Coach
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Practice Rate Negotiations<br />
          <span className="text-[#58a6ff]">Before the Real Thing</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Simulate tough client conversations with AI personas, get instant feedback on your responses, and master the strategies top freelancers use to charge what they&apos;re worth.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start Practicing — $12/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { icon: "🎭", title: "Realistic Client Personas", desc: "Face the budget-slasher, the scope-creeper, and the lowballer — all powered by GPT-4." },
            { icon: "📊", title: "Instant Feedback", desc: "Every response scored on confidence, clarity, and negotiation effectiveness." },
            { icon: "📚", title: "Proven Playbooks", desc: "Access a library of scripts and strategies from six-figure freelancers." }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl mb-2">{f.icon}</div>
              <h3 className="font-semibold text-white mb-1 text-sm">{f.title}</h3>
              <p className="text-xs text-[#8b949e] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$12</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited AI negotiation sessions",
              "10+ client personas (updated monthly)",
              "Real-time response scoring",
              "Negotiation strategy library",
              "Session history & progress tracking",
              "Email support"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] mt-0.5">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors duration-150"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: "How realistic are the AI client simulations?",
              a: "Each persona is built from real negotiation patterns — the budget-conscious startup, the enterprise procurement gatekeeper, the repeat client pushing for a discount. GPT-4 keeps conversations dynamic and unpredictable."
            },
            {
              q: "What if I'm just starting out and don't have high rates yet?",
              a: "Perfect time to start. The coach helps you build confidence and language for raising rates from any baseline. Many users report landing their first rate increase within weeks of practicing."
            },
            {
              q: "Can I cancel anytime?",
              a: "Yes. Cancel from your account dashboard at any time. You keep access until the end of your billing period with no questions asked."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="font-semibold text-white text-sm mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#484f58]">
        © {new Date().getFullYear()} Rate Negotiation Coach. All rights reserved.
      </footer>
    </main>
  )
}
