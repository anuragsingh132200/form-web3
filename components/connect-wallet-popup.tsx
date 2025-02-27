import Image from "next/image"

export function ConnectWalletPopup() {
  const wallets = [
    { name: "Metamask", logo: "/metamask-logo.png" },
    { name: "WalletConnect", logo: "/walletconnect-logo.png" },
    { name: "Phantom", logo: "/phantom-logo.png" },
    { name: "Coinbase Wallet", logo: "/coinbase-logo.png" },
  ]

  return (
    <div className="w-full max-w-sm">
      <div className="bg-[#1a1a1a] border border-[#333] rounded-lg overflow-hidden shadow-xl">
        <div className="p-6">
          <h2 className="text-white text-xl font-bold text-center mb-6">Connect Wallet</h2>

          <p className="text-white text-center mb-2">If you already have a wallet, select it from the options below.</p>
          <p className="text-white text-center mb-6">
            If you don't have a wallet, install <span className="text-[#00ff9d]">Metamask</span> to get started.
          </p>

          <div className="space-y-4">
            {wallets.map((wallet, index) => (
              <button
                key={index}
                className="w-full bg-[#1a1a1a] border border-[#333] hover:border-[#00ff9d] rounded-md p-3 flex items-center justify-between"
              >
                <span className="text-white font-medium">{wallet.name}</span>
                <Image
                  src={wallet.logo || "/placeholder.svg"}
                  alt={wallet.name}
                  width={32}
                  height={32}
                  className="rounded-full"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

