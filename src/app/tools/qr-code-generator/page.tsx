"use client";

import { QRCode } from "react-qrcode-logo";
import { MutableRefObject, useRef, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { ImageUploadField } from "@/components/shared/ImageUploadField";

function QrCodePage() {
  const [state, setState] = useState<{ [key: string]: any }>({});
  const ref = useRef<QRCode>();

  const handleChange = ({ target }: any) => {
    setState((prevState) => ({ ...prevState, [target.name]: target.value }));
  };

  const handleDownload = () => {
    ref.current?.download(
      "png",
      `${state.value?.slice(0, 20)?.replace(/[^a-zA-Z ]/g, "")}-AtoZTools`
    );
  };

  return (
    <>
      <div className="flex flex-col items-center bg-black rounded-lg p-6 space-y-6">
        {/* QR Code Settings */}
        <div className="p-5 rounded-xl bg-neutral-800 mt-8">
          <QRCode
            ref={ref as MutableRefObject<QRCode>}
            logoOnLoad={(e) => console.log("logo loaded", e)}
            {...{
              ...state,
              eyeRadius: [
                {
                  outer: [
                    state.topLeftEyeOuter1,
                    state.topLeftEyeOuter2,
                    state.topLeftEyeOuter3,
                    state.topLeftEyeOuter4,
                  ],
                  inner: [
                    state.topLeftEyeInner1,
                    state.topLeftEyeInner2,
                    state.topLeftEyeInner3,
                    state.topLeftEyeInner4,
                  ],
                },
                {
                  outer: [
                    state.topRightEyeOuter1,
                    state.topRightEyeOuter2,
                    state.topRightEyeOuter3,
                    state.topRightEyeOuter4,
                  ],
                  inner: [
                    state.topRightEyeInner1,
                    state.topRightEyeInner2,
                    state.topRightEyeInner3,
                    state.topRightEyeInner4,
                  ],
                },
                {
                  outer: [
                    state.bottomLeftEyeOuter1,
                    state.bottomLeftEyeOuter2,
                    state.bottomLeftEyeOuter3,
                    state.bottomLeftEyeOuter4,
                  ],
                  inner: [
                    state.bottomLeftEyeInner1,
                    state.bottomLeftEyeInner2,
                    state.bottomLeftEyeInner3,
                    state.bottomLeftEyeInner4,
                  ],
                },
              ],
              eyeColor: [
                {
                  outer: state.eyecolor_0_outer ?? state.fgColor ?? "#000000",
                  inner: state.eyecolor_0_inner ?? state.fgColor ?? "#000000",
                },
                {
                  outer: state.eyecolor_1_outer ?? state.fgColor ?? "#000000",
                  inner: state.eyecolor_1_inner ?? state.fgColor ?? "#000000",
                },
                {
                  outer: state.eyecolor_2_outer ?? state.fgColor ?? "#000000",
                  inner: state.eyecolor_2_inner ?? state.fgColor ?? "#000000",
                },
              ],
            }}
          />
          <button
            type="button"
            onClick={handleDownload}
            className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 rounded-lg mt-4"
          >
            Download QR Code
          </button>
        </div>

        <div className="w-full grid gap-4 md:grid-cols-2 p-4 space-y-6 md:space-y-0">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="value">Value</Label>
              <Input
                id="value"
                name="value"
                placeholder="Enter value"
                value={state.value || ""}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="ecLevel">EC Level</Label>
              <Select
                name="ecLevel"
                onValueChange={(value) =>
                  handleChange({ target: { name: "ecLevel", value } })
                }
              >
                <SelectTrigger id="ecLevel" aria-label="EC Level">
                  <SelectValue placeholder="L" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="L">L</SelectItem>
                  <SelectItem value="M">M</SelectItem>
                  <SelectItem value="Q">Q</SelectItem>
                  <SelectItem value="H">H</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="enableCORS"
                name="enableCORS"
                checked={state.enableCORS || false}
                onCheckedChange={(value) =>
                  handleChange({ target: { name: "enableCORS", value } })
                }
              />
              <Label htmlFor="enableCORS">Enable CORS</Label>
            </div>
            <div className="space-y-2">
              <Label htmlFor="size">Size</Label>
              <Slider
                id="size"
                defaultValue={[state.size || 200]}
                max={500}
                min={200}
                step={1}
                onValueChange={(value) =>
                  setState((prevState) => ({ ...prevState, size: value[0] }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="quietZone">Quiet Zone</Label>
              <Slider
                id="quietZone"
                defaultValue={[state.quietZone || 50]}
                max={100}
                step={1}
                onValueChange={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    quietZone: value[0],
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="bgColor">Background Color</Label>
              <Input
                id="bgColor"
                name="bgColor"
                type="color"
                value={state.bgColor || "#ffffff"}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="fgColor">Foreground Color</Label>
              <Input
                id="fgColor"
                name="fgColor"
                type="color"
                value={state.fgColor || "#000000"}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="space-y-4">
            <div className="space-y-2">
              <ImageUploadField name="logoImage" handleChange={handleChange} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="logoWidth">Logo Width</Label>
              <Slider
                id="logoWidth"
                defaultValue={[state.logoWidth || 50]}
                max={100}
                step={1}
                onValueChange={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    logoWidth: value[0],
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="logoHeight">Logo Height</Label>
              <Slider
                id="logoHeight"
                defaultValue={[state.logoHeight || 50]}
                max={100}
                step={1}
                onValueChange={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    logoHeight: value[0],
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="logoOpacity">Logo Opacity</Label>
              <Slider
                id="logoOpacity"
                defaultValue={[state.logoOpacity || 50]}
                max={100}
                step={1}
                onValueChange={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    logoOpacity: value[0],
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="qrStyle">Pattern</Label>
              <Select
                name="qrStyle"
                onValueChange={(value) =>
                  handleChange({ target: { name: "qrStyle", value } })
                }
              >
                <SelectTrigger id="qrStyle" aria-label="qrStyle">
                  <SelectValue placeholder="Squares" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="squares">Squares</SelectItem>
                  <SelectItem value="dots">Dots</SelectItem>
                  <SelectItem value="fluid">Fluid</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="logoPadding">Logo Padding</Label>
              <Slider
                id="logoPadding"
                defaultValue={[state.logoPadding || 0]}
                max={20}
                step={1}
                onValueChange={(value) =>
                  setState((prevState) => ({
                    ...prevState,
                    logoPadding: value[0],
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="logoPaddingStyle">Logo Padding Shape</Label>
              <Select
                name="logoPaddingStyle"
                onValueChange={(value) =>
                  handleChange({ target: { name: "logoPaddingStyle", value } })
                }
              >
                <SelectTrigger id="logoPaddingStyle" aria-label="Eye Shape">
                  <SelectValue placeholder="Square" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="square">Square</SelectItem>
                  <SelectItem value="circle">Circle</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-4 px-4 md:px-0 w-full">
          <Label className="text-xl">Eye Radius</Label>
          <div className="grid gap-4 md:grid-cols-3">
            {/* Top Left Eye */}
            <div className="space-y-4">
              <Label className="font-bold">Top Left Eye</Label>
              <div className="space-y-4">
                <Label>Outer</Label>
                <Slider
                  name="eyeradius_0_outer_0"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_0_outer_0",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_0_outer_1"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_0_outer_1",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_0_outer_2"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_0_outer_2",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_0_outer_3"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_0_outer_3",
                        value: value[0],
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-4">
                <Label>Inner</Label>
                <Slider
                  name="eyeradius_0_inner_0"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_0_inner_0",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_0_inner_1"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_0_inner_1",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_0_inner_2"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_0_inner_2",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_0_inner_3"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_0_inner_3",
                        value: value[0],
                      },
                    })
                  }
                />
              </div>
            </div>
            {/* Top Right Eye */}
            <div className="space-y-4">
              <Label className="font-bold">Top Right Eye</Label>
              <div className="space-y-4">
                <Label>Outer</Label>
                <Slider
                  name="eyeradius_1_outer_0"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_1_outer_0",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_1_outer_1"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_1_outer_1",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_1_outer_2"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_1_outer_2",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_1_outer_3"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_1_outer_3",
                        value: value[0],
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-4">
                <Label>Inner</Label>
                <Slider
                  name="eyeradius_1_inner_0"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_1_inner_0",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_1_inner_1"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_1_inner_1",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_1_inner_2"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_1_inner_2",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_1_inner_3"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_1_inner_3",
                        value: value[0],
                      },
                    })
                  }
                />
              </div>
            </div>
            {/* Bottom Left Eye */}
            <div className="space-y-4">
              <Label className="font-bold">Bottom Left Eye</Label>
              <div className="space-y-4">
                <Label>Outer</Label>
                <Slider
                  name="eyeradius_2_outer_0"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_2_outer_0",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_2_outer_1"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_2_outer_1",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_2_outer_2"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_2_outer_2",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_2_outer_3"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_2_outer_3",
                        value: value[0],
                      },
                    })
                  }
                />
              </div>
              <div className="space-y-4">
                <Label>Inner</Label>
                <Slider
                  name="eyeradius_2_inner_0"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_2_inner_0",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_2_inner_1"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_2_inner_1",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_2_inner_2"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_2_inner_2",
                        value: value[0],
                      },
                    })
                  }
                />
                <Slider
                  name="eyeradius_2_inner_3"
                  min={0}
                  max={100}
                  defaultValue={[50]}
                  onValueChange={(value) =>
                    handleChange({
                      target: {
                        name: "eyeradius_2_inner_3",
                        value: value[0],
                      },
                    })
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default QrCodePage;
