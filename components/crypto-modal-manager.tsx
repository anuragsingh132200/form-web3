"use client"

import { useState } from "react"
import { WidgetDefault } from "@/components/widget-default"
import { WidgetConnected } from "@/components/widget-connected"
import { PaymentMethodPopup } from "@/components/payment-method-popup"
import { ConnectWalletPopup } from "@/components/connect-wallet-popup"
import { ThankYouPopup } from "@/components/thank-you-popup"
import { ConnectXDCPopup } from "@/components/connect-xdc-popup"

type ModalView = "default" | "connected" | "payment" | "wallet" | "thankyou" | "xdc"

interface CryptoModalManagerProps {
  initialView: ModalView
}

export function CryptoModalManager({ initialView }: CryptoModalManagerProps) {
  const [currentView, setCurrentView] = useState<ModalView>(initialView)

  // Render the appropriate modal based on current view
  const renderModal = () => {
    switch (currentView) {
      case "default":
        return <WidgetDefault />
      case "connected":
        return <WidgetConnected />
      case "payment":
        return <PaymentMethodPopup />
      case "wallet":
        return <ConnectWalletPopup />
      case "thankyou":
        return <ThankYouPopup />
      case "xdc":
        return <ConnectXDCPopup />
      default:
        return <WidgetDefault />
    }
  }

  return (
    <div className="relative">
      {renderModal()}

      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button
          onClick={() => setCurrentView("default")}
          className={`px-3 py-1 rounded-md text-sm ${currentView === "default" ? "bg-[#00ff9d] text-black" : "bg-[#333] text-white"}`}
        >
          Default Widget
        </button>
        <button
          onClick={() => setCurrentView("connected")}
          className={`px-3 py-1 rounded-md text-sm ${currentView === "connected" ? "bg-[#00ff9d] text-black" : "bg-[#333] text-white"}`}
        >
          Connected Widget
        </button>
        <button
          onClick={() => setCurrentView("payment")}
          className={`px-3 py-1 rounded-md text-sm ${currentView === "payment" ? "bg-[#00ff9d] text-black" : "bg-[#333] text-white"}`}
        >
          Payment Method
        </button>
        <button
          onClick={() => setCurrentView("wallet")}
          className={`px-3 py-1 rounded-md text-sm ${currentView === "wallet" ? "bg-[#00ff9d] text-black" : "bg-[#333] text-white"}`}
        >
          Connect Wallet
        </button>
        <button
          onClick={() => setCurrentView("thankyou")}
          className={`px-3 py-1 rounded-md text-sm ${currentView === "thankyou" ? "bg-[#00ff9d] text-black" : "bg-[#333] text-white"}`}
        >
          Thank You
        </button>
        <button
          onClick={() => setCurrentView("xdc")}
          className={`px-3 py-1 rounded-md text-sm ${currentView === "xdc" ? "bg-[#00ff9d] text-black" : "bg-[#333] text-white"}`}
        >
          Connect XDC
        </button>
      </div>
    </div>
  )
}

