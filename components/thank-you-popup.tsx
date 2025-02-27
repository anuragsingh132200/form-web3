import Image from "next/image"

export function ThankYouPopup() {
  return (
    <div className="w-full max-w-sm">
      <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden shadow-xl">
        <div className="p-6">
          <h2 className="text-white text-xl font-bold text-center mb-6">Thanks for purchasing $XDCAI tokens!</h2>

          <p className="text-white text-center mb-6">
            In order to claim your tokens, please download metamask and connect to the XDC network.
          </p>

          <div className="mb-6">
            <div className="mb-2">
              <p className="text-[#00ff9d] font-medium mb-2">Step 1</p>
              <button className="w-full bg-[#1a1a1a] border border-[#333] hover:border-[#00ff9d] rounded-md p-3 flex items-center justify-between">
                <span className="text-white font-medium">Download Metamask</span>
                <Image src="/metamask-logo.png" alt="Metamask" width={32} height={32} className="rounded-full" />
              </button>
            </div>

            <div>
              <p className="text-[#00ff9d] font-medium mb-2">Step 2</p>
              <button className="w-full bg-[#1a1a1a] border border-[#333] hover:border-[#00ff9d] rounded-md p-3 flex items-center justify-between">
                <span className="text-white font-medium">Connect to XDC network!</span>
                <Image src="/xdc-logo.png" alt="XDC" width={32} height={32} className="rounded-full" />
              </button>
            </div>
          </div>

          <p className="text-white text-center text-sm mb-6">
            Once metamask is connected, click on the Claim button below to claim your $XDCAI tokens.
          </p>

          <button className="w-full bg-[#00ff9d] text-black py-3 rounded-md text-base font-medium">
            Claim $XDCAI tokens!
          </button>
        </div>
      </div>
    </div>
  )
}

