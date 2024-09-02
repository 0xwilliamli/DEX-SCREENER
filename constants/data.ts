import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];

export type Swap = {
  platformId: number,
  platformName: string,
  dexerPlatformName: string,
  platformCryptoId: number,
  pairContractAddress: string,
  poolId: string,
  dexerId: number,
  dexerName: string,
  baseTokenName: string,
  baseTokenAddress: string,
  baseTokenSymbol: string,
  quotoTokenName: string,
  quotoTokenAddress: string,
  quotoTokenSymbol: string,
  priceUsd: number,
  priceQuote: number,
  volumeUsd24h: number,
  basePrice1h: number,
  quotePrice1h: number,
  quoteChange24h: number,
  baseChange24h: number,
  fdv: number,
  liquidity: number,
  liquidityScore: number,
  txns24h: number,
  baseCurrencyId: number,
  baseCurrencyName: string,
  baseCurrencySlug: string,
  reverseOrder: boolean,
  rank: number
}

export const navItems: NavItem[] = [
  // {
  //   title: "All",
  //   href: "/dashboard",
  //   label: "Dashboard",
  // },
  {
    title: "Uniswap",
    href: "/dashboard/uniswap",
    label: "Uniswap",
  },
  {
    title: "PancakeSwap",
    href: "/dashboard/pancakeswap",
    label: "Pancakeswap",
  },
];
