"use client";
import React, { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion"; // Import Framer Motion for animations

// Define unit categories and units
type UnitCategory = "length" | "weight" | "temperature" | "volume" | "speed";
type LengthUnit = "meters" | "kilometers" | "miles" | "feet";
type WeightUnit = "grams" | "kilograms" | "pounds" | "ounces";
type TemperatureUnit = "celsius" | "fahrenheit" | "kelvin";
type VolumeUnit = "liters" | "milliliters" | "gallons" | "cubic meters";
type SpeedUnit =
  | "meters per second"
  | "kilometers per hour"
  | "miles per hour"
  | "feet per second";

type Unit = LengthUnit | WeightUnit | TemperatureUnit | VolumeUnit | SpeedUnit;

// Conversion rate map types
type ConversionRateMap<T extends Unit> = {
  [K in T]: { [L in T]: number };
};

// Conversion rates for units
const conversionRates: {
  length: ConversionRateMap<LengthUnit>;
  weight: ConversionRateMap<WeightUnit>;
  volume: ConversionRateMap<VolumeUnit>;
  speed: ConversionRateMap<SpeedUnit>;
  temperature?: {
    [K in TemperatureUnit]: (value: number, toUnit: TemperatureUnit) => number;
  };
} = {
  length: {
    meters: { meters: 1, kilometers: 0.001, miles: 0.000621371, feet: 3.28084 },
    kilometers: { meters: 1000, kilometers: 1, miles: 0.621371, feet: 3280.84 },
    miles: { meters: 1609.34, kilometers: 1.60934, miles: 1, feet: 5280 },
    feet: {
      meters: 0.3048,
      kilometers: 0.0003048,
      miles: 0.000189394,
      feet: 1,
    },
  },
  weight: {
    grams: { grams: 1, kilograms: 0.001, pounds: 0.00220462, ounces: 0.035274 },
    kilograms: { grams: 1000, kilograms: 1, pounds: 2.20462, ounces: 35.274 },
    pounds: { grams: 453.592, kilograms: 0.453592, pounds: 1, ounces: 16 },
    ounces: { grams: 28.3495, kilograms: 0.0283495, pounds: 0.0625, ounces: 1 },
  },
  volume: {
    liters: {
      liters: 1,
      milliliters: 1000,
      gallons: 0.264172,
      "cubic meters": 0.001,
    },
    milliliters: {
      liters: 0.001,
      milliliters: 1,
      gallons: 0.000264172,
      "cubic meters": 0.000001,
    },
    gallons: {
      liters: 3.78541,
      milliliters: 3785.41,
      gallons: 1,
      "cubic meters": 0.00378541,
    },
    "cubic meters": {
      liters: 1000,
      milliliters: 1000000,
      gallons: 264.172,
      "cubic meters": 1,
    },
  },
  speed: {
    "meters per second": {
      "meters per second": 1,
      "kilometers per hour": 3.6,
      "miles per hour": 2.23694,
      "feet per second": 3.28084,
    },
    "kilometers per hour": {
      "meters per second": 0.277778,
      "kilometers per hour": 1,
      "miles per hour": 0.621371,
      "feet per second": 0.911344,
    },
    "miles per hour": {
      "meters per second": 0.44704,
      "kilometers per hour": 1.60934,
      "miles per hour": 1,
      "feet per second": 1.46667,
    },
    "feet per second": {
      "meters per second": 0.3048,
      "kilometers per hour": 1.09728,
      "miles per hour": 0.681818,
      "feet per second": 1,
    },
  },
  temperature: {
    celsius: (value: number, toUnit: TemperatureUnit) => {
      if (toUnit === "fahrenheit") return (value * 9) / 5 + 32;
      if (toUnit === "kelvin") return value + 273.15;
      return value;
    },
    fahrenheit: (value: number, toUnit: TemperatureUnit) => {
      if (toUnit === "celsius") return ((value - 32) * 5) / 9;
      if (toUnit === "kelvin") return ((value - 32) * 5) / 9 + 273.15;
      return value;
    },
    kelvin: (value: number, toUnit: TemperatureUnit) => {
      if (toUnit === "celsius") return value - 273.15;
      if (toUnit === "fahrenheit") return ((value - 273.15) * 9) / 5 + 32;
      return value;
    },
  },
};

// Available units for each category
const units: Record<UnitCategory, Unit[]> = {
  length: ["meters", "kilometers", "miles", "feet"],
  weight: ["grams", "kilograms", "pounds", "ounces"],
  temperature: ["celsius", "fahrenheit", "kelvin"],
  volume: ["liters", "milliliters", "gallons", "cubic meters"],
  speed: [
    "meters per second",
    "kilometers per hour",
    "miles per hour",
    "feet per second",
  ],
};

export default function UnitConverter() {
  const [unitType, setUnitType] = useState<UnitCategory>("length");
  const [fromUnit, setFromUnit] = useState<Unit>(units.length[0]);
  const [toUnit, setToUnit] = useState<Unit>(units.length[1]);
  const [value, setValue] = useState<string>("");
  const [result, setResult] = useState<string>("");

  // Type-safe conversion function
  const handleConvert = () => {
    if (!value) return;

    let convertedValue: string | number = "";

    // Temperature conversion requires different logic (functions instead of rates)
    if (unitType === "temperature") {
      const conversionFunction =
        conversionRates.temperature?.[fromUnit as TemperatureUnit];
      if (conversionFunction) {
        convertedValue = conversionFunction(
          parseFloat(value),
          toUnit as TemperatureUnit
        ).toFixed(4);
      }
    } else {
      const rate =
        conversionRates[unitType][
          fromUnit as keyof (typeof conversionRates)[typeof unitType]
        ][toUnit as keyof (typeof conversionRates)[typeof unitType]];
      convertedValue = (parseFloat(value) * rate).toFixed(4);
    }

    setResult(`${value} ${fromUnit} = ${convertedValue} ${toUnit}`);
  };

  return (
    <div className="flex flex-col gap-5">
      {/* Unit Type Selector */}
      <Select
        value={unitType}
        onValueChange={(value: UnitCategory) => {
          setUnitType(value);
          setFromUnit(units[value][0]); // Reset from/to units when category changes
          setToUnit(units[value][1]);
        }}
      >
        <SelectTrigger>
          <SelectValue>{unitType}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {Object.keys(units).map((category) => (
            <SelectItem key={category} value={category as UnitCategory}>
              {category}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* From Unit and To Unit Selectors */}
      <div className="flex space-x-4">
        <Select
          value={fromUnit}
          onValueChange={(value: Unit) => setFromUnit(value)}
        >
          <SelectTrigger>
            <SelectValue>{fromUnit}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {units[unitType].map((unit) => (
              <SelectItem key={unit} value={unit}>
                {unit}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select
          value={toUnit}
          onValueChange={(value: Unit) => setToUnit(value)}
        >
          <SelectTrigger>
            <SelectValue>{toUnit}</SelectValue>
          </SelectTrigger>
          <SelectContent>
            {units[unitType].map((unit) => (
              <SelectItem key={unit} value={unit}>
                {unit}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Input and Convert Button */}
      <Input
        placeholder="Enter value"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <Button onClick={handleConvert}>Convert</Button>

      {/* Result with Animation */}
      {result && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lg font-medium mt-4 p-4 rounded-lg shadow-lg text-center"
        >
          {result}
        </motion.div>
      )}
    </div>
  );
}
