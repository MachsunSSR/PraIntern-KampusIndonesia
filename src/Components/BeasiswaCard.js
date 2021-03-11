import React from "react";
import { FiClock } from "react-icons/fi";
import Button from "./Button";

export default function BeasiswaCard({ judul, gambar }) {
    return (
        <div className=" flex items-center justify-center shadow-md">
            <div className="flex flex-col space-y-2 h-96">
                <div className="md:min-h-60 lg:min-h-64">
                    <img src={gambar} alt="gambar" className="rounded w-full" />
                </div>
                <div className="flex flex-col justify-end px-4 space-y-2">
                    <h3 className="font-bold text-xl">{judul}</h3>
                    <div className="flex items-center space-x-2">
                        <div>
                            <FiClock />
                        </div>
                        <p className="text-sm">
                            2 Februari 2021 - 4 Maret 2021
                        </p>
                    </div>
                    <Button bg="bg-white" text="text-black">
                        Detail
                    </Button>
                </div>
            </div>
        </div>
    );
}