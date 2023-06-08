import Image from "next/image";
import Link from "next/link";

const Brand = ({ color }) => {
  return (
    <div className="min-w-[250px]">
      <Link href="/">
        <Image src={color === 'blue' ? "/images/logo.png" : '/images/logo-white.png'} alt="Logo sealal market" height={60} width={190}  className="w-28 h-9 object-contain md:w-48 md:h-16"/>
      </Link>
    </div>
  );
};

export default Brand;
