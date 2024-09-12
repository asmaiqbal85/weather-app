import { NextRequest, NextResponse } from "next/server";

export async function GET(request: any) {
    const { searchParams } = new URL(request.url);
    const address = searchParams.get("address");
    const latitude = searchParams.get("lat");
    const longitude = searchParams.get("lon");
    let url = "";
    if (address) {
        url = 
        "http://api.openweathermap.org/data/2.5/weather?q=" +
        address +
        "&appid=" +
        "d20f942de175c6f4eb2f111de403694a";
    }else {
        url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d20f942de175c6f4eb2f111de403694a`
    }
    const res = await fetch(url);
    const data = await res.json();
    return NextResponse.json({ data });
}