import React from "react";
const Footer = () => {
  return (
    <footer className="  dark:bg-gray-900 text-gray-900 dark:text-gray-100 h-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center ">
        <p>&copy; {new Date().getFullYear()} Luxury NYC Restaurant</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Instagram</a>
          <a href="#" className="hover:text-blue-400">Twitter</a>

          {/*here i decisioned link of references be empty "hasan mohameth"*/}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
