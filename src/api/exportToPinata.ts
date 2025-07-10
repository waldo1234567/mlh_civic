export const uploadToPinata = async (metadata: object) => {
    const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;

    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT_KEY!}`,
        },
        body: JSON.stringify({
            pinataContent: metadata,
        }),
    });

    if (!res.ok) {
        throw new Error("Failed to upload metadata to Pinata");
    }

    const data = await res.json();
    return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
};

export const uploadImageToPinata = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const res = await fetch("https://api.pinata.cloud/pinning/pinFileToIPFS", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_PINATA_JWT_KEY!}`,
        },
        body: formData,
    });

    if (!res.ok) {
        throw new Error("Image upload to Pinata failed.");
    }

    const data = await res.json();
    return `https://gateway.pinata.cloud/ipfs/${data.IpfsHash}`;
};