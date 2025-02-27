import { X, HelpCircle, Info } from "lucide-react"
import Image from "next/image"

export function WidgetDefault() {
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

          <div className="flex items-center justify-center gap-2 mb-4">
            <Image src="/eth-logo.png" alt="ETH" width={24} height={24} className="rounded-full" />
            <Image src="/bnb-logo.png" alt="BNB" width={24} height={24} className="rounded-full" />
            <Image src="/sol-logo.png" alt="SOL" width={24} height={24} className="rounded-full" />
          </div>

          <div className="flex gap-2">
            <button className="flex-1 border border-[#00ff9d] text-[#00ff9d] py-2 rounded-md text-sm">
              Don't Have Crypto
            </button>
            <button className="flex-1 bg-[#00ff9d] text-black py-2 rounded-md text-sm font-medium">
              Buy with Crypto
            </button>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2">
            <div className="bg-[#00ff9d] rounded-full p-1">
              <HelpCircle className="h-4 w-4 text-black" />
            </div>
            <span className="text-white text-sm">How to Buy</span>
          </div>

          <div className="mt-2 flex items-center justify-center gap-2">
            <div className="bg-white rounded-full p-1">
              <Info className="h-4 w-4 text-black" />
            </div>
            <span className="text-white text-sm">Help, My Wallet Won't Connect!</span>
          </div>
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
    </div>
  )
}

