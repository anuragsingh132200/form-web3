import Image from "next/image"

export function PaymentMethodPopup() {
  const cryptoOptions = [
    { name: "Ethereum", symbol: "ETH", balance: "0.001", value: "3,122", logo: "/eth-logo.png" },
    { name: "Binance Coin", symbol: "BNB", balance: "0.001", value: "6,108", logo: "/bnb-logo.png" },
    { name: "Solana", symbol: "SOL", balance: "0", value: "0", logo: "/sol-logo.png" },
    { name: "USDT", symbol: "ETH", balance: "0", value: "0", logo: "/usdt-logo.png" },
    { name: "USD Coin", symbol: "ETH", balance: "0", value: "0", logo: "/usdc-logo.png" },
    { name: "USDT", symbol: "BNB", balance: "0", value: "0", logo: "/usdt-logo.png" },
    { name: "USD Coin", symbol: "BNB", balance: "0", value: "0", logo: "/usdc-logo.png" },
    { name: "USDT", symbol: "SOL", balance: "0", value: "0", logo: "/usdt-logo.png" },
    { name: "USD Coin", symbol: "SOL", balance: "0", value: "0", logo: "/usdc-logo.png" },
  ]

  return (
    <div className="w-full max-w-sm">
      <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden shadow-xl">
        <div className="p-4">
          <p className="text-white text-center mb-4">Can't find tokens in your wallet?</p>

          <div className="flex gap-2 mb-6">
            <button className="bg-[#00ff9d] text-black py-2 px-4 rounded-md text-sm font-medium">ALL</button>
            <button className="bg-[#2a2a2a] py-2 px-4 rounded-md flex items-center gap-1">
              <Image src="/eth-logo.png" alt="ETH" width={20} height={20} className="rounded-full" />
              <span className="text-white text-sm">ETH</span>
            </button>
            <button className="bg-[#2a2a2a] py-2 px-4 rounded-md flex items-center gap-1">
              <Image src="/bnb-logo.png" alt="BSC" width={20} height={20} className="rounded-full" />
              <span className="text-white text-sm">BSC</span>
            </button>
            <button className="bg-[#2a2a2a] py-2 px-4 rounded-md flex items-center gap-1">
              <Image src="/sol-logo.png" alt="SOL" width={20} height={20} className="rounded-full" />
              <span className="text-white text-sm">SOL</span>
            </button>
          </div>

          {cryptoOptions.map((crypto, index) => (
            <div
              key={index}
              className={`flex items-center justify-between py-3 ${index < cryptoOptions.length - 1 ? "border-b border-[#333]" : ""}`}
            >
              <div className="flex items-center gap-2">
                <Image
                  src={crypto.logo || "/placeholder.svg"}
                  alt={crypto.symbol}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
                <div>
                  <p className="text-white text-sm">{crypto.name}</p>
                  <p className="text-gray-400 text-xs">{crypto.symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-white text-sm">~${crypto.value}</p>
                <p className="text-gray-400 text-xs">{crypto.balance}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-[#111] p-2 text-center">
          <p className="text-white text-xs">Smart Contract Is Fully Audited.</p>
        </div>
      </div>
    </div>
  )
}

