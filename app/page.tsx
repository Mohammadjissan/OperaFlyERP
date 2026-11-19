import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Boxes,
  ChartNoAxesCombined,
  Check,
  ClipboardCheck,
  Database,
  FileCheck2,
  HardDrive,
  Laptop,
  Network,
  PackageCheck,
  ShieldCheck,
  WifiOff,
  type LucideIcon,
} from "lucide-react";

const capabilities: {
  number: string;
  icon: LucideIcon;
  title: string;
  description: string;
  label: string;
  tone: string;
}[] = [
  {
    number: "01",
    icon: Boxes,
    title: "Inventory that knows every batch",
    description: "Track stock, expiry dates, rack locations and price tiers across retail, pharma, FMCG and wholesale operations.",
    label: "STOCK · BATCH · EXPIRY",
    tone: "mint",
  },
  {
    number: "02",
    icon: FileCheck2,
    title: "GST billing, right at the counter",
    description: "Create GST-ready invoices, manage ledgers and prepare compliance workflows with your business data close at hand.",
    label: "GST · LEDGERS · E-WAY",
    tone: "coral",
  },
  {
    number: "03",
    icon: Network,
    title: "Many counters. One local network.",
    description: "Connect billing desks and workstations over your office LAN, all working with the local server, internet or not.",
    label: "MULTI-USER · LAN",
    tone: "blue",
  },
  {
    number: "04",
    icon: HardDrive,
    title: "Your data stays in your hands",
    description: "Keep operational data on your own system and build a local backup routine around the way your business works.",
    label: "LOCAL DATA · BACKUPS",
    tone: "yellow",
  },
];

const activity = [
  { time: "09:12 AM", title: "Counter 02 · Invoice #2841", detail: "GST sale · 4 items", amount: "+ ₹2,480", tone: "green" },
  { time: "09:08 AM", title: "Stock received · Batch FJ-24", detail: "Warehouse A · 36 units", amount: "+ 36 units", tone: "blue" },
  { time: "09:02 AM", title: "Ledger updated · Sharma Traders", detail: "Payment recorded", amount: "₹18,600", tone: "orange" },
];

const markets: { icon: LucideIcon; title: string; description: string }[] = [
  { icon: Laptop, title: "Retail & POS", description: "Quick counter billing and daily sales" },
  { icon: Boxes, title: "Wholesale & FMCG", description: "Bulk stock, pricing and party ledgers" },
  { icon: BadgeCheck, title: "Pharma distribution", description: "Batch, expiry and stock visibility" },
  { icon: ChartNoAxesCombined, title: "Manufacturing", description: "Purchasing, inventory and accounts" },
];

function BrandMark() {
  return (
    <Image src="/operafy-logo.png" alt="Operafy" width={40} height={40} className="h-9 w-9 rounded-lg object-contain" />
  );
}

function ProductPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[590px] animate-rise">
      <div className="absolute -left-10 top-12 hidden h-28 w-28 rounded-full border border-[#1769aa]/15 lg:block" />
      <div className="absolute -right-5 bottom-16 hidden h-16 w-16 rounded-full bg-[#f0ba53]/30 lg:block" />
      <div className="relative overflow-hidden rounded-[18px] border border-[#d8ded6] bg-white shadow-[0_28px_80px_rgba(34,55,42,0.16)]">
        <div className="flex items-center justify-between border-b border-[#e8ece6] bg-[#fafbf8] px-4 py-3 sm:px-5">
          <div className="flex items-center gap-3">
            <BrandMark />
            <div>
              <p className="text-xs font-bold text-[#1b3044]">Operafy Retail</p>
              <p className="mt-0.5 text-[10px] text-[#859188]">Main branch · Local server</p>
            </div>
          </div>
          <div className="flex items-center gap-1.5 rounded-full border border-[#cfe0ef] bg-[#eef6fc] px-2.5 py-1.5 text-[10px] font-semibold text-[#1769aa]">
            <WifiOff size={12} strokeWidth={2.4} /> Offline &amp; ready
          </div>
        </div>

        <div className="grid min-h-[318px] grid-cols-1 sm:grid-cols-[144px_1fr]">
          <aside className="hidden border-r border-[#edf0eb] bg-[#fbfcfa] p-3 sm:block">
            <p className="mb-3 px-2 text-[9px] font-bold uppercase tracking-[0.12em] text-[#9aa59b]">Workspace</p>
            <div className="space-y-1 text-[11px] font-medium">
              <div className="flex items-center gap-2 rounded-lg bg-[#e8f2fa] px-2.5 py-2 text-[#1769aa]"><ClipboardCheck size={13} /> Billing</div>
              <div className="flex items-center gap-2 px-2.5 py-2 text-[#6e7a71]"><Boxes size={13} /> Inventory</div>
              <div className="flex items-center gap-2 px-2.5 py-2 text-[#6e7a71]"><ChartNoAxesCombined size={13} /> Accounts</div>
              <div className="flex items-center gap-2 px-2.5 py-2 text-[#6e7a71]"><PackageCheck size={13} /> Reports</div>
            </div>
            <div className="mt-10 rounded-lg border border-[#e5eae3] bg-white p-2.5">
              <p className="text-[9px] text-[#8a968d]">DATABASE</p>
              <p className="mt-1 flex items-center gap-1.5 text-[10px] font-semibold text-[#287547]"><span className="h-1.5 w-1.5 rounded-full bg-[#39a65e]" /> This PC · Connected</p>
            </div>
          </aside>

          <div className="min-w-0 p-4 sm:p-5">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#8a968d]">Tuesday, 23 June 2026</p>
                <h3 className="mt-1 text-lg font-bold text-[#1b3044]">Good morning, Jissan</h3>
              </div>
              <span className="rounded-md bg-[#1769aa] px-3 py-2 text-[10px] font-bold text-white">+ New invoice</span>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-2.5">
              <div className="rounded-lg border border-[#e8ece6] bg-white p-3">
                <p className="text-[10px] text-[#89948b]">Today&apos;s sales</p>
                <p className="mt-1 text-lg font-bold text-[#1b3044]">₹84,260</p>
                <p className="mt-1 text-[9px] font-medium text-[#32925a]">18 invoices raised</p>
              </div>
              <div className="rounded-lg border border-[#e8ece6] bg-white p-3">
                <p className="text-[10px] text-[#89948b]">Stock to review</p>
                <p className="mt-1 text-lg font-bold text-[#1b3044]">07 items</p>
                <p className="mt-1 text-[9px] font-medium text-[#d47847]">Near expiry or low</p>
              </div>
            </div>

            <div className="mt-5">
              <div className="mb-2 flex items-center justify-between">
                <p className="text-[11px] font-bold text-[#1b3044]">Recent activity</p>
                <span className="text-[9px] text-[#89948b]">All counters synced</span>
              </div>
              <div className="divide-y divide-[#edf0eb] rounded-lg border border-[#e8ece6] bg-white px-3">
                {activity.map((entry) => (
                  <div key={entry.title} className="flex items-center justify-between gap-2 py-2.5">
                    <div className="flex min-w-0 items-center gap-2.5">
                      <span className={`h-2 w-2 shrink-0 rounded-full ${entry.tone === "green" ? "bg-[#3aa463]" : entry.tone === "blue" ? "bg-[#5180a6]" : "bg-[#dc9954]"}`} />
                      <div className="min-w-0">
                        <p className="truncate text-[10px] font-semibold text-[#344239]">{entry.title}</p>
                        <p className="mt-0.5 truncate text-[9px] text-[#929b93]">{entry.time} · {entry.detail}</p>
                      </div>
                    </div>
                    <span className="shrink-0 text-[9px] font-semibold text-[#55645a]">{entry.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-2 border-t border-[#e8ece6] bg-[#f7faf6] px-4 py-2.5 sm:px-5">
          <span className="flex items-center gap-1.5 text-[9px] font-medium text-[#6f7c72]"><Database size={12} /> Data stored on your local system</span>
          <span className="text-[9px] text-[#8a968d]">Backup: Today, 08:00 AM</span>
        </div>
      </div>
      <div className="absolute -bottom-5 left-5 hidden items-center gap-2 rounded-lg border border-[#e4e9e1] bg-white px-3 py-2 text-[10px] font-semibold text-[#46554a] shadow-lg sm:flex">
        <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#e8f2fa] text-[#1769aa]"><Check size={14} /></span>
        Internet not required for your business
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="operafy-page overflow-hidden text-[#1b3044]">
      <section className="hero-wash relative">
        <div className="hero-grid pointer-events-none absolute inset-0" />
        <div id="offline-first" className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[0.94fr_1.06fr] lg:gap-10 lg:px-12 lg:pb-24 lg:pt-24">
          <div className="relative z-10 animate-rise">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#d8e4d7] bg-white/80 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-[#397250] shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#3aa463]" /> Built for business on the ground
            </div>
            <h1 className="font-display max-w-[620px] text-[42px] font-semibold leading-[1.08] sm:text-[54px] lg:text-[62px]">
              Your business runs. <span className="text-[#1769aa]">Even offline.</span>
            </h1>
            <p className="mt-6 max-w-[540px] text-[16px] leading-7 text-[#647269]">
              Meet Operafy ERP: powerful desktop software for Indian retail, wholesale and distribution. Bill, manage stock and run accounts at full speed, with no internet required.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              
<a
  href="mailto:mohammadjissankharadi@gmail.com?subject=Operafy%20ERP%20Demo&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20a%20demo%20of%20Operafy%20ERP.%0D%0APlease%20share%20more%20details%20about%20the%20software.%0D%0A%0D%0AThank%20you."
  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1769aa] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#12588f]"
>
                Request a local demo <ArrowRight size={16} />
              </a>
              
<a
  href="mailto:mohammadjissankharadi@gmail.com?subject=Operafy%20ERP%20Demo&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20a%20demo%20of%20Operafy%20ERP.%0D%0APlease%20share%20more%20details%20about%20the%20software.%0D%0A%0D%0AThank%20you."
  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1769aa] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#12588f]"
>
                Explore Operafy <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-medium text-[#718076]">
              <span className="inline-flex items-center gap-1.5"><Check size={13} className="text-[#318454]" /> Windows desktop</span>
              <span className="inline-flex items-center gap-1.5"><Check size={13} className="text-[#318454]" /> Local data control</span>
              <span className="inline-flex items-center gap-1.5"><Check size={13} className="text-[#318454]" /> Multi-counter LAN</span>
            </div>
          </div>
          <ProductPreview />
        </div>

        <div className="relative border-y border-[#e3e8df] bg-white/65">
          <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-[#e3e8df] px-5 sm:px-8 md:grid-cols-4 md:divide-y-0 lg:px-12">
            {[
              ["01", "No internet dependency"],
              ["02", "Fast local billing"],
              ["03", "Your system, your data"],
              ["04", "Built for Indian trade"],
            ].map(([number, label]) => (
              <div key={number} className="flex items-center gap-3 px-3 py-4 sm:px-5 md:py-5">
                <span className="font-display text-sm font-semibold text-[#b0783d]">{number}</span>
                <span className="text-[11px] font-semibold text-[#526057] sm:text-xs">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="why-operafy" className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16 lg:px-12 lg:py-28">
        <div className="max-w-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#b0783d]">Why Operafy Offline ERP?</p>
          <h2 className="font-display mt-4 text-3xl font-semibold leading-tight sm:text-[40px]">The essentials of your business, on your terms.</h2>
          <p className="mt-4 text-sm leading-6 text-[#6a776d]">No cloud dependency between your team and the work. Operafy is installed on your Windows PC or local office server, so your daily operations stay close, quick and in your control.</p>
          
<a
  href="mailto:mohammadjissankharadi@gmail.com?subject=Operafy%20ERP%20Demo&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20a%20demo%20of%20Operafy%20ERP.%0D%0APlease%20share%20more%20details%20about%20the%20software.%0D%0A%0D%0AThank%20you."
  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1769aa] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#12588f]"
>See how Operafy works <ArrowRight size={15} /></a>
        </div>
        <div className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
          {capabilities.map(({ number, icon: Icon, title, description, label, tone }) => (
            <article key={number} className="border-t border-[#dfe5dc] py-6 sm:py-7">
              <div className="flex items-center justify-between">
                <span className={`flex h-10 w-10 items-center justify-center rounded-lg ${tone === "mint" ? "bg-[#e8f2fa] text-[#1769aa]" : tone === "coral" ? "bg-[#fff0e9] text-[#c45f43]" : tone === "blue" ? "bg-[#eaf0f3] text-[#4e738c]" : "bg-[#fbf1d9] text-[#a27427]"}`}><Icon size={19} strokeWidth={1.8} /></span>
                <span className="font-display text-xs font-semibold text-[#a9b2a8]">{number}</span>
              </div>
              <p className="mt-5 text-[9px] font-bold tracking-[0.13em] text-[#8b978d]">{label}</p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-[#283a2e]">{title}</h3>
              <p className="mt-2 text-[13px] leading-6 text-[#728075]">{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="solutions" className="bg-[#1c3044] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-[0.85fr_1.15fr] lg:px-12 lg:py-20">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#e3b76f]">Designed around your workflow</p>
            <h2 className="font-display mt-4 max-w-md text-3xl font-semibold leading-tight sm:text-[40px]">From the first bill to the final ledger.</h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-[#bdc9be]">Keep the counter moving and the back office in sync. Operafy brings the everyday work of trade into one dependable desktop system.</p>
            <a href="#why-operafy" className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-[#e3b76f]">Explore all capabilities <ArrowRight size={15} /></a>
          </div>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {markets.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-[#243c53] p-5 sm:p-6">
                <Icon size={19} className="text-[#e3b76f]" strokeWidth={1.8} />
                <h3 className="mt-4 text-sm font-semibold">{title}</h3>
                <p className="mt-1.5 text-xs leading-5 text-[#bdc9be]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="grid gap-8 rounded-xl border border-[#e1e6de] bg-[#f8faf6] p-6 sm:p-9 md:grid-cols-[1fr_auto] md:items-center">
          <div className="max-w-2xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#b0783d]">Ready when you are</p>
            <h2 className="font-display mt-3 text-2xl font-semibold sm:text-3xl">See your business run on Operafy.</h2>
            <p className="mt-2 text-sm leading-6 text-[#6a776d]">Request a local demo and walk through billing, inventory and accounting with your team.</p>
          </div>
          
<a
  href="mailto:mohammadjissankharadi@gmail.com?subject=Operafy%20ERP%20Demo&body=Hello%2C%0D%0A%0D%0AI%20am%20interested%20in%20a%20demo%20of%20Operafy%20ERP.%0D%0APlease%20share%20more%20details%20about%20the%20software.%0D%0A%0D%0AThank%20you."
  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#1769aa] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#12588f]"
>Request a demo <ArrowRight size={16} /></a>
        </div>
        <p className="mt-6 flex items-center justify-center gap-2 text-center text-[11px] text-[#89958b]"><ShieldCheck size={14} /> Local-first operations. Internet when you choose it.</p>
      </section>
    </div>
  );
}