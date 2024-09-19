"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle, XCircle } from "lucide-react";
import { motion } from "framer-motion";

import { useToast } from "@/components/ui/use-toast";

const JSONFormatterValidator = () => {
  const [jsonInput, setJsonInput] = useState<string>("");
  const [formattedJson, setFormattedJson] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const { toast } = useToast();

  const handleFormatAndValidate = () => {
    try {
      setIsLoading(true);
      const parsedJson = JSON.parse(jsonInput);
      setFormattedJson(JSON.stringify(parsedJson, null, 2));
      setIsValid(true);
      toast({
        title: "Success",
        description: "JSON is valid and formatted.",
      });
    } catch (error) {
      setFormattedJson("");
      setIsValid(false);
      toast({
        title: "Error",
        description: "Invalid JSON. Please check your input.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setJsonInput(e.target.value);
    setIsValid(null); // Reset validation status on input change
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 space-y-6 w-full">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-center"
      >
        JSON Formatter & Validator
      </motion.div>

      <div className="w-full space-y-4">
        <Textarea
          placeholder="Paste your JSON here..."
          value={jsonInput}
          onChange={handleInputChange}
          className="w-full h-40 p-2"
        />

        <Button
          onClick={handleFormatAndValidate}
          disabled={isLoading || !jsonInput.trim()}
          className="w-full"
        >
          {isLoading ? "Processing..." : "Validate & Format"}
        </Button>
      </div>

      {isValid !== null && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2"
        >
          {isValid ? (
            <CheckCircle className="text-green-500" />
          ) : (
            <XCircle className="text-red-500" />
          )}
          <span>{isValid ? "Valid JSON" : "Invalid JSON"}</span>
        </motion.div>
      )}

      {formattedJson && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="w-full mt-4"
        >
          <Textarea
            value={formattedJson}
            readOnly
            className="w-full h-40 p-2 border  border-green-700"
          />
        </motion.div>
      )}
    </div>
  );
};

export default JSONFormatterValidator;
