import Button from "../ui/Button";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-700 bg-slate-900/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-5">
        
        {/* Logo */}
        <div className="text-2xl font-bold">
          Find<span className="text-pink-500">Your</span>Best ❤️
        </div>

        {/* Navigation */}
        <div className="hidden gap-8 text-slate-300 md:flex">
          <a href="#" className="transition hover:text-pink-500">
            Home
          </a>

          <a href="#" className="transition hover:text-pink-500">
            Discover
          </a>

          <a href="#" className="transition hover:text-pink-500">
            About
          </a>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button variant="secondary">
            Login
          </Button>

          <Button>
            Register
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;