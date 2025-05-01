import React from "react";
import { Config, WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { XellarKitProvider, defaultConfig, lightTheme } from "@xellar/kit";
import { liskSepolia } from "viem/chains";

// eslint-disable-next-line react-refresh/only-export-components
export const config = defaultConfig({
  appName: "Xellar",
  walletConnectProjectId: "d0d8de337b3329dd5088cfc1040dc502",
  xellarAppId: "3641a707-a5be-47f7-864e-9739366c142b",
  xellarEnv: "sandbox",
  chains: [liskSepolia],
}) as Config;

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <XellarKitProvider theme={lightTheme}>{children}</XellarKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
