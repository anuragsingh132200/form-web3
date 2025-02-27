import { X, HelpCircle } from "lucide-react"
import Image from "next/image"

export function WidgetConnected() {
  return (
    <div className="w-full max-w-sm relative">
      <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden shadow-xl">
        <div className="bg-[#111] p-3 flex justify-between items-center">
          <p className="text-white text-sm">
            The future of AI powered agents is here - Grab $XDCAI at presale prices & fuel the
          </p>
          <button className="bg-[#00ff9d] rounded-full p-1">
            <X className="h-4 w-4 text-black" />
          </button>
        </div>

        <div className="p-4">
          <p className="text-white text-center mb-2">Can't find tokens in your wallet?</p>

          <div className="text-center mb-4">
            <p className="text-white">Take advantage of Huge Early Staking Rewards by</p>
            <p className="text-white">becoming an early adopter!</p>
          </div>

          <h2 className="text-[#00ff9d] text-xl font-bold text-center mb-6">BUY $XDCAI PRESALE NOW!</h2>

          <div className="bg-[#2a2a2a] rounded-md p-4 mb-4 h-12"></div>

          <div className="text-white text-sm mb-2">Pay with ETH</div>

          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 bg-[#2a2a2a] rounded-md p-2 text-white">0</div>
            <div className="flex items-center gap-1 bg-[#2a2a2a] rounded-md p-2">
              <Image src="/eth-logo.png" alt="ETH" width={20} height={20} className="rounded-full" />
              <span className="text-white">ETH</span>
              <span className="text-white">▼</span>
            </div>
          </div>

          <div className="text-white text-sm mb-2">Receive $XDCAI</div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex-1 bg-[#2a2a2a] rounded-md p-2 text-white">0</div>
            <div className="text-white text-sm ml-2">1 $XDCAI = $0.0033722</div>
          </div>

          <div className="text-yellow-500 text-sm mb-4 text-center">
            You do not have enough ETH to pay for this transaction.
          </div>

          <button className="w-full bg-[#00ff9d] opacity-70 text-black py-3 rounded-md text-base font-medium">
            BUY $XDCAI
          </button>
        </div>

        <div className="bg-[#111] p-2 text-center">
          <p className="text-white text-xs">Smart Contract Is Fully Audited.</p>
        </div>
      </div>

      <div className="absolute right-0 top-1/3 flex flex-col gap-2">
        <div className="bg-[#00ff9d] rounded-full p-2">
          <X className="h-4 w-4 text-black" />
        </div>
        <div className="bg-[#00ff9d] rounded-full p-2">
          <HelpCircle className="h-4 w-4 text-black" />
        </div>
      </div>

      <div className="absolute right-0 bottom-20 flex flex-col gap-2">
        <div className="bg-[#00ff9d] rounded-full p-2">
          <span className="text-black text-xs font-bold">$</span>
        </div>
        <div className="bg-[#333] rounded-full p-2">
          <span className="text-white text-xs font-bold">?</span>
        </div>
      </div>
    </div>
  )
}

