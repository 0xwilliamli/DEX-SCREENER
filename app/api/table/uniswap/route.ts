import { NextResponse } from "next/server";
import { Swap } from "@/constants/data";

export async function POST(req: Request) {
	const { pageNo } = await req.json();
	try {
		const res = await fetch(
			`https://api.coinmarketcap.com/dexer/v3/platformpage/pair-pages?platform-id=1&dexer-id=1348&sort-field=txns24h&category=spot&page=${pageNo}`
		)

		if (!res.ok) {
            return NextResponse.json({ error: "Failed to fetch data"}, { status: res.status });
        }

		const uniswapResTemp = await res.json();
		const uniswapRes = uniswapResTemp.data;
		const uniswap: Swap[] = uniswapRes.pageList;

		return NextResponse.json({ data: uniswap, count: uniswapResTemp.data.total}, { status: 200 });
	} catch (e) {
		return NextResponse.json({error: "Internal server error"}, { status: 500 });
	}
}
