import si from "systeminformation";

export async function Stats(){
    return JSON.stringify(await si.getStaticData())
}
export async function dynamic()
{
    const  [fsSize, mem, network, currentLoad, time] = await Promise.all([ 
        si.fsSize(),
        si.mem(),
        si.networkStats(),
        si.currentLoad(),
        si.time()
    ]);

    console.log(JSON.stringify({
        fsSize,
        mem,
        network,
        currentLoad,
        time
    }))
}