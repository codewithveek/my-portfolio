export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-[#003b00] mt-20">
      <div className="container mx-auto px-4 max-w-4xl flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <div>
          <span className="text-[#008f11]">veek@portfolio</span>:<span className="text-blue-500">~</span>$ exit
        </div>
        <div>
          [Process completed]
        </div>
        <div>
          &copy; {new Date().getFullYear()} Veek. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

