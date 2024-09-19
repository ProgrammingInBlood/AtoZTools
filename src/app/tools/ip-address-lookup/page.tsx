"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button"; // Assuming you have a button component
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label"; // Assuming you have a button component
import { Loader2 } from "lucide-react";

interface IpData {
  ip: string;
  city: string;
  region: string;
  country: string;
  postal: string;
  timezone: string;
  org: string;
}

const IpAddressLookup: React.FC = () => {
  const [ipAddress, setIpAddress] = useState<string>("");
  const [ipData, setIpData] = useState<IpData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchIpData = async (ip: string) => {
    setLoading(true);
    setError(null);
    setIpData(null);

    try {
      const response = await axios.get(`https://ipapi.co/${ip}/json/`);
      setIpData(response.data);
    } catch (err) {
      setError("Failed to fetch data. Please check the IP address.");
    } finally {
      setLoading(false);
    }
  };

  const lookupMyIp = async () => {
    try {
      const response = await axios.get("https://api.ipify.org?format=json");
      const myIp = response.data.ip;
      fetchIpData(myIp);
    } catch (err) {
      setError("Failed to fetch your IP address.");
    }
  };

  return (
    <div className="p-6 space-y-4 w-full max-w-lg mx-auto">
      <Label htmlFor="ipAddress" className="block text-lg font-medium">
        Enter IP Address:
      </Label>
      <Input
        id="ipAddress"
        type="text"
        value={ipAddress}
        onChange={(e) => setIpAddress(e.target.value)}
        placeholder="e.g. 8.8.8.8"
        className="w-full px-4 py-2"
      />

      <div className="flex gap-4 flex-wrap mt-4">
        <Button
          onClick={() => fetchIpData(ipAddress)}
          disabled={loading || !ipAddress}
        >
          {loading ? <Loader2 className="animate-spin" /> : "Lookup IP Address"}
        </Button>
        <Button
          onClick={lookupMyIp}
          disabled={loading}
          className=" bg-blue-500 hover:bg-blue-600"
        >
          {loading ? <Loader2 className="animate-spin" /> : "Lookup My IP"}
        </Button>
      </div>

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {ipData && (
        <div className="mt-6 p-4 bg-gray-800 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">IP Address Info:</h3>
          <p>
            <strong>IP:</strong> {ipData.ip}
          </p>
          <p>
            <strong>City:</strong> {ipData.city}
          </p>
          <p>
            <strong>Region:</strong> {ipData.region}
          </p>
          <p>
            <strong>Country:</strong> {ipData.country}
          </p>
          <p>
            <strong>Postal Code:</strong> {ipData.postal}
          </p>
          <p>
            <strong>Timezone:</strong> {ipData.timezone}
          </p>
          <p>
            <strong>Organization:</strong> {ipData.org}
          </p>
        </div>
      )}
    </div>
  );
};

export default IpAddressLookup;
