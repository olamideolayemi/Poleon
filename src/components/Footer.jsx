// Footer Component
const Footer = ({ setCurrentPage }) => {
  return (
    <footer className="relative bg-gradient-to-b from-transparent to-black/50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-lg overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center">
                <img src="/logos/poleon-1.png" alt="Poleon logo" className="w-full h-full object-contain" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                POLEON
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Digital strategy that drives real growth for ambitious brands.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-white">𝕏</span>
              </div>
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-white">in</span>
              </div>
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-colors cursor-pointer">
                <span className="text-white">IG</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6">Company</h3>
            <div className="space-y-3">
              {['About', 'Services', 'Portfolio', 'Blog', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => setCurrentPage(item.toLowerCase())}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6">Services</h3>
            <div className="space-y-3 text-gray-400">
              <p>Digital Presence</p>
              <p>Social Growth</p>
              <p>Analytics</p>
              <p>Content Strategy</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6">Contact</h3>
            <div className="space-y-3 text-gray-400">
              <p>anthonyabu35@gmail.com</p>
              <p>+234 902 418 2998</p>
              <p>Lagos, NG</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 POLEON. All rights reserved.
          </p>
          <div className="flex gap-6 text-gray-500 text-sm">
            <button className="hover:text-cyan-400 transition-colors">Privacy Policy</button>
            <button className="hover:text-cyan-400 transition-colors">Terms of Service</button>
            <button className="hover:text-cyan-400 transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
