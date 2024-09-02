"use client";
import React from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
import { SessionProvider, SessionProviderProps } from "next-auth/react";

import '@rainbow-me/rainbowkit/styles.css';


import { WagmiProvider } from 'wagmi';
import {
  mainnet,
  polygon,
  optimism,
  arbitrum,
  base,
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';

const config = getDefaultConfig({
  appName: 'trial-task-ronny',
  projectId: '2cc7c7aed1bc663dd9df54a243feeda6',
  chains: [mainnet, polygon, optimism, arbitrum, base],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://gateway-arbitrum.network.thegraph.com/api/65794dcb7fb81d416de0be7d79d211eb/deployments/id/QmZeCuoZeadgHkGwLwMeguyqUKz1WPWQYKcKyMCeQqGhsF',
  cache: new InMemoryCache(),
});

export default function Providers({
  session,
  children,
}: {
  session: SessionProviderProps["session"];
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <>
      <ApolloProvider client={client}>
        <WagmiProvider config={config}>
          <QueryClientProvider client={queryClient}>
            <RainbowKitProvider>
              <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <SessionProvider session={session}>{children}</SessionProvider>
              </ThemeProvider>
            </RainbowKitProvider>
          </QueryClientProvider>
        </WagmiProvider>
      </ApolloProvider>
    </>
  );
}


