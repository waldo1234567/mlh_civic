import { UserButton, useUser } from "@civic/auth/react";
import WalletConnect from "./WalletConnect";
import MintNFT from "./MintNFT";
import { useState } from "react";
import { ethers } from "ethers";

const Dashboard = () => {
    const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
    const [address, setAddress] = useState<string | null>(null);
    const { user } = useUser();

    const userId = user ? user.id : null;
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-green-100">
            <header className="bg-white shadow-lg rounded-xl p-8 flex flex-col items-center">
                <h1 className="text-4xl font-bold text-blue-700 mb-2">Dashboard</h1>
                <p className="text-lg text-gray-600 mb-6">Welcome to your MLH Civic dashboard!</p>
                <UserButton />
                <WalletConnect onConnect={(prov, addr) => { setProvider(prov); setAddress(addr); }} />
            </header>
            <MintNFT provider={provider} address={address} userId={userId} />
            <section className="mt-10 max-w-xl text-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get Started</h2>
                <p className="text-gray-600 mb-6">Explore your features, connect with your community, and make an impact today!</p>
                <a href="#features" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">See Features</a>
            </section>
        </div>
    );
};

export default Dashboard;
