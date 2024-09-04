"use client";

import { InputField } from "@/components/shared/InputField";
import { QRCode } from "react-qrcode-logo";
import { SelectField } from "@/components/shared/SelectField";
import { TextArea } from "@/components/shared/TextArea";
import { ImageUploadField } from "@/components/shared/ImageUploadField";
import { CheckboxField } from "@/components/shared/CheckboxField";
import { MutableRefObject, useRef, useState } from "react";
import Header from "@/components/headers";
import UnderlineText from "@/components/shared/UnderlineText";
import Container from "@/components/shared/Container";

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

  const buildEyeRadiusInput = (id: string) => {
    return (
      <InputField
        name={id}
        type="range"
        handleChange={handleChange}
        min={0}
        max={50}
        hideLabel
        defaultValue={(state as any)[id]}
      />
    );
  };

  return (
    <>
      <Header />
      <Container>
        <div className="mb-10">
          <h1 className="text-6xl">
            <UnderlineText>QR Code</UnderlineText> Genrator
          </h1>
        </div>
        <div className="flex flex-col items-center bg-black rounded-lg pt-0  space-y-6">
          {/* QR Code Settings */}

          {/* QR Code Preview & Download */}
          <div className="p-5 rounded-xl bg-neutral-800 mt-8">
            <QRCode
              ref={ref as MutableRefObject<QRCode>}
              logoOnLoad={(e) => console.log("logo loaded", e)}
              {...{
                ...state,
                eyeRadius: [
                  {
                    outer: [
                      state.eyeradius_0_outer_0,
                      state.eyeradius_0_outer_1,
                      state.eyeradius_0_outer_2,
                      state.eyeradius_0_outer_3,
                    ],
                    inner: [
                      state.eyeradius_0_inner_0,
                      state.eyeradius_0_inner_1,
                      state.eyeradius_0_inner_2,
                      state.eyeradius_0_inner_3,
                    ],
                  },
                  {
                    outer: [
                      state.eyeradius_1_outer_0,
                      state.eyeradius_1_outer_1,
                      state.eyeradius_1_outer_2,
                      state.eyeradius_1_outer_3,
                    ],
                    inner: [
                      state.eyeradius_1_inner_0,
                      state.eyeradius_1_inner_1,
                      state.eyeradius_1_inner_2,
                      state.eyeradius_1_inner_3,
                    ],
                  },
                  {
                    outer: [
                      state.eyeradius_2_outer_0,
                      state.eyeradius_2_outer_1,
                      state.eyeradius_2_outer_2,
                      state.eyeradius_2_outer_3,
                    ],
                    inner: [
                      state.eyeradius_2_inner_0,
                      state.eyeradius_2_inner_1,
                      state.eyeradius_2_inner_2,
                      state.eyeradius_2_inner_3,
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

          <div className="flex flex-wrap justify-center  ">
            <div className="bg-gray-950 p-6 rounded-lg flex flex-col space-y-4  w-full md:w-1/3">
              <TextArea name="value" handleChange={handleChange} />

              <InputField
                name="size"
                type="range"
                handleChange={handleChange}
                min={100}
                max={500}
              />
              <InputField
                name="quietZone"
                type="range"
                handleChange={handleChange}
                min={20}
                max={80}
              />
              <div className="flex justify-around">
                <InputField
                  name="bgColor"
                  type="color"
                  defaultValue="#ffffff"
                  handleChange={handleChange}
                />
                <InputField
                  name="fgColor"
                  type="color"
                  defaultValue="#000000"
                  handleChange={handleChange}
                />
              </div>
            </div>

            <div className="bg-gray-950 p-6 rounded-lg flex flex-col space-y-4  w-full  md:w-1/3">
              <ImageUploadField name="logoImage" handleChange={handleChange} />
              <InputField
                name="logoWidth"
                type="range"
                handleChange={handleChange}
                min={20}
                max={500}
              />
              <InputField
                name="logoHeight"
                type="range"
                handleChange={handleChange}
                min={20}
                max={500}
              />
              <InputField
                name="logoOpacity"
                type="range"
                handleChange={handleChange}
                min={0}
                max={1}
                step={0.1}
                defaultValue={1}
              />
              <InputField
                name="logoPadding"
                type="range"
                handleChange={handleChange}
                min={0}
                max={20}
                step={1}
                defaultValue={0}
              />
            </div>

            <div className="bg-gray-950 p-6 rounded-lg flex flex-col space-y-4  w-full  md:w-1/3">
              <SelectField
                name="qrStyle"
                options={["squares", "dots", "fluid"]}
                handleChange={handleChange}
              />

              <SelectField
                name="ecLevel"
                options={["L", "M", "Q", "H"]}
                handleChange={handleChange}
              />

              <SelectField
                name="logoPaddingStyle"
                options={["square", "circle"]}
                handleChange={handleChange}
              />
              <CheckboxField
                name="removeQrCodeBehindLogo"
                handleChange={handleChange}
              />
              <CheckboxField name="enableCORS" handleChange={handleChange} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default QrCodePage;
