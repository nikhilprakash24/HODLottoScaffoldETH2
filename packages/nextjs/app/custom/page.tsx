"use client";

import React, { useEffect } from "react";
import Head from "next/head";
import "../../styles/custom.css";// ✅ Import custom styles

const CustomPage = () => {
  useEffect(() => {
    // ✅ Background Selector Logic
    const backgroundSelect = document.getElementById("backgroundSelect") as HTMLSelectElement;
    if (backgroundSelect) {
      backgroundSelect.addEventListener("change", (e) => {
        document.body.style.backgroundImage = (e.target as HTMLSelectElement).value;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundPosition = "center";
      });
    }

    // ✅ Theme Selector Logic
    const themeSelect = document.getElementById("themeSelect") as HTMLSelectElement;
    if (themeSelect) {
      themeSelect.addEventListener("change", (e) => {
        document.documentElement.setAttribute("data-theme", (e.target as HTMLSelectElement).value);
      });
    }

    // ✅ Wallet Button Logic
    const walletBtn = document.getElementById("walletBtn");
    if (walletBtn) {
      walletBtn.addEventListener("click", function () {
        this.textContent = "✅ Connected";
        this.classList.add("btn-success");
        (this as HTMLButtonElement).disabled = true;
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>HODLotto v20.9.0 - Additional Themes</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <script src="https://cdn.tailwindcss.com"></script>
        <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.5/dist/full.css" rel="stylesheet" />
      </Head>

      <div className="p-6">
        {/* 🚀 Navbar */}
        <nav className="navbar bg-base-100 shadow-lg px-6 py-3">
          <div className="flex-1 text-2xl font-bold text-primary">🌌 HODLotto</div>
          <div className="flex space-x-4">
            <button id="walletBtn" className="btn btn-outline btn-primary">
              ⚡ Connect Wallet
            </button>

            {/* Theme Selector */}
            <select id="themeSelect" className="selector">
              <option value="dark">🌙 Dark</option>
              <option value="light">☀️ Light</option>
              <option value="cyberpunk">🕶 Cyberpunk</option>
              <option value="synthwave">🌌 Synthwave</option>
              <option value="dracula">🦇 Dracula</option>
              <option value="luxury">💎 Luxury</option>
              <option value="retro">🌅 Retro</option>
              <option value="forest">🌳 Forest</option>
              <option value="valentine">💘 Valentine</option>
              <option value="halloween">🎃 Halloween</option>
              <option value="aqua">🌊 Aqua</option>
              <option value="garden">🌼 Garden</option>
              <option value="pastel">🎨 Pastel</option>
            </select>

            {/* Background Selector */}
            <select id="backgroundSelect" className="selector">
              <option value="">🌌 Choose Background</option>
              <option value="url('https://i.postimg.cc/sXt1mV35/1-75e4061e.jpg')">🏦 Bitcoin Base</option>
              <option value="url('https://i.postimg.cc/CKxZLPvn/2-a4766ed01.jpg')">🚀 Space Adventure</option>
              <option value="url('https://i.postimg.cc/6Qb87rSj/3-a4766ed01.jpg')">🌠 Deep Nebula</option>
              <option value="url('https://i.postimg.cc/nzsCqsfH/4-a4766ed01.jpg')">🪐 Saturn Rings</option>
              <option value="url('https://i.postimg.cc/4yG9sWL7/bg6.jpg')">🌏 Earth Horizon</option>
            </select>
          </div>
        </nav>

        {/* 🎮 NFT Minting Panels (No Array, Keeping Unique Colors) */}
        <div id="app" className="container mx-auto p-8 space-y-6">
          {/* 🚀 Panel 0 - Mercury */}
          <div className="border-4 border-primary p-6 panel-3d">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold text-primary">
                <span>Tier 0:</span> Mercury NFTLotto Mint
              </div>
              <div className="flex space-x-4">
                <button className="btn btn-sm btn-accent">Mint with $</button>
                <button className="btn btn-sm btn-secondary">Mint with Crypto</button>
              </div>
            </div>
          </div>

          {/* 🌌 Panel 1 - Venus */}
          <div className="border-4 border-secondary p-6 panel-3d">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold text-secondary">
                <span>Tier 1:</span> Venus NFTLotto Mint
              </div>
              <div className="flex space-x-4">
                <button className="btn btn-sm btn-primary">Mint with $</button>
                <button className="btn btn-sm btn-accent">Mint with Crypto</button>
              </div>
            </div>
          </div>

          {/* 🌍 Panel 2 - Earth */}
          <div className="border-4 border-accent p-6 panel-3d">
            <div className="flex justify-between items-center">
              <div className="text-lg font-bold text-accent">
                <span>Tier 2:</span> Earth NFTLotto Mint
              </div>
              <div className="flex space-x-4">
                <button className="btn btn-sm btn-secondary">Mint with $</button>
                <button className="btn btn-sm btn-primary">Mint with Crypto</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomPage;
