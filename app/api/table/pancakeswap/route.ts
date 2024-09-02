import { NextResponse } from "next/server";
import { Swap } from "@/constants/data";

export async function POST(req: Request) {
    const { pageNo } = await req.json();
    try {
        const res = await fetch(
            `https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=6707&sort-field=txns24h&category=spot&page=${pageNo}`
        );

        if (!res.ok) {
            return NextResponse.json({ error: "Failed to fetch data"}, { status: res.status });
        }

        const pancakeswapResTemp = await res.json();
        const pancakeswapRes = pancakeswapResTemp.data;
        const pancakeswap: Swap[] = pancakeswapRes.pageList;

        return NextResponse.json({ data: pancakeswap, count: pancakeswapResTemp.data.total }, { status: 200 });
    } catch (e) {
        return NextResponse.json({error: "Internal server error"}, { status: 500 });
    }
}
