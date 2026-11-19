import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#e1e8ed] bg-[#f7f9fb]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
        <div className="max-w-sm">
          <Link href="/" className="inline-flex items-center gap-2.5">
            <Image src="/operafy-logo.png" alt="" width={42} height={42} className="h-9 w-9 rounded-lg object-contain" />
            <span className="font-display text-base font-semibold text-[#1b3044]">Operafy ERP</span>
          </Link>
          <p className="mt-4 text-[13px] leading-6 text-[#748077]">Reliable desktop ERP for Indian retail, wholesale, distribution and manufacturing businesses. Your work, uninterrupted.</p>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#839087]">Explore</p>
          <div className="mt-4 flex flex-col gap-3">
            <Link href="/#why-operafy" className="text-[13px] text-[#536157] hover:text-[#1769aa]">Why Operafy</Link>
            <Link href="/#solutions" className="text-[13px] text-[#536157] hover:text-[#1769aa]">Solutions</Link>
            <Link href="/#offline-first" className="text-[13px] text-[#536157] hover:text-[#1769aa]">Offline-first ERP</Link>
          </div>
        </div>
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#839087]">Talk to our team</p>
          <p className="mt-4 text-[13px] leading-6 text-[#748077]">See billing, inventory and accounting running on your local system.</p>
          
<a
  href="mailto:mohammadjissankharadi@gmail.com?subject=Operafy%20ERP%20Demo&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20a%20demo%20of%20Operafy%20ERP.%0D%0APlease%20share%20more%20details%20about%20the%20software.%0D%0A%0D%0AThank%20you."
  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1769aa] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#12588f]"
>Request a demo <ArrowRight size={14} /></a>
        </div>
      </div>
      <div className="border-t border-[#e1e8ed]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-4 text-[11px] text-[#89958b] sm:flex-row sm:px-8 lg:px-12">
          <p>© {new Date().getFullYear()} Operafy ERP. All rights reserved.</p>
          <p>operaflyerp.com</p>
        </div>
      </div>
    </footer>
  );
}