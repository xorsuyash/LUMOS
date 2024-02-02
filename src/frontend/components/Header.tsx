import Link from 'next/link';

interface Props {
  title: string;
  subtitle: string;
  link: string;
  name: string;
}

const Header: React.FC<Props> = ({ title, subtitle, link, name }: Props) => (
  <div>
    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">{title}</h2>
    <p className="mt-2 text-center text-sm text-gray-600">
      {subtitle}
      <Link href={`${link}`} className="font-medium text-indigo-600 hover:text-indigo-500">
        {' ' + name}
      </Link>
    </p>
  </div>
);

export default Header;
