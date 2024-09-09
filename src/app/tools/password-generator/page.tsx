"use client";
// components/PasswordGenerator.tsx

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; // Assuming you have a button component
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch"; // Import Switch if available
import { Slider } from "@/components/ui/slider"; // Import Slider if available
import md5 from "md5";
import { Base64 } from "js-base64";
import { useToast } from "@/components/ui/use-toast";

const generatePassword = (
  length: number,
  useSymbols: boolean,
  useNumbers: boolean
): string => {
  let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";

  if (useNumbers) {
    charset += "0123456789";
    password += "0123456789".charAt(Math.floor(Math.random() * 10)); // Ensure at least one number
  }
  if (useSymbols) {
    charset += "!@#$%^&*()";
    password += "!@#$%^&*()".charAt(Math.floor(Math.random() * 10)); // Ensure at least one symbol
  }

  for (let i = password.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  // Shuffle the password to ensure random placement of numbers and symbols
  return password
    .split("")
    .sort(() => Math.random() - 0.5)
    .join("");
};

const PasswordGenerator = () => {
  const { toast } = useToast();
  const [password, setPassword] = useState(generatePassword(12, true, true)); // Default enabled
  const [encoding, setEncoding] = useState<string>("plain");
  const [useSymbols, setUseSymbols] = useState<boolean>(true); // Default enabled
  const [useNumbers, setUseNumbers] = useState<boolean>(true); // Default enabled
  const [length, setLength] = useState<number>(12); // Default length

  const handleGenerate = () => {
    setPassword(generatePassword(length, useSymbols, useNumbers));
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    toast({
      title: "Password Copied",
      description: "The password has been copied to your clipboard.",
    });
  };

  const handleDownload = () => {
    const blob = new Blob([password], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "password.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  const getEncodedPassword = () => {
    switch (encoding) {
      case "md5":
        return md5(password);
      case "base64":
        return Base64.encode(password);
      default:
        return password;
    }
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <Input value={getEncodedPassword()} readOnly className="mb-4" />
      <div className="mb-4">
        <Select name="encoding" onValueChange={(value) => setEncoding(value)}>
          <SelectTrigger id="encoding" aria-label="Encoding">
            <SelectValue placeholder="Plain Text" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="plain">Plain Text</SelectItem>
            <SelectItem value="md5">MD5</SelectItem>
            <SelectItem value="base64">Base64</SelectItem>
          </SelectContent>
        </Select>
        <div className="mb-4 mt-4 flex items-center">
          <Switch
            checked={useSymbols}
            onCheckedChange={(checked) => setUseSymbols(checked)}
            className="mr-2"
          />
          <label>Include Symbols</label>
        </div>
        <div className="mb-4 flex items-center">
          <Switch
            checked={useNumbers}
            onCheckedChange={(checked) => setUseNumbers(checked)}
            className="mr-2"
          />
          <label>Include Numbers</label>
        </div>
        <div className="mb-4">
          <label className="block mb-2">Password Length: {length}</label>
          <Slider
            min={8}
            max={32}
            step={1}
            value={[length]}
            onValueChange={(value) => setLength(value[0])}
            className="w-full"
          />
        </div>
      </div>
      <div className="flex gap-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Button
            onClick={handleGenerate}
            className="bg-blue-500 text-white hover:bg-blue-600"
          >
            Generate
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <Button
            onClick={handleCopy}
            className="bg-green-500 text-white hover:bg-green-600"
          >
            Copy
          </Button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <Button
            onClick={handleDownload}
            className="bg-red-500 text-white hover:bg-red-600"
          >
            Download
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default PasswordGenerator;
