import Button from "../ui/Button";

function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center justify-center px-8">
      <div className="max-w-4xl text-center">

        <h1 className="mb-6 text-6xl font-extrabold leading-tight">
          Find meaningful
          <br />

          <span className="text-pink-500">
            connections
          </span>

          , not just matches.
        </h1>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
          Meet people based on shared interests,
          personality, and genuine conversations.
        </p>

        <div className="flex justify-center gap-4">

          <Button>
            Get Started
          </Button>

          <Button variant="secondary">
            Learn More
          </Button>

        </div>

      </div>
    </section>
  );
}

export default Hero;