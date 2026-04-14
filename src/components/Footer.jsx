const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-xl font-bold text-gray-900 mb-4">AntWorth</h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Building the next generation of transportation and regulatory technology.
          </p>
        </div>

        {/* Links Columns */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Solutions</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Vehicle Tracking</li>
            <li className="hover:text-gray-900 cursor-pointer">ADTT Systems</li>
            <li className="hover:text-gray-900 cursor-pointer">Fleet Management</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Support</h3>
          <ul className="space-y-3 text-sm text-gray-600">
            <li className="hover:text-gray-900 cursor-pointer">Documentation</li>
            <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
            <li className="hover:text-gray-900 cursor-pointer">Status</li>
          </ul>
        </div>

        {/* Contact/Newsletter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wider">Stay Updated</h3>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-200 text-center md:text-left text-xs text-gray-400">
        © {new Date().getFullYear()} AntWorth. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;