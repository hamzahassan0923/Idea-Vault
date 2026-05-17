// components/Footer.jsx
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const sections = ['Product', 'Company', 'Resources', 'Legal'];

  return (
    <footer className="w-full bg-slate-900 text-slate-200 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 sm:px-6 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 pb-12 border-b border-slate-800">
          {/* Brand Info */}
          <div className="space-y-4 xl:col-span-1">
            <Link href="/" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">
              IdeaVault
            </Link>
            <p className="text-sm text-slate-400">
              Building the future of web applications with modern tools.
            </p>
          </div>
          
          {/* Newsletter Form */}
          <div className="mt-8 xl:mt-0 xl:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Subscribe to our newsletter
            </h3>
            <p className="mt-2 text-sm text-slate-400">
              The latest news, articles, and resources, sent to your inbox weekly.
            </p>
            <form className="mt-4 sm:flex gap-2 max-w-md">
              <input 
                type="email" 
                required 
                placeholder="Enter your email" 
                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm" 
              />
              <button 
                type="submit" 
                className="mt-3 sm:mt-0 w-full sm:w-auto px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-md transition-colors text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
          {sections.map((section) => (
            <div key={section}>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                {section}
              </h3>
              <ul className="mt-4 space-y-2.5 text-sm text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Careers</Link></li>
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-slate-800 text-sm text-slate-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} IdeaVault, Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
