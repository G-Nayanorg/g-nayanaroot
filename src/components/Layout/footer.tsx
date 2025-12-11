import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Image
                src="/Iscs/logo.svg"
                alt="ISCS Technologies Logo"
                width={150}
                height={56}
                className="mr-4"
              />

              <Image
                src="/Gnayanalogo.svg"
                alt="G-nayana Logo"
                width={150}
                height={56}
                className="mr-4"
              />
            </div>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-md">
              G-Nayana: AI-Powered Eye Care Solutions. Developed by ISCS
              Technologies, a leading technology company specializing in
              innovative healthcare solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://iscstech.com"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  target="/"
                >
                  About ISCS
                </Link>
              </li>
              <li>
                <Link
                  href="https://iscstech.com"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  target="/"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="https://iscstech.com"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  target="/"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="https://iscstech.com/legal/privacy-policy"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  target="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="https://iscstech.com/legal/terms-of-service"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  target="/"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="https://iscstech.com/legal/cookie-policy"
                  className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                  target="/"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} G-Nayana. A project by ISCS
              Technologies. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Developed by ISCS Technologies
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
