function Features() {
  return (
    <section className="mx-auto max-w-7xl px-8 py-20">

      <h2 className="mb-14 text-center text-4xl font-bold">
        Why Choose FindYourBest?
      </h2>

      <div className="grid gap-8 md:grid-cols-3">

        <div className="rounded-2xl bg-slate-800 p-8">
          <h3 className="mb-3 text-xl font-semibold text-pink-500">
            ❤️ Smart Matching
          </h3>

          <p className="text-slate-400">
            Discover people who truly share your
            interests and lifestyle.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-8">
          <h3 className="mb-3 text-xl font-semibold text-pink-500">
            💬 Real-time Chat
          </h3>

          <p className="text-slate-400">
            Connect instantly with secure messaging.
          </p>
        </div>

        <div className="rounded-2xl bg-slate-800 p-8">
          <h3 className="mb-3 text-xl font-semibold text-pink-500">
            🔒 Privacy First
          </h3>

          <p className="text-slate-400">
            Your data remains secure with modern authentication and encryption.
          </p>
        </div>

      </div>

    </section>
  );
}

export default Features;