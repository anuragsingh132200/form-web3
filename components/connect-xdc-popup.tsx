import Image from "next/image"

export function ConnectXDCPopup() {
  return (
    <div className="w-full max-w-sm">
      <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden shadow-xl">
        <div className="p-6">
          <h2 className="text-white text-xl font-bold text-center mb-6">Thanks for purchasing $XDCAI tokens!</h2>

          <p className="text-white text-center mb-6">
            In order to claim your tokens, please connect to the XDC network.
          </p>

          <button className="w-full bg-[#1a1a1a] border border-[#333] hover:border-[#00ff9d] rounded-md p-4 flex items-center justify-center gap-3 mb-6">
            <Image src="/xdc-logo.png" alt="XDC" width={32} height={32} className="rounded-full" />
            <span className="text-[#00ff9d] font-medium">Connect to XDC network!</span>
          </button>

          <p className="text-white text-center text-sm mb-6">
            Once the XDC network is connected, click on the Claim button below to claim your $XDCAI tokens.
          </p>

          <button className="w-full bg-[#00ff9d] opacity-70 text-black py-3 rounded-md text-base font-medium">
            Claim $XDCAI tokens!
          </button>
        </div>
      </div>
    </div>
  )
}

