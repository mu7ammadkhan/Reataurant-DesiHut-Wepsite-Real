export default function Footer() {
  return (
    <footer className="bg-black px-4 py-6 text-center text-white sm:px-6 lg:px-8">
      <p className="text-sm sm:text-base">
        © {new Date().getFullYear()} Desi Hut Hyderabad
      </p>
      <p className="mt-2 text-xs sm:text-sm">All rights reserved</p>
    </footer>
  );
}