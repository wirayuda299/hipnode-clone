'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { navLinks } from '@/constants/navLinks';
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from '@radix-ui/react-tooltip';

const NavLinks = () => {
  const pathname = usePathname();

  return (
    <div className='navLinksContainer'>
      {navLinks.map((link) => {
        const isActive =
          (pathname.includes(link.route) && link.route.length > 1) ||
          pathname === link.route;

        return (
          <TooltipProvider key={link.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={link.route}
                  key={link.label}
                  className={`navLink ${isActive && 'bg-primary'}`}
                >
                  <Image
                    src={link.imgURL}
                    alt={link.label}
                    width={20}
                    height={20}
                    className={`navLinkIcon ${isActive && 'brightness-200'}`}
                  />
                </Link>
              </TooltipTrigger>
              <TooltipContent className='navTooltipContent'>
                <p className='navTooltip'>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default NavLinks;
