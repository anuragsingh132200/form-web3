"use client"
import { CryptoModalManager } from "@/components/crypto-modal-manager"

export default function Home() {
  return (
    <main className="min-h-screen bg-black p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mt-8 p-8">
          <div className="flex justify-center">
            <CryptoModalManager initialView="default" />
          </div>
        </div>
        {/* <h1 className="text-white text-3xl font-bold text-center mb-8">$XDCAI Presale Modals</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center">
            <h2 className="text-[#ff00ff] font-bold text-xl mb-4">#Widget</h2>
            <h3 className="text-[#ff00ff] font-bold text-lg mb-6">(Default)</h3>
            <CryptoModalManager initialView="default" />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[#ff00ff] font-bold text-xl mb-4">#Widget</h2>
            <h3 className="text-[#ff00ff] font-bold text-lg mb-6">(After Connected with wallet)</h3>
            <CryptoModalManager initialView="connected" />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[#ff00ff] font-bold text-xl mb-4">#Payment Method</h2>
            <h3 className="text-[#ff00ff] font-bold text-lg mb-6">(Popup)</h3>
            <CryptoModalManager initialView="payment" />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[#ff00ff] font-bold text-xl mb-4">#Connect Wallet</h2>
            <h3 className="text-[#ff00ff] font-bold text-lg mb-6">(Popup)</h3>
            <CryptoModalManager initialView="wallet" />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[#ff00ff] font-bold text-xl mb-4">#Thank You</h2>
            <h3 className="text-[#ff00ff] font-bold text-lg mb-6">(Popup)</h3>
            <CryptoModalManager initialView="thankyou" />
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[#ff00ff] font-bold text-xl mb-4">#Connect to XDC Network</h2>
            <h3 className="text-[#ff00ff] font-bold text-lg mb-6">(Popup)</h3>
            <CryptoModalManager initialView="xdc" />
          </div>
        </div>

        <div className="mt-16 p-8 bg-[#1a1a1a] rounded-lg">
          <h2 className="text-white text-2xl font-bold text-center mb-8">Interactive Demo</h2>
          <div className="flex justify-center">
            <CryptoModalManager initialView="default" interactive={true} />
          </div>
        </div> */}
      </div>
    </main>
  )
}

