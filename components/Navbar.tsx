"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X } from "lucide-react";

const links = [
  { label: "Why Operafy", href: "/#why-operafy" },
  { label: "Solutions", href: "/#solutions" },
  { label: "How it works", href: "/#offline-first" },
  { label: "Contact", href: "mailto:hello@operaflyerp.com" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#e1e8ed] bg-[#fbfcf9]/95 backdrop-blur-md">
      <nav className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-12">
        <Link href="/" className="flex shrink-0 items-center gap-2.5" aria-label="Operafy ERP home">
          <Image src="/operafy-logo.png" alt="" width={42} height={42} className="h-9 w-9 rounded-lg object-contain" />
          <span className="font-display text-[17px] font-semibold tracking-normal text-[#1b3044]">Operafy<span className="ml-1 text-[10px] font-bold uppercase tracking-[0.13em] text-[#829087]">ERP</span></span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link key={link.label} href={link.href} className="text-[12px] font-semibold text-[#66746a] transition-colors hover:text-[#1769aa]">
              {link.label}
            </Link>
          ))}
        </div>

        
<a
  href="mailto:mohammadjissankharadi@gmail.com?subject=Operafy%20ERP%20Demo&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20a%20demo%20of%20Operafy%20ERP.%0D%0APlease%20share%20more%20details%20about%20the%20software.%0D%0A%0D%0AThank%20you."
  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1769aa] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#12588f]"
>
          Request a demo <ArrowRight size={14} />
        </a>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-[#405047] hover:bg-[#edf2eb] md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-[#e1e8ed] bg-[#fbfcf9] px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-md px-3 py-2.5 text-sm font-medium text-[#526057] hover:bg-[#edf2eb]">
                {link.label}
              </Link>
            ))}
           
<a
  href="mailto:mohammadjissankharadi@gmail.com?subject=Operafy%20ERP%20Demo&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20a%20demo%20of%20Operafy%20ERP.%0D%0APlease%20share%20more%20details%20about%20the%20software.%0D%0A%0D%0AThank%20you."
  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1769aa] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#12588f]"
>
              Request a demo <ArrowRight size={15} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}