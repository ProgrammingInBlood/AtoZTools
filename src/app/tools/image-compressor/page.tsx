"use client";
import React, { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import imageCompression from "browser-image-compression";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { motion } from "framer-motion";
import { Image as LucideImage } from "lucide-react";

import Image from "next/image";
import AnimatedCircularProgressBar from "@/components/magicui/animated-circular-progress-bar";

export default function ImageCompressor() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [compressedFile, setCompressedFile] = useState<Blob | null>(null);
  const [compressionProgress, setCompressionProgress] = useState<number>(0);
  const [quality, setQuality] = useState<number>(70); // Default quality set to 70%
  const [maxFileSize, setMaxFileSize] = useState<number>(1); // Max size in MB
  const [isCompressing, setIsCompressing] = useState<boolean>(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [compressionCancelled, setCompressionCancelled] =
    useState<boolean>(false);

  const controllerRef = React.useRef<AbortController | null>(null); // AbortController reference

  const resetToDefaults = () => {
    setCompressedFile(null);
    setCompressionProgress(0);
    setQuality(70); // Reset quality to default
    setMaxFileSize(1); // Reset max file size to default (1 MB)
    setIsCompressing(false);
    setCompressionCancelled(false);
    controllerRef.current = null;
  };

  // Handle file drop or selection
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    resetToDefaults();
    setSelectedFile(file);
    setImagePreview(URL.createObjectURL(file));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    maxFiles: 1,
  });

  // Function to cancel the compression
  const cancelCompression = () => {
    if (controllerRef.current) {
      controllerRef.current.abort(); // Abort compression
      setCompressionCancelled(true);
      setIsCompressing(false);
    }
  };

  // Function to compress the image
  const handleImageCompression = async () => {
    if (!selectedFile || compressionCancelled) return;

    controllerRef.current = new AbortController(); // Create new AbortController

    const options = {
      maxSizeMB: maxFileSize, // Max file size based on user input
      initialQuality: quality / 100, // Quality percentage
      signal: controllerRef.current.signal, // Attach the signal from AbortController
      onProgress: (progress: number) => setCompressionProgress(progress),
    };

    try {
      setIsCompressing(true);
      const compressedImage = await imageCompression(selectedFile, options);
      if (!compressionCancelled) {
        setCompressedFile(compressedImage);
        setIsCompressing(false);
      }
    } catch (error: any) {
      if (error.name === "AbortError") {
        console.log("Compression aborted.");
      } else {
        console.error("Error compressing image:", error);
      }
      setIsCompressing(false);
    }
  };

  const handleDownload = () => {
    if (!compressedFile) return;

    const downloadLink = document.createElement("a");
    downloadLink.href = URL.createObjectURL(compressedFile);
    downloadLink.download = `compressed_${selectedFile?.name}`;
    downloadLink.click();
  };

  return (
    <div className="flex flex-col items-center justify-center p-5  space-y-6 max-w-xl mx-auto">
      {!isCompressing ? (
        <>
          {/* Drag-and-Drop or Choose File Area */}
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-600 p-6 w-full flex flex-col items-center justify-center cursor-pointer  rounded-lg"
          >
            <input {...getInputProps()} />
            <LucideImage className="w-12 h-12 text-gray-500" />
            <p className="text-gray-500 mt-2">
              Drag & drop or click to choose an image
            </p>
          </div>

          {/* Image Preview */}
          {imagePreview && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="mt-4"
            >
              <Image
                src={imagePreview}
                alt="Image Preview"
                width={300}
                height={300}
                className="object-contain rounded-md shadow-lg"
              />
            </motion.div>
          )}

          {/* Quality Slider */}
          <div className="w-full flex flex-col items-center space-y-2">
            <label className="font-medium">Quality: {quality}%</label>
            <Slider
              value={[quality]}
              onValueChange={(value) => setQuality(value[0])}
              max={100}
              min={10}
              step={5}
              className="w-3/4"
            />
          </div>

          {/* Max File Size Input */}
          <div className="w-full flex flex-col items-center space-y-2">
            <label className="font-medium">
              Max File Size (MB): {maxFileSize}
            </label>
            <Input
              type="number"
              value={maxFileSize}
              onChange={(e) => setMaxFileSize(Number(e.target.value))}
              className="w-1/4"
            />
          </div>

          {/* Compress Button */}
          <Button onClick={handleImageCompression} disabled={!selectedFile}>
            Compress Image
          </Button>
        </>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          {/* Animated Circular Progress Bar */}
          <AnimatedCircularProgressBar
            max={1}
            min={0}
            value={compressionProgress / 100}
            gaugePrimaryColor="green"
            gaugeSecondaryColor="transparent"
          />

          {/* Cancel Button */}
          <Button variant="destructive" onClick={cancelCompression}>
            Cancel Compression
          </Button>
        </div>
      )}

      {/* Compression Result */}
      {compressedFile && !isCompressing && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-medium mt-4 p-4 bg-neutral-800 w-full border border-green-500 rounded-lg shadow-lg text-center"
        >
          <p>
            Original size: {(selectedFile!.size / 1024 / 1024).toFixed(2)} MB
          </p>
          <p>
            Compressed size: {(compressedFile.size / 1024 / 1024).toFixed(2)} MB
          </p>

          {/* Download Button */}
          <Button className="mt-4" onClick={handleDownload}>
            Download Compressed Image
          </Button>
        </motion.div>
      )}
    </div>
  );
}
