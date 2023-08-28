import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher";
import useTranslation from "@/hooks/useTranslation";
import Link from "next/link";

const NavBar = () => {
  const { i18n } = useTranslation();
  return (
    <div className=" sticky top-0 bg-gray-800 text-white p-4 ">
      <div className="flex justify-between items-center w-full px-20 mx-auto">
        <div className="flex items-center">
          <div className="mr-6 flex items-center">
            <Image src="/img/logo.png" alt="logo" width={32} height={32} />
            <div className="font-bold text-xl ml-2">Chat2DB</div>
          </div>
          <Link href="/" className="text-white hover:text-gray-300 mr-6">
            {i18n("home.nav.home")}
          </Link>
          <Link href="/doc" className="text-white hover:text-gray-300 mr-6">
            {i18n("home.nav.doc")}
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300 mr-6">
            {i18n("home.nav.about")}
          </Link>
        </div>
        <div>
          <LanguageSwitcher />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
